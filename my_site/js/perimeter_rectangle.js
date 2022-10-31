const a = document.querySelector(".pr-length"), b = document.querySelector(".pr-width"), output = document.querySelector(".pr-output"), err = document.querySelector(".errorInfo");
const perimeterRectangle = () => {
    let length = parseFloat(a.value), width = parseFloat(b.value);
    let pr_output = 2 * (length + width);
    if((!isNaN(length)) && (!isNaN(width))){
        if(length > 0 && width > 0){
            err.style.display = "none";
            output.style.display = "block";
            output.innerText = `${pr_output}`;
        } else {
            output.style.display = "block";
            output.innerText = "?";
            err.style.display = "block";
            err.innerText = "Values must be positive!";
        }
    } else {
        output.style.display = "none";
        err.style.display = "none";
    }
}

window.onload = () => output.style.display = "none";
document.addEventListener('keyup', () => a === document.activeElement || b === document.activeElement ? perimeterRectangle() : false);