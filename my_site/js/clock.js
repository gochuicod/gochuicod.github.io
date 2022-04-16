window.onload = () => {
    setInterval(start,1000);
}

function start() {
    let date = new Date();
    let current_time = date.toLocaleTimeString();
    document.querySelector("#current-time").innerText = `${current_time}`;
}
