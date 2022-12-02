import React from 'react'
import  axios from 'axios';

const baseUrl='https://api.openweathermap.org/data/2.5/forecast?';
  const apiKey='50d6236e3b49b3b4b9a14bc7102a2c84';


 export const getWeatherData=async(cityname)=> {

    try{
       const {data}= await axios.get(baseUrl+`q=${cityname}&cnt=8&units=metric&appid=${apiKey}`);
      return data;
    }
    catch(error){
        console.log(error);
    }
}
