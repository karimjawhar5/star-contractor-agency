import React from 'react'
import { useState } from 'react'

import { MdMenu, MdLocalPhone, MdArrowDropDown, MdArrowDropUp, MdClose } from "react-icons/md";

import MegaMenu from './MegaMenu';
import ToggleMenu from './ToggleMenu';

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
    <nav className="bg-transparent w-full z-50">

      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4 px-4 h-28">

          <a href="https://starcontractoragency.com/" className='w-36'>
              <img src="/assets/identity/wlogo.svg" className="w-36 me-3" alt="Star Contractor Agency Logo" />
          </a>
          
          <div className='flex flex-grow items-center justify-end space-x-2 md:space-x-6'>
            <ul className="hidden space-x-6 lg:flex">
              <li>
                <a href="#" className=' h-6 items-center px-3 text-slate-100 hover:text-orange-500'>About Us</a>
              </li>
              <li>
                <a onClick={handleServicesToggle} className='px-3 text-slate-100 hover:text-orange-500 h-6 flex items-center cursor-pointer'><span>Services</span> {servicesToggled? <MdArrowDropUp size={30}/> : <MdArrowDropDown size={30}/>}</a>
              </li>
              <li>
                <a href="#" className=' h-6 items-center px-3 text-slate-100 hover:text-orange-500'>Our Work</a>
              </li>
              <li>
                <a href="#" className=' h-6 items-center px-3 text-slate-100 hover:text-orange-500'>Contact Us</a>
              </li>
              
            </ul>

            <button type="button" className="h-10 px-4 md:px-6 text-sm lg:text-base bg-orange-500 hover:bg-orange-700 text-white font-medium rounded-sm hidden md:flex  items-center space-x-2">
              <MdLocalPhone size={20} />
              <span>(437) 961 6674</span>
            </button>

            <button type="button" onClick={handleMenuToggle} className="h-10 px-2 md:px-4 text-slate-100 rounded-sm border lg:hidden">{menuToggled? <MdClose size={20} /> : <MdMenu size={20} />}</button>
          </div>
        </div>
        {servicesToggled? <MegaMenu /> : <></>}
        {menuToggled? <ToggleMenu /> : <></>}
    </nav>

  )
}

export default Header
