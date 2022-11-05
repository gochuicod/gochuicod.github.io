const search = document.querySelector(".search");
const nasaAPOD = {
    copyright: document.querySelector(".APODCopyright"),
    loader: document.querySelector(".loader"),
    csb: document.querySelector(".clearSearchButton"),
    title: document.querySelector(".APODTitle"),
    date: document.querySelector(".APODDate"),
    desc: document.querySelector(".APODExplanation"),
    img: document.querySelector(".APODImg"),
    nasaAPOD: document.querySelector(".nasaAPOD"),
    "apiKey":"eQZ3IIL7svBQW6UnJDE4mPu5uAJfRjx8QsziOrOS",
    fetchNasaData: async function(inputDate) {
        this.nasaAPOD.style.display = "none";
        this.loader.style.display = "block";
        const fetchData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&date=${inputDate}`)
        const data = await fetchData.json()
        if(data.code == 404) {
            this.title.innerText = `${data.msg}`; this.desc.style.display = "none";
            this.date.style.display = "none"; this.img.style.display = "none";
        } else {
            if(data.title == undefined){
                this.title.innerText = "Invalid Date Format"; this.date.style.display = "none"; this.desc.style.display = "none"; this.img.style.display = "none"; this.copyright.style.display = "none";
            } else {
                let apodDate = new Date(data.date);
                this.date.style.display = "block"; this.desc.style.display = "block"; this.img.style.display = "block";
                this.title.innerText = data.title; this.desc.innerText = data.explanation; this.img.src = data.url;
                this.date.innerText = `${this.defineMonth(apodDate.getMonth())} ${apodDate.getDate()} ${this.defineDay(apodDate.getDay())} ${apodDate.getFullYear()}`;
                this.copyright.innerText = data.copyright;
                data.copyright ? this.copyright.style.display = "block" : this.copyright.style.display = "none";
            }
        }
        this.loader.style.display = "none";
        this.nasaAPOD.style.display = "block";
    },
    defineDay: APODDay => {
        let days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        for(let i = 0; i < days.length; i++){
            if(APODDay == i){
                return days[i];
                break;
            }
        }
    },
    defineMonth: APODMonth => {
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        for(let i = 0; i < months.length; i++){
            if(APODMonth == i) {
                return months[i];
                break;
            }
        }
    },
    search: function() { this.fetchNasaData(search.value) },
    clearSearch: function() { search.value = ""; search.focus(); this.csb.style.display = "none"; }
}

search.addEventListener("keyup", e => e.key === "Enter" ? nasaAPOD.fetchNasaData(search.value) : false);
document.addEventListener("keyup", (e) => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(search.value.length > 0) nasaAPOD.csb.style.display = "block";
    if(search.value.length == 0) nasaAPOD.csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) search.blur();
});

nasaAPOD.fetchNasaData(`${new Date().getFullYear()}-${new Date().getUTCMonth()+1}-${new Date().getUTCDate()}`);
nasaAPOD.img.style.display = "none";
nasaAPOD.csb.style.display = "none";