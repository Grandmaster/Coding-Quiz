// This is the code for the Code Quiz application.
// ==============================================

// This function creates and updates the timer at the top-right of the screen.
var timer = document.getElementById("timer");
var time = document.getElementById("time-left");
var secs = 60;
function beginCountDown() {
  var gameTime = setInterval(() => {
    time.textContent = secs;
    secs--;
    if (secs == 0) {
      clearInterval(gameTime);
      endQuiz();
    }
  }, 1000);
}

// This function changes the html page to display a question.
var heading = document.getElementById("content-header");
var content = document.getElementById("content");
var choicesElement = document.createElement("ul");
choicesElement.id = "choices";
function displayQuestion(question, options) {
  while (choicesElement.hasChildNodes()) {
    choicesElement.removeChild(choicesElement.firstChild);
  }
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
count = 0;
startButton.addEventListener("click", () => {
  beginCountDown();
  displayQuestion(questions[count], options[count]);
  styleButtons();
  var intro = document.getElementById("intro");
  intro.setAttribute("style", "display: none");
  startButton.setAttribute("style", "display: none");
});

// This function gives all buttons on the page a particular style.
function styleButtons() {
  var buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("btn");
    buttons[i].classList.add("btn-primary");
    buttons[i].setAttribute("style", "margin-bottom: 10px");
  }
  startButton.setAttribute("style", "display: none");
}

// This part of the code displays the next question when an option is clicked,
// using event propagation.
choicesElement.addEventListener("click", () => {
  count++;
  if (count == questions.length) {
    endQuiz();
  } else {
    displayQuestion(questions[count], options[count]);
    styleButtons();
  }
});

// The following function ends the quiz by opening the highscores page.
function endQuiz() {
  localStorage.setItem("score", secs);
  window.open("highscores.html", "_self");
}
