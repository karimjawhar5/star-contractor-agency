import React from 'react'
import ProcessCard from '../elements/ProcessCard'

function Process({steps}) {

  return (
    <section className="py-20 lg:py-32 bg-white">
      
      <div className='container mx-auto px-4'>

        <div className='max-w-xl text-center mx-auto'>
          <h2 className="text-3xl lg:text-4xl font-medium text-black mb-0 lg:mb-6">Our Process</h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:mt-12 mt-8'>
          {steps.map((step, index) => (
            <ProcessCard key={index} index={index} {...step} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Process

