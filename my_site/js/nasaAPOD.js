let title = document.querySelector(".APODTitle"), date = document.querySelector(".APODDate"), desc = document.querySelector(".APODExplanation"), img = document.querySelector(".APODImg");
let copyright = document.querySelector(".APODCopyright");
let search = document.querySelector(".search"), csb = document.querySelector(".clearSearchButton");
let query = () => nasaAPOD.fetchNasaData(search.value), todaysDate = new Date();
let clearSearch = () => { search.value = ""; search.focus(); csb.style.display = "none"; };
let loader = document.querySelector(".loader");

let nasaAPOD = {
    "apiKey":"eQZ3IIL7svBQW6UnJDE4mPu5uAJfRjx8QsziOrOS",
    fetchNasaData: function(inputDate) {
        document.querySelector(".nasaAPOD").style.display = "none";
        loader.style.display = "block";
        fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&date=${inputDate}`
        ).then((response) => response.json()).then((data) => this.displayNasaAPOD(data)); 
    },
    displayNasaAPOD: function(data) {
        if(data.code == 404) {
            title.innerText = `${data.msg}`; desc.style.display = "none";
            date.style.display = "none"; img.style.display = "none";
        } else {
            if(data.title == undefined){
                title.innerText = "Invalid Date Format"; date.style.display = "none"; desc.style.display = "none"; img.style.display = "none"; copyright.style.display = "none";
            } else {
                let apodDate = new Date(data.date);
                date.style.display = "block"; desc.style.display = "block"; img.style.display = "block";
                title.innerText = data.title; desc.innerText = data.explanation; img.src = data.url;
                date.innerText = `${this.defineMonth(apodDate.getMonth())} ${apodDate.getDate()} ${this.defineDay(apodDate.getDay())} ${apodDate.getFullYear()}`;
                copyright.innerText = data.copyright;
                copyright.style.display = "block";
            }
        }
        loader.style.display = "none";
        document.querySelector(".nasaAPOD").style.display = "block";
    },
    defineDay: function(APODDay) {
        let days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        for(let i = 0; i < days.length; i++){
            if(APODDay == i){
                return days[i];
                break;
            }
        }
    },
    defineMonth: function(APODMonth) {
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        for(let i = 0; i < months.length; i++){
            if(APODMonth == i) {
                return months[i];
                break;
            }
        }
    }
}

search.addEventListener("keyup", (e) => { let x = e.key === "Enter" ? nasaAPOD.fetchNasaData(search.value) : ""; });
document.addEventListener("keyup", (e) => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(search.value.length > 0) csb.style.display = "block";
    if(search.value.length == 0) csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) search.blur();
});

nasaAPOD.fetchNasaData(`${todaysDate.getFullYear()}-${todaysDate.getUTCMonth()+1}-${todaysDate.getUTCDate()}`);

img.style.display = "none";
csb.style.display = "none";
