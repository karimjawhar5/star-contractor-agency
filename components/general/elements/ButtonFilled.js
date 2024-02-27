import {useState} from 'react'
import {MdArrowForward } from "react-icons/md";
import { motion } from 'framer-motion';

function ButtonFilled({text, link, icon=<MdArrowForward className='transition duration-300'/>, iconPos = true}) {
  return (
    <a
     href={link} className="py-2 px-6 rounded-sm bg-orange-500 space-x-2 hover:space-x-4 hover:bg-orange-700 text-white flex justify-center md:inline-flex items-center cursor-pointer">
        {iconPos == false && icon ? icon : <></>}
        <span className='text-base'>{text}</span>
        {iconPos && icon ? icon : <></>}
    </a>
  )
}

export default ButtonFilled
