window.onload = () => setInterval(christmasCountdown.start,1000);

let christmasCountdown = {
    countDown: document.querySelector(".countDown"),
    countDownText: document.querySelector(".countDownText"),
    monthVal: 0,
    totalMonthVal: 0,
    switch: true,
    months: [31,28,31,30,31,30,31,31,30,31,30,25],
    
    isLeapYear: year => { return year % 400 == 0 || year % 4 == 0 ? true : false },
    
    start: () => {
        christmasCountdown.totalMonthVal = 0; christmasCountdown.monthVal = 0;
        for(let i = 0; i < new Date().getMonth(); christmasCountdown.monthVal += christmasCountdown.months[i], i++);
        for(let j = 0; j < christmasCountdown.months.length; christmasCountdown.totalMonthVal += christmasCountdown.months[j], j++);
        
        let a = new Date();
        christmasCountdown.isLeapYear(a.getYear()) ? a.getDate()++ : a.getDate();
        christmasCountdown.countDown.innerText = `${christmasCountdown.isLessThan(59-a.getSeconds(),59-a.getMinutes(),23-a.getHours(),
            (christmasCountdown.totalMonthVal - (christmasCountdown.monthVal + a.getDate())))}`;
    },
        
    isLessThan: (seconds,minutes,hours,days) => {
        if(seconds < 10) seconds = `0${seconds}`;
        if(minutes < 10) minutes = `0${minutes}`;
        if(hours < 10) hours = `0${hours}`;
        if(days < 10) days = `0${days}`;
        return `${days}:${hours}:${minutes}:${seconds}`;
    },
        
    handleSwitch: () => {
        if(christmasCountdown.switch) {
            christmasCountdown.countDownText.innerText = "New Year"
            christmasCountdown.countDownText.setAttribute("class","countDownText link-danger hover-pointer text-decoration-none");
            christmasCountdown.months[christmasCountdown.months.length-1] = 31;
            christmasCountdown.switch = false;
        } else {
            christmasCountdown.countDownText.innerText = "Christmas"
            christmasCountdown.countDownText.setAttribute("class","countDownText link-warning hover-pointer text-decoration-none");
            christmasCountdown.months[christmasCountdown.months.length-1] = 25;
            christmasCountdown.switch = true;
        }
    }
}