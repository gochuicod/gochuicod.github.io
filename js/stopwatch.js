const stopwatch = {
    init: null,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,

    initiate: function() { this.init = setInterval(this.start,10) },
    start: () => {
        $(".stopwatch-start").prop('disabled',true)
        if(stopwatch.milliseconds !== 100){
            $(".stopwatch-minute").text(`${stopwatch.minutes}m`)
            $(".stopwatch-second").text(`${stopwatch.seconds}s`)
            $(".stopwatch-millisecond").text(`${stopwatch.milliseconds++}`)
        } else {
            if(stopwatch.seconds === 59){ stopwatch.minutes++; stopwatch.seconds = -1; }
            stopwatch.seconds++; stopwatch.milliseconds = 0;
        }
    },
    stop: function() { clearInterval(this.init); $(".stopwatch-start").prop('disabled',false) },
    reset: () => {
        stopwatch.stop();
        stopwatch.minutes= 0; stopwatch.seconds = 0; stopwatch.milliseconds = 0;
        $(".stopwatch-minute").text(`${stopwatch.minutes}m`)
        $(".stopwatch-second").text(`${stopwatch.seconds}s`)
        $(".stopwatch-millisecond").text(stopwatch.milliseconds)
    }
}