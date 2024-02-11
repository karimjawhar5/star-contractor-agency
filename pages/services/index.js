import React from 'react'
import PageBanner from '@/components/new/banner/layouts/PageBanner'
import ContentLeftImageRight from '@/components/new/general/layouts/ContentLeftImageRight'
import ContentRightImageLeft from '@/components/new/general/layouts/ContentRightImageLeft'
import CTA from '@/components/new/banner/layouts/CTA'

function ServicesPage() {
  return (
    <div>
      <PageBanner background="/assets/background/bbg.jpg" heading="About Our Agency" subHeading="Star Contractor Web Agency is a dynamic agency focused on local service based business, providing them with a powerful online presence through websites, digital media, branding, and SEO services."/>
      <ContentLeftImageRight 
            image={"/assets/images/blog-1.jpg"} 
            title="Website Development"  
            paragraph="The possibilities are endless. We optimize your site to improve traffic to your website, increasing your sales and conversion using the latest SEO techniques. Our SEO program focuses on auditing performance and optimizing your website content, engaging customers while adhering to the standards set by Google. We will help push you towards that sought after first-page position!" 
            list={["Lorem ipsum", "Ipsum ipsum", "Dolor ipsum", "Sit ipsum", "Amet ipsum", "Consectetur ipsum"]} 
            link="https://www.example.com/"
            linkText = "Web Design Service"
            background = "gray"
        />
      <ContentRightImageLeft 
            image={"/assets/images/blog-1.jpg"} 
            title="Website Development"  
            paragraph="The possibilities are endless. We optimize your site to improve traffic to your website, increasing your sales and conversion using the latest SEO techniques. Our SEO program focuses on auditing performance and optimizing your website content, engaging customers while adhering to the standards set by Google. We will help push you towards that sought after first-page position!" 
            list={["Lorem ipsum", "Ipsum ipsum", "Dolor ipsum", "Sit ipsum", "Amet ipsum", "Consectetur ipsum"]} 
            link="https://www.example.com/"
            linkText = "SEO Service"
            background = "white"
        />
        <CTA />
        <ContentLeftImageRight 
            image={"/assets/images/blog-1.jpg"} 
            title="Website Development"  
            paragraph="The possibilities are endless. We optimize your site to improve traffic to your website, increasing your sales and conversion using the latest SEO techniques. Our SEO program focuses on auditing performance and optimizing your website content, engaging customers while adhering to the standards set by Google. We will help push you towards that sought after first-page position!" 
            list={["Lorem ipsum", "Ipsum ipsum", "Dolor ipsum", "Sit ipsum", "Amet ipsum", "Consectetur ipsum"]} 
            link="https://www.example.com/"
            linkText = "Web Design Service"
            background = "gray"
        />
      <ContentRightImageLeft 
            image={"/assets/images/blog-1.jpg"} 
            title="Website Development"  
            paragraph="The possibilities are endless. We optimize your site to improve traffic to your website, increasing your sales and conversion using the latest SEO techniques. Our SEO program focuses on auditing performance and optimizing your website content, engaging customers while adhering to the standards set by Google. We will help push you towards that sought after first-page position!" 
            list={["Lorem ipsum", "Ipsum ipsum", "Dolor ipsum", "Sit ipsum", "Amet ipsum", "Consectetur ipsum"]} 
            link="https://www.example.com/"
            linkText = "SEO Service"
            background = "white"
        />
      
    </div>
  )
}

export default ServicesPage
