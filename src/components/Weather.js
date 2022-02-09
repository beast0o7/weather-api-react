import React, { useState, useEffect, useRef } from 'react';
import WeatherCard from './WeatherCard';

const Weather = (props) => {
  const [weather, setWeather] = useState({});
  let { query, setQuery } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    searchedWeather();
    setQuery("")
  }

  const handleKeyPress = (e) => {
    
    if(e.key === 'Enter'){
      handleSubmit();
      e.preventDefault();
    }
  }
  const firstUpdate = useRef(true);
  // useEffect(() => {
  //   if (firstUpdate.current) {
  //     firstUpdate.current = false;
  //     return;
  //   }
  //   // console.log(count);
    
  // });
  

  const searchedWeather = async () => {
    const apiUrl = await `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json()
    setWeather(parsedData)

  }

  useEffect(() => {if (firstUpdate.current) {
    firstUpdate.current = false;
    return;
  }
    searchedWeather();

  }, []);




  return (
    <>
      <div className='container'>
        <form className="form-inline my-2 my-lg-0">
          <input autoComplete="off" onChange={handleChange} id="inputsearch" value={query} onKeyPress={handleKeyPress} className="form-control rounded-pill mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button onClick={handleSubmit} id="searchbtn" className="d-flex btn btn-outline-dark rounded-pill mx-auto my-3" type="button" ><i className="fas fa-search"></i></button>
        </form>
      </div>
      {(typeof weather.main != "undefined") ? (
        <WeatherCard temp={weather.main.temp} name={weather.name} desc={weather.weather[0].main} country={weather.sys.country} icon={weather.weather[0].icon} feelsLike={weather.main.feels_like} maxTemp={weather.main.temp_max}
           minTemp={weather.main.temp_min}
        />) : 
        (<div className='container'>
          <h3 className='text-center'>Search for a city to show Weather</h3>
        </div>)}

    </>
  )
};

export default Weather;
