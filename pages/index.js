import AboutUsDisplay from '@/components/about/layouts/AboutUsDisplay'
import CTA from '@/components/banner/layouts/CTA'
import Hero from '@/components/banner/layouts/Hero'
import BlogFeatured from '@/components/blog/layouts/BlogFeatured'
import PortfolioDisplaySection from '@/components/portfolio/layouts/PortfolioDisplaySection'
import CardsRightDisplay from '@/components/services/layouts/CardsRightDisplay'
import React from 'react'
import Head from 'next/head';

function index() {
  return (
    <div>
        <Head>
          <title>Websites & SEO Strategies For Service Businesses Toronto | Star Contractor Agency</title>
          <meta name="description" content="Solving visibility and ranking concerns for service businesses in the Greater Toronto Area, with a personalized & effective approach to web design, SEO, branding, and digital media." />
          <meta name="keywords" content="website design, SEO, digital marketing, brand design, online presence, Toronto, Canada, Ontario, GTA, Mississauga, SEO strategies, digital media agency" />
          <meta name="author" content="Karim Jaouhar" />
          <meta property="og:title" content="Websites & SEO Strategies For Service Businesses Toronto | Star Contractor Agency" />
          <meta property="og:description" content="Solving visibility and ranking concerns for service businesses in the Greater Toronto Area, with a personalized & effective approach to web design, SEO, branding, and digital media." />
          <meta property="og:image" content="/og.jpg" />
          <meta property="og:url" content="https://www.starcontractoragency.com/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@KarimJawhar02" />
        </Head>
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
