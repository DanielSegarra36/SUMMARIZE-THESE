from flask import Flask, request, jsonify, render_template
from youtube_transcript_api import YouTubeTranscriptApi
from googleapiclient.discovery import build
from openai import OpenAI
import random
import os
import re

# Compare Pricing
# https://openai.com/pricing
# Monitor Your Usage
# https://platform.openai.com/usage
# SET TO TRUE TO ENABLE SUMMARIZATION
# THIS WILL REQUIRE A FREE OPENAI API KEY AND TOKENS PURCHASED
USE_AI = True

app = Flask(  # Create a flask app
  __name__,
  template_folder='templates',  # Name of html file folder
  static_folder='static'  # Name of directory for static files
)

# Set your YouTube API key as an environment variable or directly assign it here
api_key = os.environ.get('YOUTUBE_API_KEY')  # Replace with your actual API key

@app.route('/get_transcript', methods=['POST'])
def get_transcript():
    urls = request.json.get('urls', '')
    transcripts = []
    for url in urls:
        print (f'URL:{url}')
        if 'playlist' in url:
            id = extract_playlist_id(url)
            print (f'playlist_id:{id}')
            transcripts += extract_playlist_transcripts(id)
        elif 'video' in url or 'watch' in url:
            id = extract_video_id(url)
            print (f'video_id:{id}')
            transcripts.append(get_video_transcript(id, USE_AI))
        else:
          transcripts.append({f'Invalid URL: {url}'})
    print(f'DATA SENT TO CLIENT: {transcripts}')
    return jsonify({'transcripts': transcripts})

def summarize_text(text):
  try:
      client = OpenAI()
      response = client.chat.completions.create(
          model="gpt-3.5-turbo-1106",
          # api_key=os.environ['OPENAI_API_KEY'],  # this is also the default, it can be omitted
          messages=[
            {"role": "system", "content": "You summarize YouTube videos solely on the video's transcript. Explain and highlight core concepts and key points in great detail."},
            {"role": "user", "content": text}
          ],
          # max_tokens=150  # Adjust the length of the summary as needed
      )
      return response.choices[0].message.content
  except Exception as e:
      print(f"Error: {str(e)}")
      return None

def get_video_transcript(video_id, USE_AI_FLAG=False):
  try:
      transcript = YouTubeTranscriptApi.get_transcript(video_id)
      full_transcript_text_only = ''
      
      if transcript:
        for line in transcript:
            full_transcript_text_only += line['text']
      
      results = {'transcript_text_only': full_transcript_text_only,
                 'transcript_with_timestamps': transcript}
      
      if USE_AI_FLAG:
          results['AI_summary'] = summarize_text(full_transcript_text_only)
      
      return results
  except Exception as e:
      print(f"Error: {str(e)}")
      return None

def extract_playlist_transcripts(playlist_id):
    try:
        youtube = build('youtube', 'v3', developerKey=api_key)
        request = youtube.playlistItems().list(
            part='snippet',
            playlistId=playlist_id,
            maxResults=50
        )
        response = request.execute()
        playlist_data = [
          {
              'playlistId': item['snippet']['playlistId'],
              'channelTitle': item['snippet']['videoOwnerChannelTitle'],
              'channelId': item['snippet']['videoOwnerChannelId'],
              'title': item['snippet']['title'],
              'videoId': item['snippet']['resourceId']['videoId'],
              'description': item['snippet']['description'],
              'thumbnailUrl': item['snippet']['thumbnails']['maxres']['url']
          }
          for item in response['items']
        ]

        print(playlist_data)

        for video in playlist_data:
            transcript = get_video_transcript(video['videoId'], USE_AI)
            if transcript:
                video.update(transcript)
            # print(video['transcript'])
        return playlist_data
    except Exception as e:
        return str(e)

def extract_video_id(youtube_link):
  match = re.search(r"v=([a-zA-Z0-9_-]+)", youtube_link)
  if match:
      return match.group(1)
  return None

def extract_playlist_id(youtube_link):
  match = re.search(r"list=([a-zA-Z0-9_-]+)", youtube_link)
  if match:
      return match.group(1)
  return None

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":  # Makes sure this is the main process
    app.run( # Starts the site
      host='0.0.0.0',  # EStablishes the host, required for repl to detect the site
      port=random.randint(2000, 9000)  # Randomly select the port the machine hosts on.
    )