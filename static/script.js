document
.getElementById("youtubeForm")
.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the textarea value
  const FORM_DATA = document.getElementById('youtubeURLs').value;

  // Split the textarea value into an array based on new lines
  let youtubeURLs = FORM_DATA.split('\n');

  // Send the array to your API (you'll need to replace the placeholder URL)
  fetch("/get_transcript", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ urls: youtubeURLs }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`DATA ON CLIENT SIDE${data}`);
      document.getElementById("transcriptResult").innerText = JSON.stringify(
        data,
        null,
        2,
      );
    })
    .catch((error) => console.error("Error:", error));
});
