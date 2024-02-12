import React from 'react'
import VideoPortfolioCard from '../elements/VideoPortfolioCard.js'
import LinkTo from '../../general/elements/LinkTo.js'

function DigitalMediaDisplay({background="gray"}) {

  return (
    <section className={background == "gray" ? "py-20 bg-gray-100": "py-20 bg-white"}>
      
      <div className='container mx-auto px-4'>
        <div className=''>
        <h2 className="text-3xl font-medium text-black mb-2">Digital Media Portfolio</h2>
        <LinkTo text="Digital Media Service" link="/services/digital-media"/>
        </div>

        <div className='hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
            <VideoPortfolioCard  videoSrc={"https://drive.google.com/file/d/17INGoiogd7EN2_kljDpo67i47b_wgfxT/view?usp=sharing"} title={"N & Co. Studio"}  text={"Some Text..."}/>
            <VideoPortfolioCard  videoSrc={"https://drive.google.com/file/d/17INGoiogd7EN2_kljDpo67i47b_wgfxT/view?usp=sharing"} title={"N & Co. Studio"}  text={"Some Text..."}/>
            <VideoPortfolioCard  videoSrc={"https://drive.google.com/file/d/17INGoiogd7EN2_kljDpo67i47b_wgfxT/view?usp=sharing"} title={"N & Co. Studio"}  text={"Some Text..."}/>

        </div>

      </div>
    </section>
  )
}

export default DigitalMediaDisplay

