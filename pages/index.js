import React from 'react'
import Hero from '@/components/banner/Hero'
import Header from '@/components/header/Header'
import Catchy from '@/components/layout/Catchy'

function index() {
  return (
    <>
    <div className='hero-banner h-screen'>
      <Header />
      <Hero />
    </div>

    {/* <Catchy 
    title={"Your Business Deserves To Rank Online"} 
    text={"Unlock the full potential of your online presence with Star Contractor Web Agency – experts in crafting compelling websites, developing impactful brands, optimizing for search engines, and creating engaging digital media, all tailored for service-based businesses and individuals."}
    /> */}

    </>
  )
}

export default index
