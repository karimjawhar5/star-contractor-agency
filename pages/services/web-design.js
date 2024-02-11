import React from 'react'
import PageBanner from '@/components/new/banner/layouts/PageBanner'
import ContentLeftImageRight from '@/components/new/general/layouts/ContentLeftImageRight'
import ContentRightImageLeft from '@/components/new/general/layouts/ContentRightImageLeft'
import Process from '@/components/new/general/layouts/Process'
import CTA from '@/components/new/banner/layouts/CTA'
import PortfolioDisplaySection from '@/components/new/portfolio/layouts/PortfolioDisplaySection'

import { MdHandshake, MdManageSearch, MdDevices,MdOutlineRocketLaunch } from "react-icons/md";

function WebDesignPage() {

  const steps = [
    {
      icon: <MdHandshake size={55}/>,
      title: 'Meeting With Client',
      text: 'We meet with you, to discuss your business needs, website project, and agree on a timeline, and budget.',
    },
    {
      icon: <MdManageSearch size={55}/>,
      title: 'Research & Planning',
      text: 'We reasearch the market, work together to collect images and content, and we build wireframes for the website',
    },
    {
      icon: <MdDevices size={55}/>,
      title: 'Design & Development',
      text: 'We propose and initial design, after revision and aproval, we begin development with an seo first approach.',
    },
    {
      icon: <MdOutlineRocketLaunch size={55}/>,
      title: 'Review & Launch',
      text: 'We perform a quality assurance test, review results with you, make nessassry changes, and finally launch your website.',
    },
    
]

  return (
    <div>
        <PageBanner background="/assets/background/bbg.jpg" heading="Website Design & Development" subHeading="We build professional websites with an SEO first approach, aimed at attracting customers and displaying your business accuratly online."/>
        <ContentRightImageLeft 
            image={"/assets/images/services/web-design/main.jpg"} 
            title="Website Development"  
            paragraph="Elevate your online presence with our expert web design services. Whether you're launching a new website or revamping an existing one, our team is here to create a stunning, user-friendly site that captures your brand's essence. From responsive layouts to seamless navigation, we ensure your website not only looks great but also performs flawlessly across all devices. Let us help you make a lasting impression and attract more visitors to your site." 
            list={[
              "Customized & Personalized",
              "User-Centric Focus",
              "Mobile Optimization",
              "Ongoing Support"
          ]} 
            link="https://www.example.com/"
            linkText = "SEO Service"
            background = "gray"
        />
        <Process steps={steps} />
        <CTA />
        <PortfolioDisplaySection />
        
        
      
    </div>
  )
}

export default WebDesignPage
