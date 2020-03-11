// Code for the highscores page.
// =====================================

// This function gets highscore data from storage and displays it on the page.
function displayHighScores() {
  c = 0;
  for (let i of Object.keys(localStorage)) {
    c++;
    var highscoreElement = document.createElement("p");
    highscoreElement.textContent = c + ": " + i + " - " + localStorage[i];
    highscoresDiv.appendChild(highscoreElement);
  }
}
// This code loads all previous highscores.
var highscoresDiv = document.getElementById("display-highscores");
if (localStorage.length == 0) {
} else {
  displayHighScores();
}

// Returns the user to the beginning of the quiz when "Go Back" is pressed.
var backButton = document.getElementById("return");
backButton.addEventListener("click", () => {
  window.open("index.html", "_self");
});

// Clears highscore data when "Clear highscores" is clicked
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  for (let i of Object.keys(localStorage)) {
    delete localStorage[i];
  }
});
