import React from 'react'
import Logo from '../assets/images/logo.png'
import { IoLogoYoutube } from "react-icons/io5";


function Header() {
  return (
    <div className='flex justify-between items-center mt-[10px] '>
      <div>
        <img src={Logo} className='w-[130px]' />
      </div>
      <div>
        <ul className='flex'>
          <li className='px-4 text-black font-bold hover:scale-105 transition-all ease-linear cursor-pointer'>Home</li>
          <li className='px-4 text-black font-bold hover:scale-105 transition-all ease-linear cursor-pointer'>About</li>
          <li className='px-4 text-black font-bold hover:scale-105 transition-all ease-linear cursor-pointer'>Blog</li>
          <li className='px-4 text-black font-bold hover:scale-105 transition-all ease-linear cursor-pointer'>Portfolio</li>
          <li className='px-4 text-black font-bold hover:scale-105 transition-all ease-linear cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div>
        <button className='bg-red-600 font-bold text-white rounded-full py-2 outline-none focus:no-underline flex items-center '>Subscribe <IoLogoYoutube className='ml-2'/></button>
      </div>
    </div>
  )
}

export default Header