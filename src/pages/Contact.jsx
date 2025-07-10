import React from 'react';
import { FiPhone, FiAlertTriangle, FiActivity, FiShield, FiUsers, FiHelpCircle, FiMessageCircle, FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  // Regular contact form state
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = React.useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log("Form submitted:", formState);

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. We will get back to you shortly!'
    });

    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  // Emergency contacts data
  const emergencyContacts = [
    {
      id: 1,
      title: "Medical Emergency",
      icon: <FiActivity className="h-8 w-8 text-red-600" />,
      contacts: [
        { name: "Emergency Ambulance", number: "112", description: "24/7 Emergency Medical Services" },
        { name: "Accessibility Medical Helpline", number: "0800 723 253", description: "Medical assistance for people with disabilities" }
      ],
      color: "red"
    },
    {
      id: 2,
      title: "Hospital Services",
      icon: <FiPhone className="h-8 w-8 text-blue-600" />,
      contacts: [
        { name: "General Hospital", number: "+254 20 2726300", description: "Main reception for accessibility inquiries" },
        { name: "Patient Transport", number: "0700 395 395 ", description: "Accessible transportation to medical facilities" }
      ],
      color: "blue"
    },
    {
      id: 3,
      title: "Police & Safety",
      icon: <FiShield className="h-8 w-8 text-indigo-600" />,
      contacts: [
        { name: "Emergency Police", number: "112", description: "For immediate danger or emergency" },
        { name: "Non-Emergency Line", number: " +254 20 272 4991 ", description: "For situations requiring police assistance but not emergencies" }
      ],
      color: "indigo"
    },
    {
      id: 4,
      title: "Community Support",
      icon: <FiUsers className="h-8 w-8 text-green-600" />,
      contacts: [
        { name: "Disability Resource Center", number: "0722 231 815", description: "Community resources and rapid assistance" },
        { name: "Volunteer Support Network", number: "+254 734 567 043", description: "Community volunteers for immediate help" }
      ],
      color: "green"
    },
    {
      id: 5,
      title: "Crisis Support",
      icon: <FiAlertTriangle className="h-8 w-8 text-yellow-600" />,
      contacts: [
        { name: "Crisis Text Line", number: "Text HOME to 741741", description: "24/7 crisis support via text" },
        { name: "Mental Health Helpline", number: " +254 722 178177", description: "Emergency mental health support" }
      ],
      color: "yellow"
    },
    {
      id: 6,
      title: "General Assistance",
      icon: <FiHelpCircle className="h-8 w-8 text-purple-600" />,
      contacts: [
        { name: "Accessibility Assistance", number: "+254 722 231 815", description: "General help for people with disabilities" },
        { name: "24/7 Support Line", number: "+254 740 209 234", description: "Always available for any accessibility emergency" }
      ],
      color: "purple"
    }
  ];

  return (
    <>
      <div id="Contact" className="container mx-auto px-4 py-12 md:px-8 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to assist you with any questions about our accessible venues and services.
            Reach out to us through the form below or use our direct contact information.
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FiMapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Location</h3>
                  <p className="text-gray-600">123 Accessibility Avenue</p>
                  <p className="text-gray-600">Innovation City, IC 10101</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FiPhone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">Main: +254 70 7667899</p>
                  <p className="text-gray-600">Support:+254 798 765 443</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FiMail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">info@accessiblevenues.com</p>
                  <p className="text-gray-600">support@accessiblevenues.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FiClock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                  <p className="text-gray-600">Weekend: Closed (Emergency Support Available)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>

              {formStatus.submitted && (
                <div className={`mt-4 p-3 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  <div className="flex items-center">
                    {formStatus.success ?
                      <FiCheckCircle className="h-5 w-5 mr-2" /> :
                      <FiAlertTriangle className="h-5 w-5 mr-2" />
                    }
                    <p>{formStatus.message}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

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
                  className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border-t-4 ${category.color === 'red' ? 'border-red-500' :
                    category.color === 'blue' ? 'border-blue-500' :
                      category.color === 'indigo' ? 'border-indigo-500' :
                        category.color === 'green' ? 'border-green-500' :
                          category.color === 'yellow' ? 'border-yellow-500' :
                            'border-purple-500'
                    }`}
                >
                  <div className={`${category.color === 'red' ? 'bg-red-50' :
                    category.color === 'blue' ? 'bg-blue-50' :
                      category.color === 'indigo' ? 'bg-indigo-50' :
                        category.color === 'green' ? 'bg-green-50' :
                          category.color === 'yellow' ? 'bg-yellow-50' :
                            'bg-purple-50'
                    } p-5`}>
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
                          className={`flex items-center gap-2 text-lg font-bold ${category.color === 'red' ? 'text-red-600 hover:text-red-800' :
                            category.color === 'blue' ? 'text-blue-600 hover:text-blue-800' :
                              category.color === 'indigo' ? 'text-indigo-600 hover:text-indigo-800' :
                                category.color === 'green' ? 'text-green-600 hover:text-green-800' :
                                  category.color === 'yellow' ? 'text-yellow-600 hover:text-yellow-800' :
                                    'text-purple-600 hover:text-purple-800'
                            } mt-1`}
                        >
                          <FiPhone /> {contact.number}
                        </a>
                        <p className="text-sm text-gray-500 mt-1">{contact.description}</p>
                      </div>
                    ))}

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <a
                        href="https://wa.me/+254708967800"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-full py-2 rounded-md ${category.color === 'red' ? 'bg-red-100 text-red-700 hover:bg-red-200' :
                          category.color === 'blue' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' :
                            category.color === 'indigo' ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' :
                              category.color === 'green' ? 'bg-green-100 text-green-700 hover:bg-green-200' :
                                category.color === 'yellow' ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' :
                                  'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          } transition-all text-sm font-medium`}
                      >
                        <FiMessageCircle className="mr-2" /> Request assistance
                      </a>
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
                href="#emergency-preparedness"
                className="inline-block bg-white text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all"
              >
                Emergency Preparedness Guide
              </a>
            </div>
          </div>
        </section>

        {/* 
        // Emergency Map Section - Commented out as requested
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Nearby Emergency Services</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            {/* Here you would integrate Google Maps or another map provider *//*}
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Interactive map of nearby emergency services would be displayed here</p>
              {/* Example: <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" frameBorder="0" allowFullScreen></iframe> *//*}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            View accessible hospitals, police stations, and emergency centers in your area.
          </p>
        </section>
        */}
      </div>
    </>
  );
};

export default Contact;