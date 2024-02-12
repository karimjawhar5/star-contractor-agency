import React from 'react'
import {MdArrowForward } from "react-icons/md";

function LinkTo({link, text, icon, animate = true}) {
  return (
      <a href={link} className={animate ? "text-orange-500 inline-flex items-center space-x-2 hover:space-x-4 font-medium hover:underline cursor-pointer" : "text-orange-500 inline-flex items-center space-x-2 font-medium hover:underline cursor-pointer"}>
        <span>{text}</span>
        {icon ? icon : <MdArrowForward size={18} />}
        
      </a>
  )
}

export default LinkTo
