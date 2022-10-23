let query = () => earthquake.search(), clearSearch = () => { search.value = ""; search.focus(); csb.style.display = "none"; };
let csb = document.querySelector(".clearSearchButton"), search = document.querySelector(".search");
let loader = document.querySelector(".loader");

let earthquake = {
    fetchEarthquakeData: function(magnitude){
        let pastSevenDaysDate = new Date(); pastSevenDaysDate.setDate(pastSevenDaysDate.getDate() - 1);
        let presentDayDate = new Date(); end_date_input = presentDayDate.toISOString().split('T')[0];
        fetch(
            `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${pastSevenDaysDate.toISOString().split('T')[0]}&endtime=${end_date_input}&minmagnitude=${magnitude}`
        ).then((response) => response.json()).then((data) => this.displayEarthquakeData(data));
    },
    displayEarthquakeData: function(data){
        this.removeAllChildNodes(document.querySelector(".dataField"));
        let alertLevelInf = "Alert Level: ", magnitudeInf = "Magnitude: ", intensityInf = "Intensity: ";
        var dailyData = [];

        for(let i = 0; i < data.features.length; this.addItems(i), i++);
        for(let i = 0; i < data.features.length; i++){
            dailyData.push({
                time: `${new Date(data.features[i].properties.time).toLocaleString()}`,
                loc: `${this.isNull(data.features[i].properties.place)}`,
                alertType: `${alertLevelInf}${this.isNull(data.features[i].properties.alert)}`,
                magnitude: `${magnitudeInf}${this.isNull(data.features[i].properties.mag)}`,
                intensity: `${intensityInf}${this.isNull(data.features[i].properties.mmi)}`
            });
        }
        
        dailyData.sort((a,b) => a.magnitude.localeCompare(b.magnitude));

        dailyData.forEach((element, index, array) => {
            document.querySelector(`.eq${index}Location`).innerText = element.loc;
            document.querySelector(`.eq${index}Time`).innerText = element.time;
            document.querySelector(`.eq${index}AlertType`).innerText = element.alertType;
            document.querySelector(`.eq${index}Magnitude`).innerText = element.magnitude;
            document.querySelector(`.eq${index}Intensity`).innerText = element.intensity;
        });
        loader.style.display = "none";
        document.querySelector(".dataField").style.display = "block";
    },
    isNull: (item) => (item != null) ? item : '--',
    addItems: (index) => {
        let group = document.createElement("div");
        group.setAttribute('class',`group${index} shadow rounded-custom mb-3 p-3 fw-light fs-7`);

        let outerDiv1 = document.createElement("div"), loc = document.createElement("span");
        outerDiv1.setAttribute('class','d-flex flex-row justify-content-center text-center');
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
        document.querySelector(".dataField").style.display = "none";
        loader.style.display = "block";
    },
    removeAllChildNodes: (parent) => { while(parent.firstChild) parent.removeChild(parent.firstChild); },
}

earthquake.fetchEarthquakeData(4);
search.addEventListener("keyup", (e) => { let x = e.key === "Enter" ? earthquake.search() : ""; });
document.addEventListener("keyup", (e) => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(search.value.length > 0) csb.style.display = "block";
    if(search.value.length == 0) csb.style.display = "none";
    if(e.key === "Escape" && document.activeElement) search.blur();
});

csb.style.display = "none";
