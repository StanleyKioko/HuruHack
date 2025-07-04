import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-gray-800 text-white mt-auto w-full'>
      {/* Main Footer Content */}
      <div className='container mx-auto py-12 px-6 md:px-20 lg:px-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {/* Company Info */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>HuruSpaces</h3>
            <p className='mb-4 text-gray-300 text-sm'>
              Creating accessible venues and spaces for people of all abilities. Our mission is to ensure everyone can enjoy our facilities without limitations.
            </p>
            <div className='flex space-x-4 mt-4'>
              <a href="https://facebook.com" aria-label="Facebook" className='text-gray-400 hover:text-white transition-colors'>
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className='text-gray-400 hover:text-white transition-colors'>
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className='text-gray-400 hover:text-white transition-colors'>
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className='text-gray-400 hover:text-white transition-colors'>
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className='font-semibold text-lg mb-4 border-b border-gray-700 pb-2'>Quick Links</h3>
            <ul className='space-y-2 text-gray-300'>
              <li><a href="#home" className='hover:text-white transition-colors'>Home</a></li>
              <li><a href="#about" className='hover:text-white transition-colors'>About Us</a></li>
              <li><a href="#venues" className='hover:text-white transition-colors'>Our Venues</a></li>
              <li><a href="#accessibility" className='hover:text-white transition-colors'>Accessibility</a></li>
              <li><a href="#guide" className='hover:text-white transition-colors'>Accessibility Guide</a></li>
              <li><a href="#events" className='hover:text-white transition-colors'>Events</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className='font-semibold text-lg mb-4 border-b border-gray-700 pb-2'>Contact Us</h3>
            <ul className='space-y-3 text-gray-300'>
              <li className='flex items-center'>
                <FaPhone className='mr-2 text-gray-400' size={14} />
                <span>+254 712 345 678</span>
              </li>
              <li className='flex items-center'>
                <FaEnvelope className='mr-2 text-gray-400' size={14} />
                <a href="mailto:info@huruspaces.com" className='hover:text-white transition-colors'>
                  info@huruspaces.com
                </a>
              </li>
              <li className='flex items-start'>
                <FaMapMarkerAlt className='mr-2 mt-1 text-gray-400' size={14} />
                <span>123 Accessibility Plaza, <br />Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className='font-semibold text-lg mb-4 border-b border-gray-700 pb-2'>Newsletter</h3>
            <p className='mb-4 text-gray-300 text-sm'>Subscribe to our newsletter for updates on accessible venues and events.</p>
            <form className='flex flex-col space-y-2'>
              <input 
                type="email" 
                placeholder="Your email address" 
                className='px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500'
              />
              <button 
                type="submit" 
                className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className='bg-gray-900 py-4'>
        <div className='container mx-auto px-6 md:px-20 lg:px-32 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © {currentYear} HuruSpaces. All rights reserved.
          </p>
          <div className='mt-2 md:mt-0 flex space-x-4 text-sm text-gray-400'>
            <a href="#privacy" className='hover:text-white transition-colors'>Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className='hover:text-white transition-colors'>Terms of Service</a>
            <span>|</span>
            <a href="#accessibility-statement" className='hover:text-white transition-colors'>Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer