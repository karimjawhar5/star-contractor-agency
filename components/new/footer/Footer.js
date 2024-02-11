import React from 'react';
import { MdEmail, MdCall, MdArrowOutward } from "react-icons/md";
import LinkTo from '../general/elements/LinkTo';
import ButtonFilled from '../general/elements/ButtonFilled';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black pt-16 border-t border-gray-300">
      
      <div className="container mx-auto flex flex-wrap justify-between px-4 lg:px-6 pb-16">
        
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
          <img src="/assets/identity/blogo.svg" alt="Logo" className="w-40 h-auto" />
          <p className="mt-6 text-sm">Based in Etobicoke, Ontario, Star Contractor Website Agency is a dynamic web design and digital marketing firm specializing</p>
          <div className='mt-6 hidden md:block'>
            <LinkTo text="Request A Quote" link="/contact"/>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-3/4 flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-end">
          
          <div className="w-44">
            <h3 className="text-lg lg:text-xl  mb-4 text-orange-500">Site Map</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">About Us</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">Services</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">Our Work</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">Contact Us</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">Blog</a></li>
            </ul>
          </div>
          <div className="w-44">
            <h3 className="text-lg lg:text-xl  mb-4  text-orange-500">Our Services</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">Web Design</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">Branding & Design</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">SEO & Ranking</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">Digital Media</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center   hover:underline cursor-pointer">App Development</a></li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg lg:text-xl  mb-4 text-orange-500">Get In Touch</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center hover:underline cursor-pointer space-x-2"><MdCall className="text-orange-500" size={20} /><span>(437) 961 6674</span></a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500 inline-flex items-center hover:underline cursor-pointer space-x-2"><MdEmail className="text-orange-500" size={20} /><span>Info@starcontractoragency.com</span></a></li>
            </ul>
          </div>
        
        </div>
      </div>

      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-6 py-6 border-t border-gray-300'>
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <a className='text-sm font-light'>© 2024 Star Contractor Web Agency. All Rights Reserved.</a>
        </div>
        <div className='w-full lg:w-1/2 hidden lg:block'>
            <ul className='flex gap-6 items-center justify-end'>
                <li className='flex items-center'>
                    <LinkTo text="Facebook" link="" icon={<MdArrowOutward size={18}/>} animate={false}/>
                </li>
                <li className='flex items-center'>
                    <LinkTo text="Google" link="" icon={<MdArrowOutward size={18}/>} animate={false}/>
                </li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
