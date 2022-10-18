function generateNumber() {
    document.getElementById("max-num").value;
    const max_num = parseInt(document.getElementById("max-num").value);
    let test = Math.floor(Math.random() * max_num);
    document.getElementById("generated").innerText = `${test}`;
}
