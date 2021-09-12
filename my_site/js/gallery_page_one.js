let count=0;function addItem(){const notes=document.getElementById("notes"); let title=document.getElementById("title"); let outer_div=document.createElement("div"); let toDo=document.createElement("span"); let button_exit=document.createElement("button"); outer_div.setAttribute('class','d-flex flex-row justify-content-between p-3 dark-mode-color-2 dark-mode-bg-2 rounded-custom mb-2 shadow-sm'); outer_div.setAttribute('id',`${count}`); toDo.setAttribute('class','lead m-1'); button_exit.setAttribute('class','btn fw-light h5 me-1 text-light'); button_exit.setAttribute('onclick',`document.getElementById("notes").removeChild(document.getElementById("${count}"))`); toDo.innerText=title.value; button_exit.innerText='x'; outer_div.append(toDo); outer_div.append(button_exit); notes.append(outer_div); count++; title.value="";}function removeAllChildNodes(parent){while(parent.firstChild){parent.removeChild(parent.firstChild);}}function clearList(){const flex_div=document.querySelector("#notes"); removeAllChildNodes(flex_div); count=0;}document.querySelector('#title').addEventListener('keypress', function (e){if(e.key==='Enter') addItem();});
