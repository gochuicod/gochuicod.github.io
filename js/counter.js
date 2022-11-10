let count = 0;

document.querySelector(".add").onclick = () => document.querySelector(".currentCount").innerText = ++count;
document.querySelector('.deduct').onclick = () => document.querySelector(".currentCount").innerText = --count;
document.querySelector('.reset').onclick = () => document.querySelector(".currentCount").innerText = count = 0;