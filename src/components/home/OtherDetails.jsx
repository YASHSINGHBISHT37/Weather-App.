import React, { useContext } from 'react'
import { WeatherContent } from '../data/WeatherData'


const OtherDetails = () => {
  const { data } = useContext(WeatherContent)
  if (!data) return <p>OtherDetailes Loading....</p>

  const wind = (data.current_weather.windspeed).toFixed(0)
  const feelsLike = (data.hourly.apparent_temperature[0]).toFixed(0)
  const humidity = data.hourly.relativehumidity_2m[0]
  const cloud = data.hourly.cloudcover[0]
  const airPressure = data.hourly.surface_pressure[0]
  const visibility = (data.hourly.visibility[0] / 1000).toFixed(0)

  return (
    <div className='w-screen h-auto flex justify-center bg-amber-00 mt-3 mb-18'>
      <div className='w-90 h-54 bg-transparent bg-gradient-to-b from-blue-400 to-[#1a1b1a] rounded-2xl flex flex-wrap justify-between items-cnter pb- border- border-white/30 p-2'>
        <div className='bg-[#1a1b1a]/0 w-full rounded-2xl flex flex-col justify-between gap-1 '>

          <div className='w-full h-full flex justify-between items-center gap-1'>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border-1 border-white/20 bg-[#1a1b1a] rounded-2xl'>
              <img src="weather-icons/wind.svg" className='w-10 h-10' />
              <p>{wind} <span className='opacity-80 text-[1.6vh]'>km/h</span></p>
              <p className='font-bold text-[1.6vh] opacity-50'>Wind</p>
            </div>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border-1 border-white/20 bg-[#1a1b1a] rounded-2xl'>
              <img src="weather-icons/thermometer.svg" className='w-10 h-10' />
              <p>{feelsLike} <span className='opacity-80 text-[1.6vh]'>°C</span></p>
              <p className='font-bold text-[1.6vh] opacity-50'>Feels Likes</p>
            </div>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border-1 border-white/20 bg-[#1a1b1a] rounded-2xl'>
              <img src="weather-icons/humidity.svg" className='w-10 h-10' />
              <p>{humidity}<span className='opacity-80 text-[1.6vh]'>%</span></p>
              <p className='font-bold text-[1.6vh] opacity-50'>Humidity</p>
            </div>

          </div>

          <div className='w-full h-full flex justify-between items-center gap-1'>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border-1 border-white/20 bg-[#1a1b1a] rounded-2xl'>
              <img src="weather-icons/cloudy.svg" className='w-10 h-10' />
              <p>{cloud}<span className='opacity-80 text-[1.6vh]'>%</span></p>
              <p className='font-bold text-[1.6vh] opacity-50'>Cloud</p>
            </div>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border-1 border-white/20 bg-[#1a1b1a] rounded-2xl'>
              <img src="weather-icons/ap.png" className='w-10 h-10 p-2' />
              <p>{airPressure} <span className='opacity-80 text-[1.6vh]'>hPa</span></p>
              <p className='font-bold text-[1.6vh] opacity-50'>Air pressure</p>
            </div>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border-1 border-white/20 bg-[#1a1b1a] rounded-2xl'>
              <img src="weather-icons/visibility.png" className='w-10 h-10 p-2' />
              <p>{visibility} <span className='opacity-80 text-[1.6vh]'>km</span></p>
              <p className='font-bold text-[1.6vh] opacity-50'>Visibility</p>
            </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default OtherDetails
