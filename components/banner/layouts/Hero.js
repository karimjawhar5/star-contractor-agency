import React from 'react'
import { MdArrowForward } from "react-icons/md";
import PortfolioInlineDisplay from '../../portfolio/layouts/PortfolioInlineDisplay';
import ButtonFilled from '../../general/elements/ButtonFilled';


function Hero() {
  return (
    <section className='h-screen mb-0 lg:mb-20'>
        <section className='banner-background h-full lg:h-3/5 lg:pt-16'>
            <div className='md:max-w-lg container lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl h-full flex items-center mx-auto justify-between space-x-0 lg:space-x-10 px-4 md:px-4 lg:px-6'>             
                
                <div className='text-center lg:text-left lg:w-1/2'>
                    <h1 className='text-4xl xl:text-5xl 2xl:text-6xl mb-6 lg:mb-0 font-medium text-white md:leading-normal'><span className='underline decoration-orange-500'>Toronto Website Design & SEO Agency</span> For Service Businesses.</h1>
                    <p className="block lg:hidden text-gray-200 mb-10 font-light leading-relaxed"> 
                    Solving visibility and ranking concerns for service businesses in the Greater Toronto Area, with a personalized & effective approach to web design, SEO, branding, and digital media.
                    </p>
                    <div className='block lg:hidden'>
                        <ButtonFilled link="/work" text="Start A Project" icon={<MdArrowForward size={18}/>}/>
                    </div>
                </div>
                

                <div className='hidden lg:block w-1/2 overflow-hidden'>
                    <p className='text-base font-light xl:text-lg 2xl:text-2xl text-gray-300'>Solving visibility and ranking concerns for service businesses in the Greater Toronto Area, with a genuine and effective approach to web design, SEO strategies, branding, and digital media.</p>
                </div>   
            </div>
        </section>

        <section className='hidden lg:block h-2/5 py-6 px-4 lg:px-6'>
            <PortfolioInlineDisplay />
        </section>

    </section>
  )
}

export default Hero
