import React from 'react'
import PageBanner from '@/components/new/banner/layouts/PageBanner'
import ContentLeftImageRight from '@/components/new/general/layouts/ContentLeftImageRight'
import ContentRightImageLeft from '@/components/new/general/layouts/ContentRightImageLeft'
import Process from '@/components/new/general/layouts/Process'
import CTA from '@/components/new/banner/layouts/CTA'
import PortfolioDisplaySection from '@/components/new/portfolio/layouts/PortfolioDisplaySection'

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
        <PageBanner background="/assets/background/bbg.jpg" heading="Brand Idenitity & Graphic Design" subHeading="Make a memorable impression with our bespoke branding and graphic design services. Whether you're in need of a new logo, business cards, or marketing materials, our talented designers have you covered."/>
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
            link="https://www.example.com/"
            linkText = "SEO Service"
            background = "gray"
        />
        <Process steps={steps}/>
        <CTA />
        <PortfolioDisplaySection />
        
        
      
    </div>
  )
}

export default BrandIdentityPage
