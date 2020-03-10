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

// This section changes the html page to display a question.
startButton = document.getElementById('start');
function displayQuestion(question, options) {
  var heading = document.getElementById('content-header');
  var content = document.getElementById('content');
  var choicesElement = document.createElement('ul');
  for (var i = 1; i < 5; i++) {
    var choice = options[i];
    var individualChoice = document.createElement('li');
    var choiceButton = document.createElement('button');
    choiceButton.textContent = i + ': ' + choice;
    individualChoice.appendChild(choiceButton);
    choicesElement.appendChild(individualChoice);
  }
  heading.textContent = question;
  var intro = document.getElementById('intro');
  intro.remove();
  content.appendChild(choicesElement);
}

displayQuestion(questions[2], options[2]);