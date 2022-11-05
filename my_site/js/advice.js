const search = document.querySelector(".search");
const advice = {
    adviceField: document.querySelector(".adviceField"),
    invalidSearch: document.querySelector(".invalidSearch"),
    csb: document.querySelector(".clearSearchButton"),
    loader: document.querySelector(".loader"),
    fetchAdviceData: async function(query){
        const sample = await fetch(`https://api.adviceslip.com/advice/search/${query}`)
        const data = await sample.json()
        if(data.message){
            this.invalidSearch.innerText = data.message.text;
            this.invalidSearch.removeAttribute("hidden");
            this.loader.style.display = "none";
        } else {
            this.invalidSearch.setAttribute("hidden","hidden");
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
            this.loader.style.display = "none";
            this.adviceField.style.display = "block";
        }
    },
    search: function() {
        if(search.value !== ""){
            this.fetchAdviceData(search.value);
            this.adviceField.style.display = "none";
            this.loader.style.display = "block";
        }
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
    },
    clearSearch: function() { search.value = ""; search.focus(); this.csb.style.display = "none"; }
}

search.addEventListener("keyup", e => e.key === "Enter" ? advice.search() : false);
document.addEventListener("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(search.value.length > 0) advice.csb.style.display = "block";
    if(search.value.length == 0) advice.csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) search.blur();
});

advice.fetchAdviceData("good");
advice.csb.style.display = "none";