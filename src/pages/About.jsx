import React from 'react'
import brand from '../assets/brand_img.jpg'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto py-16 px-6 md:px-20 lg:px-32 w-full' id='About'>
      <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>About Us</h2>
      
      <p className='font-light text-center text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-gray-700 italic'>
        We are a team of passionate individuals committed to providing the best services for our clients.
      </p>
      
      <div className='flex flex-col md:flex-row items-center gap-10 lg:gap-16 w-full'>
        {/* Image container with better styling */}
        <div className='w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg'>
          <img 
            src={brand} 
            alt="Our Team" 
            className='w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700'
          />
        </div>
        
        {/* Content container */}
        <div className='flex flex-col w-full md:w-1/2 py-6'>
          <h3 className='font-semibold text-2xl text-blue-700 mb-4'>Our Mission</h3>
          <p className='text-lg font-light leading-relaxed mb-8 text-gray-700'>
            To create a seamless experience for our users by providing top-notch services and support, empowering everyone to access and enjoy our venues without limitations.
          </p>
          
          {/* Stats grid - better styled with cards */}
          <div className='grid grid-cols-2 gap-6 w-full mb-10'>
            <div className='bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <p className='text-4xl font-bold text-blue-600'>10+</p>
                <p className='text-gray-700 font-medium mt-1'>Years of Experience</p>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <p className='text-4xl font-bold text-blue-600'>100+</p>
                <p className='text-gray-700 font-medium mt-1'>Projects Completed</p>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <p className='text-4xl font-bold text-blue-600'>50+</p>
                <p className='text-gray-700 font-medium mt-1'>Happy Clients</p>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <p className='text-4xl font-bold text-blue-600'>100+</p>
                <p className='text-gray-700 font-medium mt-1'>Renovated Venues</p>
            </div>
          </div>
          
          <p className='text-lg italic text-gray-600 mb-8'>
            "We take pride in our work and strive to exceed our clients' expectations by creating accessible spaces that welcome everyone."
          </p>
          
          <button className='bg-blue-600 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-700 transition-colors self-start flex items-center'>
            Learn More About Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About