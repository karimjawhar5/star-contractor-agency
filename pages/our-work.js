import React from 'react'
import PageBanner from '@/components/banner/layouts/PageBanner'
import PortfolioDisplayPage from '@/components/portfolio/layouts/PortfolioDisplayPage'
import CTA from '@/components/banner/layouts/CTA'
import DigitalMediaDisplay from '@/components/portfolio/layouts/DigitalMediaDisplay'
import Head from 'next/head'

function OurWorkPage() {
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
        <PortfolioDisplayPage />
        
        <CTA background="white"/>
        <DigitalMediaDisplay />
    </div>
  )
}

export default OurWorkPage
