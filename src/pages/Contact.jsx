import React from 'react';
import { FiPhone, FiAlertTriangle, FiActivity, FiShield, FiUsers, FiHelpCircle, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  // Your existing contact page content would be here
  
  // Emergency contacts data
  const emergencyContacts = [
    {
      id: 1,
      title: "Medical Emergency",
      icon: <FiActivity className="h-8 w-8 text-red-600" />,
      contacts: [
        { name: "Emergency Ambulance", number: "911", description: "24/7 Emergency Medical Services" },
        { name: "Accessibility Medical Helpline", number: "1-800-222-3333", description: "Medical assistance for people with disabilities" }
      ],
      color: "red"
    },
    {
      id: 2,
      title: "Hospital Services",
      icon: <FiPhone className="h-8 w-8 text-blue-600" />,
      contacts: [
        { name: "General Hospital", number: "1-888-555-1234", description: "Main reception for accessibility inquiries" },
        { name: "Patient Transport", number: "1-888-555-2345", description: "Accessible transportation to medical facilities" }
      ],
      color: "blue"
    },
    {
      id: 3,
      title: "Police & Safety",
      icon: <FiShield className="h-8 w-8 text-indigo-600" />,
      contacts: [
        { name: "Emergency Police", number: "911", description: "For immediate danger or emergency" },
        { name: "Non-Emergency Line", number: "1-800-444-5555", description: "For situations requiring police assistance but not emergencies" }
      ],
      color: "indigo"
    },
    {
      id: 4,
      title: "Community Support",
      icon: <FiUsers className="h-8 w-8 text-green-600" />,
      contacts: [
        { name: "Disability Resource Center", number: "1-800-777-8888", description: "Community resources and rapid assistance" },
        { name: "Volunteer Support Network", number: "1-800-777-9999", description: "Community volunteers for immediate help" }
      ],
      color: "green"
    },
    {
      id: 5,
      title: "Crisis Support",
      icon: <FiAlertTriangle className="h-8 w-8 text-yellow-600" />,
      contacts: [
        { name: "Crisis Text Line", number: "Text HOME to 741741", description: "24/7 crisis support via text" },
        { name: "Mental Health Helpline", number: "1-800-666-7777", description: "Emergency mental health support" }
      ],
      color: "yellow"
    },
    {
      id: 6,
      title: "General Assistance",
      icon: <FiHelpCircle className="h-8 w-8 text-purple-600" />,
      contacts: [
        { name: "Accessibility Assistance", number: "1-800-888-9999", description: "General help for people with disabilities" },
        { name: "24/7 Support Line", number: "1-800-888-0000", description: "Always available for any accessibility emergency" }
      ],
      color: "purple"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 lg:px-16">
      {/* Your existing contact form and information would be here */}
      
      {/* Emergency Contacts Section */}
      <section className="mt-16 mb-12">
        <div className="relative">
          {/* Emergency Contact Header with Alert Design */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6 px-8 rounded-t-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4">
              <div className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-red-400 opacity-25"></div>
              <FiAlertTriangle className="relative h-8 w-8 text-red-100" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
              <FiPhone className="h-8 w-8" /> Emergency Contacts
            </h2>
            <p className="text-lg mt-2 max-w-2xl">
              Immediate assistance for individuals with disabilities in emergency situations. These services are available 24/7.
            </p>
          </div>
          
          {/* Emergency Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gray-50 rounded-b-xl shadow-lg border border-gray-200">
            {emergencyContacts.map((category) => (
              <div 
                key={category.id} 
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border-t-4 border-${category.color}-500`}
              >
                <div className={`bg-${category.color}-50 p-5`}>
                  <div className="flex items-center gap-4">
                    {category.icon}
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-5">
                  {category.contacts.map((contact, index) => (
                    <div 
                      key={index}
                      className={`${index > 0 ? 'mt-4 pt-4 border-t border-gray-100' : ''}`}
                    >
                      <p className="font-medium text-gray-800">{contact.name}</p>
                      <a 
                        href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
                        className={`flex items-center gap-2 text-lg font-bold text-${category.color}-600 hover:text-${category.color}-800 mt-1`}
                      >
                        <FiPhone /> {contact.number}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">{contact.description}</p>
                    </div>
                  ))}
                  
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <button className={`flex items-center justify-center w-full py-2 rounded-md bg-${category.color}-100 text-${category.color}-700 hover:bg-${category.color}-200 transition-all text-sm font-medium`}>
                      <FiMessageCircle className="mr-2" /> Request assistance
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Emergency Information */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Important Information When Calling For Help</h3>
          <ul className="list-disc pl-5 space-y-2 text-blue-900">
            <li>Clearly state that you have a disability and describe your specific needs</li>
            <li>Provide your exact location with landmarks if possible</li>
            <li>Explain any mobility equipment or service animals that are with you</li>
            <li>Inform if you require specific communication accommodations</li>
            <li>Stay on the line until help arrives if it's safe to do so</li>
          </ul>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href="#download-emergency-card"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Download Emergency Info Card
            </a>
            <a 
              href="#emergency-preparedness"
              className="inline-block bg-white text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all"
            >
              Emergency Preparedness Guide
            </a>
          </div>
        </div>
      </section>
      
      {/* Emergency Map Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Nearby Emergency Services</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          {/* Here you would integrate Google Maps or another map provider */}
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
            <p className="text-gray-600">Interactive map of nearby emergency services would be displayed here</p>
            {/* Example: <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" frameBorder="0" allowFullScreen></iframe> */}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          View accessible hospitals, police stations, and emergency centers in your area.
        </p>
      </section>
    </div>
  );
};

export default Contact;