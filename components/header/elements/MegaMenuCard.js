import React from 'react'

import { MdArrowForward } from "react-icons/md";
import LinkTo from '../../general/elements/LinkTo';

function MegaMenuCard({title, text, link}) {

  return (
    <div className='flex flex-col h-full'>
            <h4 className='text-base lg:text-lg font-medium text-gray-800 mb-2'>{title}</h4>
            <p className=' text-gray-700 text-sm font-light mb-4'>{text}</p>
            <span className='grow'></span>
              <LinkTo text="Learn More" link={link}/>
            
    </div>
  )
}

export default MegaMenuCard

