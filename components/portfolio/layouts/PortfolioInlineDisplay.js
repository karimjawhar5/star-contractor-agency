import React from 'react'
import { MdArrowForward } from "react-icons/md";
import ButtonFilled from '../../general/elements/ButtonFilled';
import { motion } from 'framer-motion';

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
      <div className='container mx-auto flex px-4 md:px-4'>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 items-center'>
            <div className='hidden lg:block'>
                <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.5, duration: 0.5 }}
                className="text-3xl font-medium text-black mb-4">Recent Work</motion.h2>
                <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.5, duration: 0.5 }}
                className="hidden lg:block text-gray-800 leading-relaxed mb-0 lg:mb-6"> 
                We build websites correctly the first time, with a personal approach, focused on ranking and visibility.
                </motion.p>
                <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.5, duration: 0.5 }}
                className='hidden lg:block'>
                  <ButtonFilled link="/contact-us" text="Let's Work Together" icon={<MdArrowForward size={18}/>}/>
                </motion.div>
            </div>

            {portfolioData.map(({image, title}, index) => (
                <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay:((index+1)/10)+0.5, duration: 0.5 }}
                key={index} className={'rounded-sm overflow-hidden'}>
                    <img className='w-full' src={image} alt={title} />
                </motion.div>
            ))}
        </div>

      </div>
  )
}

export default PortfolioInlineDisplay
