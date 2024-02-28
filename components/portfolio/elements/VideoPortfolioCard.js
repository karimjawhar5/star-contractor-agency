import React from 'react';
import ReactPlayer from 'react-player/youtube'


function VideoPortfolioCard({ videoSrc, title }) {
  return (
    <div className={'rounded-sm overflow-hidden'}>
      <ReactPlayer src={videoSrc}/>
      <div className='py-4 flex flex-col space-y-4'>
        <h3 className='font-medium text-2xl'>{title}</h3>
      </div>
    </div>
  );
}

export default VideoPortfolioCard;


