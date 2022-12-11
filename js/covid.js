const covid = {
    fetchCovidData: async function(country){
        const fetchData = await fetch(`https://coronavirus.m.pipedream.net/`)
        const data = await fetchData.json()
        $(".covidDataField").empty();
        let countryData = [], countryDataSpecificLoc = [], totalConfirmed = 0, totalDeaths = 0;

        data.rawData.forEach(item => { if(item.Country_Region == country) countryData.push(item); })
        countryData.sort((a,b) => parseInt(b.Confirmed) - parseInt(a.Confirmed))
        for(let i = 0; i < countryData.length; totalConfirmed += parseInt(countryData[i].Confirmed), i++);
        for(let i = 0; i < countryData.length; totalDeaths += parseInt(countryData[i].Deaths), i++);


        $(".covidGlobalConf").text(`${this.numberWithCommas(data.summaryStats.global.confirmed)}`);
        $(".covidGlobalDeaths").text(`${this.numberWithCommas(data.summaryStats.global.deaths)}`);
        $(".covidGlobalFatality").text(`${((data.summaryStats.global.deaths/data.summaryStats.global.confirmed) * 100).toFixed(2)}%`);

        $(".covidLoc").text(`${countryData[0].Country_Region} Covid-19 Cases`);
        $(".covidTotalConf").text(`${this.numberWithCommas(totalConfirmed.toString())}`);
        $(".covidTotalDeaths").text(`${this.numberWithCommas(totalDeaths.toString())}`);
        $(".covidTotalFatRatio").text(`${this.numberWithCommas(((totalDeaths/totalConfirmed) * 100).toFixed(2))}%`);

        if(countryData.length != 1){
            for(let i = 0; i < countryData.length; this.addItems(i), i++);
            countryData.forEach(item => {
                countryDataSpecificLoc.push({
                    loc: item.Combined_Key,
                    confirmed: `Confirmed: ${this.numberWithCommas(item.Confirmed)}`,
                    deaths: `Deaths: ${this.numberWithCommas(item.Deaths)}`,
                    fatalityratio: `Fatality Ratio: ${(item.Case_Fatality_Ratio * 1).toFixed(2)}%`,
                    incidentrate: `Incident Rate: ${this.numberWithCommas(Math.floor(item.Incident_Rate))}`,
                    update: `Update as of ${item.Last_Update}`
                })
            })
            countryDataSpecificLoc.forEach((element,index) => {
                $(`.covidLoc${index}`).text(element.loc);
                $(`.covidConf${index}`).text(element.confirmed);
                $(`.covidDeaths${index}`).text(element.deaths);
                $(`.covidFat${index}`).text(element.fatalityratio);
                $(`.covidInci${index}`).text(element.incidentrate);
                $(`.covidLUpdate${index}`).text(element.update);
            });
        }
        this.hide($(".loader"));
        this.show($(".covidLocTotal"));
    },
    search: function() {
        this.fetchCovidData($(".search").val());
        this.hide($(".covidLocTotal"));
        this.show($(".loader"));
    },
    numberWithCommas: number => { return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); },
    addItems: index => {
        let mainDiv = $("<div></div>");
        mainDiv.attr('class','covidData0 shadow rounded-custom p-2 fw-light fs-7 mb-3');

        let div1 = $("<div></div>");
        div1.attr('class','d-flex flex-row justify-content-center mb-3 text-center');
        let span1 = $("<span></span>");
        span1.attr('class',`covidLoc${index} fw-bold fs-6`);
        div1.append(span1);

        let div2 = $("<div></div>");
        div2.attr('class','d-flex flex-row justify-content-between');
        let span2 = $("<span></span>"), span3 = $("<span></span>");
        span2.attr('class',`covidConf${index}`); span3.attr('class',`covidDeaths${index}`);
        div2.append(span2); div2.append(span3);

        let div3 = $("<div></div>");
        div3.attr('class','d-flex flex-row justify-content-between');
        let span4 = $("<span></span>"), span5 = $("<span></span>");
        span4.attr('class',`covidFat${index}`); span5.attr('class',`covidInci${index}`);
        div3.append(span4); div3.append(span5);

        let div4 = $("<div></div>");
        div4.attr('class','d-flex flex-row justify-content-center mt-3');
        let span6 = $("<span></span>");
        span6.attr('class',`covidLUpdate${index} fw-lighter fs-8`);
        div4.append(span6);

        mainDiv.append(div1); mainDiv.append(div2);
        mainDiv.append(div3); mainDiv.append(div4);

        $(".covidDataField").append(mainDiv);
    },
    capitalize: text => { return text.replace(/\b\w/g , (m) => { return m.toUpperCase(); } ); },
    clearSearch: () => { $(".search").val(""); $(".search").trigger("focus"); this.hide($(".clearSearchButton")); },
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

$(document).on("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") $(".search").trigger("focus");
});

$(".search").on("keyup", e => {
    if(e.key === "Enter") covid.search();
    if($(".search").val().length > 0) covid.show($(".clearSearchButton"));
    if($(".search").val().length == 0) covid.hide($(".clearSearchButton"));
    if(e.key === "Escape" && document.activeElement) $(".search").trigger("blur");
})

covid.hide($(".covidLocTotal"))
covid.fetchCovidData("Japan");
covid.hide($(".clearSearchButton"))