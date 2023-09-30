// components/Portfolio.js

import React, { useState } from 'react';
import Project from './Project';

const projectsData = [
  {
    company: 'Moe Garage Door Tech',
    client: 'Mohammad Issa',
    image: 'assets/project4.png',
    services: [
      "Designed a trustworthy website for Moe Garage Door Tech.",
      "Created branding, logos, and graphics.",
      "Crafted SEO-friendly content and optimized load speed.",
      "Improved Google Search ranking",
      "Resulted in a 3x increase in bookings."
    ],
    testimonial: "Karim did an amazing job building my garage door business website. It made a big difference in how well I show up in local searches. If you're in the garage door business, I can't recommend Star Contractor Web Agency enough."

  },
  {
    company: 'Summit Garage Door Service',
    client: 'Ismail Issa',
    image: 'assets/project2.png',
    services: [
      "Designed a trustworthy website for Summit Garage Door",
      "Created complete branding, including logos, and graphics.",
      "Crafted SEO-friendly content and optimized load speed.",
      "Improved Google search rankings",
      "Resulted in a 2.7x increase in bookings."
    ],
    testimonial: "Karim did a fantastic job putting together my garage door business website. It's been a game-changer for my local search rankings. If you're in the garage door biz, I highly recommend Star Contractor Web Agency. They're the real deal!"

  },
  {
    company: 'Vohra Developments',
    client: 'Sam Vohra',
    image: 'assets/project3.png',
    services: [
      "Designed a trustworthy website for Vohra Developments",
      "Created complete branding, including logos, and graphics.",
      "Crafted SEO-friendly content and optimized load speed.",
      "Improved Google ranking to first place.",
      "Resulted in a 3x increase in client leads. "
    ],
    testimonial: "Karim really spruced up my business' online presence. He created a fantastic website, designed some sharp logos, and nailed my branding. His industry know-how, quick responses, and meticulous work make him the top choice."

  },
  {
    company: 'Dyanne Dumas Music',
    client: 'Dyanne Dumas',
    image: 'assets/project1.png',
    services: [
      "Designed an elegant website for Dyanne Dumas",
      "Created branding, colouring, graphics, and business cards",
      "Crafted SEO-friendly content and optimized load speed.",
      "Resulted in significant increase in client trust, and bookings."
    ],
    testimonial: "I am absolutely thrilled with the professional website you created for me! Its elegant and modern style has elevated my online presence, boosting client trust and credibility. Your work has truly transformed my business, and I couldn't be happier. Thank you so much!"

  },
  
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mx-auto max-w-6xl">
      <Project
        company={projectsData[currentIndex].company}
        client={projectsData[currentIndex].client}
        image={projectsData[currentIndex].image}
        services={projectsData[currentIndex].services}
        testimonial={projectsData[currentIndex].testimonial}
      />
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-100 rounded-full"
          onClick={prevProject}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-100 rounded-full"
          onClick={nextProject}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
