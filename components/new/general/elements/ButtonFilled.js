import React from 'react'
import {MdArrowForward } from "react-icons/md";

function ButtonFilled({text, link, icon=<MdArrowForward />, iconPos = true}) {
  return (
    <a href={link} className="py-2 px-6 rounded-sm bg-orange-500 hover:bg-orange-700 text-white flex justify-center md:inline-flex items-center space-x-2 hover:space-x-4 cursor-pointer">
        {iconPos == false && icon ? icon : <></>}
        <span className='text-base'>{text}</span>
        {iconPos && icon ? icon : <></>}
    </a>
  )
}

export default ButtonFilled
