const timer = {
    init: null,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,

    initiate: function() { this.init = setInterval(this.start,10) },
    
    start: () => {
        timer.disableToggle('timer-start',true)
        if(timer.minutes >= 0){
            if(timer.seconds >= 0){
                if(timer.milliseconds >= 0){
                    $(".timer-minute").text(`${timer.minutes}m`)
                    $(".timer-second").text(`${timer.seconds}s`)
                    $(".timer-millisecond").text(`${timer.milliseconds--}`)
                } else { timer.milliseconds = 100; timer.seconds--; }
            } else { timer.seconds = 59; timer.minutes--; }
        } else { timer.reset(); }
    },

    stop: function() {
        clearInterval(this.init)
        timer.disableToggle('timer-start',false)
    },
    reset: () => {
        timer.stop();
        timer.minutes = 0; timer.seconds = 0; timer.milliseconds = 0;
        $(".timer-minute").text(`${timer.minutes}m`)
        $(".timer-second").text(`${timer.seconds}s`)
        $(".timer-millisecond").text(timer.milliseconds)
    },

    handleAddOneMinute: () => $(".timer-minute").text(`${++timer.minutes}m`),
    handleAddFiveMinutes: () => {
        timer.minutes+=5
        $(".timer-minute").text(`${timer.minutes}m`)
    },
    handleAddFiveSeconds: () => {
        if(timer.seconds > 58) {
            timer.seconds = 0;
            timer.minutes++;
            $(".timer-second").text(`${timer.seconds}s`)
            $(".timer-minute").text(`${timer.minutes}m`)
        }
        timer.seconds+=5;
        $(".timer-second").text(`${timer.seconds}s`)
    },
    disableToggle: (element,value) => $(`.${element}`).prop('disabled',value)
}