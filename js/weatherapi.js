// store the resource URL of the JSON

const populateWeather = () => {

   // const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e133193565792698f423478349cebc85&units=imperial";

    //Go fetch it and then wait for a response.
    fetch( weatherapiURL )
    .then( (response) => response.json() )
    .then( (weatherInfo) => {
        console.log(weatherInfo)
        document.getElementById('weatherCity').innerHTML = weatherInfo.name;
        document.getElementById('weatherLike').innerHTML = weatherInfo.weather[0].description;
        // document.getElementById('weatherIcon').innerHTML = weatherInfo.weather[0].icon;
        let iconcode = weatherInfo.weather[0].icon;
        let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
        let theicon = document.createElement ('img');
        theicon.src = iconPath;
        theicon.alt = iconcode;
        document.getElementById("weatherIcon").appendChild(theicon);
        document.getElementById('weatherTemperature').innerHTML = (weatherInfo.main.temp).toFixed(0) + '&deg;F';
                
    }); 
}


 