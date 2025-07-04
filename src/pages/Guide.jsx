import React from 'react'

const Guide = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='Guide'>
      <h2 className='text-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>User Guide</h2>
      <p className='underline underline-offset-4 decoration-1 under font-light'>
        Welcome to the user guide! Here you'll find all the information you need to get started.
      </p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <div className='flex flex-col'>
          <h3 className='flex flex-col items-center md:items-start mt-10 text-gray-600'>Getting Started</h3>
          <p className='text-lg font-light'>
            Learn how to set up your account and get the most out of our services.
          </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='flex flex-col items-center md:items-start mt-10 text-gray-600'>Features Overview</h3>
          <p className='text-lg font-light'>
            Discover the key features and functionalities available to you.
          </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='flex flex-col items-center md:items-start mt-10 text-gray-600'>Troubleshooting</h3>
          <p className='text-lg font-light'>
            Find solutions to common issues and learn how to get help.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Guide
