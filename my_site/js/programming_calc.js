let binary = document.querySelector(".binary");
let octal = document.querySelector(".octal");
let hex = document.querySelector(".hex");
let input = document.querySelector(".convert");
let max = document.querySelector(".max");
const hexCharacters = {a: "A", b: "B", c: "C", d: "D", e: "E", f: "F"}

function convert(){
    let val = parseInt(input.value);
    if(val > 4095) max.innerText = `Only accepts 12-bit values!`;
    else {
        max.innerText = ``;
        binary.innerText = `Binary: ${DecimalToBinary(val)}`;
        octal.innerText = `Octal: ${DecimalToOctal(val)}`;
        hex.innerText = `Hex: ${DecimalToHex(val)}`;
    }
}
function DecimalToBinary(input){
    let empty = [];
    for(let i = input, j = 0; i != 0; i /= 2, j++){
        if(i < 1) break;
        if(j % 4 == 0) empty.push(' ');
        if(Math.floor(i % 2) == 0) empty.push("0");
        else empty.push("1");
    }
    return empty.reverse().join('');
}
function DecimalToOctal(input){
    let empty = [];
    for(let i = input; i != 0; i /= 8){
        if(i < 1) break;
        empty.push(Math.floor(i%8));
    }
    return empty.reverse().join('')
}
function DecimalToHex(input){
    let empty = [];
    for(let i = input; i != 0; i /= 16){
        if(i < 1) break;
        empty.push(Math.floor(i%16));
    }
    for(let j = 0; j < empty.length; j++){
        if(empty[j] == 15) empty[j] = hexCharacters.f;
        if(empty[j] == 14) empty[j] = hexCharacters.e;
        if(empty[j] == 13) empty[j] = hexCharacters.d;
        if(empty[j] == 12) empty[j] = hexCharacters.c;
        if(empty[j] == 11) empty[j] = hexCharacters.b;
        if(empty[j] == 10) empty[j] = hexCharacters.a;
    }
    return empty.reverse().join('');
}

// Prevents enter key to freeze the entire page
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
