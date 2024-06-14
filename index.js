import { getWeather } from "./module.js";

// const city = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", ()=> {
    const city = document.querySelector('.search input').value;
    city.trim();
    const data = getWeather(city)
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
})

