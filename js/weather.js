const loader = document.querySelector(".loader");
const weather = {
    "apiKey": "f61cce078be10fc170921eecbec33440",
    invalidKeyword: document.querySelector(".invalidKeyword"),
    fetchWeather: function(city){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        ).then((response) => response.json()).then((data) => this.displayWeather(data)).catch((error) => {
            this.show($(".invalidKeyword")); $(".invalidKeyword").text("Invalid Keyword");
            this.hide($(".weather"));
            this.hide($(".loader"));
        });
    },
    displayWeather: function(data){
        const { lat, lon } = data.coord;
        this.hide($(".invalidKeyword"));
        $(".city").text(data.name);
        $(".temperature").text(`${data.main.temp}°C`);
        $(".description").text(data.weather[0].description);
        $(".humidity").text(`Humidity: ${data.main.humidity}%`);
        $(".windspeed").text(`Wind Speed: ${data.wind.speed} km/h`);
        $(".weather").removeClass("loading");
        $(".cloudcover").text(`Cloud Cover: ${data.clouds.all}%`);
        $(".feels_like").text(`Feels like: ${data.main.feels_like}°C`);
        $(".icon").attr("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        $(".sunrise").text(`Sunrise: ${new Date(data.sys.sunrise*1000).toLocaleTimeString()}`);
        $(".sunset").text(`Sunset: ${new Date(data.sys.sunset*1000).toLocaleTimeString()}`);
        $(".current_time").text(`As of ${new Date(data.dt*1000).toLocaleTimeString()}`);
        
        fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
        ).then(response => response.json()).then(airPollutionData => this.displayPollutionData(airPollutionData));
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${this.apiKey}`
        ).then(response => response.json()).then(predictionData => this.displayPredictionData(predictionData));
    },
    displayPollutionData: function(airPollutionData){ $(".airquality").text(`Air Quality: ${this.definePollutionQuality(airPollutionData)}`) },
    displayPredictionData: function(predictionData){
        $(".forecastDataThreeHrs").empty();
        $(".forecastDataSixDays").empty();
        this.hide($(".forecastDataSixDays"))
        for(let i = 0; i < 24; this.addHourlyForecast(i), i++);
        for(let i = 0; i < 7; this.addDailyForecast(i), i++);
        
        let hourlyData = [], dates = [];

        for(let i = 0; i < 24; i++){
            hourlyData.push({
                icon: `https://openweathermap.org/img/wn/${predictionData.hourly[i].weather[0].icon}@2x.png`,
                desc: `${predictionData.hourly[i].weather[0].description}`,
                // time: `${new Date((predictionData.hourly[i].dt)*1000).toLocaleTimeString()}`,
                time: new Date((predictionData.hourly[i].dt)*1000).toLocaleTimeString('en-US',{ hour: 'numeric', minute: 'numeric', hour12: true }),
                temp: `${predictionData.hourly[i].temp}°C`,
                clouds: `Cloud Cover: ${predictionData.hourly[i].clouds}%`,
                pop: `Chance of Rain: ${((predictionData.hourly[i].pop)*100).toFixed(0)}%`,
                uvi: `UV Index: ${weather.defineUVIQuality(predictionData.hourly[i].uvi)}`,
                humidity: `Humidity: ${predictionData.hourly[i].humidity}%`
            });
        }
        hourlyData.forEach((element, index, array) => {
            $(`.d${index}Hourly`).attr("src",element.icon);
            $(`.d${index}HourlyDesc`).text(element.desc);
            $(`.d${index}HourlyTime`).text(element.time);
            $(`.d${index}HourlyTemp`).text(element.temp);
            $(`.d${index}HourlyClouds`).text(element.clouds);
            $(`.d${index}HourlyPop`).text(element.pop);
            $(`.d${index}HourlyUvi`).text(element.uvi);
            $(`.d${index}HourlyHumidity`).text(element.humidity);
        });
        
        for(let i = 0; i < 7; i++){
            dates.push({
                dotw: weather.defineDay(`${new Date((predictionData.daily[i].dt)*1000).getDay()}`),
                icon: `https://openweathermap.org/img/wn/${predictionData.daily[i].weather[0].icon}@2x.png`,
                desc: `${predictionData.daily[i].weather[0].description}`,
                temp: `${predictionData.daily[i].temp.max}°C`,
                rain: `Rain: ${predictionData.daily[i].rain} mm`,
                humidity: `Humidity: ${predictionData.daily[i].humidity}%`,
                clouds: `Cloud Cover: ${predictionData.daily[i].clouds}%`,
                pop: `Chance of Rain: ${((predictionData.daily[i].pop)*100).toFixed(0)}%`,
                sunrise: `Sunrise: ${new Date((predictionData.daily[i].sunrise)*1000).toLocaleTimeString()}`,
                sunset: `Sunset: ${new Date((predictionData.daily[i].sunset)*1000).toLocaleTimeString()}`,
                moonphase: `Moon Phase: ${weather.defineMoonPhase(predictionData.daily[i].moon_phase)} (${Math.floor(predictionData.daily[i].moon_phase*100)}%)`
            }); 
        }

        dates.forEach((element, index, array) => {
            $(`.d${index}DOTW`).text(element.dotw);
            $(`.d${index}Icon`).attr("src",element.icon);
            $(`.d${index}Desc`).text(element.desc);
            $(`.d${index}Temp`).text(element.temp);
            $(`.d${index}Humidity`).text(element.humidity);
            $(`.d${index}Clouds`).text(element.clouds);
            $(`.d${index}Pop`).text(element.pop);
            $(`.d${index}Sunrise`).text(element.sunrise);
            $(`.d${index}Sunset`).text(element.sunset);
            $(`.d${index}MoonPhase`).text(element.moonphase);
            
            if(predictionData.daily[index].rain == undefined) $(`.d${index}Rain`).text("- -");
            else $(`.d${index}Rain`).text(element.rain);
        });
        this.hide($(".loader"));
        this.show($(".weather"));
    },
    search: function() {
        this.fetchWeather($(".search").val());
        this.hide($(".weather"));
        this.show($(".loader"));
    },
    defineDay: predictionDataDay => {
        let days = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];
        for(let i = 0; i < days.length; i++){
            if(predictionDataDay == i) return days[i];
        }
    },
    defineUVIQuality: value => {
        if(value < 3) return "Low";
        else if(value > 2 && value < 6) return "Moderate";
        else if(value > 5 && value < 8) return "High";
        else if(value > 7 && value < 11) return "Very High";
        else if(value > 10) return "Extreme";
    },
    definePollutionQuality: airPollutionData => {
        const { o3 } = airPollutionData.list[0].components;
        if(o3 > -1 && o3 < 61) return "Good";
        else if(o3 > 59 && o3 < 121) return "Fair";
        else if(o3 > 119 && o3 < 181) return "Moderate";
        else if(o3 > 179 && o3 < 241) return "Poor";
        else if(o3 > 240) return "Very Poor";
    },
    defineMoonPhase: value => {
        if(value == 0) return "New Moon";
        else if(value > 0 && value < 0.25) return "Waxing Crescent";
        else if(value == 0.25) return "First Quarter";
        else if(value > 0.25 && value < 0.50) return "Waxing Gibbous";
        else if(value == 0.50) return "Full Moon";
        else if(value > 0.50 && value < 0.75) return "Waning Gibbous";
        else if(value == 0.75) return "Last Quarter";
        else return "Waning Crescent";
    },
    addHourlyForecast: index => {
        let outerDiv = $("<div></div>"), innerDiv1 = $("<div></div>"), innerDiv2 = $("<div></div>");
        let innerDiv3 = $("<div></div>"), innerDiv4 = $("<div></div>"), innerDiv5 = $("<div></div>");
        let innerDiv6 = $("<div></div>"), innerDiv7 = $("<div></div>"), innerDiv8 = $("<div></div>");
        let innerDiv1Img = $("<img>"), innerDiv2Span = $("<span></span>");
        let innerDiv3Span = $("<span></span>"), innerDiv3Icon = $("<i></i>");
        let innerDiv4Span = $("<span></span>"), innerDiv4Icon = $("<i></i>");
        let innerDiv5Span = $("<span></span>");
        let innerDiv6Span = $("<span></span>"), innerDiv6Icon = $("<i></i>");
        let innerDiv7Span = $("<span></span>"), innerDiv7Icon = $("<i></i>");
        let innerDiv8Span = $("<span></span>"), innerDiv8Icon = $("<i></i>");

        outerDiv.attr('class','row text-center align-items-center shadow bg-white rounded-custom mb-3 pb-4');
        innerDiv1.attr('class','col-6');
        innerDiv2.attr('class','col-6');
        innerDiv3.attr('class','col-6');
        innerDiv4.attr('class','col-6');
        innerDiv5.attr('class','col-6');
        innerDiv6.attr('class','col-6');
        innerDiv7.attr('class','col-6');
        innerDiv8.attr('class','col-6');
        innerDiv1Img.attr('src','');
        innerDiv1Img.attr('alt','');
        innerDiv1Img.attr('class',`d${index}Hourly unselectable`);
        innerDiv1Img.attr('oncontextmenu','return false;');
        innerDiv2Span.attr('class',`d${index}HourlyTime fw-bold`);
        innerDiv3Span.attr('class',`d${index}HourlyTemp`);
        innerDiv3Icon.attr('class',`bi bi-droplet me-2`);
        innerDiv4Span.attr('class',`d${index}HourlyHumidity`);
        innerDiv4Icon.attr('class',`bi bi-water me-2`);
        innerDiv5Span.attr('class',`d${index}HourlyDesc`);
        innerDiv6Span.attr('class',`d${index}HourlyClouds`);
        innerDiv6Icon.attr('class',`bi bi-clouds me-2`);
        innerDiv7Span.attr('class',`d${index}HourlyUvi`);
        innerDiv7Icon.attr('class',`bi bi-sun me-2`);
        innerDiv8Span.attr('class',`d${index}HourlyPop`);
        innerDiv8Icon.attr('class',`bi bi-cloud-drizzle me-2`);

        innerDiv1.append(innerDiv1Img);
        innerDiv2.append(innerDiv2Span);
        innerDiv3.append(innerDiv3Icon);
        innerDiv3.append(innerDiv3Span);
        innerDiv4.append(innerDiv4Icon);
        innerDiv4.append(innerDiv4Span);
        innerDiv5.append(innerDiv5Span);
        innerDiv6.append(innerDiv6Icon);
        innerDiv6.append(innerDiv6Span);
        innerDiv7.append(innerDiv7Icon);
        innerDiv7.append(innerDiv7Span);
        innerDiv8.append(innerDiv8Icon);
        innerDiv8.append(innerDiv8Span);
        outerDiv.append(innerDiv1);
        outerDiv.append(innerDiv2);
        outerDiv.append(innerDiv3);
        outerDiv.append(innerDiv4);
        outerDiv.append(innerDiv5);
        outerDiv.append(innerDiv6);
        outerDiv.append(innerDiv7);
        outerDiv.append(innerDiv8);

        $(".forecastDataThreeHrs").append(outerDiv);
    },
    addDailyForecast: index => {
        let outerDiv = $("<div></div>"), innerDiv1 = $("<div></div>"), innerDiv2 = $("<div></div>");
        let innerDiv3 = $("<div></div>"), innerDiv4 = $("<div></div>"), innerDiv5 = $("<div></div>");
        let innerDiv6 = $("<div></div>"), innerDiv7 = $("<div></div>"), innerDiv8 = $("<div></div>");
        let innerDiv9 = $("<div></div>"), innerDiv10 = $("<div></div>"), innerDiv11 = $("<div></div>");
        let innerDiv1Img = $("<img>"), innerDiv2Span = $("<span></span>");
        let innerDiv3Span = $("<span></span>"), innerDiv3Icon = $("<i></i>");
        let innerDiv4Span = $("<span></span>"), innerDiv4Icon = $("<i></i>");
        let innerDiv5Span = $("<span></span>");
        let innerDiv6Span = $("<span></span>"), innerDiv6Icon = $("<i></i>");
        let innerDiv7Span = $("<span></span>"), innerDiv7Icon = $("<i></i>");
        let innerDiv8Span = $("<span></span>"), innerDiv8Icon = $("<i></i>");
        let innerDiv9Span = $("<span></span>"), innerDiv9Icon = $("<i></i>");
        let innerDiv10Span = $("<span></span>"), innerDiv10Icon = $("<i></i>");
        let innerDiv11Span = $("<span></span>"), innerDiv11Icon = $("<i></i>");

        outerDiv.attr('class','row text-center align-items-center shadow bg-white rounded-custom mb-3 pb-4');
        innerDiv1.attr('class','col-6');
        innerDiv2.attr('class','col-6');
        innerDiv3.attr('class','col-6');
        innerDiv4.attr('class','col-6');
        innerDiv5.attr('class','col-6');
        innerDiv6.attr('class','col-6');
        innerDiv7.attr('class','col-6');
        innerDiv8.attr('class','col-6');
        innerDiv9.attr('class','col-6');
        innerDiv10.attr('class','col-6');
        innerDiv11.attr('class','col-12 mt-3');

        innerDiv1Img.attr('src','');
        innerDiv1Img.attr('alt','');
        innerDiv1Img.attr('class',`d${index}Icon unselectable`);
        innerDiv1Img.attr('oncontextmenu','return false;');
        innerDiv2Span.attr('class',`d${index}DOTW fw-bold`);

        innerDiv3Span.attr('class',`d${index}Temp`);
        innerDiv3Icon.attr('class',`bi bi-thermometer me-2`);
        innerDiv4Span.attr('class',`d${index}Humidity`);
        innerDiv4Icon.attr('class',`bi bi-droplet me-2`);
        innerDiv5Span.attr('class',`d${index}Desc`);
        innerDiv6Span.attr('class',`d${index}Clouds`);
        innerDiv6Icon.attr('class',`bi bi-clouds me-2`);
        innerDiv7Span.attr('class',`d${index}Rain`);
        innerDiv7Icon.attr('class',`bi bi-water me-2`);
        innerDiv8Span.attr('class',`d${index}Pop`);
        innerDiv8Icon.attr('class',`bi bi-cloud-drizzle me-2`);
        innerDiv9Span.attr('class',`d${index}Sunrise`);
        innerDiv9Icon.attr('class',`bi bi-sunrise me-2`);
        innerDiv10Span.attr('class',`d${index}Sunset`);
        innerDiv10Icon.attr('class',`bi bi-sunset me-2`);
        innerDiv11Span.attr('class',`d${index}MoonPhase`);
        innerDiv11Icon.attr('class',`bi bi-moon me-2`);

        innerDiv1.append(innerDiv1Img);
        innerDiv2.append(innerDiv2Span);
        innerDiv3.append(innerDiv3Icon);
        innerDiv3.append(innerDiv3Span);
        innerDiv4.append(innerDiv4Icon);
        innerDiv4.append(innerDiv4Span);
        innerDiv5.append(innerDiv5Span);
        innerDiv6.append(innerDiv6Icon);
        innerDiv6.append(innerDiv6Span);
        innerDiv7.append(innerDiv7Icon);
        innerDiv7.append(innerDiv7Span);
        innerDiv8.append(innerDiv8Icon);
        innerDiv8.append(innerDiv8Span);
        innerDiv9.append(innerDiv9Icon);
        innerDiv9.append(innerDiv9Span);
        innerDiv10.append(innerDiv10Icon);
        innerDiv10.append(innerDiv10Span);
        innerDiv11.append(innerDiv11Icon);
        innerDiv11.append(innerDiv11Span);
        outerDiv.append(innerDiv1);
        outerDiv.append(innerDiv2);
        outerDiv.append(innerDiv3);
        outerDiv.append(innerDiv4);
        outerDiv.append(innerDiv5);
        outerDiv.append(innerDiv6);
        outerDiv.append(innerDiv7);
        outerDiv.append(innerDiv8);
        outerDiv.append(innerDiv9);
        outerDiv.append(innerDiv10);
        outerDiv.append(innerDiv11);

        $(".forecastDataSixDays").append(outerDiv);
    },
    showHourly: function() {
        if($(".forecasttitle").text() == "24 Hour"){
            this.hide($(".forecastDataThreeHrs"))
            this.show($(".forecastDataSixDays"))
            $(".forecasttitle").text("Seven-Day");
        } else {
            $(".forecasttitle").text("24 Hour");
            this.show($(".forecastDataThreeHrs"))
            this.hide($(".forecastDataSixDays"))
        }
    },
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

$(document).on("keyup", e => {
    if(e.ctrlKey && e.altKey && e.key == "/") $(".search").trigger("focus");
});

$(".search").on("keyup", e => {
    if(e.key === "Enter") weather.search();
    if($(".search").val().length > 0) weather.show($(".clearSearchButton"));
    if($(".search").val().length == 0) weather.hide($(".clearSearchButton"));
    if(e.key === "Escape" && document.activeElement) $(".search").trigger("blur");
})

let query = () => weather.search();
let clearSearch = () => { $(".search").val(""); $(".search").trigger("focus"); weather.hide($(".clearSearchButton")); }

weather.fetchWeather("Cebu");
weather.hide($(".clearSearchButton"))