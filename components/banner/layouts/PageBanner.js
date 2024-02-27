import React from 'react';
import { motion } from 'framer-motion';

function PageBanner({ heading, subHeading, background="/assets/background/default-background.jpg" }) {

  const backgroundImageStyle = {
    backgroundImage: `url(/assets/background/default-background.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh', // Set height to 50% of viewport height
    minHeight: '500px'
  };

  return (
    <section style={backgroundImageStyle} className='flex items-center pt-16'>
      <div className="container md:max-w-screen-sm mx-auto text-center px-4 lg:px-6">
        <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5 }}
        className='text-4xl mb-6 font-medium text-white'>{heading}</motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay:0.2,duration: 0.5 }}
        className="text-gray-200 font-light leading-relaxed"> 
        {subHeading}
        </motion.p>
      </div>
    </section>
  );
}

export default PageBanner;
