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
    if (secs <= 0) {
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
  for (let i of Object.keys(options)) {
    var choice = options[i];
    var individualChoice = document.createElement("li");
    var choiceButton = document.createElement("button");
    choiceButton.textContent = i + ": " + choice;
    choiceButton.setAttribute("data-index", i);
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
choicesElement.addEventListener("click", event => {
  count++;
  if (count == questions.length) {
    endQuiz();
  } else {
    checkAnswer(event);
    displayQuestion(questions[count], options[count]);
    styleButtons();
  }
});

// Function checks if the user picked the right answer or not, and displays the result
// on the screen, and takes it away after a few seconds.
function checkAnswer(event) {
  var answerKey = answers[count - 1];
  var choiceKey = event.target.getAttribute("data-index");
  var answerDiv = document.getElementById("answers");
  answerDiv.style.borderTop = '1px solid';
  var result = document.createElement("h3");
  result.style.fontStyle = "italic";
  if (choiceKey == answerKey) {
    result.textContent = "Correct!";
    answerDiv.appendChild(result);
  } else {
    result.textContent = "Wrong!";
    answerDiv.appendChild(result);
    secs = secs - 10;
    if (secs <= 0){
      secs = 0;
      endQuiz();
    } 
    time.textContent = secs
    time.style.color = 'red';
    setTimeout(() => {
      time.style.color = 'white';
    }, 3000)
  }
  setTimeout(function(){
    answerDiv.removeChild(answerDiv.lastChild);
    answerDiv.style.borderTop = '0px'
  }, 1000)
}

// The following function ends the quiz by opening the highscores page.
function endQuiz() {
  localStorage.setItem("score", secs);
  window.open("results.html", "_self");
}
