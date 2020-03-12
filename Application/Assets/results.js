// Code for the results page.
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

// Stores the user's score and initials in local storage and opens 
// the highscores page when form is submitted
var formElement = document.getElementById('initials-form');
var inputElement = document.getElementById('initials-input');
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem(inputElement.value, '' + score); 
    inputElement.value = '';
    window.open('highscores.html', '_self');
})