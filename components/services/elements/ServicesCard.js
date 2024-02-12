import React from 'react'

import { MdArrowForward } from "react-icons/md";
import LinkTo from '../../general/elements/LinkTo';

function ServicesCard({image, title, text, link}) {

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='bg-gray-100 rounded-sm overflow-hidden'>
        <div className='w-full h-52' style={backgroundImageStyle}></div>
        <div className='p-6'>
            <h4 className='text-base lg:text-lg font-medium text-gray-800 mb-2 body-font'>{title}</h4>
            <p className=' text-gray-700 text-sm font-light mb-4'>{text}</p>
            <LinkTo text="Learn More" link={link}/>
        </div>
      
    </div>
  )
}

export default ServicesCard
