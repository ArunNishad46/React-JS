import React, { useEffect, useState } from 'react'

function WeatherApi() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f1d517e814bfb0916c93c0b78c5c196e`)
        .then(response => response.json())
        .then(data => setWeather(data))
      }) 
    }
  },[])

  return (
    <div>
      {
        weather ? (
          <div>
            <h1>Current Weather</h1>
            <p>City: {weather.name}</p>
            <p>Temperature: {weather.main.temp}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  )
}

export default WeatherApi