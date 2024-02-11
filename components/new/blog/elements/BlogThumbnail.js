import React from 'react';
import {MdTimer} from 'react-icons/md'

function BlogThumbnail({ image, title, summary, link, author, date, category, readTime}) {

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  };

  return (
    <div className='max-w-xl rounded-sm overflow-hidden'>
      <a href="/">
      <div className='flex flex-col py-10 px-6' style={backgroundImageStyle}>
      <div className="z-0" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust opacity by changing the last value (0.5)
      }}></div>
        
        <h3 className='font-medium text-2xl mt-2 z-10 text-white '><a href={link} className='hover:underline'>{title}</a></h3>
        
        {summary ? <p className='text-gray-300 mt-2 z-10'>{summary}</p>: <></>}
        
        <div className='flex justify-start items-center mt-8 z-10'>
          <div className='text-sm flex justify-start items-center space-x-1 pr-2 text-orange-500 border-r border-gray-300'><span className='text-white px-4 bg-orange-500 rounded-full'>{category}</span></div>
          <div className='text-sm flex justify-start items-center space-x-1 px-2  text-orange-500'><MdTimer size={16}/> <span className='text-gray-300'>{readTime}</span></div>
        </div>
      
      </div>

      </a>
    </div>
  );
}

export default BlogThumbnail;


