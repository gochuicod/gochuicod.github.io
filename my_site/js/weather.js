let loader = document.querySelector(".loader");

let weather = {
    "apiKey": "f61cce078be10fc170921eecbec33440",
    invalidKeyword: document.querySelector(".invalidKeyword"),
    fetchWeather: function(city){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather.apiKey}`
        ).then((response) => response.json()).then((data) => weather.displayWeather(data)).catch((error) => {
            weather.showElement(weather.invalidKeyword); weather.invalidKeyword.innerText = "Invalid Keyword";
            weather.hideElement(document.querySelector(".weather"));
            weather.hideElement(loader);
        });
    },
    displayWeather: function(data){
        const { name, clouds, sys, dt } = data;
        const { temp, humidity, feels_like } = data.main;
        const { speed } = data.wind;
        const { lat, lon } = data.coord;
        let sunrise = new Date(sys.sunrise*1000), sunset = new Date(sys.sunset*1000), ct = new Date(dt*1000);
        weather.invalidKeyword.style.display = "none";
        document.querySelector(".city").innerText = name;
        document.querySelector(".temperature").innerText = `${temp}°C`;
        document.querySelector(".description").innerText = data.weather[0].description;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".windspeed").innerText = `Wind Speed: ${speed} km/h`;
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".cloudcover").innerText = `Cloud Cover: ${clouds.all}%`;
        document.querySelector(".feels_like").innerText = `Feels like: ${feels_like}°C`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.querySelector(".sunrise").innerText = `Sunrise: ${sunrise.toLocaleTimeString()}`;
        document.querySelector(".sunset").innerText = `Sunset: ${sunset.toLocaleTimeString()}`;
        document.querySelector(".current_time").innerText = `As of ${ct.toLocaleTimeString()}`;
        
        fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${weather.apiKey}`
        ).then(response => response.json()).then(airPollutionData => weather.displayPollutionData(airPollutionData));
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${weather.apiKey}`
        ).then(response => response.json()).then(predictionData => weather.displayPredictionData(predictionData));
    },
    displayPollutionData: function(airPollutionData){ document.querySelector(".airquality").innerText = `Air Quality: ${weather.definePollutionQuality(airPollutionData)}`; },
    displayPredictionData: function(predictionData){
        console.log(predictionData);
        weather.removeAllChildNodes(document.querySelector(".forecastDataThreeHrs"));
        weather.removeAllChildNodes(document.querySelector(".forecastDataSixDays"));
        document.querySelector(".forecastDataSixDays").style.display = "none";
        for(let i = 0; i < 24; weather.addThreeHrForecast(i), i++);
        for(let i = 0; i < 7; weather.addSixDayForecast(i), i++);
        
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
            document.querySelector(`.d${index}Hourly`).src = element.icon;
            document.querySelector(`.d${index}HourlyDesc`).innerText = element.desc;
            document.querySelector(`.d${index}HourlyTime`).innerText = element.time;
            document.querySelector(`.d${index}HourlyTemp`).innerText = element.temp;
            document.querySelector(`.d${index}HourlyClouds`).innerText = element.clouds;
            document.querySelector(`.d${index}HourlyPop`).innerText = element.pop;
            document.querySelector(`.d${index}HourlyUvi`).innerText = element.uvi;
            document.querySelector(`.d${index}HourlyHumidity`).innerText = element.humidity;
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
            document.querySelector(`.d${index}DOTW`).innerText = element.dotw;
            document.querySelector(`.d${index}Icon`).src = element.icon;
            document.querySelector(`.d${index}Desc`).innerText = element.desc;
            document.querySelector(`.d${index}Temp`).innerText = element.temp;
            document.querySelector(`.d${index}Humidity`).innerText = element.humidity;
            document.querySelector(`.d${index}Clouds`).innerText = element.clouds;
            document.querySelector(`.d${index}Pop`).innerText = element.pop;
            document.querySelector(`.d${index}Sunrise`).innerText = element.sunrise;
            document.querySelector(`.d${index}Sunset`).innerText = element.sunset;
            document.querySelector(`.d${index}MoonPhase`).innerText = element.moonphase;
            
            if(predictionData.daily[index].rain == undefined) document.querySelector(`.d${index}Rain`).innerText = "- -";
            else document.querySelector(`.d${index}Rain`).innerText = element.rain;
        });
        weather.hideElement(loader);
        weather.showElement(document.querySelector(".weather"));
    },
    search: () => {
        weather.fetchWeather(document.querySelector(".search").value);
        weather.hideElement(document.querySelector(".weather"));
        weather.showElement(loader);
    },
    removeAllChildNodes: parent => { while(parent.firstChild) parent.removeChild(parent.firstChild); },
    defineDay: predictionDataDay => {
        let days = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];
        for(let i = 0; i < days.length; i++){
            if(predictionDataDay == i){
                return days[i];
                break;
            }
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
    addThreeHrForecast: index => {
        let ThreeHF = document.querySelector(".forecastDataThreeHrs");

        let outerDiv = document.createElement("div");
        let innerDiv1 = document.createElement("div");
        let innerDiv2 = document.createElement("div");
        let innerDiv3 = document.createElement("div");
        let innerDiv4 = document.createElement("div");
        let innerDiv5 = document.createElement("div");
        let innerDiv6 = document.createElement("div");
        let innerDiv7 = document.createElement("div");
        let innerDiv8 = document.createElement("div");
        let innerDiv1Img = document.createElement("img");
        let innerDiv2Span = document.createElement("span");
        let innerDiv3Span = document.createElement("span");
        let innerDiv4Span = document.createElement("span");
        let innerDiv5Span = document.createElement("span");
        let innerDiv6Span = document.createElement("span");
        let innerDiv7Span = document.createElement("span");
        let innerDiv8Span = document.createElement("span");

        outerDiv.setAttribute('class','row text-center align-items-center shadow bg-white rounded-custom mb-3 pb-4');
        innerDiv1.setAttribute('class','col-6');
        innerDiv2.setAttribute('class','col-6');
        innerDiv3.setAttribute('class','col-6');
        innerDiv4.setAttribute('class','col-6');
        innerDiv5.setAttribute('class','col-6');
        innerDiv6.setAttribute('class','col-6');
        innerDiv7.setAttribute('class','col-6');
        innerDiv8.setAttribute('class','col-6');
        innerDiv1Img.setAttribute('src',''); innerDiv1Img.setAttribute('alt',''); innerDiv1Img.setAttribute('class',`d${index}Hourly unselectable`); innerDiv1Img.setAttribute('oncontextmenu','return false;');
        innerDiv2Span.setAttribute('class',`d${index}HourlyTime fw-bold`);
        innerDiv3Span.setAttribute('class',`d${index}HourlyTemp`);
        innerDiv4Span.setAttribute('class',`d${index}HourlyHumidity`);
        innerDiv5Span.setAttribute('class',`d${index}HourlyDesc`);
        innerDiv6Span.setAttribute('class',`d${index}HourlyClouds`);
        innerDiv7Span.setAttribute('class',`d${index}HourlyUvi`);
        innerDiv8Span.setAttribute('class',`d${index}HourlyPop`);

        innerDiv1.append(innerDiv1Img);
        innerDiv2.append(innerDiv2Span);
        innerDiv3.append(innerDiv3Span);
        innerDiv4.append(innerDiv4Span);
        innerDiv5.append(innerDiv5Span);
        innerDiv6.append(innerDiv6Span);
        innerDiv7.append(innerDiv7Span);
        innerDiv8.append(innerDiv8Span);
        outerDiv.append(innerDiv1);
        outerDiv.append(innerDiv2);
        outerDiv.append(innerDiv3);
        outerDiv.append(innerDiv4);
        outerDiv.append(innerDiv5);
        outerDiv.append(innerDiv6);
        outerDiv.append(innerDiv7);
        outerDiv.append(innerDiv8);

        ThreeHF.append(outerDiv);
    },
    addSixDayForecast: index => {
        let FD6D = document.querySelector(".forecastDataSixDays");
        let outerDiv = document.createElement("div");
        let innerDiv1 = document.createElement("div");
        let innerDiv2 = document.createElement("div");
        let innerDiv3 = document.createElement("div");
        let innerDiv4 = document.createElement("div");
        let innerDiv5 = document.createElement("div");
        let innerDiv6 = document.createElement("div");
        let innerDiv7 = document.createElement("div");
        let innerDiv8 = document.createElement("div");
        let innerDiv9 = document.createElement("div");
        let innerDiv10 = document.createElement("div");
        let innerDiv11 = document.createElement("div");
        let innerDiv1Img = document.createElement("img");
        let innerDiv2Span = document.createElement("span");
        let innerDiv3Span = document.createElement("span");
        let innerDiv4Span = document.createElement("span");
        let innerDiv5Span = document.createElement("span");
        let innerDiv6Span = document.createElement("span");
        let innerDiv7Span = document.createElement("span");
        let innerDiv8Span = document.createElement("span");
        let innerDiv9Span = document.createElement("span");
        let innerDiv10Span = document.createElement("span");
        let innerDiv11Span = document.createElement("span");

        outerDiv.setAttribute('class','row text-center align-items-center shadow bg-white rounded-custom mb-3 pb-4');
        innerDiv1.setAttribute('class','col-6');
        innerDiv2.setAttribute('class','col-6');
        innerDiv3.setAttribute('class','col-6');
        innerDiv4.setAttribute('class','col-6');
        innerDiv5.setAttribute('class','col-6');
        innerDiv6.setAttribute('class','col-6');
        innerDiv7.setAttribute('class','col-6');
        innerDiv8.setAttribute('class','col-6');
        innerDiv9.setAttribute('class','col-6');
        innerDiv10.setAttribute('class','col-6');
        innerDiv11.setAttribute('class','col-12 mt-3');

        innerDiv1Img.setAttribute('src','');
        innerDiv1Img.setAttribute('alt','');
        innerDiv1Img.setAttribute('class',`d${index}Icon unselectable`);
        innerDiv1Img.setAttribute('oncontextmenu','return false;');
        
        innerDiv2Span.setAttribute('class',`d${index}DOTW fw-bold`);
        innerDiv3Span.setAttribute('class',`d${index}Temp`);
        innerDiv4Span.setAttribute('class',`d${index}Humidity`);
        innerDiv5Span.setAttribute('class',`d${index}Desc`);
        innerDiv6Span.setAttribute('class',`d${index}Clouds`);
        innerDiv7Span.setAttribute('class',`d${index}Rain`);
        innerDiv8Span.setAttribute('class',`d${index}Pop`);
        innerDiv9Span.setAttribute('class',`d${index}Sunrise`);
        innerDiv10Span.setAttribute('class',`d${index}Sunset`);
        innerDiv11Span.setAttribute('class',`d${index}MoonPhase`);

        innerDiv1.append(innerDiv1Img);
        innerDiv2.append(innerDiv2Span);
        innerDiv3.append(innerDiv3Span);
        innerDiv4.append(innerDiv4Span);
        innerDiv5.append(innerDiv5Span);
        innerDiv6.append(innerDiv6Span);
        innerDiv7.append(innerDiv7Span);
        innerDiv8.append(innerDiv8Span);
        innerDiv9.append(innerDiv9Span);
        innerDiv10.append(innerDiv10Span);
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

        FD6D.append(outerDiv);
    },
    hideElement: tag => tag.style.display = "none",
    showElement: tag => tag.style.display = "block"
}

let showHourly = () => {
    if(document.querySelector(".forecasttitle").innerText == "24 Hour"){
        document.querySelector(".forecastDataThreeHrs").style.display="none";
        document.querySelector(".forecastDataSixDays").style.display="block";
        document.querySelector(".forecasttitle").innerText = "Seven-Day";
    } else {
        document.querySelector(".forecasttitle").innerText = "24 Hour";
        document.querySelector(".forecastDataThreeHrs").style.display="block";
        document.querySelector(".forecastDataSixDays").style.display="none";
    }
}

let query = () => weather.search(), search = document.querySelector(".search"), csb = document.querySelector(".clearSearchButton");
let clearSearch = () => { search.value = ""; search.focus(); csb.style.display = "none"; };
search.addEventListener("keyup", (e) => { let x = e.key === "Enter" ? weather.search() : ""});
document.addEventListener("keyup", (e) => {
    if(e.ctrlKey && e.altKey && e.key == "/") search.focus();
    if(e.key === "Escape" && document.activeElement) search.blur();
    if(search.value.length > 0) csb.style.display = "block";
    if(search.value.length == 0) csb.style.display = "none";
});

weather.fetchWeather("Cebu");
csb.style.display = "none";