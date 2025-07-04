import React from 'react'

const Venues = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='Venues'>
      <h2 className='text-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>Our Venues</h2>
      <p className='underline underline-offset-4 decoration-1 under font-light'>
        Explore our diverse range of venues for your events.
      </p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <div className='flex flex-col'>
          <h3 className='flex flex-col items-center md:items-start mt-10 text-gray-600'>Venue 1</h3>
          <p className='text-lg font-light'>
            Description of Venue 1.
          </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='flex flex-col items-center md:items-start mt-10 text-gray-600'>Venue 2</h3>
          <p className='text-lg font-light'>
            Description of Venue 2.
          </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='flex flex-col items-center md:items-start mt-10 text-gray-600'>Venue 3</h3>
          <p className='text-lg font-light'>
            Description of Venue 3.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Venues
