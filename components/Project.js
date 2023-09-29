import React from 'react';
import Image from 'next/image';

const Project = ({ company, client, image, services, testimonial}) => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center mx-auto">
      <img src={image} alt={company} className="w-full ml-6 md:w-1/2 h-fit" />

      <div className='w-full md:w-1/2'>
        <h2 className="text-rem-lg xl:text-rem-xl font-semibold mt-2">{company}</h2>
        <p className="text-gray-600 mt-2 text-rem-base xl:text-rem-lg">{client}</p>

        <ul className='text-gray-600 text-rem-sm pl-5 lg:text-rem-base mt-6 space-y-3 md:space-y-2 xl:space-y-4 list-decimal'>
          {services?.map((service) => <li>{service}</li>)}
        </ul>

        <div className='flex items-center space-x-2 mx-auto mt-10 pr-3'>
          <Image src="/assets/project1/stats1.svg" width={165} height={90} className='w-1/3'></Image>
          <Image src="/assets/project1/stats2.svg" width={165} height={90} className='w-1/3'></Image>
          <Image src="/assets/project1/stats3.svg" width={165} height={90} className='w-1/3'></Image>
        </div>
        <div className='review shadow-sm rounded-sm bg-gray-50 p-4 w-full mt-6'>
          <p className='font-normal text-gray-600 text-rem-sm lg:text-rem-base'>{testimonial}</p>
          
          <div className='flex mt-4'>
            <p className='w-1/2 font-medium text-rem-sm lg:text-rem-base'>{client}</p>

            <div className=' w-1/2 text-end'>
              <Image src="/assets/stars.svg" width={88} height={22} className='inline w-20'/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

