let choices = ["Rock","Paper","Scissors"];

let rock = () => {
    document.querySelector(".player").innerText = `Rock`;
    document.querySelector(".computer").innerText = `${choices[Math.floor(Math.random()*3)]}`;
}
let paper = () => {
    document.querySelector(".player").innerText = `Paper`;
    document.querySelector(".computer").innerText = `${choices[Math.floor(Math.random()*3)]}`;
}
let scissors = () => {
    document.querySelector(".player").innerText = `Scissors`;
    document.querySelector(".computer").innerText = `${choices[Math.floor(Math.random()*3)]}`;
}