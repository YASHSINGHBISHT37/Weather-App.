import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Menu() {
    const [active, setActive] = useState('weather')
    const [themes, setThemes] = useState('dark')

    return (
        <div className=' w-screen h-auto flex justify-center items-center'>
            {/* <div className='Aboutt fixed z-9999 bg-amber-00 w-90 h-90 top-10 opacity-40'>
                <h1 className='mb-1 font-bold'>About :</h1>
                <p className='leading-4 pr-2'>This Weather App gives you real-time forecasts, sunrise & sunset details,
                    and other useful information for your location.
                    Built with modern technologies, it’s designed to be fast, minimal,
                    and easy to use anywhere.</p>
            </div> */}
            <div className='w-screen h-screen absolute top-0 bg-transparent bg-gradient-to-b from-blue-300 to-blue-900 z-[99] transition-all duration-400 ease-in-out'
                style={{
                    opacity: active === 'menu' ? .1 : 0,
                    pointerEvents: active === 'menu' ? 'auto' : 'none'
                }}>
            </div>

            <div className={`w-78 h-13 z-[9999] rounded-full  backdrop-blur-3xl fixed bottom-3 flex justify-between items-center border-1 border-white/30`}
                style={{ backgroundColor: active === 'menu' ? '#1a1b1a' : active === 'themes' ? '#1a1b1a' : 'transparent' }}>

                <div className={`highLight absolute right-2 w-24 h-9 rounded-full bg-blue-400 transition-all duration-300 ease-in-out `}
                    style={{ transform: active === 'weather' ? 'translateX(-207%)' : active === 'menu' ? 'translateX(-103%)' : 'translateX(0%)' }}>
                </div>


                <div className='weather relative flex justify-center items-center w-full cursor-pointer' onClick={() => setActive('weather')}>
                    <img src="weather-icons/clear-day.svg" className='w-4 h-4 mx-1' />
                    <p className='text-1xl'>Weather</p>
                </div>

                {/* <div className='w-0.5 h-full bg-white/50 rounded-2xl'></div> */}

                <div className='Menu relative flex justify-center items-center w-full cursor-pointer' onClick={() => setActive('menu')}>
                    <div className="menu w-3 h-[1vh] gap-0.5 flex flex-col cursor-pointer mr-2">
                        <div className='bar w-auto h-1/3 rounded-full transition-colors duration-300 bg-white'></div>
                        <div className='bar w-auto h-1/3 rounded-full transition-colors duration-300 bg-white'></div>
                        <div className='bar w-auto h-1/3 rounded-full transition-colors duration-300 bg-white'></div>
                    </div>
                    <p className='text-1xl'>Menu</p>
                </div>

                {/* <div className='w-0.5 h-full bg-white/50 rounded-2xl'></div> */}


                <div className='weather relative flex justify-center items-center w-full cursor-pointer' onClick={() => setActive('themes')}>
                    <div className='w-4 h-4 relative m-0.5 pt-0.5'>
                        {/* <img src="icons/dark.png" className='w-3.5 h-3.5 absolute' /> */}
                        <img src="icons/light.png" className='w-3.5 h-3.5 absolute' />
                    </div>
                    <p className='text-1xl pr-1'>themes</p>
                </div>


            </div>

            {/* Extended Themes */}
            <div className={`extended-themes w-screen h-screen py-3 px-3.5 z-[999] fixed top-0 transition-all duration-300 ease-in-out flex justify-center`}
                style={{
                    backgroundColor: active === 'themes' ? 'rgba(18, 18, 18, 0.2)' : 'transparent',
                    backdropFilter: active === 'themes' ? 'blur(1.6vh)' : 'blur(0)',
                    opacity: active === 'themes' ? 1 : 0,
                    pointerEvents: active === 'themes' ? 'auto' : 'none',
                }}>

                <div className='themes-cont w-90 h-14 bottom-20 pr-6 flex flex-col justify-between items-end text-white fixed transition-all duration-400 ease-in-out'>
                    <div className='w-27 bg-white/8 border-1 rounded-2xl border-white/30 p-0.5 flex flex-col justify-between gap-0.5'
                        style={{ backdropFilter: active === 'themes' ? 'blur(6vw)' : 'blur(0)' }}
                    >

                        <div className={`themeHighLight absolute w-25.5 h-7 rounded-[1.8vh] bg-blue-400 transition-all duration-300 ease-in-out -z-1`}
                            style={{ transform: themes === 'dark' ? 'translateY(0%)' : 'translateY(117%)' }}>
                        </div>

                        <h1 className='cursor-pointer rounded-[1.4vh] pl-2 py-0.5' onClick={() => setThemes('dark')}>Dark</h1>
                        <div className='w-full h-[.1vh] bg-white/50 rounded-2xl'></div>
                        <h1 className='cursor-pointer rounded-[1.4vh] pl-2 py-0.5' onClick={() => setThemes('light')}>Light</h1>

                    </div>
                </div>

            </div>

            {/* Extended Menu */}
            <div className={`extended-menu w-screen h-screen py-3 px-3.5 z-[999] fixed top-0 transition-all duration-400 ease-in-out flex justify-center`}
                style={{
                    backgroundColor: active === 'menu' ? 'rgba(18, 18, 18, 0.2)' : 'transparent',
                    backdropFilter: active === 'menu' ? 'blur(1.6vh)' : 'blur(0)',
                    opacity: active === 'menu' ? 1 : 0,
                    pointerEvents: active === 'menu' ? 'auto' : 'none',
                }}>


                <div className={`menu-cont w-90 h-84 bg-[#1a1b1a]/10 backdrop-blur-[0vw] rounded-2xl border-1 border-white/30 flex flex-col justify-between px-5 py-2 text-white fixed transition-all duration-400 ease-in-out`}
                    style={{ bottom: active === 'menu' ? '9vh' : '-60%' }}>


                    <div className="top w-full h-full flex flex-col">

                        <div className="top justify-between items-center">
                            <div className="flex justify-between items-start">
                                <p className="font-bold text-[3vh] text-white/60 mb-4">Links</p>
                            </div>
                        </div>

                        <span className="overflow-hidden">
                            <a href="mailto:yashbisht0007@gmail.com"
                                className="font-bold text-5xl active:text-blue-400 gap-3 ml-[-6.2vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="email" className="w-10 h-10 mt-1" />Email
                            </a>
                        </span>

                        <span className="overflow-hidden">
                            <a href="https://github.com/YASHSINGHBISHT37" target="_blank"
                                className="font-bold text-5xl active:text-blue-400 gap-3 ml-[-6.2vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="Github" className="w-10 h-10 mt-1 " />Github
                            </a>
                        </span>

                        <span className="overflow-hidden">
                            <a href="https://linkedin.com/in/yash-singh-bisht-349960295" target="_blank"
                                className="font-bold text-5xl active:text-blue-400 gap-3 ml-[-6.2vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="Linkdin" className="w-10 h-10 mt-1" />Linkedin
                            </a>
                        </span>

                        <span className="overflow-hidden">
                            <a href="https://instagram.com/thunderbeast37" target="_blank"
                                className="font-bold text-5xl active:text-blue-400 gap-3 ml-[-6.2vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="instagram" className="w-10 h-10 mt-1" />Instagram
                            </a>
                        </span>
                    </div>

                    <div className="bottom border-t-[.1vh] border-white/50 w-full h-8 px-1 pt-1 font-bold flex justify-between items-center text-[1.8vh]">
                        <p className="text-white">Website by&nbsp;<span className="text-blue-300">Yash Singh Bisht.</span></p>
                        {/* <p className="text-white" onClick={() => { }}>Themes</p> */}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Menu
