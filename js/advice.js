const advice = {
    fetchAdviceData: async function(query){
        const sample = await fetch(`https://api.adviceslip.com/advice/search/${query}`)
        const data = await sample.json()
        if(data.message){
            this.hide($(".loader"))
            this.show($(".invalidSearch"))
            $(".invalidSearch").text(`${data.message.text}`);
        } else {
            this.hide($(".invalidSearch"))
            $(".adviceField").empty();
            for(let i = 0; i < data.slips.length; this.addAdvice(i), i++);
    
            let adviceDataNodes = [];
    
            for(let i = 0; i < data.slips.length; i++){
                adviceDataNodes.push({
                    desc: data.slips[i].advice,
                    date: data.slips[i].date
                });
            }
    
            adviceDataNodes.forEach((element,index,array) => {
                $(`.adviceDesc${index}`).text(`${element.desc}"`);
                $(`.adviceDate${index}`).text(`Date: ${element.date}`);
            });
            this.hide($(".loader"))
            this.show($(".adviceField"))
        }
    },
    search: function() {
        if($(".search").val() !== ""){
            this.fetchAdviceData($(".search").val());
            this.hide($(".adviceField"))
            this.show($(".loader"))
        }
    },
    addAdvice: index => {
        let outerDiv = $("<div></div>");
        outerDiv.attr('class',`advice${index} rounded-custom shadow p-4 mb-4 text-center`);

        let innerDiv1 = $("<div></div>");
        innerDiv1.attr('class','d-flex flex-row justify-content-center');
        let innerDiv1Span = $("<span></span>");
        innerDiv1Span.attr('class',`adviceDesc${index} fst-italic`);
        innerDiv1.append(innerDiv1Span);

        let innerDiv2 = $("<div></div>");
        innerDiv2.attr('class','d-flex flex-row justify-content-center');
        let innerDiv2Span = $("<div></div>");
        innerDiv2Span.attr('class',`adviceDate${index} fw-lighter fs-8`);
        innerDiv2.append(innerDiv2Span);

        outerDiv.append(innerDiv1);
        outerDiv.append(innerDiv2);
        $(".adviceField").append(outerDiv);
    },
    clearSearch: function() { $(".search").val(""); $(".search").trigger("focus"); this.hide($(".clearSearchButton")) },
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

$(document).on("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") $(".search").trigger("focus");
});

$(".search").on("keyup", e => {
    if(e.key === "Enter") advice.search();
    if($(".search").val().length > 0) advice.show($(".clearSearchButton"));
    if($(".search").val().length == 0) advice.hide($(".clearSearchButton"))
    if(e.key === "Escape" && document.activeElement) $(".search").trigger("blur");
})

advice.fetchAdviceData("good");
advice.hide($(".invalidSearch"))
advice.hide($(".clearSearchButton"));