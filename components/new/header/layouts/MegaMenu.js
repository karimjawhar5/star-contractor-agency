import React from 'react'
import MegaMenuCard from '../elements/MegaMenuCard';

function MegaMenu() {
  const cardsData = [
    {
        title: 'Web Design',
        text: 'Crafting visually stunning and user-friendly websites tailored to your business needs.',
        link: '/services/web-design'
    },
    {
        title: 'Brand Identity',
        text: 'Developing memorable brand identities and graphic designs that set your business apart.',
        link: '/services/brand-identity'
    },
    {
        title: 'SEO',
        text: 'Implementing targeted SEO strategies to boost your online visibility and attract more customers.',
        link: '/services/seo-optimization'
    },
    {
        title: 'Digital Media',
        text: 'Creating captivating photography and videography to showcase your brand across digital platforms.',
        link: '/services/digital-media'
    }
];

  return (
    <div className="bg-white hidden lg:block border-t border-gray-300">

      <div className="container mx-auto px-4 py-20 max-w-screen-xl">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cardsData.map((card, index) => (
              <MegaMenuCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MegaMenu
