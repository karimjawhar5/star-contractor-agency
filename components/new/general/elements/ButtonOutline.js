import React from 'react'

function ButtonOutline({text, link, icon, iconPos = true, animate = true}) {
  return (
    <a href={link} className={animate ? "py-2 px-6 rounded-sm border border-orange-500 hover:border-orange-700 text-orange-500 hover:text-orange-700 flex justify-center md:inline-flex items-center space-x-2 hover:space-x-4 cursor-pointer": "py-2 px-6 rounded-sm border border-orange-500 hover:border-orange-700 text-orange-500 hover:text-orange-700 flex justify-center md:inline-flex items-center space-x-2 cursor-pointer"}>
        {iconPos == false && icon ? icon : <></>}
        <span className='text-base'>{text}</span>
        {iconPos && icon ? icon : <></>}
    </a>
  )
}

export default ButtonOutline