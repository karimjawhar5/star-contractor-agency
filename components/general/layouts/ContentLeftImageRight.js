import React from 'react'
import { MdCheckCircleOutline, MdArrowForward } from "react-icons/md";
import ButtonFilled from '../elements/ButtonFilled';

function ContentLeftImageRight({image, title, paragraph, paragraph2, list, link, linkText = "Learn More", background}) {

    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

    return (
        <section className={background == "gray" ? "py-20 lg:py-32 bg-gray-100": "py-20 lg:py-32 bg-white"}>
    
    <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0 items-center px-4 lg:px-6">
      
      <div className="lg:hidden w-full lg:w-1/2 text-center">
        <div className='lg:max-w-lg h-64 md:h-96 mx-auto lg:mx-0 rounded-sm' style={backgroundImageStyle}></div>
      </div>
    

      <div className="w-full lg:w-1/2">
        
        <h2 className="text-3xl lg:text-4xl font-medium text-black mb-4 lg:mb-6">{title}</h2>
        
        <p className={paragraph2 ? "text-gray-800 leading-relaxed mb-4":"text-gray-800 leading-relaxed mb-8"}>
          {paragraph}
        </p>

      {paragraph2 ? <p className="text-gray-800 leading-relaxed mb-8">
        {paragraph2}
      </p> : <></>}


        {list ? <div className='flex gap-6 justify-left w-full mb-8'>
            <ul className='space-y-2'>
                {list.slice(0, Math.ceil(list.length / 2)).map((item, index) => {
                    return (
                    <li className='flex items-center gap-2' key={index}>
                        <MdCheckCircleOutline size={18} className='text-orange-500'/>
                        <span className='text-gray-800'>{item}</span>
                    </li>
                    );
                })}
            </ul>

            <ul className='space-y-2'>
                {list.slice(Math.ceil(list.length / 2)-1, -1).map((item, index) => {
                    return (
                    <li className='flex items-center gap-2' key={index}>
                        <MdCheckCircleOutline size={18} className='text-orange-500'/>
                        <span className='text-gray-800'>{item}</span>
                    </li>
                    );
                })}
            </ul>
        </div>: <></>}
        
        <div className=''>
          <ButtonFilled text={linkText} link={link} icon={<MdArrowForward size={18}/>}/>
        </div>
        
      </div>

      <div className="hidden lg:flex w-full lg:w-1/2 justify-end">
        <div className='max-w-lg w-full h-64 md:h-96 mx-auto lg:mx-0 rounded-sm' style={backgroundImageStyle}></div>
      </div>

    </div>
  </section>
  )
}

export default ContentLeftImageRight;
