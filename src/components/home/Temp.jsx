import React, { useContext } from 'react'
import { WeatherContent } from '../data/WeatherData'
// import Loading from '../../assets/Loading'
import { weatherCodes } from '../../assets/WeatherCodes'

const Temp = () => {
  const { data } = useContext(WeatherContent)
  if (!data) return <h1>Temp Loading...</h1>

  const localTime = data.current_weather.time
  const dateObj = new Date(localTime)
  const dayTime = dateObj.toLocaleDateString([], {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  })

  const weatherCode = data.current_weather.weathercode;
  const condition = weatherCodes[weatherCode] || "Unknown";
  const feelsLike = (data.hourly.apparent_temperature[0]).toFixed(0)

  const temp = data.current_weather.temperature
  const maxTemp = (data.daily.temperature_2m_max[0]).toFixed(0);
  const minTemp = (data.daily.temperature_2m_min[0]).toFixed(0);



  return (
    <div className='w-screen h-auto flex justify-center pt-16'>
      <div className='w-90 h-50 bg-transparent bg-gradient-to-b to-blue-400 from-[#1a1b1a] rounded-2xl flex justify-between items-center border- border-white/30'>

        <div className='w-1/2 h-full flex flex-col justify-between p-5 py-3 pr-0 text-white'>

          <div className='leading-5'>
            <div className="day-date opacity-70">{dayTime }</div>
            <div className="condition font-bold">{condition}</div>
            <div className="feels flex items-center">Feels<span className='w-1 h-1 pt-1 rounded-full m-2 bg-amber-300'></span>{feelsLike}°C</div>
          </div>

          <div>
            <div className="temp text-[5vh] font-bold leading-9.5">{temp}°C</div>
            <div className="max-min opacity-60">{maxTemp}°C / {minTemp}°C</div>
          </div>
        </div>

        <div className='w-1/2 h-full flex justify-center items-center'>
          <img src="weather-icons/clear-day.svg" /></div>

      </div>
    </div>
  )
}

export default Temp
