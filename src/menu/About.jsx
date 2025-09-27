import React, { useState } from 'react'

const About = () => {

    const [active] = useState(null)

    return (
        <div className={`About w-screen h-[100vh] p-4 z-[999] backdrop-blur-[1.6vh] transition-all duration-300 ease-in-out flex flex-col items-start`}
        // style={{
        //     backgroundColor: active === 'themes' ? 'rgba(18, 18, 18, 0.2)' : 'transparent',
        //     backdropFilter: active === 'themes' ? 'blur(1.6vh)' : 'blur(0)',
        //     opacity: active === 'themes' ? 1 : 0,
        //     pointerEvents: active === 'themes' ? 'auto' : 'none',
        // }}
        >
            <button className='border-1 border-white/30 rounded-2xl text-[1.8vh] px-3 h- pb- cursor-pointer active:border-white/60 active:bg-white/10 mb-10 ml-0'>Back</button>


            <div className='About bg-amber-00 w-screen  opacity-40 px-4'>

                <h1 className='mb-1 font-bold'>About :</h1>
                <p className='leading-4 pr-2'>This Weather App gives you real-time forecasts, sunrise & sunset details,
                    and other useful information for your location.
                    Built with modern technologies, it’s designed to be fast, minimal,
                    and easy to use anywhere.</p>

                <h1 className='mb-1 font-bold mt-4'>Version :</h1>
                <p className='leading-4 pr-2'>1.0</p>
            </div>

        </div>
    )
}

export default About
