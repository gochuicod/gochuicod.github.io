const dictionary = {
    csb: document.querySelector(".clearSearchButton"),
    loader: document.querySelector(".loader"),
    searchBtn: document.querySelector(".search"),
    dictionaryContent: document.querySelector(".dictionary-content"),
    word: document.querySelector(".word"),
    fetchDictionaryData: async function(word) {
        const fetchData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await fetchData.json()
        if(data.title){
            this.word.innerHTML = data.title;
            this.loader.style.display = "none";
            this.removeAllChildNodes(this.dictionaryContent)
        } else {
            this.loader.style.display = "none";
            this.dictionaryContent.style.display = "block";
            let meanings = [];
            data.forEach(item => {
                item.meanings.forEach(item => {
                    meanings.push(`<i>${item.partOfSpeech}</i><br>`)
                    item.definitions.forEach((item,index) => {
                        meanings.push(`${index+1}.&emsp;${item.definition}<br>`)
                        if(item.example) meanings.push(`<span class="d-flex justify-content-center shadow rounded mb-3"><i>"${item.example}"</i></span>`)
                    })
                    if(item.synonyms.length != 0) meanings.push('<i class="text-success">Similar:</i>')
                    item.synonyms.forEach(item => {
                        meanings.push(`<span class="rounded bg-dark text-light px-1 hover-pointer" onclick="dictionary.fetchDictionaryData('${item}')">${item}</span>`)
                    })
                    if(item.antonyms.length != 0) meanings.push('<br><i class="text-danger">Opposite:</i>')
                    item.antonyms.forEach(item => {
                        meanings.push(`<span class="rounded bg-dark text-light px-1 hover-pointer" onclick="dictionary.fetchDictionaryData('${item}')">${item}</span>`)
                    })
                    meanings.push(`<br><br>`)
                })
            })
            this.word.innerHTML = `<b>${(data[0].word).charAt(0).toUpperCase()}${(data[0].word).substring(1).toLowerCase()}</b>  ${(data[0].phonetic) ? data[0].phonetic : ''}`
            this.dictionaryContent.innerHTML = meanings.join("\n")
        }
    },
    search: function() {
        this.fetchDictionaryData(this.searchBtn.value);
        this.removeAllChildNodes(this.word)
        this.loader.style.display = "block";
        this.dictionaryContent.style.display = "none";
    },
    removeAllChildNodes: parent => { while(parent.firstChild) parent.removeChild(parent.firstChild); },
    clearSearch: function() { this.searchBtn.value = ""; this.searchBtn.focus(); this.csb.style.display = "none"; }
}

dictionary.searchBtn.addEventListener("keyup", e => e.key === "Enter" ? dictionary.search() : false);
document.addEventListener("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") dictionary.searchBtn.focus();
    if(dictionary.searchBtn.value.length > 0) dictionary.csb.style.display = "block";
    if(dictionary.searchBtn.value.length == 0) dictionary.csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) dictionary.searchBtn.blur();
});

dictionary.fetchDictionaryData("short");
dictionary.csb.style.display = "none";