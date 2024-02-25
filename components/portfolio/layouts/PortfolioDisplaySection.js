import React from 'react'
import PortfolioCard from '../elements/PortfolioCard.js'

function PortfolioDisplaySection({background="white"}) {
    const portfolioDataDesktop = [
      {
        image: '/assets/portfolio/portfolio-1.png',
        title: 'Dyanne Dumas Music',
        summary: 'A stunning website that showcases daynne dumas` magical performances, and intises event hosts to hire her for musical performances',
        link: 'https://dyannemusic.com/',
        linkText: 'www.daynnemusic.com'
      },
      {
        image: '/assets/portfolio/portfolio-4.png',
        title: 'Vohra Developments',
        summary: 'A professional website for Vohra Developments a Canadian real estate and construction oversight company.',
        link: 'https://vohradevelopments.com/',
        linkText: 'www.vohradevelopments.com'
      },
      {
        image: '/assets/portfolio/portfolio-3.png',
        title: 'Summit Garage Door Services',
        summary: 'A website focused on getting calls for Summit Garage Door Services, a garage door repair and service company based in London Onatrio.',
        link: 'https://summitgds.ca/',
        linkText: 'www.summitgds.ca'
      },
        {
            image: '/assets/portfolio/portfolio-2.png',
            title: 'SKAZ Garage Door Inc.',
            summary: 'A garage door supplier website aimed on showcasing the their garage door products to garage door installers.',
            link: 'https://skaz.ca/',
            linkText: 'www.skaz.ca'
          },
          {
            image: '/assets/portfolio/portfolio.png',
            title: 'Moe Garage Door Tech',
            summary: 'A website focused on getting more calls for Moe Garage Door Tech, a garage door repair and service busines.',
            link: 'https://moegaragedoor.com/',
            linkText: 'www.moegaragedoor.com'
          },
          {
            image: '/assets/portfolio/portfolio-5.png',
            title: 'N & Co. Event Designer',
            summary: 'An elegent website with the goal of showcasing the memerable events oragnized by N & Co. ',
            link: 'https://nandco.ca/',
            linkText: 'www.nandco.ca'
          },
    ]

    const portfolioDataTablet = [
      {
        image: '/assets/portfolio/portfolio-3.png',
        title: 'Summit Garage Door Services',
        summary: 'A website focused on getting calls for Summit Garage Door Services, a garage door repair and service company based in London Onatrio.',
        link: 'https://summitgds.ca/',
        linkText: 'www.summitgds.ca'
      },
      {
        image: '/assets/portfolio/portfolio-4.png',
        title: 'Vohra Developments',
        summary: 'A professional website for Vohra Developments a Canadian real estate and construction oversight company.',
        link: 'https://vohradevelopments.com/',
        linkText: 'www.vohradevelopments.com'
      },
    ]

  return (
    <section className={background == "gray" ? "py-20 lg:py-32 bg-gray-100": "py-20 lg:py-32 bg-white"}>
      
      <div className='container mx-auto px-4 lg:px-6'>

        <div className='max-w-xl text-center mx-auto'>
          <h2 className="font-medium text-orange-500 mb-4 body-font">Our Work</h2>
          <h3 className="text-3xl lg:text-4xl font-medium text-black mb-0 lg:mb-6">Our Work Brings Results For Businesses & Individuals</h3>
        </div>

        <div className='hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {portfolioDataDesktop.map((portfolio, index) => (
            <PortfolioCard key={index} index={index} {...portfolio} />
          ))}
        </div>

        <div className='lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
          {portfolioDataTablet.map((portfolio, index) => (
            <PortfolioCard key={index} index={index} {...portfolio} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PortfolioDisplaySection
