from flask import Flask, request, jsonify, render_template
from youtube_transcript_api import YouTubeTranscriptApi
from googleapiclient.discovery import build
from openai import OpenAI
import random
import os
import re

# Set your API keys as an environment variables
YOUTUBE_API_KEY = os.environ.get('YOUTUBE_API_KEY')  # Replace with your actual API key
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')  # Replace with your actual API key

app = Flask(  # Create a flask app
  __name__,
  template_folder='templates',  # Name of html file folder
  static_folder='static'  # Name of directory for static files
)

@app.route('/get_transcript', methods=['POST'])
def get_transcript():
    # Compare Pricing: https://openai.com/pricing
    # Monitor Your Usage: https://platform.openai.com/usage
    # SET TO TRUE TO ENABLE SUMMARIZATION
    # THIS WILL REQUIRE AN OPENAI API KEY AND TOKENS PURCHASED
    USE_AI = False
    
    urls = request.json.get('urls', '')
    language = request.json.get('language', '')

    model = request.json.get('model', '')
    # if model is not empty or None, then use it
    if model:
        USE_AI = True
    videos = []
    for url in urls:
        print (f'URL:{url}')
        if len(url) < 15:
            print (f'video_id only:{url}')
            videos.append(get_video_transcript(url, USE_AI, model=model, language=language))
        elif has_youtube_video_id(url):
            video_id = has_youtube_video_id(url)
            print (f'video_id:{video_id}')
            videos.append(get_video_metadata(video_id, USE_AI, model=model, language=language))
        elif has_youtube_playlist_id(url):
            playlist_id = has_youtube_playlist_id(url)
            print (f'playlist_id:{playlist_id}')
            videos += extract_playlist_videos(playlist_id, USE_AI, model=model, language=language)
        else:
            videos.append({'Invalid URL': url})

    # print(f'DATA SENT TO CLIENT: {videos}')
    return jsonify({'videos': videos})

def summarize_text(text, model='gpt-3.5-turbo-1106', language='en', prompt=''):
  try:
      client = OpenAI()
      #   purpose equals prompt if not empty else "string"
      purpose = prompt if prompt else "You summarize YouTube videos solely on the video's transcript. Explain and highlight core concepts and key points in great detail."

      #   translate string to 'language'
    #   if language != 'en':
        #   purpose = client.translate(purpose, target_language=language)
        #   print(f"Translated prompt: {purpose}")
        #   text = client.translate(text, target_language=language)
        #   print(f"Translated text: {text}")
      response = client.chat.completions.create(
          model=model,
          # api_key=os.environ['OPENAI_API_KEY'],  # this is also the default, it can be omitted
          messages=[
            {"role": "system", "content": purpose },
            {"role": "user", "content": text}
          ],
          # max_tokens=150  # Adjust the length of the summary as needed
      )
      return response.choices[0].message.content
  except Exception as e:
      print(f"Error: {str(e)}")
      return None

def get_video_metadata(video_id, USE_AI=False, model='gpt-3.5-turbo-1106', language='en'):
  try:
      youtube = build('youtube', 'v3', developerKey=YOUTUBE_API_KEY)
      request = youtube.videos().list(
          part='snippet',
          id=video_id
      )
      response = request.execute()
      video_metadata = {
          'language': response['items'][0]['snippet']['defaultAudioLanguage'],
          'videoId': video_id,
          'publishedAt': response['items'][0]['snippet']['publishedAt'],
          'channelId': response['items'][0]['snippet']['channelId'],
          'channelTitle': response['items'][0]['snippet']['channelTitle'],
          'title': response['items'][0]['snippet']['title'],
          'description': response['items'][0]['snippet']['description'],
          'thumbnailUrl': response['items'][0]['snippet']['thumbnails']['maxres']['url'],
      }
      print(f"language: {video_metadata['language']}")
      print(f"chosen language: {language}")
      transcript = get_video_transcript(video_id, USE_AI, model=model, language=language)
      if transcript:
        video_metadata.update(transcript)
      return video_metadata
  except Exception as e:
      print(f"Error: {str(e)}")
      return None

def get_video_transcript(video_id, USE_AI_FLAG=False, model='gpt-3.5-turbo-1106', language='en'):
  try:
      transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
    #   print(f"transcript_list: {transcript_list}")
      # you can also directly filter for the language you are looking for, using the transcript list
    #   transcript_in_language = transcript_list.find_transcript([language, 'en'])  
    #   print(f"transcript_in_language: x{transcript_in_language}")
      defaultTranscript = ''
      for transcript in transcript_list:
          if transcript.language_code == language:
            print(f"FOUND IN {language}!: {transcript}")
            defaultTranscript = transcript.fetch()
            break
          elif transcript.is_generated:
              print(f"NOT found in {language}!: {transcript}")
              defaultTranscript = transcript.fetch()
              if transcript.translate(language).fetch():
                  defaultTranscript = transcript.translate(language).fetch()
              

    #   transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=[language, 'en'])
      full_transcript_text_only = ''
      
      print(f"defaultTranscript: {defaultTranscript}")
      if defaultTranscript != '':
        for line in defaultTranscript:
            full_transcript_text_only += f"{line['text']} "
      
      results = {'transcript_text_only': full_transcript_text_only,
                 'transcript_with_timestamps': defaultTranscript}
      
      if USE_AI_FLAG:
          results['AI_summary'] = summarize_text(full_transcript_text_only, model=model, language=language)
      
      return results
  except Exception as e:
      print(f"Error: {str(e)}")
      return None

def extract_playlist_videos(playlist_id, USE_AI=False, model='gpt-3.5-turbo-1106', language='en'):
    try:
        youtube = build('youtube', 'v3', developerKey=YOUTUBE_API_KEY)
        playlist_data_request = youtube.playlists().list(
            part='snippet, contentDetails',
            id=playlist_id,
            maxResults=5
        )
        playlist_data_response = playlist_data_request.execute()
        playlist_data = [
          {
              'publishedAt': item['snippet']['publishedAt'],
              'playlistOwnerChannelId': item['snippet']['channelId'],
              'playlistOwnerChannelTitle': item['snippet']['channelTitle'],
              'playlistTitle': item['snippet']['title'],
              'itemCount': item['contentDetails']['itemCount'],
              'playlistDescription': item['snippet']['description'],
              'playlistThumbnailUrl': item['snippet']['thumbnails']['maxres']['url']
          }
          for item in playlist_data_response['items']
        ]
        request = youtube.playlistItems().list(
            part='snippet',
            playlistId=playlist_id,
            maxResults=50
        )
        response = request.execute()
        playlist_videos = [
          {
              'playlistId': item['snippet']['playlistId'],
              **playlist_data[0],
              'channelTitle': item['snippet']['videoOwnerChannelTitle'],
              'channelId': item['snippet']['videoOwnerChannelId'],
              'title': item['snippet']['title'],
              'videoId': item['snippet']['resourceId']['videoId'],
              'description': item['snippet']['description'],
              'thumbnailUrl': item['snippet']['thumbnails']['maxres']['url']
          }
          for item in response['items']
        ]

        # print(playlist_videos)

        for video in playlist_videos:
            transcript = get_video_transcript(video['videoId'], USE_AI, model, language)
            if transcript:
                video.update(transcript)
            # print(video['transcript'])
        return playlist_videos
    except Exception as e:
        return str(e)

def has_youtube_video_id(url):
  regex = r".*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|live\/|shorts\/|e\/|user\/[^#]*#p\/u\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*"
  match = re.search(regex, url)
  if match:
      return match.group(1)
  return None

def has_youtube_playlist_id(url):
    regex = r"^https?:\/\/(www\.)?youtube\.com\/playlist\?list=([^#\&\?]*)"

    match = re.search(regex, url)
    if match:
        return match.group(2) # explanation: https://regex101.com/r/8wMv0r/1
    else:
        return None

@app.route('/')
def index():
    return render_template('index.html')

# TOGGLE IF YOU WANT TO RUN ON REPL.IT
# if __name__ == "__main__":  # Makes sure this is the main process
#     app.run( # Starts the site
#       host='0.0.0.0',  # EStablishes the host, required for repl to detect the site
#       port=random.randint(2000, 9000)  # Randomly select the port the machine hosts on.
#     )

# TOGGLE IF YOU WANT TO RUN LOCALLY
if __name__ == "__main__":
    app.run(debug=True)  # Starts the site in debug mode (auto-reloads when code changes)