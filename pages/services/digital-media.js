import React from 'react'
import PageBanner from '@/components/banner/layouts/PageBanner'
import ContentRightImageLeft from '@/components/general/layouts/ContentRightImageLeft'
import Process from '@/components/general/layouts/Process'
import CTA from '@/components/banner/layouts/CTA'
import PortfolioDisplaySection from '@/components/portfolio/layouts/PortfolioDisplaySection'
import Head from 'next/head'

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
        <Head>
          <title>Professional Digital Media Services | Star Contractor Agency</title>
          <meta name="description" content="Capture the attention of your audience with our professional digital media services. From stunning photography to dynamic videography and expert edits, our team specializes in creating engaging visuals that showcase your products and services. Let us help you tell your story and connect with your audience on a deeper level." />
          <meta name="keywords" content="digital media services, photography, videography, edits, visual content, storytelling, Toronto digital media, Greater Toronto Area, media agency" />
          <meta name="author" content="Star Contractor Agency" />
          <meta property="og:title" content="Professional Digital Media Services | Star Contractor Agency" />
          <meta property="og:description" content="Capture the attention of your audience with our professional digital media services. From stunning photography to dynamic videography and expert edits, our team specializes in creating engaging visuals that showcase your products and services. Let us help you tell your story and connect with your audience on a deeper level." />
          <meta property="og:image" content="/og.jpg" />
          <meta property="og:url" content="https://www.starcontractoragency.com/services/digital-media" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@StarContractorAgency" />
        </Head>

        <PageBanner background="/assets/background/bbg.jpg" heading="Digital Media" subHeading="Capture the attention of your audience with our professional digital media services. From stunning photography to dynamic videography and expert edits, our team specializes in creating engaging visuals that showcase your products and services. Let us help you tell your story and connect with your audience on a deeper level."/>
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
            link="/contact-us"
            linkText = "Appear Professional Online"
            background = "gray"
        />
        <Process steps={steps}/>
        <CTA />
        <PortfolioDisplaySection />
        
        
      
    </div>
  )
}

export default DigitalMediaPage
