import React from 'react'
import { MdArrowForward } from "react-icons/md";
import ButtonFilled from '../../general/elements/ButtonFilled';

function PortfolioInlineDisplay() {
    const portfolioData = [
        {
          image: '/assets/portfolio/portfolio-3.png',
          title: 'Dyanne Dumas Music',
          summary: 'A stunning website that showcases daynne dumas',
        },
        {
          image: '/assets/portfolio/portfolio-4.png',
          title: 'Dyanne Dumas Music',
          summary: 'A stunning website that showcases daynne dumas',
        },
        {
          image: '/assets/portfolio/portfolio-1.png',
          title: 'Dyanne Dumas Music',
          summary: 'A stunning website that showcases daynne dumas',
        },
    ]

  return (
      <div className='container mx-auto flex px-4 md:px-6'>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 items-center'>
            <div className='hidden lg:block'>
                <h2 className="text-3xl font-medium text-black mb-6">Recent Work</h2>
                <p className="hidden lg:block text-gray-800 leading-relaxed mb-0 lg:mb-6"> 
                We build websites correctly the first time, with a personal approach, focused on ranking and visibility.
                </p>
                <div className='hidden lg:block'>
                  <ButtonFilled link="/contact-us" text="Let's Work Together" icon={<MdArrowForward size={18}/>}/>
                </div>
            </div>

            {portfolioData.map(({image, title, summary}, index) => (
                <div key={index} className={'rounded-sm overflow-hidden'}>
                    <img className='w-full' src={image} alt={title} />
                </div>
            ))}
        </div>

      </div>
  )
}

export default PortfolioInlineDisplay
