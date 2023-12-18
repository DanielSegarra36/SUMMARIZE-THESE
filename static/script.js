document
  .getElementById("youtubeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let userRequest = getRequestBody();

    filterURLs(userRequest.urls);

    // console.log(`Number of URLs: ${TEST_URLS.length}`);

    getTranscriptAPICall(userRequest);
  });

/**
 * Function to make a POST request to the server to get the transcript
 * @param {Array} youtubeURLs - The array of YouTube URLs to get the transcript for
 * @returns {Array} - The array of video objects with the transcript
 * @throws {Error} - If the response is not JSON or an array of objects with the correct fields
 */
function getTranscriptAPICall(userRequest) {
  fetch("/get_transcript", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userRequest),
  })
    .then((response) => response.json())
    .then((data) => {
      let videoList = data.videos;

      // Iterate over each video in the videoList response
      for (let video in videoList) {
        // Create a container for the video information
        let videoContainer = document.createElement("div");
        videoContainer.classList.add("full-text");

        // Layout Video Data in HTML
        formatDataInHTML(videoList[video], videoContainer);

        // Append the new video request to the result list
        // document
        //   .getElementById("videoResults")
        //   .appendChild(createVideoHeader(videoList[video], videoContainer));
        // add new video to the top of the list
        document
          .getElementById("videoResults")
          .prepend(
            createVideoHeader(videoList[video], videoContainer, userRequest)
          );
      }

      handleDetailsToggle();
    })
    .catch((error) => console.error("Error:", error));
}

function handleDetailsToggle() {
  // listener for open details elements
  document.querySelectorAll("details").forEach((details) => {
    console.log("got to query selector");
    console.log(details);
    details.addEventListener("toggle", function (event) {
      console.log(event.target);
      console.log("got to event listener");
      if (!event.target.open)
        document
          .querySelectorAll(
            "details:not([open]) > summary > p, details:not([open]) > summary .video-preview"
          )
          .forEach((element) => (element.style.display = "inherit"));
      // remove 'summary > p' from the DOM if details is open
      else {
        // keep in case we want to expose this feature to users, custom UI
        // close other open details elements
        // document
        //   .querySelectorAll("details[open]")
        //   .forEach(
        //     (details) =>
        //       details !== event.target && details.removeAttribute("open")
        //   );
        document
          // select all details[open] > summary > p and divs
          .querySelectorAll(
            "details[open] > summary > p, details[open] > summary .video-preview"
          )
          .forEach((element) => (element.style.display = "none"));
      }
    });
  });
}

function getRequestBody() {
  let language = document.getElementById("language").value;
  let gptModel = null;

  // Split URLs from textarea, Each non-empty line equals one URL
  let youtubeURLs = document
    .getElementById("youtubeURLs")
    .value.split("\n")
    .filter(Boolean); // Filter out empty lines
  console.log(`Number of submitted URLs: ${youtubeURLs.length}`);

  // If the AI Summary checkbox is checked, include the GPT model in the API request
  if (document.getElementById("aiSummary").checked) {
    console.log("AI Summary checkbox is checked!!!!");
    gptModel = document.getElementById("gptModel").value;
    if (document.querySelector("#AIPrompt").value)
      return {
        urls: youtubeURLs,
        language,
        model: gptModel,
        prompt: document.querySelector("#AIPrompt").value,
      };
    else return { urls: youtubeURLs, language, model: gptModel };
  } else {
    // Otherwise, exclude the GPT model from the API request
    return { urls: youtubeURLs, language };
  }
}

function filterURLs(youtubeURLs) {
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
}

/**
 * Function to check if a URL is a valid YouTube video URL
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is a valid YouTube video URL, false otherwise
 */
function hasYouTubeVideoID(url) {
  // try #1
  // const regex = /.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|live\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  // const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
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
  // const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/playlist\?list=)([a-zA-Z0-9_-]+)/;
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
  let startTime = formatTimeHHMMSS(line.start);
  let endTime = formatTimeHHMMSS(line.start + line.duration);
  return `(${startTime} - ${endTime}) ${line.text}\n`;
}

/**
 * Rounds a time to the nearest second and hides non-significant zeros
 * @param {number} time - The time in seconds
 * @returns {string} - The formatted time
 * @throws {Error} - If the time is not a positive integer
 */
function formatTimeHHMMSS(time) {
  let totalSeconds = roundTo(time, 2);
  let days = padTimeUnit(totalSeconds / (3600 * 24));
  let hours = padTimeUnit(totalSeconds / 3600);
  let minutes = padTimeUnit((totalSeconds % 3600) / 60);
  let seconds = padTimeUnit((totalSeconds % 3600) % 60);
  return `${days === "00" ? "" : `${days}:`}${
    hours === "00" ? "" : `${hours}:`
  }${minutes}:${seconds}`;
}

/**
 * Function to pad a time unit with a leading zero if it is less than 10
 * @param {number} timeUnit - The time unit to pad
 * @returns {string} - The padded time unit
 */
function padTimeUnit(timeUnit) {
  return Math.floor(timeUnit).toString().padStart(2, "0");
}

/**
 * Function to create HTML elements for each video in the videoList
 * @param {Object} currentVideo - The current video object
 * @param {HTMLElement} videoContainer - The container for the video data
 */
function formatDataInHTML(currentVideo, videoContainer) {
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
    title.classList.add("title");
    videoContainer.appendChild(title);
  }

  if (currentVideo.channelTitle) {
    let channelTitle = document.createElement("p");
    channelTitle.textContent = "by: " + currentVideo.channelTitle;
    channelTitle.classList.add("channelTitle");
    videoContainer.appendChild(channelTitle);
  }

  if (currentVideo.AI_summary) {
    // let details = document.createElement("details");
    // let summary = document.createElement("summary");
    // let heading = document.createElement("h3");
    // let snippet = document.createElement("p");

    // heading.textContent = "AI Summary";
    // // snippet.textContent = currentVideo.AI_summary.substring(0, 150);
    // snippet.textContent = currentVideo.AI_summary.split(" ")
    //   .slice(0, 50)
    //   .join(" ");
    // details.textContent = currentVideo.AI_summary;

    // details.classList.add("AI_summary");

    // summary.append(heading, snippet);
    // details.appendChild(summary);
    // videoContainer.appendChild(details);
    videoContainer.appendChild(
      createDetailsElement("AI Summary", currentVideo.AI_summary)
    );
  }

  if (currentVideo.description) {
    videoContainer.appendChild(
      createDetailsElement("Description", currentVideo.description)
    );
  }

  if (currentVideo.transcript_text_only) {
    videoContainer.appendChild(
      createDetailsElement("Transcript", currentVideo.transcript_text_only)
    );
  }

  if (currentVideo.transcript_with_timestamps) {
    // Create a container for the transcript with timestamps
    let transcriptWithTimestamps = document.createElement("div");
    transcriptWithTimestamps.classList.add("transcript-with-timestamps");

    // Iterate over each line in the transcript and create a paragraph element
    for (line in currentVideo.transcript_with_timestamps) {
      const lineData = currentVideo.transcript_with_timestamps[line];

      let timestampedLine = document.createElement("p");
      timestampedLine.classList.add("timestamped-line");
      let transcriptLine = document.createTextNode(lineData.text);

      let timestamp = document.createElement("span");
      timestamp.classList.add("timestamp");
      let startTime = formatTimeHHMMSS(lineData.start);
      let endTime = formatTimeHHMMSS(lineData.start + lineData.duration);
      timestamp.textContent = `(${startTime} - ${endTime})`;

      timestampedLine.appendChild(timestamp);
      timestampedLine.appendChild(transcriptLine);
      // timestampedLine.textContent += `${lineData.text}\n`;

      // timestampedLine.textContent += formatTranscriptLine(
      //   currentVideo.transcript_with_timestamps[line]
      // );
      transcriptWithTimestamps.appendChild(timestampedLine);
    }

    // Append the transcript with timestamps to the video data container
    // videoContainer.appendChild(transcriptWithTimestamps);

    videoContainer.appendChild(
      createDetailsElement(
        "Transcript with Timestamps",
        transcriptWithTimestamps
      )
    );
  }
}

