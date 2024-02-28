import React from 'react'
import PortfolioCard from '../elements/PortfolioCard.js'
import LinkTo from '../../general/elements/LinkTo.js'

function PortfolioDisplayPage({background="white", portfolioData}) {

  return (
    <section className={background == "gray" ? "py-20 bg-gray-100": "py-20 bg-white"}>
      
      <div className='container mx-auto px-4'>
        <div className=''>
        <h2 className="text-3xl font-medium text-black mb-2">Website Design Portfolio</h2>
        <LinkTo text="Website Design Service" link="/services/web-design"/>
        </div>

        <div className='hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
          {portfolioData.map((portfolio, index) => (
            <PortfolioCard key={index} index={index} {...portfolio} />
          ))}
        </div>

        <div className='lg:hidden grid grid-cols-1 md:grid-cols-2 gap-10 mt-12'>
          {portfolioData.map((portfolio, index) => (
            <PortfolioCard key={index} index={index} {...portfolio} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PortfolioDisplayPage
