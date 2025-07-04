import React, { useState, useEffect } from 'react'
import { FiMessageSquare, FiHelpCircle, FiX } from 'react-icons/fi' // Add these icon imports

const Accessibility = () => {
  // Enhanced venue data with more diverse accessibility options
  const venues = [
    {
      id: 1,
      name: "Luxury Hotel & Suites",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Experience comfort and accessibility in our luxury hotel designed for everyone.",
      features: [
        "Wheelchair accessible entrances and elevators",
        "Full-service accessible restrooms",
        "Visual and auditory fire alarms"
      ],
      disability: "Mobility, Visual, Hearing"
    },
    {
      id: 2,
      name: "Conference & Event Center",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Host your next corporate meeting or special event in our fully accessible event center.",
      features: [
        "Sign language interpreters available",
        "Assistive listening systems",
        "Accessible presentation equipment"
      ],
      disability: "Hearing, Speech, Mobility"
    },
    {
      id: 3,
      name: "Sensory-Friendly Theater",
      image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Enjoy performances in an environment designed for those with sensory sensitivities.",
      features: [
        "Reduced sound and lighting intensity",
        "Quiet spaces for breaks",
        "Relaxed audience etiquette"
      ],
      disability: "Autism, Sensory Processing, ADHD"
    },
    {
      id: 4,
      name: "Beach Resort & Spa",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Enjoy our fully accessible beachfront resort with dedicated beach wheelchairs.",
      features: [
        "Beach wheelchairs available free of charge",
        "Accessible pool with ramp entry",
        "Tactile maps of the resort"
      ],
      disability: "Mobility, Visual, Elderly"
    },
    {
      id: 5,
      name: "Adaptive Sports Complex",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "A sports facility where everyone can participate regardless of physical abilities.",
      features: [
        "Adaptive equipment for various sports",
        "Trained staff for assistance",
        "Accessible changing facilities"
      ],
      disability: "Physical, Developmental, Veterans"
    },
    {
      id: 6,
      name: "Cultural Arts Center",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Our arts center provides an inclusive environment for cultural experiences.",
      features: [
        "Touch tours for visual art exhibits",
        "Audio description services",
        "Tactile exhibits and braille information"
      ],
      disability: "Visual, Hearing, Cognitive"
    },
    {
      id: 7,
      name: "Accessible Nature Reserve",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Experience nature on accessible trails designed for visitors of all mobility levels.",
      features: [
        "Paved, wide trails for wheelchairs",
        "Tactile maps and braille signage",
        "Accessible bird watching platforms"
      ],
      disability: "Mobility, Visual, Elderly"
    },
    {
      id: 8,
      name: "Inclusive Children's Museum",
      image: "https://images.unsplash.com/photo-1505155668933-843980fec62d?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "A museum where all children can learn and play together regardless of abilities.",
      features: [
        "Multisensory exhibits for various abilities",
        "Quiet rooms for sensory breaks",
        "Wheelchair accessible play structures"
      ],
      disability: "Developmental, Autism, Physical"
    },
    {
      id: 9,
      name: "Service Dog Friendly Café",
      image: "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "A welcoming café environment for those with service animals and all accessibility needs.",
      features: [
        "Service animal relief areas",
        "Braille and large-print menus",
        "Staff trained in disability etiquette"
      ],
      disability: "Visual, PTSD, Mobility, Medical"
    },
    {
      id: 10,
      name: "Accessible Music Festival Grounds",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Enjoy music festivals with accessible viewing platforms and inclusive amenities.",
      features: [
        "Elevated viewing platforms",
        "Sign language interpreters for performances",
        "Accessible restrooms and camping"
      ],
      disability: "Mobility, Hearing, Sensory"
    }
  ];
  
  // State for the carousel
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  // Add new state for assistance buttons
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isAiAgentOpen, setIsAiAgentOpen] = useState(false);
  
  // Toggle functions for assistance buttons
  const toggleMessage = () => {
    setIsMessageOpen(!isMessageOpen);
    // Close the AI panel if it's open
    if (isAiAgentOpen) setIsAiAgentOpen(false);
  };

  const toggleAiAgent = () => {
    setIsAiAgentOpen(!isAiAgentOpen);
    // Close the message panel if it's open
    if (isMessageOpen) setIsMessageOpen(false);
  };
  
  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate total pages
  const totalPages = Math.ceil(venues.length / itemsPerPage);
  
  // Navigation functions
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  // Auto advance pages
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 8000);
    return () => clearInterval(interval);
  }, [totalPages]);
  
  // Get current venues to display - ensure no blank spaces
  const getCurrentVenues = () => {
    const startIndex = currentPage * itemsPerPage;
    // If we don't have enough venues to fill the page, loop back to the beginning
    let currentVenues = venues.slice(startIndex, startIndex + itemsPerPage);
    
    // If we don't have enough venues to fill the current page
    if (currentVenues.length < itemsPerPage && venues.length > itemsPerPage) {
      // Get the number of additional venues needed
      const remaining = itemsPerPage - currentVenues.length;
      // Add venues from the beginning of the array
      currentVenues = [...currentVenues, ...venues.slice(0, remaining)];
    }
    
    return currentVenues;
  };
  
  return (
    <div className='relative flex flex-col items-center justify-center container mx-auto p-8 md:px-20 lg:px-32 w-full' id='Accessibility'>
      <h2 className='text-center text-3xl md:text-4xl font-bold mb-4'>Inclusive Venues</h2>
      <p className='text-center text-lg font-light mb-10 max-w-2xl'>
        Dedicated to creating accessible environments for people of all abilities, our venues combine comfort with comprehensive accessibility features.
      </p>
      
      {/* Simplified Carousel */}
      <div className='relative w-full mb-8'>
        {/* Previous Button */}
        <button 
          onClick={prevPage}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all -ml-4 md:ml-0'
          aria-label="Previous venues"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        {/* Carousel Content - Fixed Grid */}
        <div className='overflow-hidden px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {getCurrentVenues().map((venue) => (
              <div 
                key={venue.id} 
                className='flex flex-col bg-white rounded-xl shadow-lg overflow-hidden h-full transition-transform hover:-translate-y-1 hover:shadow-xl'
              >
                {/* Venue Image */}
                <div className='h-48 overflow-hidden relative'>
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    className='w-full h-full object-cover transition-transform hover:scale-105 duration-500'
                    loading="lazy"
                  />
                  <div className='absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg'>
                    {venue.disability}
                  </div>
                </div>
                
                {/* Venue Content */}
                <div className='p-6 flex flex-col flex-1'>
                  <h3 className='text-xl font-semibold mb-2'>{venue.name}</h3>
                  <p className='text-gray-600 mb-4'>{venue.description}</p>
                  
                  {/* Features List */}
                  <div className='mt-auto'>
                    <h4 className='font-semibold text-base mb-2 text-blue-700'>Accessibility Features:</h4>
                    <ul className='list-disc pl-5 space-y-1 text-gray-700'>
                      {venue.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <button className='mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-all font-medium'>
                      Book This Venue
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next Button */}
        <button 
          onClick={nextPage}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all -mr-4 md:mr-0'
          aria-label="Next venues"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
        
        {/* Pagination Indicators */}
        <div className='flex justify-center mt-8 gap-2'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className='mt-12 text-center bg-gray-50 p-8 rounded-xl shadow-sm w-full'>
        <h3 className='text-2xl font-semibold mb-3'>Need Special Accommodations?</h3>
        <p className='mb-6 max-w-2xl mx-auto'>We're committed to making our venues accessible to everyone. Contact us to discuss your specific needs or to request custom accommodations for your next event.</p>
        <a href="#contact" className='inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all'>Request Accommodations</a>
      </div>
      
      {/* Floating Assistance Buttons - Positioned within the Accessibility section */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        {/* Message Button */}
        <div className="relative">
          <button 
            onClick={toggleMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
            aria-label="Get accessibility support via messaging"
          >
            <FiMessageSquare className="w-6 h-6" />
          </button>
          
          {/* Message popup/tooltip */}
          {isMessageOpen && (
            <div className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-xl p-4 transform transition-transform origin-bottom-right">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Accessibility Support</h3>
                <button 
                  onClick={toggleMessage}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close messaging support"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-600">
                  Need help with venue accessibility? Describe your requirements and our team will respond promptly.
                </p>
              </div>
              <textarea 
                className="w-full border border-gray-300 rounded p-2 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Describe your accessibility needs..."
                rows="3"
              ></textarea>
              <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-full hover:bg-blue-700 transition-colors w-full">
                Send Request
              </button>
            </div>
          )}
        </div>
        
        {/* AI Agent Button */}
        <div className="relative">
          <button 
            onClick={toggleAiAgent}
            className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
            aria-label="Get AI assistance with accessibility"
          >
            <FiHelpCircle className="w-6 h-6" />
          </button>
          
          {/* AI Agent popup/tooltip */}
          {isAiAgentOpen && (
            <div className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-xl p-4 transform transition-transform origin-bottom-right">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Accessibility AI Assistant</h3>
                <button 
                  onClick={toggleAiAgent}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close AI assistant"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-purple-100 rounded-lg p-3 mb-3">
                <p className="text-sm text-purple-800">
                  Hi there! I can help you find venues that match your specific accessibility needs. What are you looking for?
                </p>
              </div>
              <textarea 
                className="w-full border border-gray-300 rounded p-2 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" 
                placeholder="Example: I need wheelchair accessible venues with quiet spaces..."
                rows="3"
              ></textarea>
              <button className="bg-purple-600 text-white text-sm py-2 px-4 rounded-full hover:bg-purple-700 transition-colors w-full">
                Ask AI Assistant
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Accessibility