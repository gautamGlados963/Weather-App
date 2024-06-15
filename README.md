# Weather Tracking App with JavaScript

This is a Javasrpit Project made to learn working with APIs. Front-End made with HTML and CSS.

## Features
- Simple and user-friendly interface.
- Displays weather information including temperature, city name, humidity, and wind speed.
- Weather information is displayed only after the search button is clicked.

## Guidance for Icons addon:
- Make a folder named assets.
- Download Icons for different weather conditons from the folloing link: https://www.flaticon.com/free-icons/weather

API used: OpenWeather API

## Guidance for the API connection:
- Obtain API from OpenWeather.
- Make a 'module.js' file in the project.
- Add the following code into it:
```Javascript
const apiKey = "YOUR_API_KEY";
export async function getWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    return response.json();}
```
## Contributions
Feel free to fork the project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgement:
- GreatStack : For the YouTube tutorial and guidance. {https://www.youtube.com/watch?v=MIYQR-Ybrn4&t=1578s&ab_channel=GreatStack}
- MDN Web Docs : For its comprehensive documentation.
- OpenAI : for the GPT modal assistance.
- Weather icons made by FlatIcons are used in this project. Licensee: user149524544
