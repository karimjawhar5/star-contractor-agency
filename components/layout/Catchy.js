import React from 'react'
import { MdArrowForward } from "react-icons/md";

function Catchy({title, text}) {
  return (
    <div className='text-black bg-white'>
        <div className='max-w-screen-xl flex mx-auto px-4 justify-between py-10 space-x-12'>
            <h2 className='w-1/3 text-3xl font-bold'>
                {title}
            </h2>
            <div className='w-2/3'>
                <p className=' font-thin'>
                    {text}
                </p>
                {/* <button className=" mx-auto lg:mx-0 py-3 px-8 bg-orange-500 hover:bg-orange-700 text-white rounded-sm flex items-center space-x-4">
                    <span>Let's Connect</span>
                    <MdArrowForward size={20} />
                </button> */}
            </div>
            
        </div>
    </div>
  )
}

export default Catchy
