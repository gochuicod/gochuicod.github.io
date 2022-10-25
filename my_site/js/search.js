let dropDown = document.querySelector(".searchItems"), searchBox = document.querySelector(".searchbox");
let exampleModal = document.querySelector(".exampleModal"), title = document.querySelector(".title");
let textarea = document.querySelector(".txtarea"), searchInterval, indexItem;
const pages = [
    {
        pageName: "home",
        pageLink: "index.html"
    },
    {
        pageName: "portfolio",
        pageLink: "pages/portfolio.html"
    },
    {
        pageName: "gallery",
        pageLink: "pages/gallery.html"
    },
    {
        pageName: "typing test",
        pageLink: "pages/typing_test.html"
    },
    {
        pageName: "release notes",
        pageLink: "pages/release_notes.html"
    }
];

let clearList = parent => {
    // clears entire dropdown
    while(parent.firstChild) parent.removeChild(parent.firstChild);
}

let createListItem = iteration => {
    // this creates a list and appends everything
    let a = document.createElement("a");
    a.setAttribute("class","dropdown-item py-1 link-primary fw-bold");
    a.setAttribute("href",`${pages[iteration].pageLink}`);
    a.innerText = `${pages[iteration].pageName.toLowerCase()}`;
    dropDown.append(a);
}

let listItems = () => {
    // this builds the entire dropdown when texts match
    clearList(dropDown);
    let tempArray = [], arrayForSBLength = [];
    for(let i = 0; i < pages.length; tempArray.push(pages[i].pageName), i++);
    for(let j = 0; j < tempArray.length; arrayForSBLength[j] = tempArray[j].substring(0,searchBox.value.length),j++);
    for(let k = 0; k < pages.length; k++){
        if(((searchBox.value).toLowerCase()).localeCompare(arrayForSBLength[k].toLowerCase()) == 0){
            createListItem(k); dropDown.style.display = "block";
        }
    }
    tempArray.splice(0,tempArray.length);
    arrayForSBLength.splice(0,arrayForSBLength.length);
}

searchBox.addEventListener('keydown', (e) => {
    // lists items every time user enters key
    if(e.key === "Enter") { e.preventDefault(); self.location = `${dropDown.firstChild.getAttribute("href")}`; }
});

document.addEventListener("click", (event) => {
    let isClickInsideElement = searchBox.contains(event.target);
    if(!isClickInsideElement){
        dropDown.style.display = "none";
        searchBox.setAttribute("class","form-control shadow-none border border-1 border-muted");
    } else searchBox.setAttribute("class","form-control shadow-none border border-1 border-muted rounded-0 rounded-top");
});

document.addEventListener("keyup", (e) => {
    if(e.ctrlKey && e.key.toLowerCase() === "y") self.location = `${pages[0].pageLink}`;
    if(e.key === "Escape" && searchBox === document.activeElement) {
        dropDown.style.display = "none";
        searchBox.blur();
        searchBox.setAttribute("class","form-control shadow-none border border-1 border-muted");
    }
    if(e.key === "?" && searchBox !== document.activeElement && exampleModal !== document.activeElement && textarea !== document.activeElement && title !== document.activeElement) $("#modalHelp").modal("show");
    if(e.key === "/"  && exampleModal !== document.activeElement && textarea !== document.activeElement && title !== document.activeElement){
        e.preventDefault(); searchBox.focus(); 
        searchBox.setAttribute("class","form-control shadow-none border border-1 border-muted rounded-0 rounded-top");
    }
    if(searchBox === document.activeElement) listItems();
});
