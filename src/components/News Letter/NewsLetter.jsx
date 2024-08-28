import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div 
    style={{background: 'radial-gradient(circle at 0% 30%, rgb(255, 255, 255), rgb(255 255 255 / 0%) 40%, rgb(249 249 249 / 63%) 100%), 20% center rgb(255 255 255 / 44%)'}} 
    className='newsletter text-center my-10 mt-16 p-8 rounded-3xl shadow-[#e7e7e7] shadow flex justify-center items-center mx-8'>
      <h1>Subscribe to our Newsletter</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email ID' />
        <button className='transition duration-200 hover:bg-[#ffffffd8] hover:text-[#13072E] active:bg-[#ffffffd8] active:text-[#13072E] focus:bg-[#ffffffd8] focus:text-[#13072E]'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
