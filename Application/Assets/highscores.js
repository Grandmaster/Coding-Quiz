// Code for the highscores page.
// =====================================

// This code loads all previous highscores.
var highscoresDiv = document.getElementById('display-highscores');
if (localStorage.length == 0) {

}else{
    c = 0;
    for (let i of Object.keys(localStorage)) {
        c++
        var highscoreElement = document.createElement('p');
        highscoreElement.textContent = c + ': ' + i + ' - ' + localStorage[i];
        highscoresDiv.appendChild(highscoreElement);
    }
}

// Returns the user to the beginning of the quiz when "Go Back" is pressed.
var backButton = document.getElementById('return');
backButton.addEventListener('click', () => {
    window.open('index.html', '_self');
})