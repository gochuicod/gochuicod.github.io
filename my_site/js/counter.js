let count = 0;

document.getElementById("add").onclick = () => {
    count++;
    document.getElementById("currentCount").innerText = `${count}`;
}
document.getElementById('deduct').onclick = () => {
    count--;
    document.getElementById("currentCount").innerText = `${count}`;
}
document.getElementById('reset').onclick = () => {
    count = 0;
    document.getElementById("currentCount").innerText = `${count}`;
}
