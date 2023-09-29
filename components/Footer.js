import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='w-full py-4 px-10 space-y-4 mx-auto max-w-md md:flex md:px-6 md:max-w-7xl items-center'>
        <div className='w-full md:w-2/6'>
        <Image src="/assets/blogo.svg" alt="black-logo" className='mx-auto md:w-auto md:mx-0' width={165} height={80}/>
        </div>
        <div className='w-full md:w-3/6 text-center'>
          <p className='text-rem-sm font-normal md:text-rem-sm'>Star Contractor Website Agency. © All Rights Reserved 2023</p>
        </div>
        <div className='w-full hidden md:block md:w-2/6 md:text-end'>
          <p href="/" className='text-rem-sm font-medium'>Etobicoke, Ontario Canada</p>
        </div>
      </div>
  )
}

export default Footer
