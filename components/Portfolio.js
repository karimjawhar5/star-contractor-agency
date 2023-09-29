// components/Portfolio.js

import React, { useState } from 'react';
import Project from './Project';

const projectsData = [
  {
    company: 'Moe Garage Door Tech',
    client: 'Mohammad Issa',
    image: 'assets/project3.png',
    services: [
      "Designed a trustworthy website for Moe Garage Door Tech.",
      "Created complete branding, including logos, and graphics.",
      "Crafted SEO-friendly content and optimized load speed.",
      "Improved Google ranking from 30th to 10th position.",
      "Elevated Google My Business profile from 12th to 5th spot.",
      "Resulted in a 3x increase in bookings for Moe Garage Door."
    ],
    testimonial: "Karim built me a great website that really helped my garage door business. It boosted my local search rankings a lot. If you're in the garage door business, I highly recommend Star Contractor Web Agency."

  },
  {
    company: 'Summit Garage Door Service',
    client: 'Ismail Issa',
    image: 'assets/project1.png',
    services: [
      "Designed a trustworthy website for Summit Garage Door",
      "Created complete branding, including logos, and graphics.",
      "Crafted SEO-friendly content and optimized load speed.",
      "Improved Google ranking from 20th to 3nd position.",
      "Elevated Google My Business profile from 10th to 3rd spot.",
      "Resulted in a 2x increase in bookings for Summit Garage Door."
    ],
    testimonial: "Karim built me a great website that really helped my garage door business. It boosted my local search rankings a lot. If you're in the garage door business, I highly recommend Star Contractor Web Agency."

  },
  {
    company: 'Vohra Developments',
    client: 'Sam Vohra',
    image: 'assets/project2.png',
    services: [
      "Designed a trustworthy website for Vohra Developments",
      "Created complete branding, including logos, and graphics.",
      "Crafted SEO-friendly content and optimized load speed.",
      "Improved Google ranking to first place.",
      "Resulted in a 3x increase in client leads. "
    ],
    testimonial: "Karim built me a great website that really helped my garage door business. It boosted my local search rankings a lot. If you're in the garage door business, I highly recommend Star Contractor Web Agency."

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
