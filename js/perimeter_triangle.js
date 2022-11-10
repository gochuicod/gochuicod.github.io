let a = document.querySelector(".sidea"), b = document.querySelector(".sideb"), c = document.querySelector(".base"), output = document.querySelector(".pt-output"), err = document.querySelector(".errorInfo");
let perimeterTriangle = () => {
    let sideA = parseFloat(a.value), sideB = parseFloat(b.value), base = parseFloat(c.value);
    if((isNaN(sideA) || a.value == "") || (isNaN(sideB) || b.value == "") || (isNaN(base) || c.value == "")){
        hideOutput(); hideError();
    } else {
        if(sideA.toFixed(2) < 0.01 || sideB.toFixed(2) < 0.01 || base.toFixed(2) < 0.01){
            showOutput("?"); showError(); err.innerText = "Values must be positive!";
        } else {
            let pt_output = sideA + base + sideB;
            if((sideA + base) > sideB && (base + sideB) > sideA && (sideA + sideB) > base) showOutput(pt_output);
            else {
                showOutput("?");
                if((sideA + base) <= sideB){
                    showError(); err.innerText = "Side A plus Base must be greater than Side B";
                }
                if((base + sideB) <= sideA){
                    showError(); err.innerText = "Base plus Side B must be greater than Side A";
                }
                if((sideA + sideB) <= base){
                    showError(); err.innerText = "Side A plus Side B must be greater than Base";
                }
            }
        }
    }
}

let showError = () => err.style.display = "block";
let hideError = () => err.style.display = "none";
let showOutput = item => { 
    hideError();
    output.style.display = "block";
    output.innerText = `${item}`;
}
let hideOutput = () => output.style.display = "none";

window.onload = () => output.style.display = "none";
document.addEventListener('keyup', () => a === document.activeElement || b === document.activeElement || c === document.activeElement ? perimeterTriangle() : false);