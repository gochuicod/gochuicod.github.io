function start(){let date=new Date(); let current_time=date.toLocaleTimeString(); document.getElementById('current-time').innerText=`${current_time}`; setTimeout(start, 1000);}
