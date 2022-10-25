let generateNumber = () => {
    document.querySelector(".max-num").value;
    const max_num = parseInt(document.querySelector(".max-num").value);
    let test = Math.floor(Math.random() * max_num);
    document.querySelector(".generated").innerText = `${test}`;
}