var timer = document.getElementById('timer');
var time = document.getElementById('time-left');
var secs = 60;
var gameTime = setInterval(() => {
    time.textContent = secs;
    secs--;
    if (secs == 0) {
        clearInterval(gameTime);
    }
}, 1000)