const inputTitle = document.querySelector("#title"), allNotes = document.querySelector("#notes");
const todo = {
    allStorage: () => {
        let values = [], keys = Object.keys(localStorage), i = keys.length;
        while (i--) values.push(localStorage.getItem(keys[i])); // pushes key strings into values array
        for(let j = 0; j < values.length; todo.addLocalItem(values[j]), j++); // remembers and restores data unremoved
    },
    
    addLocalItem: value => {
        let outer_div = document.createElement("div"), toDo = document.createElement("span"), button_exit = document.createElement("button");
    
        outer_div.setAttribute('class','d-flex flex-row justify-content-between p-1 bg-white text-dark rounded-custom mb-2 border border-2 border-muted fs-small');
        outer_div.setAttribute('id',`${value}`);
        
        toDo.setAttribute('class','m-2');
        button_exit.setAttribute('class','btn fw-light fs-small me-2 text-dark');
        button_exit.setAttribute('onclick',`document.querySelector("#notes").removeChild(document.querySelector("#${value}")); localStorage.removeItem("${value}")`);
        
        toDo.innerText = value;
        button_exit.innerText = 'x';
        
        outer_div.append(toDo);
        outer_div.append(button_exit);
            
        allNotes.append(outer_div);
    },

    addItem: () => {
        if(inputTitle.value != ""){
            let outer_div = document.createElement("div"), toDo = document.createElement("span"), button_exit = document.createElement("button");
    
            // Setting outer div attributes
            outer_div.setAttribute('class',`${inputTitle.value} d-flex flex-row justify-content-between p-1 bg-white text-dark rounded-custom mb-2 border border-2 border-muted fs-small`);
    
            // Setting outer div children attributes
            toDo.setAttribute('class','m-2');
            button_exit.setAttribute('class','btn fw-light fs-small me-2 text-dark');
            button_exit.setAttribute('onclick',`document.querySelector("#notes").removeChild(document.querySelector("#${inputTitle.value}")); localStorage.removeItem("${inputTitle.value}")`);
    
            // Setting values
            toDo.innerText = inputTitle.value;
            button_exit.innerText = 'x';
    
            // Appending elements to div
            outer_div.append(toDo);
            outer_div.append(button_exit);
            
            localStorage.setItem(inputTitle.value,inputTitle.value);
    
            allNotes.append(outer_div); // Appending everything
    
            inputTitle.value = ""; // Resetting form values
        }
    },

    removeAllChildNodes: parent => {for(;parent.firstChild;){ parent.removeChild(parent.firstChild); localStorage.clear() }}, // This section clears the current list
}

window.onload = () => todo.allStorage();
inputTitle.addEventListener('keyup', e => {
    if(e.key === 'Enter') todo.addItem();
    if(e.key === "Escape") inputTitle.blur();
});