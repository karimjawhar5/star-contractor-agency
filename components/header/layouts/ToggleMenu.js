import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { MdLocalPhone, MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import ButtonOutline from '../../general/elements/ButtonOutline';

function ToggleMenu() {
    const [ servicesToggled, setServicesToggled ] = useState(false);
  
    const handleServicesToggle = () => {
      setServicesToggled(!servicesToggled)
    }
  return (
    <motion.div 
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{duration: 0.3 }}
    className="lg:hidden flex-grow px-4 py-10 border-t border-gray-500 flex flex-col justify-between w-full">
        
        <nav className="w-full flex flex-col mx-auto text-lg justify-start">

            <a href='/' className='py-4 px-8 text-slate-100 hover:text-orange-500'>Home</a>
            
            <a href='/about' className='py-4 px-8 text-slate-100 border-t border-gray-600 hover:text-orange-500'>About Us</a>

            <div className=" text-slate-100 border-t border-gray-600">
                
                <div className=" py-4 px-8 flex items-center cursor-pointer hover:text-orange-500" onClick={handleServicesToggle}>
                    <span>Services</span>
                    {servicesToggled ? <MdArrowDropUp size={30} /> : <MdArrowDropDown size={30} />}
                </div>

                {servicesToggled && (
                <div className=" px-8 flex flex-col text-slate-300 font-light text-base ">
                    <a href='/services/web-design' className='py-4 px-4 border-t border-gray-800 hover:text-orange-500'>Web Design</a>
                    <a href='/services/brand-identity' className='py-4 px-4 border-t border-gray-800 hover:text-orange-500'>Branding</a>
                    <a href='/services/seo-optimization' className='py-4 px-4 border-t border-gray-800 hover:text-orange-500'>SEO</a>
                    <a href='/services/digital-media' className='py-4 px-4 border-t border-gray-800 hover:text-orange-500'>Digital Media</a>
                </div>
                )}
            </div>

            <a href='/our-work' className='py-4 px-8  text-slate-100 hover:text-orange-500 border-t border-gray-600'>Our Work</a>

            <a href='/blog' className='py-4 px-8  text-slate-100 hover:text-orange-500 border-t border-gray-600'>Blog</a>

            <a href='/contact-us' className='py-4 px-8  text-slate-100 hover:text-orange-500 border-t border-gray-600'>Contact Us</a>
        </nav>

        <div className='block md:hidden'>
            <ButtonOutline text="(437) 961 6674" link="tel:4379616674" icon={<MdLocalPhone size={18}/>} iconPos={false}/>
        </div>

    </motion.div>
  );
}

export default ToggleMenu;

