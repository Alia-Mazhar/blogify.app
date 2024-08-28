import React from 'react'
import hero_image from '../../images/hero_image.png'
import { Link } from 'react-router-dom'

function hero() {
    return (
        <div className='flex flex-row mb-12 mx-9 border-none rounded-2xl p-10 gap-12 bg-gradient-to-br from-[#150833] to-[#3D207F]'>
            <div className="w-1/2 gap-5 py-6 flex flex-col text-white">
                <div className="">
                    <p className='bg-[#B3AAFF] inline-block px-6 py-2 font-semibold text-[#13072E] rounded-full transition duration-200 hover:bg-[#b3aaffe7] hover:text-[#000000] cursor-pointer'>#flexiblesolutions</p>
                </div>
                <div className="text-2xl font-bold">
                    Flexible Solutions for Your Business
                </div>
                <div className="">
                    Lorem ipsum praesent ac massa at ligula reet﻿ est iaculis. Vivamus est mist aliquet elit ac nisl. Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist.
                </div>
                <div className="">
                    <button className='bg-[#ffffff] inline-block px-4 py-2 font-semibold text-[#13072E] rounded-full hover:bg-[#ffffffd8] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to='/contact'>Contact Us &nbsp;<span className='bg-[#13072E] text-white rounded-full px-3 font-bold'>&rarr;</span></Link></button>
                </div>
            </div>

            <div className="w-1/3 ml-auto my-auto">
                <img src={hero_image} alt="Hero Image" />
            </div>

        </div>
    )
}

export default hero
