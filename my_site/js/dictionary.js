let query = () => news.search(), clearSearch = () => { search.value = ""; search.focus(); csb.style.display = "none"; };
let csb = document.querySelector(".clearSearchButton"), search = document.querySelector(".search");
let loader = document.querySelector(".loader");

let dictionary = {
    fetchDictionaryData: function(word){
        fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        ).then((response) => response.json()).then((data) => this.displayDictionaryData(data));
    },
    displayDictionaryData: function(data){
        let dWord = document.querySelector(".dictionaryWord"), dWordPhonetic = document.querySelector(".dictionaryWordPhonetic");
        let dPOSNoun = document.querySelector(".dictionaryPOSNoun"), dPOSNounMeaning = document.querySelector(".dictionaryPOSNounMeaning");
        let dPOSNounExample = document.querySelector(".dictionaryPOSNounExample"), dPOSVerb = document.querySelector(".dictionaryPOSVerb");
        let dPOSVerbMeaning = document.querySelector(".dictionaryPOSVerbMeaning"), dPOSVerbExample = document.querySelector(".dictionaryPOSVerbExample");
        let dPOSAdj = document.querySelector(".dictionaryPOSAdj"), dPOSAdjMeaning = document.querySelector(".dictionaryPOSAdjMeaning");
        let dPOSAdjExample = document.querySelector(".dictionaryPOSAdjExample"), dSource = document.querySelector(".dictionarySource");
        let dWarning = document.querySelector(".dictionaryWarning");
        
        if(data.title){
            dWarning.style.display = "block";
            dWarning.innerText = data.title; dWord.style.display = "none";
            dWordPhonetic.style.display = "none"; dPOSNoun.style.display = "none";
            dPOSNounMeaning.style.display = "none"; dPOSVerb.style.display = "none";
            dPOSVerbMeaning.style.display = "none"; dPOSVerbExample.style.display = "none";
            dPOSAdj.style.display = "none"; dPOSAdjMeaning.style.display = "none";
            dPOSAdjExample.style.display = "none"; dSource.style.display = "none";
        } else {
            dWarning.style.display = "none";
            dPOSNoun.style.display = "block"; dPOSNounMeaning.style.display = "block";
            dPOSVerb.style.display = "block"; dPOSVerbMeaning.style.display = "block"; 
            dPOSAdj.style.display = "block"; dPOSAdjMeaning.style.display = "block";
            dSource.style.display = "block";

            dWord.innerText = data[0].word; dWord.style.display = "block";
            if(data[0].phonetic == undefined) document.querySelector(".dictionaryWordPhonetic").style.display = "none";
            else {
                dWordPhonetic.style.display = "block";
                dWordPhonetic.innerText = `( ${data[0].phonetic} )`;
            }
            dPOSNoun.innerText = `${data[0].meanings[0].partOfSpeech}`;
            dPOSNounMeaning.innerText = `- ${data[0].meanings[0].definitions[0].definition}`;
            if(data[0].meanings[0].definitions[0].example == undefined) dPOSNounExample.style.display = "none";
            else {
                dPOSNounExample.style.display = "block";
                dPOSNounExample.innerText = `"${data[0].meanings[0].definitions[0].example}"`;
            }
            if(data[0].meanings.length > 1){
                dPOSVerb.style.display = "block"; dPOSVerbMeaning.style.display = "block";
                dPOSVerb.innerText = `${data[0].meanings[1].partOfSpeech}`; dPOSVerbMeaning.innerText = `- ${data[0].meanings[1].definitions[0].definition}`;
                if(data[0].meanings[1].definitions[0].example == undefined) dPOSVerbExample.style.display = "none";
                else {
                    dPOSVerbExample.style.display = "block"; dPOSVerbExample.innerText = `"${data[0].meanings[1].definitions[0].example}"`;
                }
            } else {
                dPOSVerb.style.display = "none"; dPOSVerbMeaning.style.display = "none"; dPOSVerbExample.style.display = "none";
            }

            if(data[0].meanings.length > 2){
                dPOSAdj.style.display = "block"; dPOSAdjMeaning.style.display = "block";
                dPOSAdj.innerText = `${data[0].meanings[2].partOfSpeech}`; dPOSAdjMeaning.innerText = `- ${data[0].meanings[2].definitions[0].definition}`;
                if(data[0].meanings[2].definitions[0].example == undefined) document.querySelector(".dictionaryPOSAdjExample").style.display = "none";
                else {
                    dPOSAdjExample.style.display = "block"; dPOSAdjExample.innerText = `"${data[0].meanings[2].definitions[0].example}"`;
                }
            } else {
                dPOSAdj.style.display = "none"; dPOSAdjMeaning.style.display = "none"; dPOSAdjExample.style.display = "none";
            }
            dSource.innerText = "Source"; dSource.href = `${data[0].sourceUrls[0]}`;
        }
        loader.style.display = "none";
        document.querySelector(".dictionaryField").style.display = "block";
    },
    search: function() {
        this.fetchDictionaryData(search.value);
        document.querySelector(".dictionaryField").style.display = "none";
        loader.style.display = "block";
    },
    removeAllChildNodes: (parent) => { while(parent.firstChild) parent.removeChild(parent.firstChild); }
}

search.addEventListener("keyup", (e) => { let x = e.key === "Enter" ? dictionary.search() : ""; });
document.addEventListener("keyup", (e) => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(search.value.length > 0) csb.style.display = "block";
    if(search.value.length == 0) csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) search.blur();
});

dictionary.fetchDictionaryData("dictionary");
csb.style.display = "none";
