let choices = ["Rock","Paper","Scissors"];

function rock() {
    let choice = Math.floor(Math.random() * 3);
    document.getElementById("player").innerText = `Rock`;
    document.getElementById("computer").innerText = `${choices[choice]}`;
}
function paper() {
    let choice = Math.floor(Math.random() * 3);
    document.getElementById("player").innerText = `Paper`;
    document.getElementById("computer").innerText = `${choices[choice]}`;
}
function scissors() {
    let choice = Math.floor(Math.random() * 3);
    document.getElementById("player").innerText = `Scissors`;
    document.getElementById("computer").innerText = `${choices[choice]}`;
}
