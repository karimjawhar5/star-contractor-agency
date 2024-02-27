import React from 'react'
import MegaMenuCard from '../elements/MegaMenuCard';
import { motion } from 'framer-motion';

function MegaMenu() {
  const cardsData = [
    {
        title: 'Web Design',
        text: 'Crafting captivating WordPress websites and custom platforms to drive conversions and establish a robust digital presence for your business.',
        link: '/services/web-design'
    },
    {
        title: 'Brand Identity',
        text: 'Make a memorable impression with our expert branding and graphic design services, covering logo design, business cards, and attention-grabbing visuals for your brand across all platforms.',
        link: '/services/brand-identity'
    },
    {
        title: 'SEO',
        text: 'Elevate your online visibility with our holistic SEO strategies, encompassing website optimization, Google My Business management, content creation, and social media engagement.',
        link: '/services/seo-optimization'
    },
    {
        title: 'Digital Media',
        text: 'Bring your brand to life with stunning photography and engaging videography tailored for your website, social media, and marketing endeavors.',
        link: '/services/digital-media'
    }
];

  return (
    <motion.div 
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{duration: 0.3 }}
    className="bg-white hidden lg:block border-t border-gray-300">

      <div className="container mx-auto px-4 py-16 max-w-screen-xl">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cardsData.map((card, index) => (
              <MegaMenuCard key={index} {...card} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default MegaMenu
