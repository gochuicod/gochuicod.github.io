let timer_minutes = 0, timer_seconds = 0, timer_ms = 0, timer_timer;

let timer_start = () => {
    timer_timer = setInterval(timer_time, 10);
    document.getElementById("timer-start").disabled = true;
}

let timer_stop = () => {
    clearInterval(timer_timer);
    document.getElementById("timer-start").disabled = false;
}

let timer_reset = () => {
    clearInterval(timer_timer);
    timer_minutes = 0; timer_seconds = 0; timer_ms = 0;
    document.getElementById("timer-start").disabled = false;
    document.getElementById("timer-minute").innerText = `${timer_minutes}m`;
    document.getElementById("timer-second").innerText = `${timer_seconds}s`;
    document.getElementById("timer-millisecond").innerText = `${timer_ms}`;
}

let timer_time = () => {
    if(timer_minutes >= 0){
        if(timer_seconds >= 0){
            if(timer_ms >= 0){
                document.getElementById("timer-minute").innerText = `${timer_minutes}m`;
                document.getElementById("timer-second").innerText = `${timer_seconds}s`;
                document.getElementById("timer-millisecond").innerText = `${timer_ms}`;
                timer_ms--;
            } else { timer_ms = 100; timer_seconds--; }
        } else { timer_seconds = 59; timer_minutes--; }
    } else { timer_reset(); }
}

document.getElementById("timer-add1").onclick = () => { add_one(); }
document.getElementById("timer-add5").onclick = () => { add_five(); }
document.getElementById("timer-add5-seconds").onclick = () => { add_five_seconds(); }
let add_one = () => {
    if(timer_minutes > 59) timer_minutes = 0; timer_minutes++;
    document.getElementById("timer-minute").innerText = `${timer_minutes}m`;
    document.getElementById("timer-second").innerText = `${timer_seconds}s`;
    document.getElementById("timer-millisecond").innerText = `${timer_ms}`;
}

let add_five = () => {
    if(timer_minutes > 59) timer_minutes = 0; timer_minutes += 5;
    document.getElementById("timer-minute").innerText = `${timer_minutes}m`;
    document.getElementById("timer-second").innerText = `${timer_seconds}s`;
    document.getElementById("timer-millisecond").innerText = `${timer_ms}`;
}

let add_five_seconds = () => {
    if(timer_seconds > 59) { timer_minutes++; timer_seconds = 0; }
    if(timer_minutes > 59) timer_minutes = 0; 
    timer_seconds += 5;
    document.getElementById("timer-minute").innerText = `${timer_minutes}m`;
    document.getElementById("timer-second").innerText = `${timer_seconds}s`;
    document.getElementById("timer-millisecond").innerText = `${timer_ms}`;
}