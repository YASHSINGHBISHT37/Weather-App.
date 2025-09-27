import React from 'react'

const AddCity = () => {
    return (
        <div className='w-screen h-auto p-2 z-9999 bg-[#1a1b1a] tracking-tight'>
            <h1 className='font-bold mb-4 text-[2.4vh] text-center'>Cities</h1>

            <div className='cont w-full h-full'>
                <div className='addCity w-full h-30 rounded-2xl border-1 border-white/30 mb-2.5 flex justify-between items-center cursor-pointer active:border-white/60 transition-all ease-in duration-75'>
                    <div className='w-full h-full pl-4 py-2 flex flex-col justify-between'>

                        <div className='temp justify-between items-center'>
                            <span className='text-[3.4vh] font-bold'>69°C</span>
                            <span className='ml-2 opacity-70 font-normal text-[2.2vh]'>Overcast</span>
                        </div>

                        <div className='leading-5'>
                            <p className='text-[2.4vh]'>Delhi, India</p>
                            <p className='opacity-70 text-[1.8vh]'>Time: 11:38 am</p>
                        </div>

                    </div>

                    <img className=' h-full' src="weather-icons/clear-day.svg" alt="" />
                </div>

                <div className='addCity w-full h-30 rounded-2xl border-1 border-white/30 mb-2.5 flex justify-between items-center cursor-pointer active:border-white/60 transition-all ease-in duration-75'>
                    <div className='w-full h-full pl-4 py-2 flex flex-col justify-between'>

                        <div className='temp justify-between items-center'>
                            <span className='text-[3.4vh] font-bold'>59°C</span>
                            <span className='ml-2 opacity-70 font-normal text-[2.2vh] tracking-tight'>Clear Sky</span>
                        </div>

                        <div className='leading-5'>
                            <p className='text-[2.4vh]'>Aya nagar, India</p>
                            <p className='opacity-70 text-[1.8vh]'>Time: 11:38 am</p>
                        </div>

                    </div>

                    <img className=' h-full' src="weather-icons/cloudy.svg" alt="" />
                </div>

                <div className='addCity w-full h-30 rounded-2xl border-1 border-white/30 mb-2.5 flex justify-between items-center cursor-pointer active:border-white/60 transition-all ease-in duration-75'>
                    <div className='w-full h-full pl-4 py-2 flex flex-col justify-between'>

                        <div className='temp justify-between items-center'>
                            <span className='text-[3.4vh] font-bold'>69°C</span>
                            <span className='ml-2 opacity-70 font-normal text-[2.2vh]'>Overcast</span>
                        </div>

                        <div className='leading-5'>
                            <p className='text-[2.4vh]'>Delhi, India</p>
                            <p className='opacity-70 text-[1.8vh]'>Time: 11:38 am</p>
                        </div>

                    </div>

                    <img className=' h-full' src="weather-icons/clear-day.svg" alt="" />
                </div>

                <div className='addCity w-full h-30 rounded-2xl border-1 border-white/30 mb-2.5 flex justify-between items-center cursor-pointer active:border-white/60 transition-all ease-in duration-75'>
                    <div className='w-full h-full pl-4 py-2 flex flex-col justify-between'>

                        <div className='temp justify-between items-center'>
                            <span className='text-[3.4vh] font-bold'>59°C</span>
                            <span className='ml-2 opacity-70 font-normal text-[2.2vh] tracking-tight'>Clear Sky</span>
                        </div>

                        <div className='leading-5'>
                            <p className='text-[2.4vh]'>Aya nagar, India</p>
                            <p className='opacity-70 text-[1.8vh]'>Time: 11:38 am</p>
                        </div>

                    </div>

                    <img className=' h-full' src="weather-icons/cloudy.svg" alt="" />
                </div>

                <div className='addCity w-full h-30 rounded-2xl border-1 border-white/30 mb-2.5 flex justify-between items-center cursor-pointer active:border-white/60 transition-all ease-in duration-75'>
                    <div className='w-full h-full pl-4 py-2 flex flex-col justify-between'>

                        <div className='temp justify-between items-center'>
                            <span className='text-[3.4vh] font-bold'>69°C</span>
                            <span className='ml-2 opacity-70 font-normal text-[2.2vh]'>Overcast</span>
                        </div>

                        <div className='leading-5'>
                            <p className='text-[2.4vh]'>Delhi, India</p>
                            <p className='opacity-70 text-[1.8vh]'>Time: 11:38 am</p>
                        </div>

                    </div>

                    <img className=' h-full' src="weather-icons/clear-day.svg" alt="" />
                </div>

                <div className='addCity w-full h-30 rounded-2xl border-1 border-white/30 mb-2.5 flex justify-between items-center cursor-pointer active:border-white/60 transition-all ease-in duration-75'>
                    <div className='w-full h-full pl-4 py-2 flex flex-col justify-between'>

                        <div className='temp justify-between items-center'>
                            <span className='text-[3.4vh] font-bold'>59°C</span>
                            <span className='ml-2 opacity-70 font-normal text-[2.2vh] tracking-tight'>Clear Sky</span>
                        </div>

                        <div className='leading-5'>
                            <p className='text-[2.4vh]'>Aya nagar, India</p>
                            <p className='opacity-70 text-[1.8vh]'>Time: 11:38 am</p>
                        </div>

                    </div>

                    <img className=' h-full' src="weather-icons/cloudy.svg" alt="" />
                </div>
            </div>

            <div className="add fixed backdrop-blur-[1vh] bottom-20 right-4 p-6 w-16 h-16 rounded-2xl flex justify-center items-center cursor-pointer border-1 bg-blue-400/80 active:bg-blue-400 border-white/30 active:border-white/70 group">
                <img className='opacity- group-active:opacity-100' src="icons/add.png" alt="add" />
            </div>
        </div>
    )
}

export default AddCity
