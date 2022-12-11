const news = {
    "apiKey" : "pub_70389bf171921c24be39e3edb3a22947157f",
    "noDesc" : "No Description",
    fetchNewsData: async function(keyword){
        $(".newsField").empty();
        this.show($(".loader"));
        this.hide($(".newsField"));
        const fetchData = await fetch(`https://newsdata.io/api/1/news?apikey=${this.apiKey}&q=${keyword}&language=en`)
        const data = await fetchData.json()
        let dataNodes = [];
        for(let i = 0; i < data.results.length; this.addNewsSection(i), i++);
        for(let item of data.results){
            dataNodes.push({
                title: `${item.title}`,
                img: `${item.image_url}`,
                creator: `Author: ${item.creator}`,
                published: `Date Published: ${item.pubDate}`,
                country: `News Origin: ${item.country[0]}`,
                desc: `${item.description}`,
                link: `${item.link}`
            })
        }
        dataNodes.forEach((element,index) => {
            $(`.newsTitle${index}`).text(element.title);
            if(data.results[index].image_url == null) this.hide($(`.newsImg${index}`));
            else {
                this.show($(`.newsImg${index}`))
                $(`.newsImg${index}`).attr("src",element.img);
            }
    
            if(data.results[index].creator == null) $(`.newsCreator${index}`).text("Author: --");
            else $(`.newsCreator${index}`).text(element.creator);
    
            $(`.newsPublished${index}`).text(element.published);
            $(`.newsCountry${index}`).text(element.country);
            if(data.results[index].description == null) $(`.newsDesc${index}`).text(this.noDesc);
            else $(`.newsDesc${index}`).text(element.desc);
    
            $(`.newsSource${index}`).text("News Source");
            $(`.newsSource${index}`).attr("href",element.link);
        });
        this.show($(".newsField"));
        this.hide($(".loader"));
    },
    search: function() { this.fetchNewsData($(".search").val()); },
    addNewsSection: index => {
        let outerDiv = $("<div></div>"), innerDiv1 = $("<div></div>"), innerDiv2 = $("<div></div>");
        let innerDiv3 = $("<div></div>"), innerDiv4 = $("<div></div>"), innerDiv5 = $("<div></div>");
        let innerDiv6 = $("<div></div>"), innerDiv7 = $("<div></div>"), innerDiv1Span = $("<span></span>");
        let innerDiv2Img = $("<img>"), innerDiv3Span = $("<span></span>"), innerDiv4Span = $("<span></span>");
        let innerDiv5Span = $("<span></span>"), innerDiv6Paragraph = $("<p></p>"), innerDiv7Link = $("<a></a>");

        outerDiv.attr('class',`news${index} rounded-custom shadow py-3 mb-4`);
        innerDiv1.attr('class','d-flex justify-content-center text-center');
        innerDiv2.attr('class','d-flex justify-content-center');
        innerDiv3.attr('class','d-flex justify-content-center');
        innerDiv4.attr('class','d-flex justify-content-center');
        innerDiv5.attr('class','d-flex justify-content-center');
        innerDiv6.attr('class','container d-flex justify-content-center mt-2'); innerDiv6.css("width","90%");
        innerDiv7.attr('class','d-flex justify-content-center mx-2 mt-2');
        innerDiv1Span.attr('class',`newsTitle${index} fw-bold`);
        innerDiv2Img.attr('class',`newsImg${index} rounded-custom shadow my-3`);
        innerDiv2Img.css("width","90%").css("height","95%");
        innerDiv3Span.attr('class',`newsCreator${index} fs-8`);
        innerDiv4Span.attr('class',`newsPublished${index} fs-8`);
        innerDiv5Span.attr('class',`newsCountry${index} description fs-8`);
        innerDiv6Paragraph.attr('class',`newsDesc${index} text-justify lh-lg`);
        innerDiv7Link.attr('class',`newsSource${index}`).attr('href','').attr('target','_blank');

        innerDiv1.append(innerDiv1Span);
        innerDiv2.append(innerDiv2Img);
        innerDiv3.append(innerDiv3Span);
        innerDiv4.append(innerDiv4Span);
        innerDiv5.append(innerDiv5Span);
        innerDiv6.append(innerDiv6Paragraph);
        innerDiv7.append(innerDiv7Link);
        outerDiv.append(innerDiv1);
        outerDiv.append(innerDiv2);
        outerDiv.append(innerDiv3);
        outerDiv.append(innerDiv4);
        outerDiv.append(innerDiv5);
        outerDiv.append(innerDiv6);
        outerDiv.append(innerDiv7);

        $(".newsField").append(outerDiv);
    },
    clearSearch: () => { $(".search").val(""); $(".search").trigger("focus"); this.hide(".clearSearchButton") },
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

$(document).on("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") $(".search").trigger("focus");
});

$(".search").on("keyup", e => {
    if(e.key === "Enter") news.search();
    if($(".search").val().length > 0) news.show($(".clearSearchButton"));
    if($(".search").val().length == 0) news.hide($(".clearSearchButton"))
    if(e.key === "Escape" && document.activeElement) $(".search").trigger("blur");
})

news.fetchNewsData("Philippines");
news.hide(".clearSearchButton")