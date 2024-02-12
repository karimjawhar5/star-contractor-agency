import React from 'react'
import PageBanner from '@/components/banner/layouts/PageBanner'
import ContentLeftImageRight from '@/components/general/layouts/ContentLeftImageRight'
import ContentRightImageLeft from '@/components/general/layouts/ContentRightImageLeft'
import CTA from '@/components/banner/layouts/CTA'
import Head from 'next/head'

function ServicesPage() {
  return (
    <div>
      <Head>
          <title>Professional Web Design & SEO Services | Star Contractor Agency</title>
          <meta name="description" content="Explore our range of professional web design and SEO services tailored for service businesses in Toronto. From website development to SEO optimization, we offer personalized solutions to enhance your online presence and drive growth." />
          <meta name="keywords" content="web design, SEO services, branding, digital media, Toronto, website development, search engine optimization, online presence" />
          <meta name="author" content="Karim Jaouhar" />
          <meta property="og:title" content="Professional Web Design & SEO Services | Star Contractor Agency" />
          <meta property="og:description" content="Explore our range of professional website & online presence services tailored for local businesses in the Greater Toronto Area. From website development, Branding & Graphic Design, to SEO, and Videography & Edits, we offer personalized solutions to enhance your online presence and drive growth." />
          <meta property="og:image" content="/og.jpg" />
          <meta property="og:url" content="https://www.starcontractoragency.com/services" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@KarimJawhar02" />
        </Head>

      <PageBanner background="/assets/background/bbg.jpg" heading="Our Services" subHeading="Explore our range of professional website & online presence services tailored for local businesses in the Greater Toronto Area. From website development, Branding & Graphic Design, to SEO, and Videography & Edits, we offer personalized solutions to enhance your online presence and drive growth."/>
      
      <ContentLeftImageRight 
          image={"/assets/images/services/web-design/main.jpg"} 
          title="Website Development"  
          paragraph="Elevate your online presence with our expert web design services. Whether you're launching a new website or revamping an existing one, our team is here to create a stunning, user-friendly site that captures your brand's essence. From responsive layouts to seamless navigation, we ensure your website not only looks great but also performs flawlessly across all devices. Let us help you make a lasting impression and attract more visitors to your site." 
          list={[
            "Customized & Personalized",
            "User-Centric Focus",
            "Mobile Optimization",
            "Ongoing Support"
        ]} 
          link="/services/web-design"
          linkText = "Website Design Service"
          background = "gray"
        />

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
            link="/services/brand-identity"
            linkText = "Brand Identity Service"
            background = "white"
        />
        <CTA />
        <ContentLeftImageRight 
            image={"/assets/images/services/seo/main.jpg"} 
            title="SEO & Visibility"  
            paragraph="Boost your visibility and climb the search engine rankings with our targeted SEO strategies. Our proven techniques are designed to optimize your website for relevant keywords, improve your site's performance, and attract more organic traffic. With our comprehensive approach to SEO, we'll help you stand out in the crowded online marketplace and reach your target audience effectively." 
            list={[
              "Data-Driven Strategies",
              "Transparent Reporting",
              "White-Hat Techniques",
              "Local Focus"
          ]} 
            link="/services/seo-optimization"
            linkText = "SEO & Ranking Service"
            background = "gray"
        />
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
            link="/services/digital-media"
            linkText = "Business Videography & Edits"
            background = "white"
        />
      
    </div>
  )
}

export default ServicesPage
