import React from 'react'
import PageBanner from '@/components/banner/layouts/PageBanner'
import ContentRightImageLeft from '@/components/general/layouts/ContentRightImageLeft'
import Process from '@/components/general/layouts/Process'
import CTA from '@/components/banner/layouts/CTA'
import PortfolioDisplaySection from '@/components/portfolio/layouts/PortfolioDisplaySection'
import Head from 'next/head'

import { MdImageSearch, MdDesignServices, MdVerifiedUser, MdOutlineDownloading } from "react-icons/md";

function BrandIdentityPage() {

  const steps = [
    {
      icon: <MdImageSearch size={55}/>,
      title: 'Discovery Session',
      text: 'We conduct a thorough discovery session to understand your brand values, target audience, and goals.'
    },
    {
      icon: <MdDesignServices size={55}/>,
      title: 'Design Concept Creation',
      text: 'Our designers create initial design concepts for your brand identity, incorporating your feedback for refinement.'
    },
    {
      icon: <MdVerifiedUser size={55}/>,
      title: 'Refinement & Approval',
      text: 'We work closely with you to refine the design until it perfectly represents your brand identity, ensuring your satisfaction before final approval.'
    },
    {
      icon: <MdOutlineDownloading size={55}/>,
      title: 'Delivery & Implementation',
      text: 'Once approved, we deliver the final brand identity assets and provide guidance on implementing them across various platforms.'
    }
];


  return (
    <div>
      <Head>
        <title>Professional Brand Identity Services | Star Contractor Agency</title>
        <meta name="description" content="Establish a strong brand identity with our professional services. From logos and graphics to social media post templates, truck designs, and employee shirt designs, we help businesses stand out and make a lasting impression. Let us help you create a cohesive and memorable brand identity that resonates with your audience." />
        <meta name="keywords" content="brand identity services, logos, graphics, social media templates, truck designs, employee shirt designs, branding, Toronto brand identity, Greater Toronto Area, branding agency" />
        <meta name="author" content="Star Contractor Agency" />
        <meta property="og:title" content="Professional Brand Identity Services | Star Contractor Agency" />
        <meta property="og:description" content="Establish a strong brand identity with our professional services. From logos and graphics to social media post templates, truck designs, and employee shirt designs, we help businesses stand out and make a lasting impression. Let us help you create a cohesive and memorable brand identity that resonates with your audience." />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:url" content="https://www.starcontractoragency.com/services/brand-identity" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@StarContractorAgency" />
      </Head>

        <PageBanner background="/assets/background/bbg.jpg" heading="Brand Idenitity & Graphic Design" subHeading="Establish a strong brand identity with our professional services. From logos and graphics to social media post templates, truck designs, and employee shirt, and more. we help businesses stand out and make a lasting impression."/>
        <ContentRightImageLeft 
            image={"/assets/images/services/brand-identity/main.jpg"} 
            title="Branding & Graphic Design"  
            paragraph="Make a memorable impression with our bespoke branding and graphic design services. Whether you're in need of a new logo, business cards, or marketing materials, our talented designers will work closely with you to bring your vision to life. We understand the importance of a cohesive brand identity and will ensure that every aspect of your branding reflects your unique personality and values." 
            list={[
              "Creative Collaboration",
              "Consistency Across Platforms",
              "Attention to Detail",
              "Timeless Design"
          ]} 
            link="/contact-us"
            linkText = "Let's Work On Your Brand"
            background = "gray"
        />
        <Process steps={steps}/>
        <CTA />
        <PortfolioDisplaySection />
    </div>
  )
}

export default BrandIdentityPage
