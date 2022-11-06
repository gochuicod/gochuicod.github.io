const search = document.querySelector(".search");
const earthquake = {
    loader: document.querySelector(".loader"),
    csb: document.querySelector(".clearSearchButton"),
    dataField: document.querySelector(".dataField"),
    generated: document.querySelector(".generated"),
    fetchEarthquakeData: async function(magnitude){
        let pastSevenDaysDate = new Date(); pastSevenDaysDate.setDate(pastSevenDaysDate.getDate() - 1);
        let presentDayDate = new Date(), end_date_input = presentDayDate.toISOString().split('T')[0];
        const fetchData = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${pastSevenDaysDate.toISOString().split('T')[0]}&endtime=${end_date_input}&minmagnitude=${magnitude}`)
        const data = await fetchData.json()
        this.removeAllChildNodes(this.dataField);
        let dailyData = [];

        this.generated.innerText = `Update as of ${new Date(data.metadata.generated).toLocaleTimeString()}`;
    
        for(let i = 0; i < data.features.length; this.addItems(i), i++);
        for(let property of data.features){
            dailyData.push({
                time: new Date(property.properties.time).toLocaleString(),
                loc: this.isNull(property.properties.place),
                alertType: `Alert Level: ${this.isNull(property.properties.alert)}`,
                magnitude: `Magnitude: ${this.isNull(property.properties.mag)}`,
                intensity: `Intensity: ${this.isNull(property.properties.mmi)}`,
            });
        }
        
        dailyData.sort((a,b) => a.magnitude.localeCompare(b.magnitude));
        dailyData.forEach((element, index) => {
            document.querySelector(`.eq${index}Location`).innerText = element.loc;
            document.querySelector(`.eq${index}Time`).innerText = element.time;
            document.querySelector(`.eq${index}AlertType`).innerText = element.alertType;
            document.querySelector(`.eq${index}Magnitude`).innerText = element.magnitude;
            document.querySelector(`.eq${index}Intensity`).innerText = element.intensity;
        });
        this.loader.style.display = "none";
        this.dataField.style.display = "block";
    },
    isNull: item => (item != null) ? item : '--',
    addItems: index => {
        let group = document.createElement("div");
        group.setAttribute('class',`group${index} shadow rounded-custom mb-3 p-3 fw-light fs-7`);

        let outerDiv1 = document.createElement("div"), loc = document.createElement("span");
        outerDiv1.setAttribute('class','d-flex flex-row justify-content-center mb-3');
        loc.setAttribute('class',`eq${index}Location fw-bold`);
        
        let outerDiv2 = document.createElement("div"), time = document.createElement("span"), alertType = document.createElement("span");
        outerDiv2.setAttribute('class','d-flex flex-row justify-content-evenly');
        time.setAttribute('class',`eq${index}Time`);
        alertType.setAttribute('class',`eq${index}AlertType description`)
        
        let outerDiv3 = document.createElement("div"), magnitude = document.createElement("span"), intensity = document.createElement("span");
        outerDiv3.setAttribute('class','d-flex flex-row justify-content-evenly');
        magnitude.setAttribute('class',`eq${index}Magnitude`)
        intensity.setAttribute('class',`eq${index}Intensity`)

        outerDiv1.append(loc);
        outerDiv2.append(time);
        outerDiv2.append(alertType);
        outerDiv3.append(magnitude);
        outerDiv3.append(intensity);

        group.append(outerDiv1);
        group.append(outerDiv2);
        group.append(outerDiv3);

        let dataField = document.querySelector(".dataField");
        dataField.append(group);
    },
    search: function() {
        this.fetchEarthquakeData(search.value);
        this.dataField.style.display = "none";
        this.loader.style.display = "block";
    },
    removeAllChildNodes: parent => { while(parent.firstChild) parent.removeChild(parent.firstChild); },
    clearSearch: function() { search.value = ""; search.focus(); this.csb.style.display = "none"; }
}

search.addEventListener("keyup", (e) => { if(key === "Enter") earthquake.search() });
document.addEventListener("keyup", (e) => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(search.value.length > 0) earthquake.csb.style.display = "block";
    if(search.value.length == 0) earthquake.csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) search.blur();
});

earthquake.fetchEarthquakeData(4);
earthquake.csb.style.display = "none";