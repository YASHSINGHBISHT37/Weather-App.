import React, { useState } from 'react'

const Setting = () => {

    const [themes, setThemes] = useState('')
    const openTab = 'clear-day'
    const imgWH = '7'


    return (
        <div className='w-screen h-screen bg-[#1a1b1a] z-9 flex flex-col items-center p-4'>
            <h1 className='font-bold opacity-80'>Settings</h1>

            <div className='w-full h-full mt-4'>

                <div className='Themes border-1 w-full h-14 rounded-2xl border-white/30 flex justify-between items-center px-4 mb-2 cursor-pointer active:border-white/60 active:bg-white/10' onClick={() => setThemes()}>
                    <div className='flex justify-center items-center'>
                        <img className='w-7 h-7 mr-2' src="weather-icons/clear-day.svg" />
                        <h1>Themes</h1>
                    </div>
                    <img className={`w-${imgWH} h-${imgWH}`} src={`weather-icons/${openTab}.svg`} />
                </div>

                <div className='Language border-1 w-full h-14 rounded-2xl border-white/30 flex justify-between items-center px-4 mb-2 cursor-pointer active:border-white/60 active:bg-white/10' onClick={() => setLanguage()}>
                    <div className='flex justify-center items-center'>
                        <img className='w-7 h-7 mr-2' src="weather-icons/clear-day.svg" />
                        <h1>Language</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <h1 className='opacity-70'>English</h1>
                        <img className={`w-${imgWH} h-${imgWH} ml-2`} src={`weather-icons/${openTab}.svg`} />
                    </div>
                </div>

                <div className='About border-1 w-full h-14 rounded-2xl border-white/30 flex justify-between items-center px-4 mb-2 cursor-pointer active:border-white/60 active:bg-white/10' onClick={() => setAbout()}>
                    <div className='flex justify-center items-center'>
                        <img className='w-7 h-7 mr-2' src="weather-icons/clear-day.svg" />
                        <h1>About</h1>
                    </div>
                    <img className={`w-${imgWH} h-${imgWH}`} src={`weather-icons/${openTab}.svg`} />
                </div>

                <div className='Github border-1 w-full h-14 rounded-2xl border-white/30 flex justify-between items-center px-4 mb-2 cursor-pointer active:border-white/60 active:bg-white/10' onClick={() => setAbout()}>
                    <div className='flex justify-center items-center'>
                        <img className='w-7 h-7 mr-2' src='weather-icons/clear-day.svg' />
                        <h1>Project on Github</h1>
                    </div>
                    <img className={`w-${imgWH} h-${imgWH}`} src={`weather-icons/${openTab}.svg`} />
                </div>

                <div className='Version border-1 w-full h-14 rounded-2xl border-white/30 flex justify-between items-center px-4 mb-2'>
                    <div className='flex justify-center items-center'>
                        <img className='w-7 h-7 mr-2' src="weather-icons/clear-day.svg" />
                        <h1>Version</h1>
                    </div>
                    <h1>1.0</h1>
                </div>


            </div>

            <div className='flex justify-center items-center text-[1.6vh]'>
                <span className='opacity-70 mr-0.5'>Data provided by </span>
                <span className='text-[vh] tracking-tight text-bl font-bold'>Open-Meteo</span>
            </div>

        </div>
    )
}

export default Setting
