import React, { useState, useRef, useEffect } from 'react'

const Accessibility = () => {
  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Venue data with images and descriptions
  const venues = [
    {
      id: 1,
      name: "Luxury Hotel & Suites",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Experience comfort and accessibility in our luxury hotel designed for everyone. Our spaces feature wheelchair accessible pathways, accessible restrooms, and adjustable height furniture throughout the property.",
      features: [
        "Wheelchair accessible entrances and elevators",
        "Full-service accessible restrooms",
        "Adjustable furniture in all rooms",
        "Visual alarm systems for hearing impaired",
        "Close proximity to city attractions"
      ]
    },
    {
      id: 2,
      name: "Conference & Event Center",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Host your next corporate meeting or special event in our fully accessible event center. We offer comprehensive support services including trained staff and assistive technology to ensure everyone feels included.",
      features: [
        "Trained staff for personalized assistance",
        "Sign language interpreters available on request",
        "Assistive listening systems in all meeting rooms",
        "Sensory-friendly quiet spaces",
        "Service animal accommodations"
      ]
    },
    {
      id: 3,
      name: "Community Recreation Complex",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7a?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Our recreation complex features inclusive programs and adaptive equipment for activities. We pride ourselves on creating a space where everyone can participate in workshops, training, and community events.",
      features: [
        "Adaptive equipment for various activities",
        "Specialized workshops and training sessions",
        "Regular community support group meetings",
        "Accessible shuttle transportation",
        "Digital accessibility resources and training"
      ]
    },
    {
      id: 4,
      name: "Beach Resort & Spa",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Enjoy our fully accessible beachfront resort with dedicated beach wheelchairs and accessible swimming areas. Our spa facilities are designed to accommodate guests with all mobility levels.",
      features: [
        "Beach wheelchairs available free of charge",
        "Accessible pool with ramp entry",
        "Spa treatments adapted for all abilities",
        "Accessible beachfront pathways",
        "Specialized beach transfer services"
      ]
    },
    {
      id: 5,
      name: "Corporate Meeting Hub",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "A modern workspace designed for accessibility and productivity. Perfect for corporate meetings, training sessions, and collaborative work with all necessary accommodations.",
      features: [
        "Height-adjustable desks and tables",
        "Advanced assistive technology available",
        "Audio induction loop systems installed",
        "Accessible presentation equipment",
        "Ergonomic seating options"
      ]
    },
    {
      id: 6,
      name: "Cultural Arts Center",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Our arts center provides an inclusive environment for cultural experiences with accessible seating throughout performance spaces and tactile exhibits in our gallery.",
      features: [
        "Accessible seating with companion seats",
        "Audio description services for performances",
        "Tactile exhibits and braille information",
        "Assistive listening systems in theaters",
        "Sensory-friendly performance options"
      ]
    },
    {
      id: 7,
      name: "Urban Garden Retreat",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "A peaceful urban garden with raised planting beds, wide paved pathways, and accessible seating areas. Perfect for events, gatherings or just enjoying nature in the city.",
      features: [
        "Raised garden beds at wheelchair height",
        "Firm, level pathways throughout the garden",
        "Accessible water features and fountains",
        "Shaded rest areas with accessible seating",
        "Sensory garden with aromatic plants"
      ]
    },
    {
      id: 8,
      name: "Sports & Fitness Complex",
      image: "https://images.unsplash.com/photo-1579722820151-60dc91c21810?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive fitness facility with adaptive equipment and inclusive sports programs. Our trained staff can assist with customized workout plans for all ability levels.",
      features: [
        "Adaptive fitness equipment",
        "Pool with hydraulic lift and zero-depth entry",
        "Accessible changing rooms and showers",
        "Inclusive sports programs and classes",
        "Personal trainers specialized in adaptive fitness"
      ]
    },
    {
      id: 9,
      name: "Education & Learning Center",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "Our learning center provides accessible education spaces with the latest assistive technology. Perfect for workshops, classes, and continuing education programs.",
      features: [
        "Adaptive computer stations with specialized software",
        "Materials available in multiple formats",
        "Communication assistance available",
        "Flexible seating arrangements",
        "Quiet study spaces with reduced sensory stimulation"
      ]
    },
    {
      id: 10,
      name: "Wellness & Meditation Sanctuary",
      image: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
      description: "A tranquil space designed for mental wellbeing and relaxation. Features include accessible meditation areas, therapy rooms, and sensory gardens for complete wellness.",
      features: [
        "Accessible meditation platforms",
        "Therapy rooms with adjustable equipment",
        "Sensory regulation spaces",
        "Guided meditation sessions with visual elements",
        "Aromatherapy with consideration for sensitivities"
      ]
    }
  ];
  
  // Calculate how many slides to display based on screen width
  const [slidesToShow, setSlidesToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Handle arrow navigation
  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex + slidesToShow >= venues.length 
        ? 0 
        : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 
        ? Math.max(0, venues.length - slidesToShow) 
        : prevIndex - 1
    );
  };
  
  // Handle touch events for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };
  
  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow]);
  
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-8 md:px-20 lg:px-32 w-full' id='Accessibility'>
      <h2 className='text-center text-3xl md:text-4xl font-bold mb-4'>Inclusive Venues</h2>
      <p className='text-center text-lg font-light mb-10 max-w-2xl'>
        Dedicated to creating accessible environments for people of all abilities, our venues combine comfort with comprehensive accessibility features.
      </p>
      
      {/* Carousel Container */}
      <div className='relative w-full mb-8'>
        {/* Previous Button */}
        <button 
          onClick={prevSlide}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all -ml-4 md:ml-0'
          aria-label="Previous venue"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        {/* Carousel Track */}
        <div 
          className='overflow-hidden'
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className='flex transition-transform duration-500 ease-out'
            style={{ 
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              width: `${(venues.length / slidesToShow) * 100}%`
            }}
          >
            {venues.map((venue) => (
              <div 
                key={venue.id} 
                className='px-2'
                style={{ width: `${100 / venues.length * slidesToShow}%` }}
              >
                <div className='flex flex-col bg-white rounded-xl shadow-lg overflow-hidden h-full transition-transform hover:-translate-y-1 hover:shadow-xl'>
                  {/* Venue Image */}
                  <div className='h-56 overflow-hidden'>
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className='w-full h-full object-cover transition-transform hover:scale-105 duration-500'
                    />
                  </div>
                  
                  {/* Venue Content */}
                  <div className='p-6 flex flex-col flex-1'>
                    <h3 className='text-xl font-semibold mb-3'>{venue.name}</h3>
                    <p className='text-gray-600 mb-4 flex-grow text-sm'>{venue.description}</p>
                    
                    {/* Features List */}
                    <div className='mt-auto'>
                      <h4 className='font-semibold text-base mb-2 text-blue-700'>Accessibility Features:</h4>
                      <ul className='list-disc pl-5 space-y-1 text-gray-700 text-sm'>
                        {venue.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                        {venue.features.length > 3 && (
                          <li className='text-blue-600 cursor-pointer'>+ {venue.features.length - 3} more features</li>
                        )}
                      </ul>
                      
                      <button className='mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-all font-medium text-sm'>
                        Book This Venue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next Button */}
        <button 
          onClick={nextSlide}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all -mr-4 md:mr-0'
          aria-label="Next venue"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
        
        {/* Carousel Indicators */}
        <div className='flex justify-center mt-6 gap-1.5'>
          {Array.from({ length: Math.ceil(venues.length / slidesToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * slidesToShow)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex / slidesToShow === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
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