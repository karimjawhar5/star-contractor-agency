import React from 'react';

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
        <h1 className='text-4xl mb-6 font-medium text-white'>{heading}</h1>
        <p className="text-gray-200 font-light leading-relaxed"> 
        {subHeading}
        </p>
      </div>
    </section>
  );
}

export default PageBanner;
