const start = () => {
    let date = new Date();
    let current_time = date.toLocaleTimeString();
    document.querySelector("#current-time").innerText = `${current_time}`;
}

window.onload = () => {
    setInterval(start,1000);
}