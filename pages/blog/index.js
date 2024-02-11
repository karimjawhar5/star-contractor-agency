import BlogPageDisplay from '@/components/new/blog/layouts/BlogPageDisplay'
import PageBanner from '@/components/new/banner/layouts/PageBanner'
import React from 'react'

function BlogPage() {
  return (
    <div>
      <PageBanner background="/assets/background/bbg.jpg" heading="Blogs & Resources" subHeading="Star Contractor Web Agency is a dynamic agency focused on local service based business, providing them with a powerful online presence through websites, digital media, branding, and SEO services."/>
      <BlogPageDisplay />
    </div>
  )
}

export default BlogPage

