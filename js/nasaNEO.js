const todaysDate = new Date(), tyear = todaysDate.getFullYear(), tmonth = todaysDate.getUTCMonth()+1, tdate = todaysDate.getUTCDate();
const nasaNEO = {
    "apiKey":"eQZ3IIL7svBQW6UnJDE4mPu5uAJfRjx8QsziOrOS",
    fetchNasaData: async function() {
        this.hide($(".dataField"))
        this.show($(".loader"))
        const fetchData = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${tyear}-${tmonth}-${tdate}&end_date=${tyear}-${tmonth}-${tdate}&api_key=${this.apiKey}`)
        const data = await fetchData.json()
        $(".dataField").empty();
        let NEOTodaysDate = `${tyear}-${this.getMonth2Digits(tmonth)}-${this.getDay2Digits(tdate)}`;
        let instances = [];
        
        for(let j = 0; j < data.element_count; this.prepareNEOData(j), j++);
        for(let i = 0; i < data.element_count; instances.push(data.near_earth_objects[NEOTodaysDate][i]), i++);
        
        instances.forEach((element,index,array) => {
            $(`.neoAsteroidName${index}`).text(`Name: ${instances[index].name}`);
            $(`.neoAsteroidCloseApproach${index}`).text(`Close Approach: ${instances[index].close_approach_data[0].close_approach_date_full}`);
            $(`.neoAsteroidMissDistance${index}`).text(`Miss Distance: ${parseFloat(instances[index].close_approach_data[0].miss_distance.kilometers).toFixed(2)} km`);
            $(`.neoAsteroidRelativeVelocity${index}`).text(`Relative Velocity ${parseFloat(instances[index].close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(2)} km/h`);
            $(`.neoAsteroidEstDiameter${index}`).text(`Estimated Maximum Diameter ${parseFloat(instances[index].estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)} km`);
            $(`.neoAsteroidHazardous${index}`).text(`Hazardous: ${(instances[index].is_potentially_hazardous_asteroid) ? "Yes" : "No"}`);
        });
        this.hide($(".loader"))
        this.show($(".dataField"))
    },
    prepareNEOData: index => {
        let outerDiv = $("<div></div>");
        outerDiv.attr('class',`neoAsteroid${index} shadow rounded-custom mb-3 ps-4 py-3`);

        let innerDiv1 = $("<div></div>"), innerDiv2 = $("<div></div>");
        let innerDiv3 = $("<div></div>"), innerDiv4 = $("<div></div>");
        let innerDiv5 = $("<div></div>"), innerDiv6 = $("<div></div>");
        innerDiv1.attr('class','d-flex justify-content-start');
        innerDiv2.attr('class','d-flex justify-content-start');
        innerDiv3.attr('class','d-flex justify-content-start');
        innerDiv4.attr('class','d-flex justify-content-start');
        innerDiv5.attr('class','d-flex justify-content-start');
        innerDiv6.attr('class','d-flex justify-content-start');

        let innerDiv1Span = $("<span></span>");
        let innerDiv2Span = $("<span></span>");
        let innerDiv3Span = $("<span></span>");
        let innerDiv4Span = $("<span></span>");
        let innerDiv5Span = $("<span></span>");
        let innerDiv6Span = $("<span></span>");
        innerDiv1Span.attr('class',`neoAsteroidName${index}`);
        innerDiv2Span.attr('class',`neoAsteroidCloseApproach${index}`);
        innerDiv3Span.attr('class',`neoAsteroidMissDistance${index}`);
        innerDiv4Span.attr('class',`neoAsteroidRelativeVelocity${index}`);
        innerDiv5Span.attr('class',`neoAsteroidEstDiameter${index}`);
        innerDiv6Span.attr('class',`neoAsteroidHazardous${index}`);
        
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

        $(".dataField").append(outerDiv);
    },
    getMonth2Digits: month => month < 10 ? `0${month}` : month,
    getDay2Digits: date => date < 10 ? `0${date}` : date,
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

nasaNEO.fetchNasaData();