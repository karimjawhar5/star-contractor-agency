import React from 'react'
import ButtonFilled from '../../general/elements/ButtonFilled'
import { MdArrowForward } from "react-icons/md";

function CTA({background="white"}) {
  return (
    <section className={background=="white" ? 'bg-white pt-20' : 'bg-gray-100 pt-20'}>
        <div className='cta-background py-12'>
            <div className=' md:max-w-lg container lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl flex justify-between mx-auto items-center space-x-16 px-4 md:px-4 lg:px-6'>
                
                <div className='w-full text-center lg:text-left lg:w-4/12'>
                    <h3 className="text-3xl lg:text-4xl font-medium text-white mb-6">Your Business Deserves To A <span className='underline decoration-orange-500'>Solid Online Presence.</span></h3>
                    <p className="text-gray-200 leading-relaxed font-light mb-8 lg:mb-6"> 
                    Contact us today for a personalized quote on web design, SEO, branding, and digital media services. Let's elevate your online presence together.
                    </p>
                    <img src='/assets/images/cta.png' atl='cta image' className='lg:hidden mb-8'/>

                    <div className=''>
                        <ButtonFilled text="Let's Work Together" link="/contact-us" icon={<MdArrowForward size={18} />}/>
                    </div>
                </div>

                <div className='hidden lg:block w-7/12 -mt-24'>
                    <img src='/assets/images/cta.png' atl='cta image' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTA
