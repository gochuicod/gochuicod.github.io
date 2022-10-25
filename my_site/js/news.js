let query = () => news.search(), clearSearch = () => { search.value = ""; search.focus(); csb.style.display = "none"; };
let csb = document.querySelector(".clearSearchButton"), search = document.querySelector(".search");
let loader = document.querySelector(".loader");

let news = {
    "apiKey" : "pub_70389bf171921c24be39e3edb3a22947157f",
    "noDesc" : "No Description",
    fetchNewsData: function(keyword){
        fetch(
            `https://newsdata.io/api/1/news?apikey=${this.apiKey}&q=${keyword}&language=en`
        ).then((response) => response.json()).then((data) => this.displayNewsData(data));
    },
    displayNewsData: function(data){
        console.log(data);
        for(let i = 0; i < data.results.length; this.addNewsSection(i), i++);

        let dataNodes = [];

        for(let i = 0; i < data.results.length; i++){
            dataNodes.push({
                title: `${data.results[i].title}`,
                img: `${data.results[i].image_url}`,
                creator: `Author: ${data.results[i].creator}`,
                published: `Date Published: ${data.results[i].pubDate}`,
                country: `News Origin: ${data.results[i].country[0]}`,
                desc: `${data.results[i].description}`,
                link: `${data.results[i].link}`
            });
        }
        
        loader.style.display = "none";

        dataNodes.forEach((element,index,array) => {
            document.querySelector(`.newsTitle${index}`).innerText = element.title;
            if(data.results[index].image_url == null) document.querySelector(`.newsImg${index}`).style.display = "none";
            else {
                document.querySelector(`.newsImg${index}`).style.display = "block";
                document.querySelector(`.newsImg${index}`).src = element.img;
            }

            if(data.results[index].creator == null) document.querySelector(`.newsCreator${index}`).innerText = "Author: --";
            else document.querySelector(`.newsCreator${index}`).innerText = element.creator;

            document.querySelector(`.newsPublished${index}`).innerText = element.published;
            document.querySelector(`.newsCountry${index}`).innerText = element.country;
            if(data.results[index].description == null) document.querySelector(`.newsDesc${index}`).innerText = this.noDesc;
            else document.querySelector(`.newsDesc${index}`).innerText = element.desc;

            document.querySelector(`.newsSource${index}`).innerText = "News Source";
            document.querySelector(`.newsSource${index}`).href = element.link;
        });
    },
    search: () => {
        this.fetchNewsData(search.value);
        this.removeAllChildNodes(document.querySelector(".newsField"));
        loader.style.display = "block";
    },
    removeAllChildNodes: parent => { while(parent.firstChild) parent.removeChild(parent.firstChild); },
    addNewsSection: index => {
        let newsField = document.querySelector(".newsField");

        let outerDiv = document.createElement("div");
        let innerDiv1 = document.createElement("div");
        let innerDiv2 = document.createElement("div");
        let innerDiv3 = document.createElement("div");
        let innerDiv4 = document.createElement("div");
        let innerDiv5 = document.createElement("div");
        let innerDiv6 = document.createElement("div");
        let innerDiv7 = document.createElement("div");
        let innerDiv1Span = document.createElement("span");
        let innerDiv2Img = document.createElement("img");
        let innerDiv3Span = document.createElement("span");
        let innerDiv4Span = document.createElement("span");
        let innerDiv5Span = document.createElement("span");
        let innerDiv6Paragraph = document.createElement("p");
        let innerDiv7Link = document.createElement("a");

        outerDiv.setAttribute('class',`news${index} rounded-custom shadow py-3 mb-4`);
        innerDiv1.setAttribute('class','d-flex flex-row justify-content-center text-center');
        innerDiv2.setAttribute('class','d-flex flex-row justify-content-center');
        innerDiv3.setAttribute('class','d-flex flex-row justify-content-center text-center');
        innerDiv4.setAttribute('class','d-flex flex-row justify-content-center text-center');
        innerDiv5.setAttribute('class','d-flex flex-row justify-content-center text-center');
        innerDiv6.setAttribute('class','container d-flex flex-row justify-content-center mt-2'); innerDiv6.style.width = "90%";
        innerDiv7.setAttribute('class','d-flex flex-row justify-content-center mx-2 mt-2');
        innerDiv1Span.setAttribute('class',`newsTitle${index} fw-bold`);
        innerDiv2Img.setAttribute('class',`newsImg${index} rounded-custom shadow my-3`);
        innerDiv2Img.style.width = "90%"; innerDiv2Img.style.height = "95%";
        innerDiv3Span.setAttribute('class',`newsCreator${index} fs-8`);
        innerDiv4Span.setAttribute('class',`newsPublished${index} fs-8`);
        innerDiv5Span.setAttribute('class',`newsCountry${index} description fs-8`);
        innerDiv6Paragraph.setAttribute('class',`newsDesc${index} text-justify lh-lg`);
        innerDiv7Link.setAttribute('class',`newsSource${index}`);
        innerDiv7Link.setAttribute('href',''); innerDiv7Link.setAttribute('target','_blank');

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

        newsField.append(outerDiv);
    }
}

search.addEventListener("keyup", (e) => { let x = e.key === "Enter" ? news.search() : ""; });
document.addEventListener("keyup", (e) => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(search.value.length > 0) csb.style.display = "block";
    if(search.value.length == 0) csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) search.blur();
});

news.fetchNewsData("Philippines");
csb.style.display = "none";
