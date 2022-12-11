const earthquake = {
    fetchEarthquakeData: async function(magnitude){
        this.hide($(".dataField"));
        this.show($(".loader"));

        let pastSevenDaysDate = new Date(); pastSevenDaysDate.setDate(pastSevenDaysDate.getDate() - 1);
        let presentDayDate = new Date(), end_date_input = presentDayDate.toISOString().split('T')[0];
        const fetchData = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${pastSevenDaysDate.toISOString().split('T')[0]}&endtime=${end_date_input}&minmagnitude=${magnitude}`)
        const data = await fetchData.json()
        $(".dataField").empty();
        let dailyData = [];

        $(".generated").text(`Update as of ${new Date(data.metadata.generated).toLocaleTimeString()}`);
    
        for(let property of data.features){
            if(Math.floor(property.properties.mag) == magnitude){
                dailyData.push({
                    time: new Date(property.properties.time).toLocaleString(),
                    loc: this.isNull(property.properties.place),
                    alertType: `Alert Level: ${this.isNull(property.properties.alert)}`,
                    magnitude: `Magnitude: ${this.isNull(property.properties.mag.toFixed(1))}`,
                    intensity: `Intensity: ${this.isNull(property.properties.mmi)}`,
                });
            }
        }
        for(let i = 0; i < dailyData.length; this.addItems(i), i++);
        
        dailyData.sort((a,b) => b.magnitude.localeCompare(a.magnitude));
        dailyData.forEach((element, index) => {
            $(`.eq${index}Location`).text(element.loc);
            $(`.eq${index}Time`).text(element.time);
            $(`.eq${index}AlertType`).text(element.alertType);
            $(`.eq${index}Magnitude`).text(element.magnitude);
            $(`.eq${index}Intensity`).text(element.intensity);
        });
        this.hide($(".loader"));
        this.show($(".dataField"));
    },
    isNull: item => (item != null) ? item : '--',
    addItems: index => {
        let group = $("<div></div>");
        group.attr('class',`group${index} shadow rounded-custom mb-3 p-3 fw-light fs-7`);

        let outerDiv1 = $("<div></div>"), loc = $("<span></span>");
        outerDiv1.attr('class','d-flex flex-row justify-content-center mb-3');
        loc.attr('class',`eq${index}Location fw-bold`);
        
        let outerDiv2 = $("<div></div>"), time = $("<span></span>"), alertType = $("<span></span>");
        outerDiv2.attr('class','d-flex flex-row justify-content-evenly');
        time.attr('class',`eq${index}Time`);
        alertType.attr('class',`eq${index}AlertType description`)
        
        let outerDiv3 = $("<div></div>"), magnitude = $("<span></span>"), intensity = $("<span></span>");
        outerDiv3.attr('class','d-flex flex-row justify-content-evenly');
        magnitude.attr('class',`eq${index}Magnitude`)
        intensity.attr('class',`eq${index}Intensity`)

        outerDiv1.append(loc);
        outerDiv2.append(time);
        outerDiv2.append(alertType);
        outerDiv3.append(magnitude);
        outerDiv3.append(intensity);

        group.append(outerDiv1);
        group.append(outerDiv2);
        group.append(outerDiv3);

        $(".dataField").append(group);
    },
    search: function() { this.fetchEarthquakeData($(".search").val()); },
    removeAllChildNodes: parent => { while(parent.firstChild) parent.removeChild(parent.firstChild); },
    clearSearch: function() { search.value = ""; search.focus(); this.hide($(".clearSearchButton")); },
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

$(document).on("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") $(".search").trigger("focus");
});

$(".search").on("keyup", e => {
    if(e.key === "Enter") earthquake.search();
    if($(".search").val().length > 0) earthquake.show($(".clearSearchButton"));
    if($(".search").val().length == 0) earthquake.hide($(".clearSearchButton"));
    if(e.key === "Escape" && document.activeElement) $(".search").trigger("blur");
})

earthquake.fetchEarthquakeData(4);
earthquake.hide($(".clearSearchButton"));