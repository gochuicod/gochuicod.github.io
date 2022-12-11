const start = () => {
    let current_time = new Date().toLocaleTimeString();
    $("#current-time").text(`${current_time}`);
}

window.onload = () => setInterval(start,1000);