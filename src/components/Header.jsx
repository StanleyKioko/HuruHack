import React, { useEffect } from 'react'
import brand_img from '../assets/brand_img.jpg'
import Navbar from './Navbar'

const Header = () => {
  useEffect(() => {
    console.log("Brand image path:", brand_img);
    // This will help us verify in the console if the image path is correct
  }, []);

  return (
    <div 
      className='relative min-h-screen flex flex-col w-full' 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${brand_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }} 
      id='Header'
    >
        <Navbar />
        <div className='flex-1 flex items-center justify-center'>
          <div className='container mx-auto text-center py-4 px-6 md:px-20 lg:px-32 text-white'>
              <div className='backdrop-blur-sm bg-black/20 rounded-2xl p-6 md:p-10 max-w-3xl mx-auto'>
                <h2 className='text-white text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight'>
                  Welcome to <span className='block mt-2 md:mt-3'>HuruSpaces</span>
                </h2>
                <div className='mt-8'>
                    <a href="#explore" className='inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-medium'>Explore</a>
                    <a href="#venues" className='inline-block bg-blue-500 text-white px-6 py-2 rounded-full ml-4 hover:bg-opacity-90 transition-all font-medium'>See Venues</a>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Header