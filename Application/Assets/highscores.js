// Code for the highscores page.
// ===============================

// This bit of code retrieves the score from local storage.
var score = localStorage.getItem('score');
var scoreSpan = document.getElementById('final-score');
scoreSpan.innerHTML = score;