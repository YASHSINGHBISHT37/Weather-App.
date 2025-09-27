import React, { useState } from 'react'
import Nav from '../components/home/Nav'
import Menu from '../components/home/Menu'
import Temp from '../components/home/Temp'
import Forcast from '../components/home/Forecast'
import SunUpDown from '../components/home/SunUpDown'
import OtherDetails from '../components/home/OtherDetails'
import WeatherData from '../components/data/WeatherData'
import SetCity from '../assets/SetCity'
import Setting from '../menu/Setting'
import About from '../menu/About'
import AddCity from '../menu/AddCity'

// import Loading from '../assets/Loading'

const Home = () => {
  const [city, setCity] = useState('')

  return (
    // bg-transparent bg-gradient-to-b from-blue-500 to-blue-950
    <div className='relative w-screen h-screen bg-[#1a1b1a] flex items-center flex-col'>
        <Nav setCity={setCity} />
        {/* <Setting/> */}
        {/* <About/> */}
        {/* <AddCity/> */}

        {/* <Loading /> */}
        <WeatherData city={city}>
          <Temp />
          <Forcast />
          <SunUpDown />
          <OtherDetails />
          <Menu />
          {/* <SetCity /> */}
        </WeatherData>

    </div>
  )
}

export default Home
