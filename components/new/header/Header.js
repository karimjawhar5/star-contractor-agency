import React from 'react'
import { useState } from 'react'

import { MdMenu, MdLocalPhone, MdArrowDropDown, MdArrowDropUp, MdClose } from "react-icons/md";

import MegaMenu from './layouts/MegaMenu';
import ToggleMenu from './layouts/ToggleMenu';
import ButtonOutline from '../general/elements/ButtonOutline';

function Header() {
  const [ servicesToggled, setServicesToggled ] = useState(false);
  const [ menuToggled, setMenuToggled ] = useState(false);

  const handleServicesToggle = () => {
    setServicesToggled(!servicesToggled)
  }
  const handleMenuToggle = () => {
    setServicesToggled(false)
    setMenuToggled(!menuToggled)
  }

  return (
    <header className={menuToggled ? "bg-black w-full absolute min-h-screen flex flex-col" :"bg-transparent w-full absolute"}>

      <div className="container flex items-center justify-between mx-auto py-6 px-4">

        <div className='w-40'>
          <a href="https://starcontractoragency.com/">
              <img src="/assets/identity/wlogo.svg" className="me-3" alt="Star Contractor Agency Logo" />
          </a>

        </div>
          
          <div className='flex flex-grow items-center justify-end space-x-2 md:space-x-6'>
            <ul className="hidden space-x-4 lg:flex">
              <li>
                <a href="/" className=' h-6 items-center px-3 text-slate-100 hover:text-orange-500'>Home</a>
              </li>
              <li>
                <a href="/about" className=' h-6 items-center px-3 text-slate-100 hover:text-orange-500'>About Us</a>
              </li>
              <li>
                <a onClick={handleServicesToggle} className='px-3 text-slate-100 hover:text-orange-500 h-6 flex items-center cursor-pointer'><span>Services</span> {servicesToggled? <MdArrowDropUp size={30}/> : <MdArrowDropDown size={30}/>}</a>
              </li>
              <li>
                <a href="/our-work" className=' h-6 items-center px-3 text-slate-100 hover:text-orange-500'>Our Work</a>
              </li>
              <li>
                <a href="/blog" className=' h-6 items-center px-3 text-slate-100 hover:text-orange-500'>Blog</a>
              </li>
              <li>
                <a href="/contact-us" className=' h-6 items-center px-3 text-slate-100 hover:text-orange-500'>Contact Us</a>
              </li>
              
            </ul>
            <div className='hidden md:block'>
              <ButtonOutline text="437 961 6674" link="tel:4379616674" icon={<MdLocalPhone size={18}/> } iconPos={false} animate={false}/>
            </div>

            <button type="button" onClick={handleMenuToggle} className="h-10 px-2 md:px-4 text-slate-100 rounded-sm border lg:hidden">{menuToggled? <MdClose size={20} /> : <MdMenu size={20} />}</button>
          </div>
        </div>
        {servicesToggled? <MegaMenu /> : <></>}
        {menuToggled? <ToggleMenu /> : <></>}
    </header>

  )
}

export default Header
