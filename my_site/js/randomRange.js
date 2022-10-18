let a = document.querySelector("#output");

function generateNumber() {
    let from = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value);
    if(from < to) {
        a.setAttribute("class","h1 mt-4 text-center");
        let test = Math.floor(Math.random() * (to - from + 1) + from);
        a.innerText = `${test}`;
    } else {
        a.setAttribute("class","h5 p-4 text-center");
        a.innerText = "First value must not be greater than second value";
    }
}
