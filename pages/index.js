import AboutUsDisplay from '@/components/new/about/layouts/AboutUsDisplay'
import CTA from '@/components/new/banner/layouts/CTA'
import Hero from '@/components/new/banner/layouts/Hero'
import BlogFeatured from '@/components/new/blog/layouts/BlogFeatured'
import ContentLeftImageRight from '@/components/new/general/layouts/ContentLeftImageRight'
import ContentRightImageLeft from '@/components/new/general/layouts/ContentRightImageLeft'
import PortfolioDisplaySection from '@/components/new/portfolio/layouts/PortfolioDisplaySection'
import CardsRightDisplay from '@/components/new/services/layouts/CardsRightDisplay'
import React from 'react'

function index() {
  return (
    <div>
        <Hero />
        <AboutUsDisplay 
            image={"/assets/images/about/team.jpg"} 
            title="Why Choose Us?"  
            paragraph="At Star Contractor Web Agency, we're not your typical web design agency. Based in Etobicoke, Ontario, we specialize in crafting authentic online presences for local businesses in the Greater Toronto and Hamilton areas. With over five years of experience, we understand the challenges service-based businesses face in ranking above competitors online. Offering web design, SEO, branding, and digital media services, we prioritize consistency and authenticity when reperesnting your business online to ensure your business destroys competitors."
            list={["Personalized Approach", "Authentic Representation", "Priotizing Organic Growth", "Pay Per Service", "Transparent Pricing", "No Monthly Costs"]} 
            link="/about"
            linkText = "Learn About Us"
            background = "gray"
        />
        <CardsRightDisplay />
        <CTA />
        <PortfolioDisplaySection />
        <CTA />
        <BlogFeatured/>

    </div>
  )
}

export default index
