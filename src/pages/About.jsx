import React from 'react'
import brand from '../assets/brand_img.jpg'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h2 className='text-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>About Us</h2>
      <p className='underline underline-offset-4 decoration-1 under font-light'>
        We are a team of passionate individuals committed to providing the best services for our clients.
      </p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={brand} alt="Brand" className='w-full md:w-1/2 lg:w-1/3 max-w-1/2' />
        <div className='flex flex-col'>
          <h3 className='flex flex-col items-center md:items-start mt-10 text-gray-600'>Our Mission</h3>
          <p className='text-lg font-light'>
            To create a seamless experience for our users by providing top-notch services and support.
          </p>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
                <p className='text-4xl font-medium text-gray-800'>10+</p>
                <p>Years of Experience</p>
            </div>
            <div>
                <p className='text-4xl font-medium text-gray-800'>100+</p>
                <p>Projects Completed</p>
            </div>
            <div>
                <p className='text-4xl font-medium text-gray-800'>5</p>
                <p>Happy Clients</p>
            </div>
            <div>
                <p className='text-4xl font-medium text-gray-800'>100+</p>
                <p>Rennovated Venues</p>
            </div>
        </div>
        <p className='my-10 max-w-lg'>
          We take pride in our work and strive to exceed our clients' expectations.
        </p>
        <button className='bg-blue-600 text-white py-2 px-4 rounded'>Know More about us</button>
        </div>
      </div>
    </div>
  )
}

export default About
