const date = new Date();
const currentYear = date.getYear();
const currentMonth = date.getMonth();
let countDownNewYear = document.querySelector("#countdown-new-year");
let leapOrNot, monthVal = 0, totalMonthVal = 0, months = [31,28,31,30,31,30,31,31,30,31,30,31];

window.onload = () => {
    for(let i = 0; i < currentMonth; monthVal += months[i], i++);
    for(let j = 0; j < months.length; totalMonthVal += months[j], j++);
    setInterval(start,1000);
}

function isLeapYear(year) {
    if(year % 400 == 0 || year % 4 == 0) return true;
    else return false;
}

function start(){
    let a = new Date();
    let currentSeconds = 59 - a.getSeconds(), currentMinutes = 59 - a.getMinutes();
    let currentHours = 23 - a.getHours(), currentDate = a.getDate();
    if(isLeapYear(currentYear) == true) currentDate--;
    countDownNewYear.innerText = `${isLessThan(currentSeconds,currentMinutes,currentHours,(totalMonthVal - (monthVal + currentDate)))}`;
}

function isLessThan(seconds,minutes,hours,days) {
    if(seconds < 10) seconds = `0${seconds}`;
    if(minutes < 10) minutes = `0${minutes}`;
    if(hours < 10) hours = `0${hours}`;
    if(days < 10) days = `0${days}`;
    return `${days}:${hours}:${minutes}:${seconds}`;
}
