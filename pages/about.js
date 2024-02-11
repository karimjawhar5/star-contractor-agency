import React from 'react'
import PageBanner from '@/components/new/banner/layouts/PageBanner'
import ContentLeftImageRight from '@/components/new/general/layouts/ContentLeftImageRight'
import ContentRightImageLeft from '@/components/new/general/layouts/ContentRightImageLeft'
import CTA from '@/components/new/banner/layouts/CTA'
import BlogCardDisplay from '@/components/new/blog/layouts/BlogCardsDisplay'


function AboutPage() {
  return (
    <div className='h-full'>
      <PageBanner background="/assets/background/bbg.jpg" heading="About Our Agency" subHeading="Star Contractor Web Agency is a dynamic agency focused on local service based business, providing them with a powerful online presence through websites, digital media, branding, and SEO services."/>

<ContentRightImageLeft 
            image={"/assets/images/about/about1.jpg"} 
            title="What is Star Contractor Web Agency?"  
            paragraph="Star Contractor Web Agency is a dedicated team of professionals based in Etobicoke, Ontario, specializing in crafting powerful and authentic online presences for local businesses in the Greater Toronto and Hamilton areas. With over five years of experience, we offer comprehensive services in web design, SEO strategies, branding, and digital media solutions. Our mission is to help businesses thrive in the digital landscape by providing tailored services that prioritize consistency and authenticity."
            list={["Personalized Approach", "Authentic Representation", "Priotizing Organic Growth", "Pay Per Service", "Transparent Pricing", "No Monthly Costs"]} 
            link="/contact-us"
            linkText = "Contact Us"
            background = "gray"
        />

        <ContentLeftImageRight 
            image={"/assets/images/about/about2.jpg"} 
            title="Our Story"  
            paragraph="Star Contractor Agency began with Karim, a freelance web developer fueled by a passion for website design. It all started when his family's garage door company trusted him with their website. As word spread, more businesses sought his expertise, earning him the nickname 'the website guy.' To meet growing demand, Karim expanded his services, collaborating with talented freelancers in branding, videography, and photography." 
            paragraph2 ="Driven by a genuine desire to help local businesses thrive online, Star Contractor Agency was born. Today, we're dedicated to empowering businesses with tailored solutions that build a strong online presence and stand out in a competitive digital landscape."
            link="/contact-us"
            linkText = "Let's Work Together"
            background = "white"
        />

        <CTA />

        <BlogCardDisplay/>
    </div>
  )
}

export default AboutPage
