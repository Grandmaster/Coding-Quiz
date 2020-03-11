// Code for the highscores page.
// ===============================

// This bit of code retrieves the score from local storage.
var score = localStorage.getItem('score');
var scoreSpan = document.getElementById('final-score');
scoreSpan.innerHTML = score;

// Returns the user to the beginning of the quiz when "Go Back" is pressed.
var backButton = document.getElementById('return');
backButton.addEventListener('click', () => {
    window.open('index.html', '_self');
})