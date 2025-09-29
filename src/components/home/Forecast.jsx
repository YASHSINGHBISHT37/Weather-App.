import React, { useContext } from 'react'
import { WeatherContent } from '../data/WeatherData'
import { weatherCodes } from '../../assets/WeatherCodes'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const Forcast = () => {
    const { data } = useContext(WeatherContent)
    if (!data) return <p>Forecast Loading....</p>

    const days = data.daily.time

    const dailyWeatherCode = data.daily.weathercode;

    return (
        <div className='w-screen h-auto flex justify-center bg-amber-00 mt-3 px-2'>
            <Swiper slidesPerView={'auto'} spaceBetween={6} freeMode={true} modules={[FreeMode]} className="mySwiper forecast-con bg w-full h-36 bg-[#1a1b1a] rounded-2xl !p-1 border- border-white/30">

                {days.map((date, index) => {
                    const maxTemp = data.daily.temperature_2m_max[index].toFixed(0);
                    const minTemp = data.daily.temperature_2m_min[index].toFixed(0);

                    const dateObj = new Date(date);
                    const day = dateObj.toLocaleDateString([], { weekday: 'short' });
                    const dayNumber = dateObj.getDate();
                    const formattedDay = `${day}, ${dayNumber}`;

                    const weatherCode = dailyWeatherCode[index]
                    const icon =weatherCodes[weatherCode]?.icon || 'clear-day'

                    return (
                        <SwiperSlide
                            key={index}
                            className={`relative !flex flex-col justify-between items-center !w-24 !h-full !px-3 !py-2 rounded-2xl ${index === 0 ? 'border-[0vh] border-white/50 bg-transparent bg-gradient-to-b from-blue-400 to-[#1a1b1a]' : 'border-[.01vh] border-white/50'
                                }`}
                        >
                            <p className='font-bold text-[2vh] text-white leading-4'>{formattedDay}</p>
                            <img src={`weather-icons/${icon}.svg`} className="w-16 h-16 mt-[-1vh]" />
                            <div className="w-full flex justify-between px-1 text-[1.6vh]">
                                <p className="font-bold text-white -mt-1.5">{minTemp}°C</p>
                                <p className="font-bold text-white/60 -mt-1.5">{maxTemp}°C</p>
                            </div>
                        </SwiperSlide>
                    );
                })}


            </Swiper>
        </div >
    )
}

export default Forcast
