import { getWeather } from "./module.js";

document.addEventListener('DOMContentLoaded', function () {


    const searchBtn = document.querySelector(".search button");

    searchBtn.addEventListener("click", () => {

        const city = document.querySelector('.search input').value.trim();
        getWeather(city)
            .then(data => {
                if (data.cod == 404 || data.message == "Nothing to geocode") {
                    document.querySelector(".error").style.display = "block";
                    document.querySelector(".weather").style.display = "none";
                    document.querySelector(".info").style.display = "none";

                } else {
                    if (data && data.name && data.main && data.main.temp && data.wind.speed && data.main.humidity !== null) {

                        const timeZoneOffset = data.timezone;
                        const utcTime = new Date().getTime() + (new Date().getTimezoneOffset() * 60000);
                        const localTime = new Date(utcTime + (timeZoneOffset * 1000));

                        document.querySelector(".city").innerHTML = String(data.name);
                        document.querySelector(".condition").innerHTML = String(data.weather[0].main + '|' + localTime.toLocaleTimeString());
                        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                        document.querySelector(".wind").innerHTML = parseInt(data.wind.speed) + "km/h";
                        document.querySelector(".humidity").innerHTML = String(data.main.humidity) + "%";

                        let weatherCondition = data.weather[0].main.toLowerCase();

                        if (weatherCondition == 'clear' && (localTime.getHours() >= 18 || localTime.getHours() <= 5)) {
                            document.querySelector(".weather-icon").src = `./assest/night.png`;

                        } else {
                            document.querySelector(".weather-icon").src = `./assest/${weatherCondition}.png`;
                        }
                        console.log(data);
                        document.querySelector(".weather").style.display = "flex";
                        document.querySelector(".info").style.display = "flex";
                        document.querySelector(".error").style.display = "none";


                    } else {

                        console.error("Unexpected data format:", data);

                    }

                }
            })
            .catch(error => console.error("Error:", error));
    });
})