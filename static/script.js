document
  .getElementById("youtubeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the user submitted URLs from the textarea
    const FORM_DATA = document.getElementById("youtubeURLs").value;

    // Split answer, Each line equals one URL
    let youtubeURLs = FORM_DATA.split("\n");
    console.log(`Number of submitted URLs: ${youtubeURLs.length}`);
    // console.log(`Number of TEST_URLs: ${TEST_URLS.length}`);

    for (const url of youtubeURLs) {
      console.log(`URL: ${url}`);

      // if (!hasYouTubeVideoID(url) || !hasYouTubePlaylistID(url)) {
      //   // remove from array
      //   youtubeURLs.splice(youtubeURLs.indexOf(url), 1);
      //   console.log(`Invalid URL ${url}`);
      // }

      if (hasYouTubeVideoID(url)) {
        console.log(`Video ID: ${hasYouTubeVideoID(url)[1]}`);
      } else if (hasYouTubePlaylistID(url)) {
        console.log(`Playlist ID: ${hasYouTubePlaylistID(url)[1]}`);
      } else {
        youtubeURLs.splice(youtubeURLs.indexOf(url), 1);
        console.log(`Invalid URL: ${url}`);
      }
    }

    // console.log(`Number of URLs: ${TEST_URLS.length}`);

    getTranscriptAPICall(youtubeURLs);
  });

/**
 * Function to make a POST request to the server to get the transcript
 * @param {Array} youtubeURLs - The array of YouTube URLs to get the transcript for
 * @returns {Array} - The array of video objects with the transcript
 * @throws {Error} - If the response is not JSON or an array of objects with the correct fields
 */
function getTranscriptAPICall(youtubeURLs) {
  fetch("/get_transcript", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ urls: youtubeURLs }),
  })
    .then((response) => response.json())
    .then((data) => {
      videoList = data.videos;

      console.log(`videoList: ${videoList}`);

      // Iterate over each video in the videoList response
      for (let video in videoList) {
        // Create a container for the video information
        let videoContainer = document.createElement("div");
        videoContainer.classList.add("video-Container");

        console.log(`video: ${video}`);
        console.log(`videoList[video]: ${videoList[video]}`);
        let currentVideo = videoList[video];

        // Layout Video Data in HTML
        createVideoElement(currentVideo, videoContainer);

        // Append the new video request to the result list
        document.getElementById("videoResults").appendChild(videoContainer);
      }
    })
    .catch((error) => console.error("Error:", error));
}

/**
 * Function to check if a URL is a valid YouTube video URL
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is a valid YouTube video URL, false otherwise
 */
