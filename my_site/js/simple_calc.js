let txtArea = [], temp = [], output = document.querySelector("#txtArea");
output.disabled = true;

function one() { txtArea.push("1"); updateTextArea(); }
function two() { txtArea.push("2"); updateTextArea(); }
function three() { txtArea.push("3"); updateTextArea(); }
function divide() { txtArea.push("/"); updateTextArea(); }

function four() { txtArea.push("4"); updateTextArea(); }
function five() { txtArea.push("5"); updateTextArea(); }
function six() { txtArea.push("6"); updateTextArea(); }
function plus() { txtArea.push("+"); updateTextArea(); }

function seven() { txtArea.push("7"); updateTextArea(); }
function eight() { txtArea.push("8"); updateTextArea(); }
function nine() { txtArea.push("9"); updateTextArea(); }
function minus() { txtArea.push("-"); updateTextArea(); }

function back() { txtArea.pop(); updateTextArea(); }

function clearArea() { txtArea.splice(0,txtArea.length); updateTextArea(); }
function zero() { txtArea.push("0"); updateTextArea(); }
function times() { txtArea.push("*"); updateTextArea(); }
function power() { txtArea.push("**"); updateTextArea(); }

function equals() { output.value = `${evaluate(txtArea.join(""))}`; }
function updateTextArea() { output.value = `${txtArea.join("")}`; }
function evaluate(fn) { return new Function('return ' + fn)(); }

document.addEventListener("keydown", (e) => {
    if(e.key === "Backspace") back(); if(e.key === "Enter") equals();
    if(e.key === "c") clearArea(); if(e.key === "/") divide();
    if(e.key === "+") plus(); if(e.key === "-") minus();
    if(e.key === "*" || e.key === "x") times(); if(e.key === "^") power();
    if(e.key === "1") one(); if(e.key === "0") zero();
    if(e.key === "2") two(); if(e.key === "3") three();
    if(e.key === "4") four(); if(e.key === "5") five();
    if(e.key === "6") six(); if(e.key === "7") seven();
    if(e.key === "8") eight(); if(e.key === "9") nine();
});
