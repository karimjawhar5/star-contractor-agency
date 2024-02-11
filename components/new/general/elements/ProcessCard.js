import React from 'react'

function ProcessCard({icon, title, text}) {
  return (
    <div className='text-center flex flex-col items-center  py-10 px-4 bg-white rounded-sm border'>
        <div className='text-orange-500 p-2 bg-orange-200 rounded-md mb-6'>
            {icon}
        </div>
       
        <h3 className='text-lg body-font mb-4'>{title}</h3>
        <p className='text-gray-800 font-light'>{text}</p>

    </div>
  )
}

export default ProcessCard
