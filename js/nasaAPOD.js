const nasaAPOD = {
    "apiKey":"eQZ3IIL7svBQW6UnJDE4mPu5uAJfRjx8QsziOrOS",
    fetchNasaData: async function(inputDate) {
        this.hide($(".nasaAPOD"))
        this.show($(".loader"))
        const fetchData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&date=${inputDate}`)
        const data = await fetchData.json()
        if(data.code == 404) {
            $(".APODTitle").text(`${data.msg}`); this.hide($(".APODExplanation"));
            this.hide($(".APODDate")); this.hide($(".APODImg"));
        } else {
            if(data.title == undefined){
                $(".APODTitle").text("Invalid Date Format"); this.hide($(".APODDate")); this.hide($(".APODExplanation"));
                this.hide($(".APODImg")); this.hide($(".APODCopyright"));
            } else {
                let apodDate = new Date(data.date);
                this.show($(".APODDate")); this.show($(".APODExplanation")); this.show($(".APODImg"));
                $(".APODTitle").text(data.title); $(".APODExplanation").text(data.explanation); $(".APODImg").attr("src",data.url);
                $(".APODDate").text(`${this.defineMonth(apodDate.getMonth())} ${apodDate.getDate()} ${this.defineDay(apodDate.getDay())} ${apodDate.getFullYear()}`);
                $(".APODCopyright").text(data.copyright);
                if(data.copyright) this.show($(".APODCopyright"))
                else this.hide($(".APODCopyright"))
            }
        }
        this.hide($(".loader"))
        this.show($(".nasaAPOD"))
    },
    defineDay: APODDay => {
        let days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        return days.find((item,index) => { return APODDay == index })
    },
    defineMonth: APODMonth => {
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        return months.find((item,index) => { return APODMonth == index })
    },
    search: function() { this.fetchNasaData($(".search").val()) },
    clearSearch: function() { $(".search").val(""); $(".search").trigger("focus"); this.hide($(".clearSearchButton")); },
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

$(document).on("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") $(".search").trigger("focus");
});

$(".search").on("keyup", e => {
    if(e.key === "Enter") nasaAPOD.search();
    if($(".search").val().length > 0) nasaAPOD.show($(".clearSearchButton"));
    if($(".search").val().length == 0) nasaAPOD.hide($(".clearSearchButton"));
    if(e.key === "Escape" && document.activeElement) $(".search").trigger("blur");
})

nasaAPOD.fetchNasaData(`${new Date().getFullYear()}-${new Date().getUTCMonth()+1}-${new Date().getUTCDate()}`);
nasaAPOD.hide($(".APODImg"))
nasaAPOD.hide($(".clearSearchButton"))