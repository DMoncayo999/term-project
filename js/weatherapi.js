// store the resource URL of the JSON

let populateWeather = () => {

   // const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e133193565792698f423478349cebc85&units=imperial";

    //Go fetch it and then wait for a response.
    fetch(weatherapiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log (weatherInfo)
        document.getElementById('name').innerHTML = weatherInfo.weather.name;
        document.getElementById('description').innerHTML = weatherInfo.weather[0].description;
        document.getElementById('icon').innerHTML = (weatherInfo.weather[0].icon);
        document.getElementById('temperature').innerHTML = (weatherInfo.main.temp).toFixed(0);
                
    }); 
}


 