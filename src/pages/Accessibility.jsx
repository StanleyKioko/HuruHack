import React from 'react'

const Accessibility = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='Accessibility'>
      <h2 className='text-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>Inclusive Spaces</h2>
      <p className='underline underline-offset-4 decoration-1 under font-light text-center mb-8'>
        Dedicated to creating accessible environments for people of all abilities.
      </p>
      
      <div className='flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full mt-6'>
        <div className='flex flex-col bg-gray-50 p-6 rounded-lg shadow-sm flex-1'>
          <h3 className='text-xl font-semibold text-center md:text-left mb-3'>Physical Accessibility</h3>
          <ul className='list-disc pl-5 space-y-2'>
            <li>Wheelchair accessible entrances and pathways</li>
            <li>Accessible restrooms in all locations</li>
            <li>Adjustable height furniture and equipment</li>
            <li>Tactile signage and braille information</li>
            <li>Reserved parking spaces close to entrances</li>
          </ul>
        </div>
        
        <div className='flex flex-col bg-gray-50 p-6 rounded-lg shadow-sm flex-1'>
          <h3 className='text-xl font-semibold text-center md:text-left mb-3'>Support Services</h3>
          <ul className='list-disc pl-5 space-y-2'>
            <li>Trained staff for personalized assistance</li>
            <li>Sign language interpreters (on request)</li>
            <li>Assistive listening devices available</li>
            <li>Sensory-friendly spaces and quiet rooms</li>
            <li>Service animal accommodations</li>
          </ul>
        </div>
        
        <div className='flex flex-col bg-gray-50 p-6 rounded-lg shadow-sm flex-1'>
          <h3 className='text-xl font-semibold text-center md:text-left mb-3'>Inclusive Programs</h3>
          <ul className='list-disc pl-5 space-y-2'>
            <li>Adaptive equipment for activities</li>
            <li>Specialized workshops and training</li>
            <li>Community support groups</li>
            <li>Accessible transportation options</li>
            <li>Digital accessibility resources</li>
          </ul>
        </div>
      </div>
      
      <div className='mt-12 text-center'>
        <h3 className='text-xl font-semibold mb-3'>Need Special Accommodations?</h3>
        <p className='mb-4'>We're committed to making our spaces accessible to everyone. Contact us to discuss your specific needs.</p>
        <a href="#contact" className='inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all'>Request Accommodations</a>
      </div>
    </div>
  )
}

export default Accessibility