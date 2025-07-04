import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h2 className='text-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>Contact Us</h2>
      <p className='underline underline-offset-4 decoration-1 under font-light'>
        We would love to hear from you! Get in touch with us for any inquiries or feedback.
      </p>
      <form className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <div className='flex flex-col'>
          <label htmlFor="name" className='text-gray-600'>Name</label>
          <input type="text" id="name" className='border border-gray-300 p-2 rounded' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email" className='text-gray-600'>Email</label>
          <input type="email" id="email" className='border border-gray-300 p-2 rounded' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="message" className='text-gray-600'>Message</label>
          <textarea id="message" className='border border-gray-300 p-2 rounded' />
        </div>
        <button type="submit" className='bg-blue-600 text-white py-2 px-4 rounded'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
