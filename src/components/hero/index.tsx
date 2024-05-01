import React from 'react'
import { FaSearch, FaEllipsisH } from "react-icons/fa";

const Hero = () : JSX.Element => {

  return (
    <section id="hero"
             className={`full-width bg-[url('/images/hero.png')] h-[65vh]
                         bg-center bg-cover overlay container-grid relative bg-black
                         items-center justify-items-center sm:justify-items-start
                         mb-12 sm:mb-20`}>
      <div className="relative z-10 flex items-start  flex-col gap-4 sm:gap-7 w-min">
        <h1 className="font-asap relative left-[16px] sm:left-0 uppercase block text-3xl md:text-5xl font-bold text-white">Find Restaurants</h1>
        <div className="relative sm:left-[-20px] p-4 sm:p-5 bg-[#454545d8] rounded-md flex flex-col items-start gap-4 sm:gap-5">
          <div className='flex items-center gap-6 sm:gap-8'>
            <span className='flex items-center gap-2'>
              <input value="" checked className='radio' type="radio" name="order-type" id="delivery"/>
              <label className='font-asap sm:text-lg md:text-xl text-white' for="delivery">Delivery</label>
            </span>
            <span className='flex items-center gap-2'>
              <input className="radio" type="radio" name="order-type" id="pick-up" />
              <label className='font-asap sm:text-lg md:text-xl text-white' for="pick-up">Pick-Up</label>
            </span>
          </div>
          <div className='flex items-stretch'>
            <div className='p-2 sm:p-3 bg-pink rounded-s'>
              <FaSearch className='text-white'/>
            </div>
            <input className='bg-[#1d1d1dd1] pl-3 text-sm sm:text-base w-[60vw] max-w-md' type="text" placeholder='Enter your street address' name="search-restaurants" />
            <span className="bg-[#1d1d1dd1] p-2 sm:p-3 rounded-e">
              <FaEllipsisH className='text-[#B7B7B7]'/>
            </span>
          </div>
          <p className="font-asap text-xs text-[#ffffffaa] sm:mt-[-10px]">*enable location services for a better experience</p>
        </div>
      </div>
    </section>
  )
}

export default Hero