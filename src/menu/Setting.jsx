import React, { useState } from 'react'

const Setting = () => {

    const [themes, setThemes] = useState('')
    const openTab = 'next.png'
    const imgWH = '3'
    const selImgWH = '4.5'


    return (
        <div className='w-screen h-screen bg-[#1a1b1a] z-9 flex flex-col items-center px-2 py-4 fixed'>
            <h1 className='font-bold'>Settings</h1>

            <div className='w-full h-full mt-4 text-white/90'>

                <div className='Appearence border-1 w-full h-14 rounded-2xl border-white/30 flex justify-between items-center px-4 mb-2 cursor-pointer active:border-white/60 active:bg-white/10' onClick={() => setThemes()}>
                    <div className='flex justify-center items-center'>
                        <img className={`w-${selImgWH} h-${selImgWH} mr-2`} src="icons/Appearence.png" />
                        <h1>Appearence</h1>
                    </div>
                    <img className={`w-${imgWH} h-${imgWH}`} src={`icons/${openTab}`} />
                </div>

                <div className='Language border-1 w-full h-14 rounded-2xl border-white/30 flex justify-between items-center px-4 mb-2 cursor-pointer active:border-white/60 active:bg-white/10' onClick={() => setLanguage()}>
                    <div className='flex justify-center items-center'>
                        <img className={`w-${selImgWH} h-${selImgWH} mr-2`} src="icons/language.png" />
                        <h1>Language</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <h1 className='opacity-70'>English</h1>
                        <img className={`w-${imgWH} h-${imgWH} ml-2`} src={`icons/${openTab}`} />
                    </div>
                </div>

                <div className='About border-1 w-full h-14 rounded-2xl border-white/30 flex justify-between items-center px-4 mb-2 cursor-pointer active:border-white/60 active:bg-white/10' onClick={() => setAbout()}>
                    <div className='flex justify-center items-center'>
                            <img className={`w-${selImgWH} h-${selImgWH} mr-2`} src="icons/about.png" />
                        <h1>About</h1>
                    </div>
                    <img className={`w-${imgWH} h-${imgWH}`} src={`icons/${openTab}`} />
                </div>

                <div className='Github border-1 w-full h-14 rounded-2xl border-white/30 flex justify-between items-center px-4 mb-2 cursor-pointer active:border-white/60 active:bg-white/10' onClick={() => setAbout()}>
                    <div className='flex justify-center items-center'>
                            <img className={`w-${selImgWH} h-${selImgWH} mr-2`} src="icons/github.png" />
                        <h1>Project on Github</h1>
                    </div>
                    <img className={`w-${imgWH} h-${imgWH}`} src={`icons/${openTab}`} />
                </div>

                <div className='Version border-1 w-full h-14 rounded-2xl border-white/30 flex justify-between items-center px-4 mb-2'>
                    <div className='flex justify-center items-center'>
                            <img className={`w-${selImgWH} h-${selImgWH} mr-2`} src="icons/version.png" />
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
