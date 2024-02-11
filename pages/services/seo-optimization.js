import React from 'react'
import PageBanner from '@/components/new/banner/layouts/PageBanner'
import ContentLeftImageRight from '@/components/new/general/layouts/ContentLeftImageRight'
import ContentRightImageLeft from '@/components/new/general/layouts/ContentRightImageLeft'
import Process from '@/components/new/general/layouts/Process'
import CTA from '@/components/new/banner/layouts/CTA'
import PortfolioDisplaySection from '@/components/new/portfolio/layouts/PortfolioDisplaySection'

import { MdOutlineDocumentScanner, MdManageSearch, MdSpeed, MdAddLink } from "react-icons/md";

function SEOPage() {

  const steps = [
    {
      icon: <MdOutlineDocumentScanner size={55}/>,
      title: 'Website Audit',
      text: 'We conduct a comprehensive audit of your website to identify areas for improvement and optimization.'
    },
    {
      icon: <MdManageSearch size={55}/>,
      title: 'Keyword Research',
      text: 'Our team performs in-depth keyword research to identify relevant search terms and opportunities for ranking improvement.'
    },
    {
      icon: <MdSpeed size={55}/>,
      title: 'On-Page Optimization',
      text: "We optimize your website's on-page elements, including meta tags, content, and internal linking, to improve search engine visibility."
    },
    {
      icon: <MdAddLink size={55}/>,
      title: 'Link Building & Outreach',
      text: "We execute strategic link building and outreach campaigns to enhance your website's authority and credibility."
    }
];

  return (
    <div>
        <PageBanner background="/assets/background/bbg.jpg" heading="SEO & Visibility" subHeading="Boost your visibility and climb the search engine rankings with our targeted SEO strategies."/>
        <ContentRightImageLeft 
            image={"/assets/images/services/seo/main.jpg"} 
            title="SEO & Visibility"  
            paragraph="Boost your visibility and climb the search engine rankings with our targeted SEO strategies. Our proven techniques are designed to optimize your website for relevant keywords, improve your site's performance, and attract more organic traffic. With our comprehensive approach to SEO, we'll help you stand out in the crowded online marketplace and reach your target audience effectively." 
            list={[
              "Data-Driven Strategies",
              "Transparent Reporting",
              "White-Hat Techniques",
              "Local Focus"
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

export default SEOPage
