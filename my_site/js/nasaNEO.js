let todaysDate = new Date(), tyear = todaysDate.getFullYear(), tmonth = todaysDate.getUTCMonth()+1, tdate = todaysDate.getUTCDate();

let nasaNEO = {
    loader: document.querySelector(".loader"),
    dataField: document.querySelector(".dataField"),
    "apiKey":"eQZ3IIL7svBQW6UnJDE4mPu5uAJfRjx8QsziOrOS",
    fetchNasaData: function() {
        this.dataField.style.display = "none";
        this.loader.style.display = "block";
        fetch(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${tyear}-${tmonth}-${tdate}&end_date=${tyear}-${tmonth}-${tdate}&api_key=${this.apiKey}`
        ).then((response) => response.json()).then((data) => this.displayNasaNEO(data));
    },
    displayNasaNEO: function(data){
        this.removeAllChildNodes(this.dataField);
        let NEOTodaysDate = `${tyear}-${this.getMonth2Digits(tmonth)}-${this.getDay2Digits(tdate)}`;
        let instances = [];
        
        for(let j = 0; j < data.element_count; this.prepareNEOData(j), j++);
        for(let i = 0; i < data.element_count; instances.push(data.near_earth_objects[NEOTodaysDate][i]), i++);
        
        instances.forEach((element,index,array) => {
            document.querySelector(`.neoAsteroidName${index}`).innerText = `Name: ${instances[index].name}`;
            document.querySelector(`.neoAsteroidCloseApproach${index}`).innerText = `Close Approach: ${instances[index].close_approach_data[0].close_approach_date_full}`;
            document.querySelector(`.neoAsteroidMissDistance${index}`).innerText = `Miss Distance: ${parseFloat(instances[index].close_approach_data[0].miss_distance.kilometers).toFixed(2)} km`
            document.querySelector(`.neoAsteroidRelativeVelocity${index}`).innerText = `Relative Velocity ${parseFloat(instances[index].close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(2)} km/h`;
            document.querySelector(`.neoAsteroidEstDiameter${index}`).innerText = `Estimated Maximum Diameter ${parseFloat(instances[index].estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)} km`;
            document.querySelector(`.neoAsteroidHazardous${index}`).innerText = `Hazardous: ${(instances[index].is_potentially_hazardous_asteroid) ? "Yes" : "No"}`;
        });
        this.loader.style.display = "none";
        this.dataField.style.display = "block";
    },
    removeAllChildNodes: parent => { while(parent.firstChild) parent.removeChild(parent.firstChild); },
    prepareNEOData: index => {
        let dataField = document.querySelector(".dataField");

        let outerDiv = document.createElement("div");
        outerDiv.setAttribute('class',`neoAsteroid${index} shadow rounded-custom mb-3 ps-4 py-3`);

        let innerDiv1 = document.createElement("div");
        let innerDiv2 = document.createElement("div");
        let innerDiv3 = document.createElement("div");
        let innerDiv4 = document.createElement("div");
        let innerDiv5 = document.createElement("div");
        let innerDiv6 = document.createElement("div");
        innerDiv1.setAttribute('class','d-flex flex-row justify-content-start');
        innerDiv2.setAttribute('class','d-flex flex-row justify-content-start');
        innerDiv3.setAttribute('class','d-flex flex-row justify-content-start');
        innerDiv4.setAttribute('class','d-flex flex-row justify-content-start');
        innerDiv5.setAttribute('class','d-flex flex-row justify-content-start');
        innerDiv6.setAttribute('class','d-flex flex-row justify-content-start');

        let innerDiv1Span = document.createElement("span");
        let innerDiv2Span = document.createElement("span");
        let innerDiv3Span = document.createElement("span");
        let innerDiv4Span = document.createElement("span");
        let innerDiv5Span = document.createElement("span");
        let innerDiv6Span = document.createElement("span");
        innerDiv1Span.setAttribute('class',`neoAsteroidName${index}`);
        innerDiv2Span.setAttribute('class',`neoAsteroidCloseApproach${index}`);
        innerDiv3Span.setAttribute('class',`neoAsteroidMissDistance${index}`);
        innerDiv4Span.setAttribute('class',`neoAsteroidRelativeVelocity${index}`);
        innerDiv5Span.setAttribute('class',`neoAsteroidEstDiameter${index}`);
        innerDiv6Span.setAttribute('class',`neoAsteroidHazardous${index}`);
        
        innerDiv1.append(innerDiv1Span);
        innerDiv2.append(innerDiv2Span);
        innerDiv3.append(innerDiv3Span);
        innerDiv4.append(innerDiv4Span);
        innerDiv5.append(innerDiv5Span);
        innerDiv6.append(innerDiv6Span);

        outerDiv.append(innerDiv1);
        outerDiv.append(innerDiv2);
        outerDiv.append(innerDiv3);
        outerDiv.append(innerDiv4);
        outerDiv.append(innerDiv5);
        outerDiv.append(innerDiv6);

        dataField.append(outerDiv);
    },
    getMonth2Digits: month => {
        if(month < 10) return `0${month}`;
        return month;
    },
    getDay2Digits: date => {
        if(date < 10) return `0${date}`;
        return date;
    }
}

nasaNEO.fetchNasaData();