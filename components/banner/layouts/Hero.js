import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import PortfolioInlineDisplay from '../../portfolio/layouts/PortfolioInlineDisplay';
import ButtonFilled from '../../general/elements/ButtonFilled';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className='h-screen mb-0 lg:mb-20'>
      <section 
      className='banner-background h-full lg:h-3/5 lg:pt-16'>
        <div
          className='md:max-w-lg container lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl h-full flex items-center mx-auto justify-between space-x-0 lg:space-x-10 px-4 md:px-4 lg:px-6'
        >
          <div className='text-center lg:text-left lg:w-1/2'>
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 0.5 }}
              className=' block lg:hidden text-4xl xl:text-5xl 2xl:text-6xl mb-6 lg:mb-0 font-medium text-white md:leading-normal'
            >
              <span className='underline decoration-orange-500'>
                Toronto Website Design & SEO Agency
              </span>{' '}
              For Service Businesses.
            </motion.h1>

            <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{duration: 0.5 }}
              className='hidden lg:block text-4xl xl:text-5xl 2xl:text-6xl mb-6 lg:mb-0 font-medium text-white md:leading-normal'
            >
              <span className='underline decoration-orange-500'>
                Toronto Website Design & SEO Agency
              </span>{' '}
              For Service Businesses.
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay:0.2,duration: 0.5 }}
              className='block lg:hidden text-gray-200 mb-10 font-light leading-relaxed'
            >
              Solving visibility and ranking concerns for service businesses in
              the Greater Toronto Area, with a personalized & effective approach
              to web design, SEO, branding, and digital media.
            </motion.p>
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{delay:0.4,duration: 0.5 }}
            className='block lg:hidden'>
              <ButtonFilled
                link='/work'
                text='Start A Project'
                icon={<MdArrowForward size={18} />}
              />
            </motion.div>
          </div>

          <div className='hidden lg:block w-1/2'>
            <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay:0.2,duration: 0.5 }}
              className='text-base font-light xl:text-lg 2xl:text-2xl text-gray-300'
            >
              Solving visibility and ranking concerns for service businesses in
              the Greater Toronto Area, with a genuine and effective approach to
              web design, SEO strategies, branding, and digital media.
            </motion.p>
          </div>
        </div>
      </section>

      <section className='hidden lg:block h-2/5 py-6 px-4 lg:px-6'>
        <PortfolioInlineDisplay />
      </section>
    </section>
  );
}

export default Hero;

