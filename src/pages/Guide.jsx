import React, { useState } from 'react'
import { FaMapMarkerAlt, FaCalendarAlt, FaUserCheck, FaAccessibleIcon, 
         FaQuestionCircle, FaArrowRight, FaDownload, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Guide = () => {
  // State to track which FAQ items are expanded
  const [expandedFaqs, setExpandedFaqs] = useState({});

  // Toggle FAQ expansion
  const toggleFaq = (id) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "How do I request special accommodations for my visit?",
      answer: "You can request special accommodations when booking your venue or by contacting our support team at least 48 hours before your visit. Our staff will work with you to ensure your specific needs are met."
    },
    {
      id: 2,
      question: "Are service animals allowed in all venues?",
      answer: "Yes, service animals are welcome in all our venues. We comply with accessibility laws and recognize the important role service animals play in assisting individuals with disabilities."
    },
    {
      id: 3,
      question: "Do you offer sign language interpreters for events?",
      answer: "Yes, we can arrange for sign language interpreters for events with advance notice. Please request this service at least one week before your event to ensure availability."
    },
    {
      id: 4,
      question: "How do I know which venues are best suited for my specific accessibility needs?",
      answer: "Our venue listings include detailed accessibility information with icons indicating available features. You can also use our venue filter to search specifically for venues that meet your requirements."
    },
    {
      id: 5,
      question: "Is there accessible transportation to your venues?",
      answer: "Many of our venues offer accessible transportation services or are located near public transit with accessibility features. Check the specific venue page for transportation information or contact us for assistance."
    }
  ];

  return (
    <div className='flex flex-col container mx-auto p-8 md:p-12 lg:p-16 w-full' id='Guide'>
      {/* Hero Section */}
      <div className='bg-blue-600 text-white rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden'>
        <div className='absolute inset-0 bg-blue-500 opacity-50'>
          {/* Background pattern */}
          <svg className='h-full w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,5 C60,20 40,50 0,5 Z" fill="#ffffff" fillOpacity="0.1"></path>
            <path d="M0,100 L100,100 L100,80 C60,95 40,80 0,95 Z" fill="#ffffff" fillOpacity="0.1"></path>
          </svg>
        </div>
        
        <div className='relative z-10'>
          <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>Accessibility Guide</h2>
          <p className='text-center text-lg md:text-xl font-light max-w-3xl mx-auto'>
            Your comprehensive resource for navigating our accessible venues and services with confidence and independence.
          </p>
          <div className='flex justify-center mt-8'>
            <button className='bg-white text-blue-600 font-medium py-3 px-6 rounded-full hover:bg-blue-50 transition-colors flex items-center'>
              Download Complete Guide <FaDownload className='ml-2'/>
            </button>
          </div>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <h3 className='text-2xl md:text-3xl font-bold mb-8 text-center'>How to Use Our Accessible Venues</h3>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
        {/* Step 1 */}
        <div className='bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500 hover:-translate-y-1 transition-transform'>
          <div className='bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
            <FaMapMarkerAlt size={24} />
          </div>
          <h4 className='text-xl font-semibold mb-3'>1. Find a Venue</h4>
          <p className='text-gray-600'>
            Browse our accessible venues using filters to match your specific needs and preferences.
          </p>
          <ul className='mt-4 text-sm text-gray-600 space-y-2'>
            <li className='flex items-start'>
              <FaArrowRight className='text-blue-500 mt-1 mr-2 flex-shrink-0' size={14} />
              <span>Use accessibility filters to find venues suited to your needs</span>
            </li>
            <li className='flex items-start'>
              <FaArrowRight className='text-blue-500 mt-1 mr-2 flex-shrink-0' size={14} />
              <span>View detailed accessibility information for each location</span>
            </li>
          </ul>
        </div>
        
        {/* Step 2 */}
        <div className='bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500 hover:-translate-y-1 transition-transform'>
          <div className='bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
            <FaCalendarAlt size={24} />
          </div>
          <h4 className='text-xl font-semibold mb-3'>2. Book Your Visit</h4>
          <p className='text-gray-600'>
            Reserve your venue and specify any accessibility requirements you may have.
          </p>
          <ul className='mt-4 text-sm text-gray-600 space-y-2'>
            <li className='flex items-start'>
              <FaArrowRight className='text-blue-500 mt-1 mr-2 flex-shrink-0' size={14} />
              <span>Select your date and time preferences</span>
            </li>
            <li className='flex items-start'>
              <FaArrowRight className='text-blue-500 mt-1 mr-2 flex-shrink-0' size={14} />
              <span>Indicate any special accommodations needed</span>
            </li>
          </ul>
        </div>
        
        {/* Step 3 */}
        <div className='bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500 hover:-translate-y-1 transition-transform'>
          <div className='bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
            <FaUserCheck size={24} />
          </div>
          <h4 className='text-xl font-semibold mb-3'>3. Confirm Details</h4>
          <p className='text-gray-600'>
            Receive confirmation and pre-arrival information tailored to your needs.
          </p>
          <ul className='mt-4 text-sm text-gray-600 space-y-2'>
            <li className='flex items-start'>
              <FaArrowRight className='text-blue-500 mt-1 mr-2 flex-shrink-0' size={14} />
              <span>Check your email for booking confirmation</span>
            </li>
            <li className='flex items-start'>
              <FaArrowRight className='text-blue-500 mt-1 mr-2 flex-shrink-0' size={14} />
              <span>Review accessibility information for your venue</span>
            </li>
          </ul>
        </div>
        
        {/* Step 4 */}
        <div className='bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500 hover:-translate-y-1 transition-transform'>
          <div className='bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
            <FaAccessibleIcon size={24} />
          </div>
          <h4 className='text-xl font-semibold mb-3'>4. Enjoy Your Visit</h4>
          <p className='text-gray-600'>
            Arrive at the venue where staff are prepared to assist with your specific needs.
          </p>
          <ul className='mt-4 text-sm text-gray-600 space-y-2'>
            <li className='flex items-start'>
              <FaArrowRight className='text-blue-500 mt-1 mr-2 flex-shrink-0' size={14} />
              <span>Staff will be ready to provide any requested assistance</span>
            </li>
            <li className='flex items-start'>
              <FaArrowRight className='text-blue-500 mt-1 mr-2 flex-shrink-0' size={14} />
              <span>All accessibility features will be ready for your use</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Accessibility Features Section */}
      <div className='bg-gray-50 rounded-xl p-8 mb-16'>
        <h3 className='text-2xl md:text-3xl font-bold mb-6'>Common Accessibility Features</h3>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex items-start'>
            <div className='bg-blue-100 p-2 rounded-lg mr-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 11.9997H16V14.9997H21V16.9997H16V19.9997H14V16.9997H9V14.9997H14V11.9997Z" fill="#2563EB"/>
                <path d="M12 3.99968C13.6569 3.99968 15 5.34282 15 6.99968C15 8.65654 13.6569 9.99968 12 9.99968C10.3431 9.99968 9 8.65654 9 6.99968C9 5.34282 10.3431 3.99968 12 3.99968Z" fill="#2563EB"/>
                <path d="M7.5 16.9997C7.5 16.9997 7.5 13.9997 7.5 12.9997C7.5 11.9997 8.5 11.9997 8.5 11.9997H15.5C15.5 11.9997 16.5 11.9997 16.5 12.9997C16.5 13.9997 16.5 16.9997 16.5 16.9997" stroke="#2563EB" strokeWidth="2"/>
                <path d="M12 9.99968V19.9997" stroke="#2563EB" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <h4 className='font-semibold text-lg mb-1'>Wheelchair Accessibility</h4>
              <p className='text-gray-600 text-sm'>Ramps, elevators, wide doorways and pathways ensuring complete mobility access.</p>
            </div>
          </div>
          
          <div className='flex items-start'>
            <div className='bg-blue-100 p-2 rounded-lg mr-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 16.9997H22V19.9997C22 20.5302 21.7893 21.039 21.4142 21.4141C21.0391 21.7892 20.5304 21.9997 20 21.9997H4C3.46957 21.9997 2.96086 21.7892 2.58579 21.4141C2.21071 21.039 2 20.5302 2 19.9997V3.99969C2 3.46926 2.21071 2.96055 2.58579 2.58548C2.96086 2.2104 3.46957 1.99969 4 1.99969H18C18.5304 1.99969 19.0391 2.2104 19.4142 2.58548C19.7893 2.96055 20 3.46926 20 3.99969V16.9997Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9.99968C7.10457 9.99968 8 9.10425 8 7.99968C8 6.89511 7.10457 5.99968 6 5.99968C4.89543 5.99968 4 6.89511 4 7.99968C4 9.10425 4.89543 9.99968 6 9.99968Z" fill="#2563EB"/>
                <path d="M6 13.9997C7.10457 13.9997 8 13.1042 8 11.9997C8 10.8951 7.10457 9.99968 6 9.99968C4.89543 9.99968 4 10.8951 4 11.9997C4 13.1042 4.89543 13.9997 6 13.9997Z" fill="#2563EB"/>
                <path d="M6 17.9997C7.10457 17.9997 8 17.1042 8 15.9997C8 14.8951 7.10457 13.9997 6 13.9997C4.89543 13.9997 4 14.8951 4 15.9997C4 17.1042 4.89543 17.9997 6 17.9997Z" fill="#2563EB"/>
                <path d="M10 8.99968H16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 12.9997H16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 16.9997H16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className='font-semibold text-lg mb-1'>Assistive Listening</h4>
              <p className='text-gray-600 text-sm'>Hearing loop systems, audio amplifiers, and assistive listening devices available.</p>
            </div>
          </div>
          
          <div className='flex items-start'>
            <div className='bg-blue-100 p-2 rounded-lg mr-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8.99968V11.9997" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16.9997H12.01" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.9999 6.99986C17.9999 6.08441 17.842 5.17694 17.534 4.32125C17.226 3.46555 16.7731 2.67463 16.1998 1.99147C15.6266 1.30831 14.9431 0.747187 14.1832 0.337804C13.4232 -0.0715795 12.6006 -0.122042 11.8146 0.0892949C11.0285 0.300632 10.2991 0.669866 9.67081 1.1737C9.04248 1.67753 8.52361 2.30099 8.14667 3.00548C7.76973 3.70997 7.54273 4.4816 7.47984 5.27352C7.41695 6.06544 7.51955 6.8612 7.77991 7.60986" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.99991 12.9997C7.99991 14.5911 8.63205 16.1172 9.75725 17.2424C10.8825 18.3676 12.4086 18.9997 13.9999 18.9997" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className='font-semibold text-lg mb-1'>Assistance Services</h4>
              <p className='text-gray-600 text-sm'>Sign language interpreters, personal assistants, and guided services available.</p>
            </div>
          </div>
          
          <div className='flex items-start'>
            <div className='bg-blue-100 p-2 rounded-lg mr-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16.9997C14.2091 16.9997 16 15.2089 16 12.9997C16 10.7906 14.2091 8.99968 12 8.99968C9.79086 8.99968 8 10.7906 8 12.9997C8 15.2089 9.79086 16.9997 12 16.9997Z" fill="#2563EB"/>
                <path d="M12 20.9997C16.4183 20.9997 20 17.418 20 12.9997C20 8.58139 16.4183 4.99968 12 4.99968C7.58172 4.99968 4 8.58139 4 12.9997C4 17.418 7.58172 20.9997 12 20.9997Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2.99968V1.99968" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 23.9997V22.9997" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 12.9997H23" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 12.9997H2" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 4.99968L21 3.99968" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 21.9997L4 20.9997" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 20.9997L21 21.9997" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3.99968L4 4.99968" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className='font-semibold text-lg mb-1'>Visual Accessibility</h4>
              <p className='text-gray-600 text-sm'>Braille signage, high contrast visual elements, and audio descriptions.</p>
            </div>
          </div>
          
          <div className='flex items-start'>
            <div className='bg-blue-100 p-2 rounded-lg mr-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.9997C13.6569 15.9997 15 14.6565 15 12.9997C15 11.3428 13.6569 9.99968 12 9.99968C10.3431 9.99968 9 11.3428 9 12.9997C9 14.6565 10.3431 15.9997 12 15.9997Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12.9997C3 12.9997 7 4.99968 12 4.99968C17 4.99968 21 12.9997 21 12.9997C21 12.9997 17 20.9997 12 20.9997C7 20.9997 3 12.9997 3 12.9997Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className='font-semibold text-lg mb-1'>Sensory Accommodations</h4>
              <p className='text-gray-600 text-sm'>Quiet spaces, reduced sensory stimulation areas, and sensory kits available.</p>
            </div>
          </div>
          
          <div className='flex items-start'>
            <div className='bg-blue-100 p-2 rounded-lg mr-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 4.99968V14.9997" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 10.9997V14.9997" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 12.9997V14.9997" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 8.99968V14.9997" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16.9997H20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className='font-semibold text-lg mb-1'>Digital Accessibility</h4>
              <p className='text-gray-600 text-sm'>Screen readers, voice controls, and digital assistants available on-site.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQs Section */}
      <div className='mb-16'>
        <div className='flex items-center mb-8'>
          <FaQuestionCircle className='text-blue-600 mr-3' size={24} />
          <h3 className='text-2xl md:text-3xl font-bold'>Frequently Asked Questions</h3>
        </div>
        
        <div className='space-y-4'>
          {faqs.map(faq => (
            <div 
              key={faq.id} 
              className='border border-gray-200 rounded-lg overflow-hidden'
            >
              <button 
                onClick={() => toggleFaq(faq.id)} 
                className='w-full flex items-center justify-between p-4 text-left focus:outline-none'
              >
                <span className='font-medium text-lg'>{faq.question}</span>
                {expandedFaqs[faq.id] ? 
                  <FaChevronUp className='text-blue-600' /> : 
                  <FaChevronDown className='text-gray-400' />
                }
              </button>
              
              {expandedFaqs[faq.id] && (
                <div className='p-4 bg-gray-50 border-t border-gray-200'>
                  <p className='text-gray-600'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Support Section */}
      {/*<div className='bg-blue-50 rounded-xl p-8 text-center'>
        <h3 className='text-2xl font-bold mb-4'>Need Additional Help?</h3>
        <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
          Our accessibility support team is available to assist with any questions or concerns you may have about our venues and services.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <a href="#contact" className='bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center'>
            Contact Support Team
          </a>
          <a href="#faq" className='bg-white text-blue-600 border border-blue-600 py-3 px-6 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center'>
            View All FAQs
          </a>
        </div>
      </div>*/}
    </div>
  )
}

export default Guide