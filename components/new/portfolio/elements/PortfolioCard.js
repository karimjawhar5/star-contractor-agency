import React from 'react'
import LinkTo from '../../general/elements/LinkTo';
import {MdArrowOutward } from "react-icons/md";

function PortfolioCard({image, title, summary, link, linkText}) {
  return (
    <div className={'rounded-sm overflow-hidden'}>
        <img className='w-full' src={image} alt={title} />
        
        <div className='py-4 flex flex-col space-y-4'>
        <h3 className='font-medium text-2xl'>{title}</h3>
        <p className='text-gray-700'>{summary}</p>
        {linkText ? <LinkTo link={link} text={linkText} icon={<MdArrowOutward size={18}/>}/> : <></>}
        </div>
  </div>
  )
}

export default PortfolioCard