function formatDataInHTML_HELPER() {
  for (key in currentVideo) {
    if (currentVideo.hasOwnProperty(key)) {
      if (Array.isArray(currentVideo[key])) {
        const nestedArray = currentVideo[key];
        for (item in nestedArray) {
          // let element = buildHTMLElement("div", [{ class: "key" }], nestedArray[item]);
          // videoContainer.appendChild(element);
          formatDataInHTML(nestedArray[item], videoContainer);
        }
      } else {
        console.log(`Key: ${key}, Value: ${currentVideo[key]}`);
        videoContainer.appendChild(
          buildHTMLElement("div", [{ class: key }], currentVideo[key])
        );
      }
    }
  }
}

function createVideoHeader(currentVideo, content, userRequest) {
  let details = document.createElement("details");
  details.classList.add("video-container");
  let summary = document.createElement("summary");

  let container = document.createElement("div");
  container.classList.add("video-preview");

  let previewTags = document.createElement("div");
  previewTags.classList.add("preview-tags");
  let language = document.createElement("h4");
  language.textContent = userRequest.language;
  language.classList.add("preview-language");
  previewTags.appendChild(language);

  let img = document.createElement("img");
  img.src = currentVideo.thumbnailUrl;
  img.alt = currentVideo.title || "Video Thumbnail";
  img.classList.add("preview-thumbnail");

  // if ai summary is present, add summary to the video preview
  // if (currentVideo.AI_summary) {
  //   let summary = document.createElement("p");
  //   summary.textContent = currentVideo.AI_summary.split(" ")
  //     .slice(0, 50)
  //     .join(" ");
  //   container.appendChild(summary);
  // }

  let label = document.createElement("div");
  let heading = document.createElement("h3");
  heading.textContent = currentVideo.title;
  let channel = document.createElement("p");
  channel.textContent = currentVideo.channelTitle;

  label.append(heading, channel);
  // if ai summary is present, add prompt to the video preview
  if (currentVideo.AI_summary) {
    let prompt = document.createElement("p");
    prompt.textContent = userRequest.prompt;

    let gptModel = document.createElement("h4");
    gptModel.textContent = userRequest.model;
    gptModel.classList.add("preview-model");

    previewTags.appendChild(gptModel);

    container.appendChild(prompt);
    label.append(prompt);
  }
  container.append(img, label);
  summary.append(container, previewTags);
  details.append(summary, content);

  return details;
}
function createDetailsElement(title, content) {
  let details = document.createElement("details");
  let summary = document.createElement("summary");
  let heading = document.createElement("h3");
  let snippet = document.createElement("p");
  let fullText = document.createElement("p");

  heading.textContent = title;

  // if content is an html node, append it to the fullText element
  if (typeof content === "object") {
    fullText.appendChild(content);
  } else {
    snippet.textContent = content.split(" ").slice(0, 50).join(" ");
    fullText.textContent = content;
  }

  fullText.classList.add("fullText");
  details.classList.add(title.toLowerCase().replaceAll(" ", "-"), "draggable");

  summary.append(heading, snippet);
  details.append(summary, fullText);

  return details;
}

function buildHTMLElement(type, attributes = [], content) {
  let element = document.createElement(type);
  for (prop in attributes) {
    for (key in attributes[prop])
      element.setAttribute(key, attributes[prop][key]);
  }
  element.textContent = content;
  return element;
}

window.onload = function () {
  const hiddenItems = document.querySelectorAll(".hideToggle");
  const aiSummaryCheckbox = document.getElementById("aiSummary");

  // Disable Summary & hide the GPT-Model 'label' and 'select' initially
  aiSummaryCheckbox.checked = false;
  hiddenItems.forEach((item) => (item.style.display = "none"));

  aiSummaryCheckbox.addEventListener("change", function () {
    // If the AI summary checkbox is checked, show the GPT model label and select
    // Otherwise, hide them
    if (this.checked)
      hiddenItems.forEach((item) => (item.style.display = "unset"));
    else hiddenItems.forEach((item) => (item.style.display = "none"));
  });
};
