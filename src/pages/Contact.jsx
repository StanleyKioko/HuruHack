import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-gray-50 py-16' id='Contact'>
      <div className='container mx-auto px-4 md:px-12 lg:px-24'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-800'>Get In Touch</h2>
          <p className='text-gray-600 text-lg'>
            We're here to answer your questions about accessibility and help make your venue experience exceptional.
          </p>
        </div>
        
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Contact Info Card */}
          <div className='lg:w-1/3 bg-white rounded-xl shadow-lg p-8'>
            <h3 className='text-xl font-semibold mb-6 text-gray-800 border-b pb-3'>Contact Information</h3>
            
            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='bg-blue-100 p-3 rounded-full mr-4'>
                  <FaPhone className='text-blue-600' />
                </div>
                <div>
                  <h4 className='font-medium text-gray-800'>Phone</h4>
                  <p className='text-gray-600'>+254 708967800</p>
                  <p className='text-gray-600'>+254 2795417147</p>
                </div>
              </div>
              
              <div className='flex items-start'>
                <div className='bg-blue-100 p-3 rounded-full mr-4'>
                  <FaEnvelope className='text-blue-600' />
                </div>
                <div>
                  <h4 className='font-medium text-gray-800'>Email</h4>
                  <p className='text-gray-600'>info@huruspaces.com</p>
                  <p className='text-gray-600'>support@huruspaces.com</p>
                </div>
              </div>
              
              <div className='flex items-start'>
                <div className='bg-blue-100 p-3 rounded-full mr-4'>
                  <FaMapMarkerAlt className='text-blue-600' />
                </div>
                <div>
                  <h4 className='font-medium text-gray-800'>Location</h4>
                  <p className='text-gray-600'>Huru Plaza,</p>
                  <p className='text-gray-600'>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            
            <div className='mt-8 pt-6 border-t'>
              <h4 className='font-medium text-gray-800 mb-4'>Connect With Us</h4>
              <div className='flex space-x-4'>
                <a href="https://facebook.com" className='bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors' aria-label="Facebook">
                  <FaFacebook className='text-blue-600' />
                </a>
                <a href="https://twitter.com" className='bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors' aria-label="Twitter">
                  <FaTwitter className='text-blue-600' />
                </a>
                <a href="https://instagram.com" className='bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors' aria-label="Instagram">
                  <FaInstagram className='text-blue-600' />
                </a>
                <a href="https://linkedin.com" className='bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors' aria-label="LinkedIn">
                  <FaLinkedin className='text-blue-600' />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className='lg:w-2/3 bg-white rounded-xl shadow-lg p-8'>
            <h3 className='text-xl font-semibold mb-6 text-gray-800 border-b pb-3'>Send Us a Message</h3>
            
            <form className='space-y-6'>
              {/* Name and Email Row */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col'>
                  <label htmlFor="name" className='text-gray-700 font-medium mb-2'>Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className='border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'
                    required
                  />
                </div>
                
                <div className='flex flex-col'>
                  <label htmlFor="email" className='text-gray-700 font-medium mb-2'>Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="your@email.com"
                    className='border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'
                    required
                  />
                </div>
              </div>
              
              {/* Phone and Subject Row */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col'>
                  <label htmlFor="phone" className='text-gray-700 font-medium mb-2'>Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+254 712 345 678"
                    className='border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'
                  />
                </div>
                
                {/*<div className='flex flex-col'>
                  <label htmlFor="subject" className='text-gray-700 font-medium mb-2'>Subject</label>
                  <select 
                    id="subject" 
                    className='border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white'
                    required
                  >
                    <option value="" disabled selected>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="accessibility">Accessibility Question</option>
                    <option value="booking">Booking Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>*/}
              </div>
              
              {/* Message Field */}
              <div className='flex flex-col'>
                <label htmlFor="message" className='text-gray-700 font-medium mb-2'>Message</label>
                <textarea 
                  id="message" 
                  placeholder="Please write your message here..."
                  className='border border-gray-300 p-3 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none'
                  required
                ></textarea>
              </div>
              
              {/* Accessibility Needs */}
              {/*<div className='flex flex-col'>
                <label htmlFor="accessibility" className='text-gray-700 font-medium mb-2'>Specific Accessibility Needs (Optional)</label>
                <textarea 
                  id="accessibility" 
                  placeholder="Please let us know if you have any specific accessibility requirements..."
                  className='border border-gray-300 p-3 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none'
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div className='flex justify-end'>
                <button 
                  type="submit" 
                  className='bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none font-medium'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className='mt-12 rounded-xl overflow-hidden shadow-lg'>
          <iframe
            title="HuruSpaces Location Map"
            className="w-full h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127644.81932983391!2d36.74373455951243!3d-1.2928898904466748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1625487301799!5m2!1sen!2sus"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact