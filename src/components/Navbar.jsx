import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiHome, FiInfo, FiMapPin, FiBook, FiMail } from 'react-icons/fi' // Using Feather icons for a clean look

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Close mobile menu if open
      if (isMenuOpen) {
        toggleMenu();
      }
      
      // Set active section
      setActiveSection(sectionId);
      
      // Add offset for fixed navbar
      const yOffset = -80; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      // Scroll to section with smooth behavior
      window.scrollTo({ 
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='w-full fixed top-0 left-0 z-40 bg-black/70 backdrop-blur-sm'>
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
                        <li>
                          <button 
                            onClick={() => scrollToSection('Header')} 
                            className={`cursor-pointer hover:text-blue-300 transition-colors ${activeSection === 'Header' ? 'text-blue-300' : ''}`}
                          >
                            Home
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => scrollToSection('About')} 
                            className={`cursor-pointer hover:text-blue-300 transition-colors ${activeSection === 'About' ? 'text-blue-300' : ''}`}
                          >
                            About
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => scrollToSection('Accessibility')} 
                            className={`cursor-pointer hover:text-blue-300 transition-colors ${activeSection === 'Accessibility' ? 'text-blue-300' : ''}`}
                          >
                            Accessibility
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => scrollToSection('Guide')} 
                            className={`cursor-pointer hover:text-blue-300 transition-colors ${activeSection === 'Guide' ? 'text-blue-300' : ''}`}
                          >
                            Guide
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => scrollToSection('Contact')} 
                            className={`cursor-pointer hover:text-blue-300 transition-colors ${activeSection === 'Contact' ? 'text-blue-300' : ''}`}
                          >
                            Contact
                          </button>
                        </li>
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
                  aria-label="Toggle navigation menu"
                >
                    <FiMenu className="text-white w-5 h-5" />
                </button>
            </div>
            
            {/* Improved Mobile Menu */}
            <div 
                className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
                    isMenuOpen 
                        ? 'opacity-100 visible' 
                        : 'opacity-0 invisible pointer-events-none'
                }`}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={toggleMenu}></div>
                
                {/* Menu Content */}
                <div className="absolute inset-y-0 right-0 w-4/5 max-w-sm bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col h-full"
                    style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
                >
                    {/* Close Button */}
                    <div className='flex justify-end p-4'>
                        <button 
                          onClick={toggleMenu} 
                          className='p-2 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
                          aria-label="Close navigation menu"
                        >
                            <FiX className="text-white w-5 h-5" />
                        </button>
                    </div>
                    
                    {/* Mobile Brand */}
                    <div className='text-white font-bold text-xl px-8 py-3 border-b border-gray-800'>
                        HuruSpaces
                    </div>
                    
                    {/* Mobile Navigation Links - Removed overflow-y-auto and adjusted spacing */}
                    <nav className='flex-1 py-2 flex items-center'>
                        <ul className='flex flex-col w-full text-white'>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('Header')} 
                                    className='w-full flex items-center px-8 py-2.5 hover:bg-blue-900/30 transition-colors'
                                >
                                    <FiHome className="mr-3 text-blue-400" />
                                    <span>Home</span>
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('About')} 
                                    className='w-full flex items-center px-8 py-2.5 hover:bg-blue-900/30 transition-colors'
                                >
                                    <FiInfo className="mr-3 text-blue-400" />
                                    <span>About</span>
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('Accessibility')} 
                                    className='w-full flex items-center px-8 py-2.5 hover:bg-blue-900/30 transition-colors'
                                >
                                    <FiMapPin className="mr-3 text-blue-400" />
                                    <span>Accessibility</span>
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('Guide')} 
                                    className='w-full flex items-center px-8 py-2.5 hover:bg-blue-900/30 transition-colors'
                                >
                                    <FiBook className="mr-3 text-blue-400" />
                                    <span>Guide</span>
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('Contact')} 
                                    className='w-full flex items-center px-8 py-2.5 hover:bg-blue-900/30 transition-colors'
                                >
                                    <FiMail className="mr-3 text-blue-400" />
                                    <span>Contact</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    
                    {/* Mobile Footer with Sign Up */}
                    <div className='px-8 py-4 border-t border-gray-800 mt-auto'>
                        <button className='w-full bg-white text-black py-3 px-4 rounded-full hover:bg-opacity-90 transition-all font-medium flex items-center justify-center'>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar