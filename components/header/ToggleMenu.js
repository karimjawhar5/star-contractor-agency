import React from 'react';
import { useState } from 'react';

import { MdLocalPhone, MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

function ToggleMenu() {
    const [ servicesToggled, setServicesToggled ] = useState(false);
  
    const handleServicesToggle = () => {
      setServicesToggled(!servicesToggled)
    }
  return (
    <div className="lg:hidden absolute bg-slate-950 w-full space-y-12 md:space-y-0 bg-opacity-90 px-4 py-8">
        
        <nav className="flex flex-col mx-auto md:flex-row justify-between bg- space-y-4 md:space-y-0">
            
            <a href='#' className='py-2 px-8 font-medium text-slate-100 hover:text-orange-500'>About Us</a>

            <div className="font-medium text-slate-100 hover:text-orange-500">
                
                <div className=" py-2 px-8 flex items-center cursor-pointer" onClick={handleServicesToggle}>
                    <span>Services</span>
                    {servicesToggled ? <MdArrowDropUp size={30} /> : <MdArrowDropDown size={30} />}
                </div>

                {servicesToggled && (
                <div className=" px-8 flex flex-col text-slate-300 text-sm font-thin  hover:text-orange-500">
                    <a href='#' className='py-2 px-4'>Web Design</a>
                    <a href='#' className='py-2 px-4'>Branding</a>
                    <a href='#' className='py-2 px-4'>SEO</a>
                    <a href='#' className='py-2 px-4'>Digital Media</a>
                </div>
                )}
            </div>

            <a href='#' className='py-2 px-8 font-medium text-slate-100 hover:text-orange-500'>Our Work</a>

            <a href='#' className='py-2 px-8 font-medium text-slate-100 hover:text-orange-500'>Contact Us</a>
        </nav>

        {/* <button type="button" className="h-10 px-8 mx-auto md:hidden bg-orange-500 hover:bg-orange-700 text-white font-medium rounded-sm flex items-center space-x-2">
            <MdLocalPhone size={20} />
            <span>(437) 961 6674</span>
        </button> */}
    </div>
  );
}

export default ToggleMenu;

