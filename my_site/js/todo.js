let count = 0, inputTitle = document.querySelector("#title"), allNotes = document.querySelector("#notes");

window.onload = () => allStorage();

function allStorage() {
    let values = [], keys = Object.keys(localStorage), i = keys.length;

    // pushes key strings into values array
    while (i--) values.push(localStorage.getItem(keys[i]));

    // remembers and restores data unremoved
    for(let j = 0; j < values.length; addLocalItem(values[j]), j++);
}

function addLocalItem(value) {
    let title = value;
    let outer_div = document.createElement("div");
    let toDo = document.createElement("span");
    let button_exit = document.createElement("button");

    outer_div.setAttribute('class','d-flex flex-row justify-content-between p-1 bg-white text-dark rounded-custom mb-2 border border-2 border-muted fs-small');
    outer_div.setAttribute('id',`${value}`);
    
    toDo.setAttribute('class','m-2');
    button_exit.setAttribute('class','btn fw-light fs-small me-2 text-dark');
    button_exit.setAttribute('onclick',`document.getElementById("notes").removeChild(document.getElementById("${value}")); localStorage.removeItem("${value}")`);
    
    toDo.innerText = value;
    button_exit.innerText = 'x';
    
    outer_div.append(toDo);
    outer_div.append(button_exit);
        
    notes.append(outer_div);
}

function addItem() {
    // Declarations
    const notes = document.getElementById("notes");

    if(inputTitle.value != ""){
        let title = document.getElementById("title");
        let outer_div = document.createElement("div");
        let toDo = document.createElement("span");
        let button_exit = document.createElement("button");

        // Setting outer div attributes
        outer_div.setAttribute('class','d-flex flex-row justify-content-between p-1 bg-white text-dark rounded-custom mb-2 border border-2 border-muted fs-small');
        outer_div.setAttribute('id',`${title.value}`);

        // Setting outer div children attributes
        toDo.setAttribute('class','m-2');
        button_exit.setAttribute('class','btn fw-light fs-small me-2 text-dark');
        button_exit.setAttribute('onclick',`document.getElementById("notes").removeChild(document.getElementById("${title.value}")); localStorage.removeItem("${title.value}")`);

        // Setting values
        toDo.innerText = title.value;
        button_exit.innerText = 'x';

        // Appending elements to div
        outer_div.append(toDo);
        outer_div.append(button_exit);
        
        localStorage.setItem(`${title.value}`,`${title.value}`);

        // Appending everything
        notes.append(outer_div);
        count++;

        // Resetting form values
        title.value = "";
    }
}

// This section clears the current list
function removeAllChildNodes(parent){
    while(parent.firstChild) parent.removeChild(parent.firstChild);
    localStorage.clear();
}

inputTitle.addEventListener('keyup', function (e) {
    if(e.key === 'Enter') addItem();
    if(e.key === "Escape") inputTitle.blur();
});
