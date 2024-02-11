import React from 'react';
import {MdTimer} from 'react-icons/md'

function BlogCard({ image, title, summary, link, author, date, category, readTime}) {
  return (
    <div className='max-w-lg rounded-sm overflow-hidden'>

      <img className='w-full' src={image} alt={title} />

      <div className='flex flex-col'>

        <div className='flex justify-start items-center mt-4'>
          <div className='text-sm flex justify-start items-center space-x-1 pr-2 text-orange-500 border-r border-gray-300'><span className='text-white px-4 bg-orange-500 rounded-full'>{category}</span></div>
          <div className='text-sm flex justify-start items-center space-x-1 px-2  text-orange-500'><MdTimer size={16}/> <span className='text-gray-500'>{readTime}</span></div>
        </div>
        
        <h3 className='font-medium text-xl md:text-2xl mt-2'><a href={link} className='hover:underline'>{title}</a></h3>
        
        {summary ? <p className='text-gray-700 mt-2 hidden md:block'>{summary}</p>: <></>}
        
        <span className=' text-sm text-gray-500 mt-3'>By <span className='font-medium text-orange-500'>{author} </span>| {date}</span>
      
      </div>
    </div>
  );
}

export default BlogCard;

