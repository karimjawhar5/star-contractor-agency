import React from 'react';
import { useState } from 'react';

import { MdLocalPhone, MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import ButtonOutline from '../../general/elements/ButtonOutline';

function ToggleMenuWhite() {
    const [ servicesToggled, setServicesToggled ] = useState(false);
  
    const handleServicesToggle = () => {
      setServicesToggled(!servicesToggled)
    }
  return (
    <div className="lg:hidden flex-grow px-4 py-10 border-t  flex flex-col justify-between w-full">
        
        <nav className="w-full flex flex-col mx-auto text-lg justify-start">

        <a href='/' className='py-4 px-8 text-gray-600 hover:text-orange-500'>Home</a>
            
            <a href='/about' className='py-4 px-8 text-gray-600 hover:text-orange-500'>About Us</a>

            <div className=" text-gray-600 border-t border-gray-300">
                
                <div className=" py-4 px-8 hover:text-orange-500 flex items-center cursor-pointer" onClick={handleServicesToggle}>
                    <span>Services</span>
                    {servicesToggled ? <MdArrowDropUp size={30} /> : <MdArrowDropDown size={30} />}
                </div>

                {servicesToggled && (
                <div className=" px-8 flex flex-col text-gray-700 font-light text-base">
                    <a href='/services/web-design' className='py-4 px-4 border-t border-gray-200 hover:text-orange-500'>Web Design</a>
                    <a href='/services/brand-identity' className='py-4 px-4 border-t border-gray-200 hover:text-orange-500'>Branding</a>
                    <a href='/services/seo-optimization' className='py-4 px-4 border-t border-gray-200 hover:text-orange-500'>SEO</a>
                    <a href='/services/digital-media' className='py-4 px-4 border-t border-gray-200 hover:text-orange-500'>Digital Media</a>
                </div>
                )}
            </div>

            <a href='/our-work' className='py-4 px-8  text-gray-600 hover:text-orange-500 border-t border-gray-200'>Our Work</a>

            <a href='/blog' className='py-4 px-8  text-gray-600 hover:text-orange-500 border-t border-gray-200'>Blog</a>

            <a href='/contact-us' className='py-4 px-8  text-gray-600 hover:text-orange-500 border-t border-gray-200'>Contact Us</a>
        </nav>

        <div className='block md:hidden'>
            <ButtonOutline text="(437) 961 6674" link="tel:4379616674" icon={<MdLocalPhone size={18}/>} iconPos={false}/>
        </div>

    </div>
  );
}

export default ToggleMenuWhite;


