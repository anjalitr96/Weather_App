import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [city,setCity] = useState('Your City')
  const [temperature,setTemperature] =useState(0)
  const [loading,setLoading] =useState(false)

  
  
  function selectCity(cityName,latitude,longitude){
    setLoading(true)
    setCity(cityName)

  axios.get('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
     .then(data=>{
      const temperatureValue =data.data.current_weather.temperature
      setTemperature(temperatureValue)
      setLoading(false)
     })
     .catch(error=>{
      console.log(error)
     })
  
  }
    


  return (
    <div className="App" class="flex flex-col justify-center items-center pt-40 bg-cyan-300 pb-64">
        <h1 class="font-bold text-orange-600 pb-8 text-2xl">My weather App</h1>
        <img class="w-80 pb-8 rounded-lg" alt="weather_img" src='https://lh3.googleusercontent.com/ZcuuJFjzq62BKHGK2YZaTsoqQ6Dvkrk35qXvMihmbk0cHsIp0OUgIZr0FfsoRHxHJE6QcBWQCQXzMl7e79fusG8yWiWq6XOyySuFCw=h200-rw' />
      <div class="flex flex-col justify-between items-center md:flex-row justify-center items-center  ">
        <button class="text-blue-100  pl-8 pr-8 text-center text-2xl bg-orange-600 hover:bg-blue-700 m-1 " onClick={()=>{selectCity('Cochi',9.93,76.26)}}>Cochi</button>
        <button  class="text-blue-100  pl-8 pr-8 text-center text-2xl bg-orange-600 hover:bg-blue-700 m-1" onClick={()=>{selectCity('Trivandrum',8.52,76.93)}}>Trivandrum</button>
        <button  class="text-blue-100  pl-8 pr-8 text-center text-2xl bg-orange-600 hover:bg-blue-700 m-1" onClick={()=>{selectCity('Calicut',11.25,75.78)}}>Calicut</button>
      </div>
      {loading?<p>Loading...</p>:<p class="text-orange-600 text-center pt-8 text-xl">The current temperature at <br></br><span class="text-3xl font-semibold text-blue-800" id="city">{city}</span> &nbsp;is &nbsp;<span class="text-3xl font-semibold text-blue-800" id="temp">{temperature}°C</span> </p>}
      
    </div>
  );
}

export default App;
