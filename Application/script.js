// This is the code for the Code Quiz application.
// ==============================================

// This bit of code creates and updates the timer at the top-right of the screen.
var timer = document.getElementById("timer");
var time = document.getElementById("time-left");
var secs = 60;
var gameTime = setInterval(() => {
  time.textContent = secs;
  secs--;
  if (secs == -1) {
    clearInterval(gameTime);
  }
}, 1000);

// This function changes the html page to display a question.
function displayQuestion(question, options) {
  var heading = document.getElementById("content-header");
  var content = document.getElementById("content");
  var choicesElement = document.createElement("ul");
  for (var i = 1; i < 5; i++) {
    var choice = options[i];
    var individualChoice = document.createElement("li");
    var choiceButton = document.createElement("button");
    choiceButton.textContent = i + ": " + choice;
    individualChoice.appendChild(choiceButton);
    choicesElement.appendChild(individualChoice);
  }
  heading.textContent = question;
  content.appendChild(choicesElement);
}

// This section of code begins the quiz when the start button is clicked.
startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
  count = 0;
  var intro = document.getElementById("intro");
  intro.setAttribute("style", "display: none");
  startButton.setAttribute('style', 'display: none');
  displayQuestion(questions[count], options[count]);
});
