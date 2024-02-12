import React from 'react';
import LinkTo from '../../general/elements/LinkTo';
import { MdArrowOutward } from 'react-icons/md';

function VideoPortfolioCard({ videoSrc, title }) {
  return (
    <div className={'rounded-sm overflow-hidden'}>
      <video className="w-full" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='py-4 flex flex-col space-y-4'>
        <h3 className='font-medium text-2xl'>{title}</h3>
      </div>
    </div>
  );
}

export default VideoPortfolioCard;


