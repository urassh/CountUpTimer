"use strict";

{

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let minuteTime = document.getElementById('minute');
let secondTime = document.getElementById('second');

let nowTime = 0;
let timerId;

function handleTimer() {
    nowTime += 1;
    const minute = Math.floor(nowTime / 60);
    const second = nowTime -  (minute * 60);
    return [minute, second];
}

function startTimer() {
    timerId = setInterval(showTime, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}

function resetTimer() {
    stopTimer();
    nowTime = 0;
    minuteTime.textContent = "00";
    secondTime.textContent = "00";
}

function showTime() {
    const [minute, second] = handleTimer();
    
    if (minute < 10) {
        minuteTime.textContent = "0" + String(minute);
    } else {
        minuteTime.textContent = minute;
    }

    if (second < 10) {
        secondTime.textContent = "0" + String(second);
    } else {
        secondTime.textContent = second;
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

}
