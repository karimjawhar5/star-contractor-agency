import React from 'react'
import { MdEmail, MdCall, MdArrowOutward } from "react-icons/md";
import LinkTo from '../../general/elements/LinkTo';
import ContactForm from '../elements/ContactForm';

function ContactLayout() {

    return (
        <section className="py-20 lg:py-32 w-full">
    
    <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 space-x-0 lg:space-x-16 px-4 lg:px-6">
    

      <div className="w-full lg:w-1/2 pt-12">
        
        <h2 className="text-3xl lg:text-4xl font-medium text-black mb-4 lg:mb-6">Get In Touch</h2>
        
        <p className="text-gray-800 text-lg font-light leading-relaxed mb-8">
            The process is simple, fill the form and get an instant quote, or contact us directly through phone or email listed below!
        </p>

        <ul className='space-y-2 mb-8'>
            <li className='flex items-center gap-4'>
                <MdEmail size={20} className='text-orange-500'/>
                <a href="mailto:info@starcontractoragency.com" className='text-gray-700 text-lg hover:underline'>info@starcontractoragency.com</a>
            </li>

            <li className='flex items-center gap-4'>
                <MdCall size={20} className='text-orange-500'/>
                <a href="mailto:info@starcontractoragency.com" className='text-gray-700 text-lg hover:underline'>(437) 961 6674</a>
            </li>
        </ul>

        <ul className=' mb-8 flex gap-6 items-center'>
            <li className='flex items-center gap-2'>
                <LinkTo text="Facebook" link="" icon={<MdArrowOutward size={18}/>} animate={false}/>
            </li>
            <li className='flex items-center gap-2'>
                <LinkTo text="Google" link="" icon={<MdArrowOutward size={18}/>} animate={false}/>
            </li>
        </ul>
        
      </div>

      <div className="w-full lg:w-1/2">
        <div className='shadow-md lg:max-w-xl mx-auto lg:mx-0 bg-white rounded-sm py-10 px-4 md:px-10'>
            <ContactForm />
        </div>
      </div>

    </div>
  </section>
  )
}

export default ContactLayout;
