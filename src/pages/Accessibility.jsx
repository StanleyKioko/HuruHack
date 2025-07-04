import React from 'react'

const Accessibility = () => {
  // Venue data with images and descriptions
  const venues = [
    {
      id: 1,
      name: "Luxury Hotel & Suites",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7a?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbXVuaXR5JTIwY2VudGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
      description: "Our recreation complex features inclusive programs and adaptive equipment for activities. We pride ourselves on creating a space where everyone can participate in workshops, training, and community events.",
      features: [
        "Adaptive equipment for various activities",
        "Specialized workshops and training sessions",
        "Regular community support group meetings",
        "Accessible shuttle transportation",
        "Digital accessibility resources and training"
      ]
    }
  ];

  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-8 md:px-20 lg:px-32 w-full' id='Accessibility'>
      <h2 className='text-center text-3xl md:text-4xl font-bold mb-4'>Inclusive Venues</h2>
      <p className='text-center text-lg font-light mb-10 max-w-2xl'>
        Dedicated to creating accessible environments for people of all abilities, our venues combine comfort with comprehensive accessibility features.
      </p>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
        {venues.map((venue) => (
          <div key={venue.id} className='flex flex-col bg-white rounded-xl shadow-lg overflow-hidden h-full transition-transform hover:-translate-y-1 hover:shadow-xl'>
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
              <h3 className='text-2xl font-semibold mb-3'>{venue.name}</h3>
              <p className='text-gray-600 mb-4 flex-grow'>{venue.description}</p>
              
              {/* Features List */}
              <div className='mt-auto'>
                <h4 className='font-semibold text-lg mb-2 text-blue-700'>Accessibility Features:</h4>
                <ul className='list-disc pl-5 space-y-1 text-gray-700'>
                  {venue.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <button className='mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium'>
                  Book This Venue
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className='mt-16 text-center bg-gray-50 p-8 rounded-xl shadow-sm w-full'>
        <h3 className='text-2xl font-semibold mb-3'>Need Special Accommodations?</h3>
        <p className='mb-6 max-w-2xl mx-auto'>We're committed to making our venues accessible to everyone. Contact us to discuss your specific needs or to request custom accommodations for your next event.</p>
        <a href="#contact" className='inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all'>Request Accommodations</a>
      </div>
    </div>
  )
}

export default Accessibility