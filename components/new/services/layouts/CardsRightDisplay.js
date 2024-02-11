import React from 'react'
import ServicesCard from '../elements/ServicesCard';
import { MdArrowForward } from "react-icons/md";
import ButtonFilled from '../../general/elements/ButtonFilled';

function CardsRightDisplay() {
    const cardsData = [
        {
          image: '/assets/images/services/web-design/thumbnail.jpg',
          title: 'Website Design',
          text: 'Crafting captivating WordPress websites and custom platforms to drive conversions and establish a robust digital presence for your business.',
          link:'/services/web-design'
        },
        {
          image: '/assets/images/services/seo/thumbnail.jpg',
          title: 'SEO',
          text: 'Elevate your online visibility with our holistic SEO strategies, encompassing website optimization, Google My Business management, content creation, and social media engagement.',
          link:'/services/seo-optimization'
        },
        {
            image: '/assets/images/services/digital-media/thumbnail.jpg',
            title: 'Digital Media',
            text: 'Bring your brand to life with stunning photography and engaging videography tailored for your website, social media, and marketing endeavors.',
            link:'/services/digital-media'
          },
          {
            image: '/assets/images/services/brand-identity/thumbnail.jpg',
            title: 'Brand Idenity',
            text:'Make a memorable impression with our expert branding and graphic design services, covering logo design, business cards, and attention-grabbing visuals for your brand across all platforms.',
            link:'/services/brand-idenity'
          },
      ];

  return (
    <section className='bg-white py-20 lg:py-32'>
       
        <div className='container mx-auto flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0 space-x-0 lg:space-x-16 px-4 lg:px-6'>
            
            <div className='w-full lg:w-1/3 text-center lg:text-left'>
                <h2 className="font-medium text-orange-600 mb-4 body-font">Our Services</h2>
                <h3 className="text-3xl lg:text-4xl font-medium text-black mb-6">Explore Our High-Impact Services</h3>
                <p className="text-gray-800 leading-relaxed mb-0 lg:mb-6"> 
                We specialize in web design, SEO, branding, and digital media solutions. From creating stunning websites to boosting your online visibility and crafting compelling content, our services are tailored to help businesses in the Greater Toronto Area succeed online.
                </p>
                
                <div className='hidden lg:block'>
                    <ButtonFilled text="Explore Services" link="/contact-us" icon={<MdArrowForward size={18} />}/>
                </div>
                
            </div>
            
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {cardsData.map((card, index) => (
                    <ServicesCard key={index} {...card} />
                ))}
            </div>

            <div className='lg:hidden text-center'>
                <ButtonFilled text="Get In Touch" link="/contact" icon={<MdArrowForward size={18} />}/>
            </div>
        </div>
        
      
    </section>
  )
}

export default CardsRightDisplay
