/*------------------- TASK - 2 -------------------*/


let startTime, updatedTime, difference, tInterval;
let running = false;
let lapCounter = 1;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const laps = document.getElementById('laps');

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);

function start() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startButton.disabled = true;
        pauseButton.disabled = false;
        lapButton.disabled = false;
    }
}

function pause() {
    if (running) {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        running = false;
        startButton.disabled = false;
        pauseButton.disabled = true;
        lapButton.disabled = true;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    startTime = 0;
    updatedTime = 0;
    display.innerHTML = '00:00:00';
    startButton.disabled = false;
    pauseButton.disabled = true;
    lapButton.disabled = true;
    laps.innerHTML = '';
    lapCounter = 1;
}

function lap() {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = `Lap ${lapCounter++}: ${display.textContent}`;
        laps.appendChild(lapTime);
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);
    display.innerHTML = `${(hours > 9 ? hours : "0" + hours)}:${(minutes > 9 ? minutes : "0" + minutes)}:${(seconds > 9 ? seconds : "0" + seconds)}`;
}
