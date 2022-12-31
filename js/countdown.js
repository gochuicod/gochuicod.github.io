const christmasCountdown = {
    months: [31,28,31,30,31,30,31,31,30,31,30,24],
    switch: true,
    
    start: function() {
        let totalMonthVal = 0, monthVal = 0;
        for(let i = 0; i < new Date().getMonth(); monthVal += christmasCountdown.months[i], i++);
        for(let j = 0; j < christmasCountdown.months.length; totalMonthVal += christmasCountdown.months[j], j++);
        
        let a = new Date();
        christmasCountdown.isLeapYear(a.getYear()) ? a.getDate()++ : a.getDate();
        if(!christmasCountdown.switch) $(".countDown").text(`${christmasCountdown.isLessThan(59-a.getSeconds(),59-a.getMinutes(),23-a.getHours(),(totalMonthVal - (monthVal + a.getDate())))}`);
        else $(".countDown").text(`${christmasCountdown.isLessThan(59-a.getSeconds(),59-a.getMinutes(),23-a.getHours(),(totalMonthVal))}`);
    },

    isLeapYear: year => { return year % 400 == 0 || year % 4 == 0 ? true : false },
        
    isLessThan: (seconds,minutes,hours,days) => {
        if(seconds < 10) seconds = `0${seconds}`;
        if(minutes < 10) minutes = `0${minutes}`;
        if(hours < 10) hours = `0${hours}`;
        if(days < 10) days = `0${days}`;
        return `${days}:${hours}:${minutes}:${seconds}`;
    },
        
    handleSwitch: function() {
        if(this.switch) {
            $(".countDownText").text("New Year");
            $(".countDownText").removeClass("link-warning").addClass("link-danger")
            this.months[this.months.length-1] = 31;
            this.switch = false;
        } else {
            $(".countDownText").text("Christmas");
            $(".countDownText").removeClass("link-danger").addClass("link-warning")
            this.months[this.months.length-1] = 24;
            this.switch = true;
        }
    }
}

setInterval(christmasCountdown.start,1000)