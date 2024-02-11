import React from 'react'
import PageBanner from '@/components/new/banner/layouts/PageBanner'
import ContentLeftImageRight from '@/components/new/general/layouts/ContentLeftImageRight'
import ContentRightImageLeft from '@/components/new/general/layouts/ContentRightImageLeft'
import Process from '@/components/new/general/layouts/Process'
import CTA from '@/components/new/banner/layouts/CTA'
import PortfolioDisplaySection from '@/components/new/portfolio/layouts/PortfolioDisplaySection'

import { MdOutlineDraw,MdOutlineCameraAlt,MdIosShare, MdOutlineChangeCircle  } from "react-icons/md";

function DigitalMediaPage() {

  const steps = [
    {
      icon: <MdOutlineDraw size={55}/>,
      title: 'Creative Concept Development',
      text: 'We collaborate with you to develop creative concepts for photography and videography that align with your brand identity and objectives.'
    },
    {
      icon: <MdOutlineCameraAlt size={55}/>,
      title: 'Production & Editing',
      text: 'Our team captures high-quality images and videos, leveraging state-of-the-art equipment and editing techniques to produce captivating content.'
    },
    {
      icon: <MdIosShare size={55}/>,
      title: 'Content Distribution',
      text: 'We distribute your digital media content across various platforms, including social media, websites, and other marketing channels, to maximize exposure and engagement.'
    },
    {
      icon: <MdOutlineChangeCircle size={55}/>,
      title: 'Feedback & Iteration',
      text: 'We gather feedback from you and analyze performance metrics to continuously refine and optimize your digital media strategy for maximum impact.'
    }
];

  return (
    <div>
        <PageBanner background="/assets/background/bbg.jpg" heading="Digital Media" subHeading="Make a memorable impression with our bespoke branding and graphic design services. Whether you're in need of a new logo, business cards, or marketing materials, our talented designers have you covered."/>
        <ContentRightImageLeft 
            image={"/assets/images/services/digital-media/main.jpg"} 
            title="Digital Media (Photos, Videos, & Edits)"  
            paragraph="Capture the attention of your audience with captivating digital media content. From stunning photography to dynamic videography, our team specializes in creating engaging visuals that showcase your products and services in the best light possible. Whether you need images for your website, social media, or in-store displays, we've got you covered. Let us help you tell your story and connect with your audience on a deeper level." 
            list={ [
              "Creative Storytelling",
              "High-Quality Production",
              "Fast Turnaround",
              "Versatility"
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

export default DigitalMediaPage
