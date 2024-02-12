import React from 'react'
import PageBanner from '@/components/banner/layouts/PageBanner'
import ContentLeftImageRight from '@/components/general/layouts/ContentLeftImageRight'
import ContentRightImageLeft from '@/components/general/layouts/ContentRightImageLeft'
import CTA from '@/components/banner/layouts/CTA'
import BlogCardDisplay from '@/components/blog/layouts/BlogCardsDisplay'
import Head from 'next/head'


function AboutPage() {
  return (
    <div className='h-full'>
      <Head>
          <title>About Star Contractor Web Agency | Web Design & SEO Services Toronto</title>
          <meta name="description" content="Learn about Star Contractor Web Agency, a Canadian website agency in Etobicoke, Ontario, providing websites, digital media, branding, and SEO services to local businesses in the Greater Toronto and Hamilton Area." />
          <meta name="keywords" content="website agency, digital media, branding, SEO services, local businesses, Greater Toronto Area, Hamilton Area, Etobicoke, Ontario, Canada" />
          <meta name="author" content="Karim Jaouhar" />
          <meta property="og:title" content="About Star Contractor Web Agency | Web Design & SEO Services Toronto" />
          <meta property="og:description" content="Learn about Star Contractor Web Agency, a Canadian website agency in Etobicoke, Ontario, providing websites, digital media, branding, and SEO services to local businesses in the Greater Toronto and Hamilton Area." />
          <meta property="og:image" content="/og.jpg" />
          <meta property="og:url" content="https://www.starcontractoragency.com/about" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@KarimJawhar02" />
      </Head>
      <PageBanner background="/assets/background/bbg.jpg" heading="About Our Agency" subHeading="Star Contractor Web Agency is a Canadian website agency based in Etobicoke, Onatrio focused on providing websites, digital media, branding, and SEO services to local Canadian businesses in the Greater Toronto and Hamilton Area."/>

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
