import React from 'react'
import ContactLayout from '@/components/contact/layouts/ContactLayout';
import Head from 'next/head';

function ContactUsPage() {

  return (
    <div className='slantedSection h-screen pt-8'>
      <Head>
          <title>Contact Star Contractor Agency | Get in Touch for Web Design & SEO Services</title>
          <meta name="description" content="Contact Star Contractor Agency for professional web design, SEO, branding, and digital media services in Toronto. We can help you attract more customers online." />
          <meta name="keywords" content="contact, web design agency, SEO services, branding, digital media, Toronto" />
          <meta name="author" content="Karim Jaouhar" />
          <meta property="og:title" content="Contact Star Contractor Agency | Get in Touch for Web Design & SEO Services" />
          <meta property="og:description" content="Contact Star Contractor Agency for professional web design, SEO, branding, and digital media services in Toronto. Let us help you elevate your online presence and achieve your business goals." />
          <meta property="og:image" content="/og.jpg" />
          <meta property="og:url" content="https://www.starcontractoragency.com/contact-us" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@KarimJawhar02" />
        </Head>
        <ContactLayout />
    </div>
    
  )
}

ContactUsPage.displayWhiteHeader = true;
export default ContactUsPage
