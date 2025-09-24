import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import LocationMarker from './LocationMarker.jsx'



const SetCity = () => {
    const [focus, setFocus] = useState({ search: false, lat: false, lon: false, city: false, district: false })

    const handleFocus = (field) => setFocus(prev => ({ ...prev, [field]: true }))
    const handleBlur = (field) => setFocus(prev => ({ ...prev, [field]: false }))

    return (
        <div className="w-screen h-screen absolute top-0 z-[9999] flex flex-col justify-end items-center bg-[#1a1b1a] py-2">

            <div className='cont w-90 bg-amber-00'>
                <div className='map bg-amber-00 pt-10'>
                    <p class="tracking-tight leading-[2vh] text-center text-white/90 ">Find On Map</p>

                    <div className='w-90 h-80 rounded-2xl flex items-center flex-col mt-2 border-1 border-white/30'></div>

                </div>


                <div className='seacrhCity w-90 flex flex-col gap-2.5 mt-6'>
                    <div className="bg-[#1a1b1a] w-full h-auto rounded-2xl p-2 py- flex flex-col gap-2 text-white/80 border-1 border-white/20">
                        <h1 className="text-center font-bold my-2 text-white text-[2vh]">Find Your City</h1>
                        <h1></h1>

                        {/* Search */}
                        <div className="search bg-[#1a1b1a] flex items-center px-4 rounded-[2.5vh] cursor-pointer h-12 w-full border-1 border-white/30">
                            <img src="icons/globe-search.png" className={`w-4.5 h-4.5 mr-1.5 ${focus.search ? 'opacity-80' : 'opacity-45'}`} />
                            <input type="text" placeholder="Search..." className="w-full outline-0" onFocus={() => handleFocus('search')} onBlur={() => handleBlur('search')} />
                        </div>

                        {/* Latitude & Longitude */}
                        <div className="text-[2.1vh] flex gap-2">
                            <div className="Latitude bg-[#1a1b1a] flex items-center px-4 rounded-[2.5vh] cursor-pointer h-12 w-full border-1 border-white/30">
                                <img src="icons/lat-lon.png" className={`w-4 h-4 mr-1.5 rotate-90 ${focus.lat ? 'opacity-80' : 'opacity-45'}`} />
                                <input type="tel" placeholder="Latitude" className="w-full outline-0" onFocus={() => handleFocus('lat')} onBlur={() => handleBlur('lat')} />
                            </div>
                            <div className="Longitude bg-[#1a1b1a] flex items-center px-4 rounded-[2.5vh] cursor-pointer h-12 w-full border-1 border-white/30">
                                <img src="icons/lat-lon.png" className={`w-4 h-4 mr-1.5 ${focus.lon ? 'opacity-80' : 'opacity-45'}`} />
                                <input type="tel" placeholder="Longitude" className="w-full outline-0" onFocus={() => handleFocus('lon')} onBlur={() => handleBlur('lon')} />
                            </div>
                        </div>

                        {/* City */}
                        <div className="city bg-[#1a1b1a] flex items-center px-4 rounded-[2.5vh] cursor-pointer h-12 w-full border-1 border-white/30">
                            <img src="icons/city.png" className={`w-4.5 h-4.5 mr-1.5 ${focus.city ? 'opacity-80' : 'opacity-45'}`} />
                            <input type="text" placeholder="City" className="w-full outline-0" onFocus={() => handleFocus('city')} onBlur={() => handleBlur('city')} />
                        </div>

                        {/* District */}
                        <div className="district bg-[#1a1b1a] flex items-center px-4 rounded-[2.5vh] cursor-pointer h-12 w-full border-1 border-white/30">
                            <img src="icons/district.png" className={`w-4.5 h-4.5 mr-1.5 ${focus.district ? 'opacity-80' : 'opacity-45'}`} />
                            <input type="text" placeholder="District" className="w-full outline-0" onFocus={() => handleFocus('district')} onBlur={() => handleBlur('district')} />
                        </div>

                        {/* Done button */}
                        <button className=" w-full h-14 rounded-full tracking- text-[2.1vh] cursor-pointer px-1.5">
                            <h1 className="border- border-white/30 rounded-3xl py-2.5 bg-transparent bg-gradient-to-b from-blue-300 to-blue-900 z-[99]">Done</h1>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SetCity
