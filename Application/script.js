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
