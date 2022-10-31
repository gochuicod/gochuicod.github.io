let init, initiate = () => init = setInterval(stopwatch.start,10);
const stopwatch = {
    stopwatchMinute: document.querySelector(".stopwatch-minute"),
    stopwatchSecond: document.querySelector(".stopwatch-second"),
    stopwatchMillisecond: document.querySelector(".stopwatch-millisecond"),
    stopwatchStart: document.querySelector(".stopwatch-start"),
    stopwatchStop: document.querySelector(".stopwatch-stop"),
    stopwatchReset: document.querySelector(".stopwatch-reset"),
    minutes: 0,
    seconds: 0,
    milliseconds: 0,

    start: () => {
        stopwatch.stopwatchStart.disabled = true;
        if(stopwatch.milliseconds !== 100){
            stopwatch.stopwatchMinute.innerText = `${stopwatch.minutes}m`;
            stopwatch.stopwatchSecond.innerText = `${stopwatch.seconds}s`;
            stopwatch.stopwatchMillisecond.innerText = `${stopwatch.milliseconds++}`;
        } else {
            if(stopwatch.seconds === 59){ stopwatch.minutes++; stopwatch.seconds = -1; }
            stopwatch.seconds++; stopwatch.milliseconds = 0;
        }
    },
    
    stop: () => { clearInterval(init); stopwatch.stopwatchStart.disabled = false; },
    reset: () => {
        stopwatch.stop();
        stopwatch.stopwatchStart.disabled = false;
        stopwatch.minutes= 0; stopwatch.seconds = 0; stopwatch.milliseconds = 0;
        stopwatch.stopwatchMinute.innerText = `${stopwatch.minutes}m`;
        stopwatch.stopwatchSecond.innerText = `${stopwatch.seconds}s`;
        stopwatch.stopwatchMillisecond.innerText = `${stopwatch.milliseconds}`;
    }
}