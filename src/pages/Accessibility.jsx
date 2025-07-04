import React, { useState, useEffect } from 'react'

const Accessibility = () => {
  // Venue data with images and descriptions
  const venues = [
    {
      id: 1,
      name: "Luxury Hotel & Suites",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Experience comfort and accessibility in our luxury hotel designed for everyone.",
      features: [
        "Wheelchair accessible entrances and elevators",
        "Full-service accessible restrooms",
        "Adjustable furniture in all rooms"
      ]
    },
    {
      id: 2,
      name: "Conference & Event Center",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Host your next corporate meeting or special event in our fully accessible event center.",
      features: [
        "Trained staff for personalized assistance",
        "Sign language interpreters available on request",
        "Assistive listening systems in all meeting rooms"
      ]
    },
    {
      id: 3,
      name: "Community Recreation Complex",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7a?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Our recreation complex features inclusive programs and adaptive equipment for activities.",
      features: [
        "Adaptive equipment for various activities",
        "Specialized workshops and training sessions",
        "Regular community support group meetings"
      ]
    },
    {
      id: 4,
      name: "Beach Resort & Spa",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Enjoy our fully accessible beachfront resort with dedicated beach wheelchairs.",
      features: [
        "Beach wheelchairs available free of charge",
        "Accessible pool with ramp entry",
        "Spa treatments adapted for all abilities"
      ]
    },
    {
      id: 5,
      name: "Corporate Meeting Hub",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "A modern workspace designed for accessibility and productivity.",
      features: [
        "Height-adjustable desks and tables",
        "Advanced assistive technology available",
        "Audio induction loop systems installed"
      ]
    },
    {
      id: 6,
      name: "Cultural Arts Center",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Our arts center provides an inclusive environment for cultural experiences.",
      features: [
        "Accessible seating with companion seats",
        "Audio description services for performances",
        "Tactile exhibits and braille information"
      ]
    }
  ];
  
  // State for the carousel
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
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
  
  // Get current venues to display
  const getCurrentVenues = () => {
    const startIndex = currentPage * itemsPerPage;
    return venues.slice(startIndex, startIndex + itemsPerPage);
  };
  
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-8 md:px-20 lg:px-32 w-full' id='Accessibility'>
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
                <div className='h-48 overflow-hidden'>
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    className='w-full h-full object-cover transition-transform hover:scale-105 duration-500'
                    loading="lazy"
                  />
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
    </div>
  )
}

export default Accessibility