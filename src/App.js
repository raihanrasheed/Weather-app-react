import React from "react";
 import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { getWeatherData } from './data/Weatherapi';

function App() {
  const [weatherdata, setWeatherdata] = useState(null);
  const [city,setCity] = useState('Lahore');
  const [loading,setLoading] = useState(false);

const getData=async ()=>{
  try{
  const data=await getWeatherData(city);
  setWeatherdata(data);
  console.log(data);
  }
  catch(err){
    console.log(err.message);
  }
}

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div>{}</div>
      <input
        type="text"
        placeholder=" Enter your city"
        onChange={(e) => setCity(e.target.value)}
      
      ></input>
      <button
      onClick={()=>getData()}
      >Search</button>
      { weatherdata!==null ? (  
        <div className="container">
          <img src={`https://openweathermap.org/img/w/${weatherdata.list[0].weather[0].icon}.png`} />
         <div> <h4>{weatherdata.list[0].weather[0].main}</h4> </div>
      <div className="temperature"> <h3> {weatherdata.list[0].main.temp}&deg;C</h3></div>
      <div className="location"><h3>{weatherdata.city.name} || {weatherdata.city.country}</h3> </div>
      <div className="tempreture-range"> <h5>Min:{weatherdata.list[0].main.temp_min}&deg;C || Max: {weatherdata.list[0].main.temp_max}&deg;C || Humidity: {weatherdata.list[0].main.humidity}% </h5></div>
      <div className="pressure"> <h3>pressure: {weatherdata.list[0].main.pressure}</h3></div>
      </div> ): 
      <div>
      The city does not exist
      </div>
      }
   
 
    </div>
  );
}

export default App;
