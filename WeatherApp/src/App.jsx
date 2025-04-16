import React, { useState } from 'react';

const API_KEY = 'f78088a43cb7263954d3b4d6d3119918'; 

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    try {
      setError('');
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setError(data.message);
        setWeather(null);
      }
    } catch (err) {
      setError('Something went wrong!');
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Weather App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {weather && (
          <div className="text-center">
            <h2 className="text-xl font-semibold">{weather.name}</h2>
            <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
            <p className="capitalize">{weather.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather icon"
              className="mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
