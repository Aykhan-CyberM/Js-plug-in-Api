
let SearchCity = "Milan"


function GetWeather(SearchCity) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=5ea3fbacb00a4d89ba5104630231805&q=${SearchCity}&aqi=no`)
        .then(x => x.json())
        .then(x => {
            if (x.error) {
                alert('City not found');
            } else {
                renderWeather(x);
            }
        });
}



const weatherContainer = document.querySelector('.weather-container')
const searchBar = document.querySelector('.search')
const searchBtn = document.querySelector('.search-btn')


searchBar.addEventListener('keyup', (e) =>{
    SearchCity = e.target.value.trim()
})

searchBtn.addEventListener('click', ()=>{
    GetWeather(SearchCity)
})



function renderWeather(weather){


    const name = weather.location.name;
    const country = weather.location.country;
    const localTime = weather.location.localtime.slice(11, 16);
    const tempC = weather.current.temp_c;
    const windKph = weather.current.wind_kph;
    const humidity = weather.current.humidity;
    const feelsLike = weather.current.feelslike_c;
    const uv = weather.current.uv;
    const icon = weather.current.condition.icon.slice()
    

    
        weatherContainer.innerHTML = '';
    

 
    
    
    const countrySpan = document.createElement("span")
    countrySpan.innerText = `${country},${name}`
    const nameSpan = document.createElement("span")
   
    const localTimeSpan = document.createElement("span")
    localTimeSpan.innerText = `Time: ${localTime}`
    const tempCSpan = document.createElement("span")
    tempCSpan.innerText = `Temperature:${tempC} °C`
    const windKphSpan = document.createElement("span")
    windKphSpan.innerText = `Wind: ${windKph}  km/h`
    const humiditySpan = document.createElement("span")
    humiditySpan.innerText = `Humidity: ${humidity} %`
    const feelsLikeSpan = document.createElement("span")
    feelsLikeSpan.innerText = `FeelsLike: ${feelsLike} °C`
    const uvSpan = document.createElement("span")
    uvSpan.innerText = `Uv index:  ${uv}`
    const Icon = document.createElement('img');
    Icon.src = icon
    

    weatherContainer.appendChild(countrySpan)
    weatherContainer.appendChild(nameSpan)
    
    weatherContainer.appendChild(localTimeSpan)
    weatherContainer.appendChild(tempCSpan)
    weatherContainer.appendChild(windKphSpan)
    weatherContainer.appendChild(humiditySpan)
    weatherContainer.appendChild(feelsLikeSpan)
    weatherContainer.appendChild(uvSpan)
    
    
}



GetWeather(SearchCity)