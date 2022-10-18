let total_characters = -1, words = [];
let txtarea = document.querySelector(".txtarea");

function updateWord() {
    let lines = txtarea.value.split(/\s/), x = txtarea.value;

    for(let i = 0; i < lines.length; i++){ if(/\S/.test(lines[i])) words.push($.trim(lines[i])); }
    for(let j = 0; j < x.length; j++) total_characters++;

    document.querySelector(".words").innerText = words.length;
    document.querySelector(".characters").innerText = total_characters + 1;
    
    words.splice(0,words.length); // empties / resets the array length
    total_characters = -1; // reset total character length
}

txtarea.addEventListener("keyup", (e) => updateWord());
