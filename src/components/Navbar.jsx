import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi' // Using Feather icons for a clean look

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full'>
        <div className='container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32'>
            {/* Logo or Brand */}
            <div className='text-white font-semibold text-xl'>
                HuruSpaces
            </div>

            {/* Desktop Navigation and Sign Up Button */}
            <div className='hidden md:flex items-center space-x-8'>
                {/* Desktop Navigation Links */}
                <nav>
                    <ul className='flex gap-7 text-white items-center'>
                        <li><a href="#home" className='cursor-pointer hover:text-gray-400 transition-colors'>Home</a></li>
                        <li><a href="#about" className='cursor-pointer hover:text-gray-400 transition-colors'>About</a></li>
                        <li><a href="#events" className='cursor-pointer hover:text-gray-400 transition-colors'>Events</a></li>
                        <li><a href="#guide" className='cursor-pointer hover:text-gray-400 transition-colors'>Guide</a></li>
                        <li><a href="#venues" className='cursor-pointer hover:text-gray-400 transition-colors'>Venues</a></li>
                    </ul>
                </nav>
                
                {/* Sign Up Button - Only visible on desktop, positioned at far right */}
                <div>
                    <button className='bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-medium'>Sign up</button>
                </div>
            </div>
            
            {/* Mobile Menu Toggle */}
            <div className='md:hidden'>
                <button 
                  onClick={toggleMenu} 
                  className='p-2 bg-white/10 rounded-full flex items-center justify-center focus:outline-none hover:bg-white/20 transition-colors'
                >
                    <FiMenu className="text-white w-5 h-5" />
                </button>
            </div>
            
            {/* Mobile Menu */}
            <div className={`md:hidden fixed z-50 inset-0 bg-black bg-opacity-90 backdrop-blur-sm transform transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className='absolute top-4 right-4'>
                    <button 
                      onClick={toggleMenu} 
                      className='p-2 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
                    >
                        <FiX className="text-white w-5 h-5" />
                    </button>
                </div>
                <ul className='flex flex-col items-center justify-center h-full gap-6 text-lg text-white'>
                    <li><a href="#home" onClick={toggleMenu} className='px-4 py-2 hover:text-gray-300 transition-colors'>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu} className='px-4 py-2 hover:text-gray-300 transition-colors'>About</a></li>
                    <li><a href="#events" onClick={toggleMenu} className='px-4 py-2 hover:text-gray-300 transition-colors'>Events</a></li>
                    <li><a href="#guide" onClick={toggleMenu} className='px-4 py-2 hover:text-gray-300 transition-colors'>Guide</a></li>
                    <li><a href="#venues" onClick={toggleMenu} className='px-4 py-2 hover:text-gray-300 transition-colors'>Venues</a></li>
                    {/* Sign up button in mobile menu */}
                    <li className='mt-4'>
                        <button className='bg-white text-black px-8 py-2 rounded-full hover:bg-opacity-90 transition-all'>Sign up</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar