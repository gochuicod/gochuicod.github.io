let search = document.querySelector(".search");

let covid = {
    csb: document.querySelector(".clearSearchButton"),
    loader: document.querySelector(".loader"),
    covidLocTotal: document.querySelector(".covidLocTotal"),
    fetchCovidData: function(country){
        fetch(
            `https://coronavirus.m.pipedream.net/`
        ).then((response) => response.json()).then((data) => this.displayCovidData(data,this.capitalize(country.toLowerCase())));
    },
    displayCovidData: function(data,country){
        this.removeAllChildNodes(document.querySelector(".covidDataField"));
        let countryData = [], countryDataSpecificLoc = [], totalConfirmed = 0, totalDeaths = 0;
        
        for(let i = 0; i < data.rawData.length; i++){
            if(data.rawData[i].Country_Region == country) countryData.push(data.rawData[i]);
        }
        for(let i = 0; i < countryData.length; totalConfirmed += parseInt(countryData[i].Confirmed), i++);
        for(let i = 0; i < countryData.length; totalDeaths += parseInt(countryData[i].Deaths), i++);

        document.querySelector(".covidGlobalConf").innerText = `${this.numberWithCommas(data.summaryStats.global.confirmed)}`;
        document.querySelector(".covidGlobalDeaths").innerText = `${this.numberWithCommas(data.summaryStats.global.deaths)}`;
        document.querySelector(".covidGlobalFatality").innerText = `${((data.summaryStats.global.deaths/data.summaryStats.global.confirmed) * 100).toFixed(2)}%`;

        document.querySelector(".covidLoc").innerText = `${countryData[0].Country_Region} Covid-19 Cases`;
        document.querySelector(".covidTotalConf").innerText = `${this.numberWithCommas(totalConfirmed.toString())}`;
        document.querySelector(".covidTotalDeaths").innerText = `${this.numberWithCommas(totalDeaths.toString())}`;
        document.querySelector(".covidTotalFatRatio").innerText = `${this.numberWithCommas(((totalDeaths/totalConfirmed) * 100).toFixed(2))}%`;
        this.covidLocTotal.style.display = "block";

        if(countryData.length != 1){
            for(let i = 0; i < countryData.length; this.addItems(i), i++);
            for(let i = 0; i < countryData.length; i++){
                countryDataSpecificLoc.push({
                    loc: countryData[i].Combined_Key,
                    confirmed: `Confirmed: ${this.numberWithCommas(countryData[i].Confirmed)}`,
                    deaths: `Deaths: ${this.numberWithCommas(countryData[i].Deaths)}`,
                    fatalityratio: `Fatality Ratio: ${(countryData[i].Case_Fatality_Ratio * 1).toFixed(2)}%`,
                    incidentrate: `Incident Rate: ${this.numberWithCommas(Math.floor(countryData[i].Incident_Rate))}`,
                    update: `Update as of ${countryData[0].Last_Update}`
                });
            }

            countryDataSpecificLoc.forEach((element,index,array) => {
                document.querySelector(`.covidLoc${index}`).innerText = element.loc;
                document.querySelector(`.covidConf${index}`).innerText = element.confirmed;
                document.querySelector(`.covidDeaths${index}`).innerText = element.deaths;
                document.querySelector(`.covidFat${index}`).innerText = element.fatalityratio;
                document.querySelector(`.covidInci${index}`).innerText = element.incidentrate;
                document.querySelector(`.covidLUpdate${index}`).innerText = element.update;
            });
        }
        this.loader.style.display = "none";
        this.covidLocTotal.style.display = "block";
    },
    search: function() {
        this.fetchCovidData(search.value);
        this.covidLocTotal.style.display = "none";
        this.loader.style.display = "block";
    },
    removeAllChildNodes: parent => { while(parent.firstChild) parent.removeChild(parent.firstChild); },
    numberWithCommas: number => { return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); },
    addItems: index => {
        let cdf = document.querySelector(".covidDataField");

        let mainDiv = document.createElement("div");
        mainDiv.setAttribute('class','covidData0 shadow rounded-custom p-2 fw-light fs-7 mb-3');

        let div1 = document.createElement("div");
        div1.setAttribute('class','d-flex flex-row justify-content-center mb-3 text-center');
        let span1 = document.createElement("span");
        span1.setAttribute('class',`covidLoc${index} fw-bold fs-6`);
        div1.append(span1);

        let div2 = document.createElement("div");
        div2.setAttribute('class','d-flex flex-row justify-content-between');
        let span2 = document.createElement("span"), span3 = document.createElement("span");
        span2.setAttribute('class',`covidConf${index}`); span3.setAttribute('class',`covidDeaths${index}`);
        div2.append(span2); div2.append(span3);

        let div3 = document.createElement("div");
        div3.setAttribute('class','d-flex flex-row justify-content-between');
        let span4 = document.createElement("span"), span5 = document.createElement("span");
        span4.setAttribute('class',`covidFat${index}`); span5.setAttribute('class',`covidInci${index}`);
        div3.append(span4); div3.append(span5);

        let div4 = document.createElement("div");
        div4.setAttribute('class','d-flex flex-row justify-content-center mt-3');
        let span6 = document.createElement("span");
        span6.setAttribute('class',`covidLUpdate${index} fw-lighter fs-8`);
        div4.append(span6);

        mainDiv.append(div1); mainDiv.append(div2);
        mainDiv.append(div3); mainDiv.append(div4);

        cdf.append(mainDiv);
    },
    capitalize: text => { return text.replace(/\b\w/g , (m) => { return m.toUpperCase(); } ); },
    clearSearch: () => { search.value = ""; search.focus(); covid.csb.style.display = "none"; }
}

search.addEventListener("keyup", e => e.key === "Enter" ? covid.search() : false);
document.addEventListener("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(search.value.length > 0) covid.csb.style.display = "block";
    if(search.value.length == 0) covid.csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) search.blur();
});

covid.covidLocTotal.style.display = "none";
covid.fetchCovidData("philippines");
covid.csb.style.display = "none";