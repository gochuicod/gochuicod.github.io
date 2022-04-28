let a = document.querySelector("#c-radius"), output = document.querySelector("#pc-output"), err = document.querySelector("#errorInfo");

window.onload = () => {
    output.style.display = "none";
}

function perimeterCircle() {
    let radius = parseFloat(a.value);
    let pc_output = 2 * Math.PI * radius;
    if(!isNaN(radius) || a.value !== ""){
        if(radius > 0){
            err.style.display = "none";
            output.style.display = "block";
            output.innerText = `${pc_output}`;
        } else {
            output.style.display = "block";
            output.innerText = "?";
            err.innerText = "Values must be positive!";
            err.style.display = "block";
        }
    } else {
        err.style.display = "none";
        output.style.display = "none";
    }
}

document.addEventListener('keyup', (e) => {
    if(a === document.activeElement) perimeterCircle();
});
