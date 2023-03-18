const dictionary = {
    fetchDictionaryData: async function(word) {
        this.show($(".loader"));
        this.hide($(".word").children());
        this.hide($(".dictionary-content"));
        const fetchData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await fetchData.json()
        if(data.title){
            $(".word").html(`<p>${data.title}</p>`);
            this.hide($(".loader"))
            $("dictionary-content").empty()
        } else {
            this.hide($(".loader"))
            this.show($(".dictionary-content"))
            let meanings = [];
            data.forEach(item => {
                item.meanings.forEach(item => {
                    meanings.push(`<i>${item.partOfSpeech}</i><br>`)
                    item.definitions.forEach((item,index) => {
                        meanings.push(`<span class="d-flex">${index+1}.&emsp;${item.definition}</span>`)
                        if(item.example) meanings.push(`<span class="d-flex text-secondary ms-4">"${item.example}"</span>`)
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
            $(".word").html(`<b>${(data[0].word).charAt(0).toUpperCase()}${(data[0].word).substring(1).toLowerCase()}</b>&nbsp;&nbsp;<p>${(data[0].phonetic) ? data[0].phonetic : ''}</p>`);
            $(".dictionary-content").html(meanings.join("\n"));
        }
    },
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

$(document).on("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") $(".search").trigger("focus");
});

$(".search").on("keyup", e => {
    if(e.key === "Enter") dictionary.search();
    if($(".search").val().length > 0) dictionary.show($(".clearSearchButton"));
    if($(".search").val().length == 0) dictionary.hide($(".clearSearchButton"));
    if(e.key === "Escape" && document.activeElement) $(".search").trigger("blur");
})

let query = () => dictionary.fetchDictionaryData($(".search").val());
let clearSearch = () => { $(".search").val(""); $(".search").trigger("focus"); dictionary.hide($(".clearSearchButton")); };

dictionary.fetchDictionaryData("free");
dictionary.hide($(".clearSearchButton"));