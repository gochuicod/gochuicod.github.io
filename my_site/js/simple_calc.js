const textArea = {
    equation: [],
    output: document.querySelector(".txtArea"),
    append: character => { textArea.equation.push(character); textArea.updateTextArea(); },
    equals: () => textArea.output.value = `${textArea.evaluate(textArea.equation.join(""))}`,
    updateTextArea: () => textArea.output.value = `${textArea.equation.join("")}`,
    evaluate: fn => { return new Function('return ' + fn)(); },
    clearArea: () => { textArea.equation.splice(0,textArea.equation.length); textArea.updateTextArea(); }
}

document.addEventListener("keydown", e => {
    if(e.key === "Backspace") { textArea.equation.pop(); textArea.updateTextArea(); }
    if(e.key == "Enter") textArea.equals()
    if(e.key === "c") textArea.clearArea()
    if(e.key === "/") textArea.append('/')
    if(e.key === "+") textArea.append('+')
    if(e.key === "-") textArea.append('-')
    if(e.key === "*" || e.key === "x") textArea.append('*')
    if(e.key === "^") textArea.append('**')
    if(e.key === "0") textArea.append('0')
    if(e.key === "1") textArea.append('1')
    if(e.key === "2") textArea.append('2')
    if(e.key === "3") textArea.append('3')
    if(e.key === "4") textArea.append('4')
    if(e.key === "5") textArea.append('5')
    if(e.key === "6") textArea.append('6')
    if(e.key === "7") textArea.append('7')
    if(e.key === "8") textArea.append('8')
    if(e.key === "9") textArea.append('9')
});