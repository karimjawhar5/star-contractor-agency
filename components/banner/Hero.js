import React from 'react'
import Image from 'next/image'

import { MdArrowForward } from "react-icons/md";

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-md h-screen lg:h-auto lg:max-w-screen-xl -mt-28 lg:mt-0 flex items-center mx-auto px-4 justify-between '>
                           
            <div className='text-center lg:text-left lg:max-w-md '>
                
                <h1 className='text-3xl lg:text-4xl mb-8 font-bold'>Custom Website Solutions For Service Based Businesses.</h1>
                <p className='font-thin text-base lg:text-lg mb-8'>We offer a suit of services, from website design, to digital media, and branding, for service based businesses.</p>
                <button className=" mx-auto lg:mx-0 py-3 px-8 bg-orange-500 hover:bg-orange-700 text-white rounded-sm flex items-center space-x-4">
                    <span>Let's Connect</span>
                    <MdArrowForward size={20} />
                </button>

            </div>
            

            <div className='hidden lg:block'>
                <img src={"/assets/images/hero-large.png"} className='hidden xl:block max-w-2xl'/>
                <img src={"/assets/images/hero-large.png"} className='block xl:hidden max-w-xl'/>
            </div>
                
        </div>
    </div>
  )
}

export default Hero
