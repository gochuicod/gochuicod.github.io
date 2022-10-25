let txtArea = [], temp = [], output = document.querySelector("#txtArea");
output.disabled = true;

let equals = () => output.value = `${evaluate(txtArea.join(""))}`;
let updateTextArea = () => output.value = `${txtArea.join("")}`;
let evaluate = fn => { return new Function('return ' + fn)(); }
let clearArea = () => { txtArea.splice(0,txtArea.length); updateTextArea(); }

document.addEventListener("keydown", (e) => {
    if(e.key === "Backspace") { txtArea.pop(); updateTextArea() }
    if(e.key === "Enter") equals()
    if(e.key === "c") clearArea()
    if(e.key === "/") { txtArea.push('/'); updateTextArea() }
    if(e.key === "+") { txtArea.push('+'); updateTextArea() }
    if(e.key === "-") { txtArea.push('-'); updateTextArea() }
    if(e.key === "*" || e.key === "x") { txtArea.push('*'); updateTextArea() }
    if(e.key === "^") { txtArea.push('**'); updateTextArea() }
    if(e.key === "0") { txtArea.push('0'); updateTextArea() }
    if(e.key === "1") { txtArea.push('1'); updateTextArea()}
    if(e.key === "2") { txtArea.push('2'); updateTextArea()}
    if(e.key === "3") { txtArea.push('3'); updateTextArea()}
    if(e.key === "4") { txtArea.push('4'); updateTextArea()}
    if(e.key === "5") { txtArea.push('5'); updateTextArea()}
    if(e.key === "6") { txtArea.push('6'); updateTextArea()}
    if(e.key === "7") { txtArea.push('7'); updateTextArea()}
    if(e.key === "8") { txtArea.push('8'); updateTextArea()}
    if(e.key === "9") { txtArea.push('9'); updateTextArea()}
});
