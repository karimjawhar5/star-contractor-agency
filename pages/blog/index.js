import BlogPageDisplay from '@/components/blog/layouts/BlogPageDisplay'
import PageBanner from '@/components/banner/layouts/PageBanner'
import React from 'react'

function BlogPage() {
  return (
    <div>
      <Head>
          <title>Business Blog & Resources | Star Contractor Agency</title>
          <meta name="description" content="Access valuable resources and insightful articles on our business blog. From tips on website design and SEO strategies to branding advice and digital marketing insights, we provide businesses with the knowledge and tools they need to succeed online. Explore our free resources and empower your business today." />
          <meta name="keywords" content="business blog, resources, free resources, website design tips, SEO strategies, branding advice, digital marketing insights, Greater Toronto Area, business success" />
          <meta name="author" content="Star Contractor Agency" />
          <meta property="og:title" content="Business Blog & Resources | Star Contractor Agency" />
          <meta property="og:description" content="Access valuable resources and insightful articles on our business blog. From tips on website design and SEO strategies to branding advice and digital marketing insights, we provide businesses with the knowledge and tools they need to succeed online. Explore our free resources and empower your business today." />
          <meta property="og:image" content="/og.jpg" />
          <meta property="og:url" content="https://www.starcontractoragency.com/blog-resources" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@StarContractorAgency" />
      </Head>

      <PageBanner background="/assets/background/bbg.jpg" heading="Blogs & Resources" subHeading="Star Contractor Web Agency is a dynamic agency focused on local service based business, providing them with a powerful online presence through websites, digital media, branding, and SEO services."/>
      <BlogPageDisplay />
    </div>
  )
}

export default BlogPage

