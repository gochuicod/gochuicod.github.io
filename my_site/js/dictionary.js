const search = document.querySelector(".search");
const dictionary = {
    dWord: document.querySelector(".dictionaryWord"),
    dWordPhonetic: document.querySelector(".dictionaryWordPhonetic"),
    dPOSNoun: document.querySelector(".dictionaryPOSNoun"),
    dPOSNounMeaning: document.querySelector(".dictionaryPOSNounMeaning"),
    dPOSNounExample: document.querySelector(".dictionaryPOSNounExample"),
    dPOSVerb: document.querySelector(".dictionaryPOSVerb"),
    dPOSVerbMeaning: document.querySelector(".dictionaryPOSVerbMeaning"),
    dPOSVerbExample: document.querySelector(".dictionaryPOSVerbExample"),
    dPOSAdj: document.querySelector(".dictionaryPOSAdj"),
    dPOSAdjMeaning: document.querySelector(".dictionaryPOSAdjMeaning"),
    dPOSAdjExample: document.querySelector(".dictionaryPOSAdjExample"),
    dSource: document.querySelector(".dictionarySource"),
    dWarning: document.querySelector(".dictionaryWarning"),
    dictionaryField: document.querySelector(".dictionaryField"),
    csb: document.querySelector(".clearSearchButton"),
    loader: document.querySelector(".loader"),
    fetchDictionaryData: function(word){
        fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        ).then((response) => response.json()).then((data) => this.displayDictionaryData(data));
    },
    displayDictionaryData: function(data){
        if(data.title){
            this.dWarning.style.display = "block";
            this.dWarning.innerText = data.title; this.dWord.style.display = "none";
            this.dWordPhonetic.style.display = "none"; this.dPOSNoun.style.display = "none";
            this.dPOSNounMeaning.style.display = "none"; this.dPOSVerb.style.display = "none";
            this.dPOSVerbMeaning.style.display = "none"; this.dPOSVerbExample.style.display = "none";
            this.dPOSAdj.style.display = "none"; this.dPOSAdjMeaning.style.display = "none";
            this.dPOSAdjExample.style.display = "none"; this.dSource.style.display = "none";
        } else {
            this.dWarning.style.display = "none";
            this.dPOSNoun.style.display = "block"; this.dPOSNounMeaning.style.display = "block";
            this.dPOSVerb.style.display = "block"; this.dPOSVerbMeaning.style.display = "block"; 
            this.dPOSAdj.style.display = "block"; this.dPOSAdjMeaning.style.display = "block";
            this.dSource.style.display = "block";

            this.dWord.innerText = data[0].word; this.dWord.style.display = "block";
            if(data[0].phonetic == undefined) this.dWordPhonetic.style.display = "none";
            else {
                this.dWordPhonetic.style.display = "block";
                this.dWordPhonetic.innerText = `( ${data[0].phonetic} )`;
            }
            this.dPOSNoun.innerText = `${data[0].meanings[0].partOfSpeech}`;
            this.dPOSNounMeaning.innerText = `- ${data[0].meanings[0].definitions[0].definition}`;
            if(data[0].meanings[0].definitions[0].example == undefined) this.dPOSNounExample.style.display = "none";
            else {
                this.dPOSNounExample.style.display = "block";
                this.dPOSNounExample.innerText = `"${data[0].meanings[0].definitions[0].example}"`;
            }
            if(data[0].meanings.length > 1){
                this.dPOSVerb.style.display = "block"; this.dPOSVerbMeaning.style.display = "block";
                this.dPOSVerb.innerText = `${data[0].meanings[1].partOfSpeech}`; this.dPOSVerbMeaning.innerText = `- ${data[0].meanings[1].definitions[0].definition}`;
                if(data[0].meanings[1].definitions[0].example == undefined) this.dPOSVerbExample.style.display = "none";
                else {
                    this.dPOSVerbExample.style.display = "block"; this.dPOSVerbExample.innerText = `"${data[0].meanings[1].definitions[0].example}"`;
                }
            } else {
                this.dPOSVerb.style.display = "none"; this.dPOSVerbMeaning.style.display = "none"; this.dPOSVerbExample.style.display = "none";
            }

            if(data[0].meanings.length > 2){
                this.dPOSAdj.style.display = "block"; this.dPOSAdjMeaning.style.display = "block";
                this.dPOSAdj.innerText = `${data[0].meanings[2].partOfSpeech}`; this.dPOSAdjMeaning.innerText = `- ${data[0].meanings[2].definitions[0].definition}`;
                if(data[0].meanings[2].definitions[0].example == undefined) this.dPOSAdjExample.style.display = "none";
                else {
                    this.dPOSAdjExample.style.display = "block"; this.dPOSAdjExample.innerText = `"${data[0].meanings[2].definitions[0].example}"`;
                }
            } else {
                this.dPOSAdj.style.display = "none"; this.dPOSAdjMeaning.style.display = "none"; this.dPOSAdjExample.style.display = "none";
            }
            this.dSource.innerText = "Source"; this.dSource.href = `${data[0].sourceUrls[0]}`;
        }
        this.loader.style.display = "none";
        this.dictionaryField.style.display = "block";
    },
    search: function() {
        this.fetchDictionaryData(search.value);
        this.dictionaryField.style.display = "none";
        this.loader.style.display = "block";
    },
    removeAllChildNodes: parent => { while(parent.firstChild) parent.removeChild(parent.firstChild); },
    clearSearch: function() { search.value = ""; search.focus(); this.csb.style.display = "none"; }
}

search.addEventListener("keyup", e => e.key === "Enter" ? dictionary.search() : false);
document.addEventListener("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(search.value.length > 0) dictionary.csb.style.display = "block";
    if(search.value.length == 0) dictionary.csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) search.blur();
});

dictionary.fetchDictionaryData("dictionary");
dictionary.csb.style.display = "none";