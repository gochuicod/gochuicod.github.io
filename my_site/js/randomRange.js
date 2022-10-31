const a = document.querySelector(".output");
const generateNumber = () => {
    let from = parseInt(document.querySelector(".from").value);
    let to = parseInt(document.querySelector(".to").value);
    if(from < to) {
        a.setAttribute("class","h1 mt-4 text-center");
        a.innerText = `${Math.floor(Math.random() * (to-from+1) + from)}`;
    } else {
        a.setAttribute("class","h5 p-4 text-center");
        a.innerText = "First value must not be greater than second value";
    }
}