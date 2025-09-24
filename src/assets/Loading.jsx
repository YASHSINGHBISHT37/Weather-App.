import React from 'react'

const Loading = () => {
    return (
        <div className='flex items-center justify-center w-screen h-screen absolute top-0 bg-[#1a1b1a] z-99'>
            {/* <div className='flex items-center justify-center ite'>
                <img src="weather-icons/clear-day.svg" alt="sun-loading" className='w-6 h-6' />
                <p class="tracking-tight leading-[2vh] mt-[vw] text-center text-[2.2vh] text-white/90">Loading...</p>
            </div> */}

            <div className='flex items-center justify-center'>
                <img src="weather-icons/clear-day.svg" alt="sun-loading" className='w-6 h-6' />
                <p className="tracking-tight leading-[2vh] mt-[vw] text-center text-[2.2vh] text-white/90 opacity-60">Search your City...</p>
            </div>
        </div>
    )
}

export default Loading
