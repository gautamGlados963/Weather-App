import { getWeather } from "./module.js";

document.addEventListener('DOMContentLoaded', function () {


    const searchBtn = document.querySelector(".search button");

    searchBtn.addEventListener("click", () => {
        const city = document.querySelector('.search input').value.trim();
        getWeather(city)
            .then(data => {
                if (data && data.name && data.main && data.main.temp && data.wind.speed && data.main.humidity !== null) {

                    document.querySelector(".city").innerHTML = String(data.name);
                    document.querySelector(".condition").innerHTML = String(data.weather[0].main);
                    document.querySelector(".temp").innerHTML = String(data.main.temp) + "°C";
                    document.querySelector(".wind").innerHTML = String(data.wind.speed) + "km/h";
                    document.querySelector(".humidity").innerHTML = String(data.main.humidity) + "%";

                    let weatherCondition = data.weather[0].main.toLowerCase();
                    document.querySelector(".weather-icon").src = `./assest/${weatherCondition}.png`;
 
                } else {

                    console.error("Unexpected data format:", data);

                }
                console.log(data);
                document.querySelector(".weather").style.display = "flex";
                document.querySelector(".info").style.display = "flex";
            })          
        .catch (error => console.error("Error:", error));

    });

})