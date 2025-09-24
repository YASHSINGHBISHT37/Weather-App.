import React, { useContext } from 'react'
import { WeatherContent } from '../data/WeatherData'

const SunUpDown = () => {
    const { data } = useContext(WeatherContent)
    if (!data) return <p >SunUpDown Loading....</p>


    function formatTime(time) {
        return new Date(time).toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        }).replace('', '').toLowerCase()
    }

    const sunrise = formatTime(data.daily.sunrise[0])
    const sunset = formatTime(data.daily.sunset[0])



    return (
        <div className='w-screen h-auto flex justify-center pt-3'>
            <div className='w-90 h-18 bg-[#1a1b1a] rounded-2xl p-1 border-1 border-white/30'>
                <div className='w-full h-full flex justify-between items-center px-4 pr-2 py-5 rounded-[2h] '>
                    <div className='sunrise flex justify-between items-center'>
                        <div className='sunriseTime'>
                            <p className='font-bold opacity-60 leading-3 pt-2'>Sunrise</p>
                            <p className='text-2xl'>{sunrise}</p>
                        </div>
                        <img src="weather-icons/sunrise.svg" className='w-18 h-18 mt-1' />
                    </div>

                    <div className='w-[.1vh] h-full bg-white/40 rounded-2xl'></div>

                    <div className='sunset flex justify-between items-center'>
                        <div className='sunsetTime'>
                            <p className='font-bold opacity-60 leading-3 pt-2'>Sunset</p>
                            <p className='text-2xl'>{sunset}</p>
                        </div>
                        <img src="weather-icons/sunset.svg" className='w-18 h-18 mt-1' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SunUpDown
