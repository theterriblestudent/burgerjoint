import React from 'react';
import Image from "next/image";
import { BiSolidFoodMenu } from "react-icons/bi"
import { FaShoppingCart } from "react-icons/fa"

const Navbar = () : JSX.Element =>  {
  return (
    <nav className='container-grid fixed left-0 right-0 pt-8 pb-5 md:pt-10 md:pb-8 z-20 bg-[#fff]
          border-b-[1px] border-b-pink border-solid'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-6'>
          <Image className='w-28 md:w-36' width="150" height="50" src="/logos/branding.svg" alt="logo"/>
          <div className='hidden md:flex items-center gap-1 self-end'>
            <h2 className='font-asap text-xl font-semibold text-pink'>Menu</h2>
            <BiSolidFoodMenu className='text-pink' />
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <h2 className='text-black font-asap text-lg md:text-xl font-semibold' >Login</h2>
          <div className="hidden md:block w-px h-10 bg-stone-500"></div>
          <div className='flex items-center gap-4 bg-pink pt-1 pb-1 pl-3 pr-3 rounded-md'>
            <FaShoppingCart className='text-white' />
            <p className='font-asap text-lg font-bold text-white'>0</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;