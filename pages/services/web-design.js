import React from 'react'
import PageBanner from '@/components/banner/layouts/PageBanner'
import ContentRightImageLeft from '@/components/general/layouts/ContentRightImageLeft'
import Process from '@/components/general/layouts/Process'
import CTA from '@/components/banner/layouts/CTA'
import PortfolioDisplaySection from '@/components/portfolio/layouts/PortfolioDisplaySection'
import Head from 'next/head'

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
              <Head>
            <title>Expert Website Design Services | Star Contractor Agency</title>
            <meta name="description" content="Need a website that attracts customers? Our expert team crafts stunning and user-friendly websites tailored for businesses in Toronto and the Greater Toronto Area. Let us help you stand out online and grow your business." />
            <meta name="keywords" content="website design, web design services, expert website design, Toronto website design, website development, website designers, Greater Toronto Area, website design agency" />
            <meta name="author" content="Star Contractor Agency" />
            <meta property="og:title" content="Expert Website Design Services | Star Contractor Agency" />
            <meta property="og:description" content="Need a website that attracts customers? Our expert team crafts stunning and user-friendly websites tailored for businesses in Toronto and the Greater Toronto Area. Let us help you stand out online and grow your business." />
            <meta property="og:image" content="/og.jpg" />
            <meta property="og:url" content="https://www.starcontractoragency.com/services/web-design" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@StarContractorAgency" />
        </Head>

        <PageBanner background="/assets/background/bbg.jpg" heading="Website Design & Development" subHeading="Need a website that attracts customers? Our expert team crafts stunning and user-friendly websites tailored for businesses in Toronto and the Greater Toronto Area. Let us help you stand out online and grow your business."/>
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
            link="/conatact-us"
            linkText = "Request A Website"
            background = "gray"
        />
        <Process steps={steps} />
        <CTA />
        <PortfolioDisplaySection />
        
        
      
    </div>
  )
}

export default WebDesignPage
