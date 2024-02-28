import React from 'react'
import PageBanner from '@/components/banner/layouts/PageBanner'
import PortfolioDisplayPage from '@/components/portfolio/layouts/PortfolioDisplayPage'
import CTA from '@/components/banner/layouts/CTA'
import Head from 'next/head'

function OurWorkPage() {
  const portfolioData = [

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

  return (
    <div>
        <Head>
          <title>Portfolio | Examples of Our Work | Star Contractor Agency</title>
          <meta name="description" content="Explore examples of our work and portfolio showcasing website design, branding, SEO, and digital media projects tailored for local businesses in the Greater Toronto Area. See how we've helped businesses enhance their online presence and drive growth." />
          <meta name="keywords" content="portfolio, examples of work, website design, branding, SEO, digital media, Greater Toronto Area" />
          <meta name="author" content="Karim Jaouhar" />
          <meta property="og:title" content="Portfolio | Examples of Our Work | Star Contractor Agency" />
          <meta property="og:description" content="Explore examples of our work and portfolio showcasing website design, branding, SEO, and digital media projects tailored for local businesses in the Greater Toronto Area. See how we've helped businesses enhance their online presence and drive growth." />
          <meta property="og:image" content="/og.jpg" />
          <meta property="og:url" content="https://www.starcontractoragency.com/portfolio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@KarimJawhar02" />
      </Head>
      <PageBanner background="/assets/background/bbg.jpg" heading="Our Work" subHeading="Explore examples of our work and portfolio showcasing website design, branding, SEO, and digital media projects tailored for local businesses in the Greater Toronto Area. See how we've helped businesses enhance their online presence and drive growth."/>
        <PortfolioDisplayPage portfolioData = {portfolioData.slice(0, portfolioData.length / 2)}/>
        <CTA background="white"/>
        <PortfolioDisplayPage portfolioData = {portfolioData.slice(portfolioData.length / 2, portfolioData.length)}/>
    </div>
  )
}

export default OurWorkPage
