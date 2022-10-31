let init, initiate = () => init = setInterval(timer.start,10)

let timer = {
    timerMinute: document.querySelector(".timer-minute"),
    timerSecond: document.querySelector(".timer-second"),
    timerMillisecond: document.querySelector(".timer-millisecond"),
    timerStart: document.querySelector(".timer-start"),
    timerStop: document.querySelector(".timer-stop"),
    timerReset: document.querySelector(".timer-reset"),
    minutes: 0,
    seconds: 0,
    milliseconds: 100,
    disableToggle: true,
    
    start: () => {
        timer.timerStart.disabled = true;
        if(timer.minutes >= 0){
            if(timer.seconds >= 0){
                if(timer.milliseconds >= 0){
                    timer.timerMinute.innerText = `${timer.minutes}m`;
                    timer.timerSecond.innerText = `${timer.seconds}s`;
                    timer.timerMillisecond.innerText = `${timer.milliseconds--}`;
                } else { timer.milliseconds = 100; timer.seconds--; }
            } else { timer.seconds = 59; timer.minutes--; }
        } else { timer.reset(); }
    },

    stop: () => { clearInterval(init); timer.timerStart.disabled = false; },
    reset: () => {
        timer.stop();
        timer.minutes = 0; timer.seconds = 0, timer.milliseconds = 0;
        timer.timerMinute.innerText = `${timer.minutes}m`;
        timer.timerSecond.innerText = `${timer.seconds}s`;
        timer.timerMillisecond.innerText = timer.milliseconds;
    },

    handleAddOneMinute: () => timer.timerMinute.innerText = `${++timer.minutes}m`,
    handleAddFiveMinutes: () => timer.timerMinute.innerText = `${timer.minutes+=5}m`,
    handleAddFiveSeconds: () => {
        if(timer.seconds > 58) {
            timer.seconds = 0;
            timer.minutes++;
            timer.timerSecond.innerText = `${timer.seconds}s`;
            timer.timerMinute.innerText = `${timer.minutes}m`;
        }
        timer.timerSecond.innerText = `${timer.seconds+=5}s`;
    },
}