function hasYouTubeVideoID(url) {
  // try #1
  // const regex = /.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|live\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  const regex =
    /.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|live\/|shorts\/|e\/|user\/[^#]*#p\/u\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  return url.match(regex);
}

/**
 * Function to check if a URL is a valid YouTube playlist URL
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is a valid YouTube playlist URL, false otherwise
 */
function hasYouTubePlaylistID(url) {
  const regex =
    /^https?:\/\/(www\.)?youtube\.com\/playlist\?list=([a-zA-Z0-9_-]+)&si=([a-zA-Z0-9_-]+)$/;
  return url.match(regex);
}

/**
 * Function to round a number to a specified number of decimal places
 * @param {number} n - The number to round
 * @param {number} digits - The number of decimal places to round to
 * @returns {number} - The rounded number
 */
function roundTo(n, digits) {
  var negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = (Math.round(n) / multiplicator).toFixed(digits);
  if (negative) {
    n = (n * -1).toFixed(digits);
  }
  return n;
}

/**
 * Formats a transcript line into a human-readable format (Hours:Minutes:Seconds)
 * round the time to 2 decimal places
 * @param {Object} line - The line object from the transcript
 * @returns {string} - The formatted line
 */
function formatTranscriptLine(line) {
  let startTime = roundTo(line.start, 2);
  let startTimeHours = Math.floor(startTime / 3600);
  let startTimeMinutes = Math.floor((startTime % 3600) / 60);
  let startTimeSeconds = Math.floor((startTime % 3600) % 60);
  startTime = `${startTimeHours}:${startTimeMinutes}:${startTimeSeconds}`;

  // calculate endTime by adding the startTime to the duration
  let endTime = roundTo(line.start + line.duration, 2);
  let endTimeHours = Math.floor(startTime / 3600);
  let endTimeMinutes = Math.floor((startTime % 3600) / 60);
  let endTimeSeconds = Math.floor((startTime % 3600) % 60);
  endTime = `${endTimeHours}:${endTimeMinutes}:${endTimeSeconds}`;

  return `${line.text} (${startTime} - ${endTime})\n`;
}

/**
 * Function to create HTML elements for each video in the videoList
 * @param {Object} currentVideo - The current video object
 * @param {HTMLElement} videoContainer - The container for the video data
 */
function createVideoElement(currentVideo, videoContainer) {
  // Check for each field and create HTML elements if the videoList is present
  if (currentVideo.thumbnailUrl) {
    let thumbnail = document.createElement("img");
    thumbnail.src = currentVideo.thumbnailUrl;
    thumbnail.alt = currentVideo.title || "Video Thumbnail";
    thumbnail.classList.add("thumbnail");
    videoContainer.appendChild(thumbnail);
  }

  if (currentVideo.title) {
    let title = document.createElement("h2");
    title.textContent = currentVideo.title;
    videoContainer.appendChild(title);
  }

  if (currentVideo.channelTitle) {
    let channelTitle = document.createElement("p");
    channelTitle.textContent = "Channel: " + currentVideo.channelTitle;
    videoContainer.appendChild(channelTitle);
  }

  if (currentVideo.AI_summary) {
    let aiSummary = document.createElement("p");
    aiSummary.textContent = currentVideo.AI_summary;
    videoContainer.appendChild(aiSummary);
  }

  if (currentVideo.description) {
    let description = document.createElement("p");
    description.textContent = currentVideo.description;
    videoContainer.appendChild(description);
  }

  if (currentVideo.transcript_text_only) {
    let transcriptText = document.createElement("p");
    transcriptText.classList.add("transcript-text-only");
    transcriptText.textContent = currentVideo.transcript_text_only;
    videoContainer.appendChild(transcriptText);
  }

  if (currentVideo.transcript_with_timestamps) {
    // Create a container for the transcript with timestamps
    let transcriptWithTimestamps = document.createElement("div");
    transcriptWithTimestamps.classList.add("transcript-with-timestamps");

    // Iterate over each line in the transcript and create a paragraph element
    for (line in currentVideo.transcript_with_timestamps) {
      // Create a paragraph element for each line
      let timestampedLine = document.createElement("p");
      timestampedLine.classList.add("timestamped-line");

      timestampedLine.textContent += formatTranscriptLine(
        currentVideo.transcript_with_timestamps[line]
      );
      transcriptWithTimestamps.appendChild(timestampedLine);
    }

    // Append the transcript with timestamps to the video data container
    videoContainer.appendChild(transcriptWithTimestamps);
  }
}

// commented out for testing
// let TEST_URLS = [
//   "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
//   "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
//   "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
//   "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg",
//   "http://youtu.be/0zM3nApSvMg",
//   "http://www.youtube.com/watch?v=u8nQa1cJyX8&a=GxdCwVVULXctT2lYDEPllDR0LRTutYfW",
//   "http://www.youtube.com/watch?v=u8nQa1cJyX8",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
//   "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
//   "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
//   "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg",
//   "http://youtu.be/0zM3nApSvMg",
//   "https://www.youtube.com/watch?feature=feedrec_grec_index&v=0zM3nApSvMg",
//   "https://www.youtube.com/watch?time_continue=4&v=0zM3nApSvMg",
//   "https://www.youtube.com/embed/vE3nc7oU704",
//   "https://youtube.com/shorts/dQw4w9WgXcQ?feature=share",
//   "//www.youtube-nocookie.com/embed/up_lNV-yoK4?rel=0",
//   "http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo",
//   "http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel",
//   "http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub",
//   "http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I",
//   "http://www.youtube.com/user/SilkRoadTheatre#p/a/u/2/6dwqZw0j_jY",
//   "http://youtu.be/6dwqZw0j_jY",
//   "http://www.youtube.com/watch?v=6dwqZw0j_jY&feature=youtu.be",
//   "http://youtu.be/afa-5HQHiAs",
//   "http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo?rel=0",
//   "http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel",
//   "http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub",
//   "http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I",
//   "http://www.youtube.com/embed/nas1rJpm7wY?rel=0",
//   "http://www.youtube.com/watch?v=peFZbP64dsU",
//   "http://youtube.com/v/dQw4w9WgXcQ?feature=youtube_gdata_player",
//   "http://youtube.com/vi/dQw4w9WgXcQ?feature=youtube_gdata_player",
//   "http://youtube.com/?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
//   "http://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
//   "http://youtube.com/?vi=dQw4w9WgXcQ&feature=youtube_gdata_player",
//   "http://youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
//   "http://youtube.com/watch?vi=dQw4w9WgXcQ&feature=youtube_gdata_player",
//   "http://youtu.be/dQw4w9WgXcQ?feature=youtube_gdata_player",
//   "http://youtube.googleapis.com/v/4e_kz79tjb8?version=3",
//   "https://www.youtube.com/watch?feature=g-vrec&v=Y1xs_xPb46M",
//   "http://www.youtube.com/watch?feature=player_embedded&v=Ab25nviakcw#",
//   "http://youtu.be/Ab25nviakcw",
//   "http://www.youtube.com/watch?v=Ab25nviakcw",
//   '<iframe width="420" height="315" src="http://www.youtube.com/embed/Ab25nviakcw" frameborder="0" allowfullscreen></iframe>',
//   '<object width="420" height="315"><param name="movie" value="http://www.youtube-nocookie.com/v/Ab25nviakcw?version=3&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube-nocookie.com/v/Ab25nviakcw?version=3&amp;hl=en_US" type="application/x-shockwave-flash" width="420" height="315" allowscriptaccess="always" allowfullscreen="true"></embed></object>',
//   "http://i1.ytimg.com/vi/Ab25nviakcw/default.jpg",
//   "https://www.youtube.com/watch?v=BGL22PTIOAM&feature=g-all-xit",
//   "BGL22PTIOAM",
//   "http://www.youtube.com/v/0zM3nApSvMg?fs=1&hl=en_US&rel=0",
//   "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg",
//   "http://youtu.be/0zM3nApSvMg",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
//   "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/KdwsulMb8EQ",
//   "http://youtu.be/dQw4w9WgXcQ",
//   "http://www.youtube.com/embed/dQw4w9WgXcQ",
//   "http://www.youtube.com/v/dQw4w9WgXcQ",
//   "http://www.youtube.com/e/dQw4w9WgXcQ",
//   "http://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   "http://www.youtube.com/?v=dQw4w9WgXcQ",
//   "http://www.youtube.com/watch?feature=player_embedded&v=dQw4w9WgXcQ",
//   "http://www.youtube.com/?feature=player_embedded&v=dQw4w9WgXcQ",
//   "http://www.youtube.com/user/IngridMichaelsonVEVO#p/u/11/KdwsulMb8EQ",
//   "http://www.youtube-nocookie.com/v/6L3ZvIMwZFM?version=3&hl=en_US&rel=0",
//   "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
//   "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg",
//   "http://youtu.be/0zM3nApSvMg",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
//   "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
//   "https://www.youtube.com/watch?v=l-gQLqv9f4o",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
//   "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
//   "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
//   "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg",
//   "http://youtu.be/0zM3nApSvMg",
//   "//www.youtube-nocookie.com/embed/up_lNV-yoK4?rel=0",
//   "http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo",
//   "http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel",
//   "http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub",
//   "http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I",
//   "http://www.youtube.com/user/SilkRoadTheatre#p/a/u/2/6dwqZw0j_jY",
//   "http://youtu.be/6dwqZw0j_jY",
//   "http://www.youtube.com/watch?v=6dwqZw0j_jY&feature=youtu.be",
//   "http://youtu.be/afa-5HQHiAs",
//   "http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo?rel=0",
//   "http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel",
//   "http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub",
//   "http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I",
//   "http://www.youtube.com/embed/nas1rJpm7wY?rel=0",
//   "http://www.youtube.com/watch?v=peFZbP64dsU",
//   "http://youtube.com/v/dQw4w9WgXcQ?feature=youtube_gdata_player",
//   "http://youtube.com/vi/dQw4w9WgXcQ?feature=youtube_gdata_player",
//   "http://youtube.com/?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
//   "http://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
//   "http://youtube.com/?vi=dQw4w9WgXcQ&feature=youtube_gdata_player",
//   "http://youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
//   "http://youtube.com/watch?vi=dQw4w9WgXcQ&feature=youtube_gdata_player",
//   "http://youtu.be/dQw4w9WgXcQ?feature=youtube_gdata_player",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
//   "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
//   "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
//   "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg",
//   "http://youtu.be/0zM3nApSvMg",
//   "https://youtube.com/shorts/0dPkkQeRwTI?feature=share",
//   "https://youtube.com/shorts/0dPkkQeRwTI",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
//   "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
//   "http://youtube.googleapis.com/v/0zM3nApSvMg?fs=1&hl=en_US&rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
//   'http://www.youtube.com/embed/0zM3nApSvMg?rel=0"',
//   "http://www.youtube.com/watch?v=0zM3nApSvMg",
//   "http://youtu.be/0zM3nApSvMg",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg/",
//   "http://www.youtube.com/watch?feature=player_detailpage&v=8UVNT4wvIGY",
//   "http://www.youtube.com/user/dreamtheater#p/u/1/oTJRivZTMLs",
//   "https://youtu.be/oTJRivZTMLs?list=PLToa5JuFMsXTNkrLJbRlB--76IAOjRM9b",
//   "http://www.youtube.com/watch?v=oTJRivZTMLs&feature=youtu.be",
//   "https://youtu.be/oTJRivZTMLs",
//   "http://youtu.be/oTJRivZTMLs&feature=channel",
//   "http://www.youtube.com/ytscreeningroom?v=oTJRivZTMLs",
//   "http://www.youtube.com/embed/oTJRivZTMLs?rel=0",
//   "http://youtube.com/v/oTJRivZTMLs&feature=channel",
//   "http://youtube.com/v/oTJRivZTMLs&feature=channel",
//   "http://youtube.com/vi/oTJRivZTMLs&feature=channel",
//   "http://youtube.com/?v=oTJRivZTMLs&feature=channel",
//   "http://youtube.com/?feature=channel&v=oTJRivZTMLs",
//   "http://youtube.com/?vi=oTJRivZTMLs&feature=channel",
//   "http://youtube.com/watch?v=oTJRivZTMLs&feature=channel",
//   "http://youtube.com/watch?vi=oTJRivZTMLs&feature=channel",
//   "www.youtube-nocookie.com/embed/dQw4-9W_XcQ?rel=0",
//   "http://www.youtube.com/user/Scobleizer#p/u/1/dQw4-9W_XcQ",
//   "http://www.youtube.com/watch?v=dQw4-9W_XcQ&feature=channel",
//   "http://www.youtube.com/watch?v=dQw4-9W_XcQ&playnext_from=TL&videos=osPknwzXEas&feature=sub",
//   "http://www.youtube.com/ytscreeningroom?v=dQw4-9W_XcQ",
//   "http://www.youtube.com/user/SilkRoadTheatre#p/a/u/2/dQw4-9W_XcQ",
//   "http://youtu.be/dQw4-9W_XcQ",
//   "http://www.youtube.com/watch?v=dQw4-9W_XcQ&feature=youtu.be",
//   "http://youtu.be/dQw4-9W_XcQ",
//   "http://www.youtube.com/user/Scobleizer#p/u/1/dQw4-9W_XcQ?rel=0",
//   "http://www.youtube.com/watch?v=dQw4-9W_XcQ&playnext_from=TL&videos=dQw4-9W_XcQ&feature=sub",
//   "http://www.youtube.com/ytscreeningroom?v=dQw4-9W_XcQ",
//   "http://www.youtube.com/embed/dQw4-9W_XcQ?rel=0",
//   "http://www.youtube.com/watch?v=dQw4-9W_XcQ",
//   "http://youtube.com/v/dQw4-9W_XcQ?feature=youtube_gdata_player",
//   "http://youtube.com/vi/dQw4-9W_XcQ?feature=youtube_gdata_player",
//   "http://youtube.com/?v=dQw4-9W_XcQ&feature=youtube_gdata_player",
//   "http://www.youtube.com/watch?v=dQw4-9W_XcQ&feature=youtube_gdata_player",
//   "http://youtube.com/?vi=dQw4-9W_XcQ&feature=youtube_gdata_player",
//   "http://youtube.com/watch?v=dQw4-9W_XcQ&feature=youtube_gdata_player",
//   "http://youtube.com/watch?vi=dQw4-9W_XcQ&feature=youtube_gdata_player",
//   "http://youtu.be/dQw4-9W_XcQ?feature=youtube_gdata_player",
//   "https://www.youtube.com/shorts/FUVDVAtoRAQ",
//   "https://www.youtube.com/watch?v=abcd123456 hello",
//   "https://youtu.be/xyz987654 yo",
//   "https://www.youtube.com/embed/ouM8z-4Uw4A hi",
//   "https://www.youtube.com/watch?v=wxyz123456&t=30s 123",
//   "https://www.youtube.com/watch?v=G_IQwt9ceN8&themeRefresh=1 hii",
//   "https://www.youtube.com/watch?v=G_IQwt9ceN8&themeRefresh=1 uhhhu",
//   "https://m.youtube.com/watch?v=6MFMju-rdUQ 23324",
//   "youtube.com whatever",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
//   "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
//   "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
//   "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
//   "http://www.youtube.com/watch?v=0zM3nApSvMg",
//   "http://youtu.be/0zM3nApSvMg",
//   "https://www.youtube.com/embed/vDoO_bNw7fc",
//   "http://www.youtube.com/user/dreamtheater#p/u/1/oTJRivZTMLs",
//   "https://youtu.be/oTJRivZTMLs?list=PLToa5JuFMsXTNkrLJbRlB--76IAOjRM9b",
//   "http://www.youtube.com/watch?v=oTJRivZTMLs&feature=youtu.be",
//   "https://youtu.be/oTJRivZTMLs",
//   "http://youtu.be/oTJRivZTMLs&feature=channel",
//   "http://www.youtube.com/ytscreeningroom?v=oTJRivZTMLs",
//   "http://www.youtube.com/embed/oTJRivZTMLs?rel=0",
//   "http://youtube.com/v/oTJRivZTMLs&feature=channel",
//   "http://youtube.com/v/oTJRivZTMLs&feature=channel",
//   "http://youtube.com/vi/oTJRivZTMLs&feature=channel",
//   "http://youtube.com/?v=oTJRivZTMLs&feature=channel",
//   "http://youtube.com/?feature=channel&v=oTJRivZTMLs",
//   "http://youtube.com/?vi=oTJRivZTMLs&feature=channel",
//   "http://youtube.com/watch?v=oTJRivZTMLs&feature=channel",
//   "http://youtube.com/watch?vi=oTJRivZTMLs&feature=channel",
//   "https://www.youtube.com/watch?v=UG-aKYWIcfE&pp=ygULMjQvNyBzdHJlYSw%3D",
//   "https://youtube.com/playlist?list=PLqR0DrEFzD9ufgr22HZod71yFKMqekKwp&si=aVukoAKOIOR8Q8HY",
// ];
