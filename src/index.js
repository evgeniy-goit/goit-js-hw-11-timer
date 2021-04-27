import './style.css';

const daysRef = document.querySelector('span[data-value = days]');
const hoursRef = document.querySelector('span[data-value = hours]');
const minsRef = document.querySelector('span[data-value = mins]');
const secsRef = document.querySelector('span[data-value = secs]');


class CountdownTimer {
constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
}

start(newTimer) {
    let intervalId = null;
    
    intervalId = setInterval(() => {
    const startTime = this.targetDate;
    const currentTime = Date.now();
    const time = startTime - currentTime;
    newTimer(time);
    }, 1000);
}
}

const startTime = new Date('May 10, 2021');
const timer = new CountdownTimer('#timer1', startTime);

timer.start(updateValues);

function updateValues(time) {
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

updateClockFace(days, hours, mins, secs);
}

function pad(value) {
return String(value).padStart(2, '0');
}

function updateClockFace(days, hours, mins, secs) {
daysRef.textContent = days;
hoursRef.textContent = hours;
minsRef.textContent = mins;
secsRef.textContent = secs;
} 




