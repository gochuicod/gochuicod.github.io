let query = () => advice.search(), clearSearch = () => { search.value = ""; search.focus(); csb.style.display = "none"; };
let csb = document.querySelector(".clearSearchButton"), search = document.querySelector(".search");
let loader = document.querySelector(".loader");

let advice = {
    fetchAdviceData: function(query){
        fetch(
            `https://api.adviceslip.com/advice/search/${query}`
        ).then((response) => response.json()).then((data) => this.displayAdviceData(data));
    },
    displayAdviceData: function(data){
        this.removeAllChildNodes(document.querySelector(".adviceField"));
        for(let i = 0; i < data.slips.length; this.addAdvice(i), i++);

        let adviceDataNodes = [];

        for(let i = 0; i < data.slips.length; i++){
            adviceDataNodes.push({
                desc: data.slips[i].advice,
                date: data.slips[i].date
            });
        }

        adviceDataNodes.forEach((element,index,array) => {
            document.querySelector(`.adviceDesc${index}`).innerText = `"${element.desc}"`;
            document.querySelector(`.adviceDate${index}`).innerText = `Date: ${element.date}`;
        });
        loader.style.display = "none";
        document.querySelector(".adviceField").style.display = "block";
    },
    search: () => {
        this.fetchAdviceData(search.value);
        document.querySelector(".adviceField").style.display = "none";
        loader.style.display = "block";
    },
    removeAllChildNodes: parent => { while(parent.firstChild) parent.removeChild(parent.firstChild); },
    addAdvice: index => {
        let adviceField = document.querySelector(".adviceField");

        let outerDiv = document.createElement("div");
        outerDiv.setAttribute('class',`advice${index} rounded-custom shadow p-4 mb-4 text-center`);

        let innerDiv1 = document.createElement("div");
        innerDiv1.setAttribute('class','d-flex flex-row justify-content-center');
        let innerDiv1Span = document.createElement("span");
        innerDiv1Span.setAttribute('class',`adviceDesc${index} fst-italic`);
        innerDiv1.append(innerDiv1Span);

        let innerDiv2 = document.createElement("div");
        innerDiv2.setAttribute('class','d-flex flex-row justify-content-center');
        let innerDiv2Span = document.createElement("span");
        innerDiv2Span.setAttribute('class',`adviceDate${index} fw-lighter fs-8`);
        innerDiv2.append(innerDiv2Span);

        outerDiv.append(innerDiv1);
        outerDiv.append(innerDiv2);
        adviceField.append(outerDiv);
    }
}

search.addEventListener("keyup", e => advice.search());
document.addEventListener("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(search.value.length > 0) csb.style.display = "block";
    if(search.value.length == 0) csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) search.blur();
});

advice.fetchAdviceData("good");
csb.style.display = "none";
