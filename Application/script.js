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

// This bit of code creates the questions and options of the quiz. It creates the quiz content.
var questions = [
  "What does API stand for?",
  "What event fires when a user presses a key?",
  "How would you detect user interactions on your website?"
];
var options = [
  {
    1: "Astute Planning Interface",
    2: "Arachnid Person Interwebs",
    3: "Application Programming Interface",
    4: "Augmented Powers of the Illuminati"
  },
  { 1: "keyup", 2: "keylog", 3: "keypress", 4: "keydown" },
  {
    1: "Event listeners",
    2: "System hacking",
    3: "Keylogging",
    4: "Screen Capture"
  }
];
