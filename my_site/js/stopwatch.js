// Stopwatch
let stopwatch_minutes = 0, stopwatch_seconds = 0, stopwatch_ms = 0;
let stopwatch_stopwatch;
function stopwatch_start() {
    stopwatch_stopwatch = setInterval(stopwatch_time, 12);
    document.getElementById("stopwatch-start").disabled = true;
}
function stopwatch_stop(){
    clearInterval(stopwatch_stopwatch);
    document.getElementById("stopwatch-start").disabled = false;
}
function stopwatch_reset(){
    clearInterval(stopwatch_stopwatch);
    stopwatch_minutes = 0; stopwatch_seconds = 0; stopwatch_ms = 0;
    document.getElementById("stopwatch-minute").innerText = `${stopwatch_minutes}m`;
    document.getElementById("stopwatch-second").innerText = `${stopwatch_seconds}s`;
    document.getElementById("stopwatch-millisecond").innerText = `${stopwatch_ms}`;
    document.getElementById("stopwatch-start").disabled = false;
}

function stopwatch_time(){
    if(stopwatch_minutes === 60){
        stopwatch_minutes = 0; stopwatch_seconds = 0;
    } else {
        if(stopwatch_ms !== 100){
            document.getElementById("stopwatch-minute").innerText = `${stopwatch_minutes}m`;
            document.getElementById("stopwatch-second").innerText = `${stopwatch_seconds}s`;
            document.getElementById("stopwatch-millisecond").innerText = `${stopwatch_ms}`;
            stopwatch_ms++;
        } else {
            if(stopwatch_seconds === 59){ stopwatch_minutes++; stopwatch_seconds = -1; }
            stopwatch_seconds++; stopwatch_ms = 0;
        }
    }
}
