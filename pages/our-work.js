import React from 'react'
import PageBanner from '@/components/new/banner/layouts/PageBanner'
import PortfolioDisplayPage from '@/components/new/portfolio/layouts/PortfolioDisplayPage'
import CTA from '@/components/new/banner/layouts/CTA'
import DigitalMediaDisplay from '@/components/new/portfolio/layouts/DigitalMediaDisplay'

function OurWorkPage() {
  return (
    <div>
        <PageBanner background="/assets/background/bbg.jpg" heading="Our Professional Work" subHeading="Star Contractor Web Agency is a dynamic agency focused on local service based business, providing them with a powerful online presence through websites, digital media, branding, and SEO services."/>
        <PortfolioDisplayPage />
        {/* <DigitalMediaDisplay /> */}
        <CTA background="white"/>
    </div>
  )
}

export default OurWorkPage
