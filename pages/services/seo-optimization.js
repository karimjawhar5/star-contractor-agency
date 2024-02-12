import React from 'react'
import PageBanner from '@/components/banner/layouts/PageBanner'
import ContentRightImageLeft from '@/components/general/layouts/ContentRightImageLeft'
import Process from '@/components/general/layouts/Process'
import CTA from '@/components/banner/layouts/CTA'
import PortfolioDisplaySection from '@/components/portfolio/layouts/PortfolioDisplaySection'
import Head from 'next/head'

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
      <Head>
          <title>SEO Services for Improved Ranking & Visibility | Star Contractor Agency</title>
          <meta name="description" content="Boost your website's ranking and visibility with our expert SEO services. Our team specializes in optimizing websites for higher search engine rankings and attracting more organic traffic. Let us help you get noticed online and grow your business." />
          <meta name="keywords" content="SEO services, search engine optimization, website ranking, visibility, organic traffic, SEO strategies, Toronto SEO, Greater Toronto Area, SEO agency" />
          <meta name="author" content="Star Contractor Agency" />
          <meta property="og:title" content="SEO Services for Improved Ranking & Visibility | Star Contractor Agency" />
          <meta property="og:description" content="Boost your website's ranking and visibility with our expert SEO services. Our team specializes in optimizing websites for higher search engine rankings and attracting more organic traffic. Let us help you get noticed online and grow your business." />
          <meta property="og:image" content="/og.jpg" />
          <meta property="og:url" content="https://www.starcontractoragency.com/services/seo-optimization" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@StarContractorAgency" />
      </Head>

        <PageBanner background="/assets/background/bbg.jpg" heading="SEO & Visibility" subHeading="Boost your website's ranking and visibility with our expert SEO services. Our team specializes in optimizing websites for higher search engine rankings and attracting more organic traffic. Let us help you get noticed online and grow your business."/>
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
            link="/contact-us"
            linkText = "Let's Grow Your Business"
            background = "gray"
        />
        <Process steps={steps}/>
        <CTA />
        <PortfolioDisplaySection />
        
        
      
    </div>
  )
}

export default SEOPage
