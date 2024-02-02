import React from 'react'
import { MdArrowForward } from "react-icons/md";

function MegaMenu() {
  return (
    <div className="bg-white hidden lg:block">

      <div className="container mx-auto px-4 py-8 max-w-screen-xl">

        <div className="">
          <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <div className="flex flex-col h-44 ">
          <div className='flex-grow'>
            <h3 className="text-xl font-medium mb-2">Web Design</h3>
            <p className="text-gray-600 mb-4">Crafting visually stunning and user-friendly websites tailored to elevate your online presence</p>
        </div>
            <a href="#" className="text-blue-500 hover:underline flex items-center space-x-2"><span>Learn More</span><MdArrowForward /></a>
          </div>

          <div className="flex flex-col h-44 ">
          <div className='flex-grow'>
            <h3 className="text-xl font-medium mb-2">Branding</h3>
            <p className="text-gray-600 mb-4">Building unique brand identities that resonate with your audience and leave a lasting impression.</p>
            </div>
            <a href="#" className="text-blue-500 hover:underline flex items-center space-x-2"><span>Learn More</span><MdArrowForward /></a>
          
          </div>

          <div className="flex flex-col h-44">
          <div className='flex-grow'>
            <h3 className="text-xl font-medium mb-2">SEO</h3>
            <p className="text-gray-600 mb-4">Optimizing your digital footprint to boost search engine rankings and drive organic traffic.</p>
            </div>
            <a href="#" className="text-blue-500 hover:underline flex items-center space-x-2"><span>Learn More</span><MdArrowForward /></a>
          </div>

          <div className="flex flex-col h-44">
            <div className='flex-grow'>
                <h3 className="text-xl font-medium mb-2">Digital Media</h3>
                <p className="text-gray-600 mb-4">Creating engaging digital content across various platforms to enhance your online visibility and engagement.</p>
            </div>
            <a href="#" className="text-blue-500 hover:underline flex items-center space-x-2"><span>Learn More</span><MdArrowForward /></a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MegaMenu
