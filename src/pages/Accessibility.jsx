import React, { useState, useEffect, useRef } from 'react'
import { 
  FiSearch, FiUsers, FiCalendar, FiCheckCircle, FiPlusCircle, 
  FiMessageSquare, FiHelpCircle, FiX, FiMessageCircle, FiHeart,
  FiMic, FiSend, FiStopCircle, FiVolume2, FiVolumeX, FiInfo
} from 'react-icons/fi'

const Accessibility = () => {
  
  // Communities data
  const communities = [
    {
      id: 1,
      name: "Mobility Champions",
      category: "Mobility Disabilities",
      members: 1245,
      description: "A supportive community for people with mobility challenges sharing daily tips, advice, and encouragement.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRpc2FiaWxpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      events: [
        { title: "Accessible Trail Adventure", date: "July 20, 2025" },
        { title: "Mobility Aid Workshop", date: "August 5, 2025" }
      ],
      tags: ["Wheelchair", "Crutches", "Prosthetics", "Mobility Aids"]
    },
    {
      id: 2,
      name: "Vision Support Network",
      category: "Visual Impairments",
      members: 978,
      description: "Connect with others experiencing visual impairments to share resources, technology tips, and experiences.",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsaW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      events: [
        { title: "Screen Reader Workshop", date: "July 15, 2025" },
        { title: "Accessible Tech Showcase", date: "July 28, 2025" }
      ],
      tags: ["Blind", "Low Vision", "Screen Readers", "Braille"]
    },
    {
      id: 3,
      name: "Deaf Connections",
      category: "Hearing Disabilities",
      members: 1567,
      description: "A vibrant community for deaf and hard-of-hearing individuals to connect, share experiences, and organize events.",
      image: "https://images.unsplash.com/photo-1630332458162-764f89f40f45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNpZ24lMjBsYW5ndWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      events: [
        { title: "ASL Social Gathering", date: "July 10, 2025" },
        { title: "Deaf Culture Film Festival", date: "July 25, 2025" }
      ],
      tags: ["ASL", "Hearing Aids", "Deaf Culture", "Caption Technology"]
    },
    {
      id: 4,
      name: "Neurodiverse Alliance",
      category: "Neurodevelopmental Conditions",
      members: 1102,
      description: "Supporting adults and children with autism, ADHD, dyslexia, and other neurodevelopmental conditions.",
      image: "https://images.unsplash.com/photo-1611171711815-71b12662eb8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXV0aXNtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      events: [
        { title: "Sensory-Friendly Gathering", date: "July 12, 2025" },
        { title: "Executive Functioning Workshop", date: "August 2, 2025" }
      ],
      tags: ["Autism", "ADHD", "Dyslexia", "Sensory Processing"]
    },
    {
      id: 5,
      name: "Chronic Warriors",
      category: "Chronic Conditions",
      members: 2156,
      description: "A supportive space for those with invisible disabilities and chronic conditions to share coping strategies.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      events: [
        { title: "Pain Management Techniques", date: "July 18, 2025" },
        { title: "Wellness & Self-Care Workshop", date: "August 8, 2025" }
      ],
      tags: ["Fibromyalgia", "Chronic Fatigue", "Chronic Pain", "Autoimmune"]
    },
    {
      id: 6,
      name: "Mental Health Allies",
      category: "Mental Health",
      members: 1876,
      description: "Supporting each other through mental health challenges with compassion, understanding, and practical resources.",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVudGFsJTIoaGVhbHRofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      events: [
        { title: "Anxiety Management Group", date: "July 14, 2025" },
        { title: "Mindfulness & Meditation", date: "July 30, 2025" }
      ],
      tags: ["Anxiety", "Depression", "PTSD", "Bipolar"]
    }
  ];

  // Sample venue data
  const venues = [
    {
      id: 1,
      name: "Inclusive Event Center",
      description: "A modern venue designed with accessibility at its core for hosting events of all sizes.",
      disability: "Mobility",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBzcGFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      features: ["Wheelchair accessible entrances", "Elevators to all floors", "Accessible restrooms", "Reserved parking"]
    },
    {
      id: 2,
      name: "Sensory-Friendly Theater",
      description: "A theater space with adjustable lighting and sound systems to accommodate sensory sensitivities.",
      disability: "Sensory",
      image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlYXRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      features: ["Sensory kits available", "Quiet spaces", "Adjustable lighting", "Reduced sound options"]
    },
    {
      id: 3,
      name: "Accessible Conference Center",
      description: "Fully equipped conference spaces with technology to support various accessibility needs.",
      disability: "Hearing",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      features: ["Hearing loops installed", "Real-time captioning services", "Sign language interpretation available", "Good acoustics"]
    },
    {
      id: 4,
      name: "Cultural Arts Center",
      description: "An arts venue with tactile exhibits and audio descriptions for visual art pieces.",
      disability: "Visual",
      image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      features: ["Audio descriptions", "Tactile exhibits", "High contrast signage", "Braille information"]
    },
    {
      id: 5,
      name: "Inclusive Children's Museum",
      description: "Interactive exhibits designed to be accessible for children of all abilities.",
      disability: "Multiple",
      image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzZXVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      features: ["Wheelchair accessible exhibits", "Sensory-friendly areas", "Tactile displays", "Visual communication tools"]
    },
    {
      id: 6,
      name: "Service Dog Friendly Café",
      description: "A relaxed café environment where service animals are especially welcome.",
      disability: "Various",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      features: ["Service animal relief area", "Water bowls provided", "Staff trained in disability etiquette", "Spacious seating arrangements"]
    }
  ];

  // FAQ data for training the AI
  const faqs = [
    {
      question: "How do I request special accommodations for my visit?",
      answer: "You can request special accommodations when booking your venue or by contacting our support team via WhatsApp at +1-555-987-6543 at least 48 hours before your visit. Our staff will work with you to ensure your specific needs are met."
    },
    {
      question: "Are service animals allowed in all venues?",
      answer: "Yes, service animals are welcome in all our venues. We comply with accessibility laws and recognize the important role service animals play in assisting individuals with disabilities."
    },
    {
      question: "Do you offer sign language interpreters for events?",
      answer: "Yes, we can arrange for sign language interpreters for events with advance notice. Please request this service via WhatsApp at +1-555-987-6543 at least one week before your event to ensure availability."
    },
    {
      question: "How do I know which venues are best suited for my specific accessibility needs?",
      answer: "Our venue listings include detailed accessibility information with icons indicating available features. You can also use our venue filter to search specifically for venues that meet your requirements."
    },
    {
      question: "Is there accessible transportation to your venues?",
      answer: "Many of our venues offer accessible transportation services or are located near public transit with accessibility features. Check the specific venue page for transportation information or contact us via WhatsApp at +1-555-987-6543 for assistance."
    }
  ];

  // Emergency contacts for AI training
  const emergencyContacts = [
    {
      title: "Medical Emergency",
      contacts: [
        { name: "Emergency Ambulance", number: "911", description: "24/7 Emergency Medical Services" },
        { name: "Accessibility Medical Helpline", number: "1-800-222-3333", description: "Medical assistance for people with disabilities" }
      ]
    },
    {
      title: "Hospital Services",
      contacts: [
        { name: "General Hospital", number: "1-888-555-1234", description: "Main reception for accessibility inquiries" },
        { name: "Patient Transport", number: "1-888-555-2345", description: "Accessible transportation to medical facilities" }
      ]
    },
    {
      title: "Police & Safety",
      contacts: [
        { name: "Emergency Police", number: "911", description: "For immediate danger or emergency" },
        { name: "Non-Emergency Line", number: "1-800-444-5555", description: "For situations requiring police assistance but not emergencies" }
      ]
    },
    {
      title: "Community Support",
      contacts: [
        { name: "Disability Resource Center", number: "1-800-777-8888", description: "Community resources and rapid assistance" },
        { name: "Volunteer Support Network", number: "1-800-777-9999", description: "Community volunteers for immediate help" }
      ]
    },
    {
      title: "Crisis Support",
      contacts: [
        { name: "Crisis Text Line", number: "Text HOME to 741741", description: "24/7 crisis support via text" },
        { name: "Mental Health Helpline", number: "1-800-666-7777", description: "Emergency mental health support" }
      ]
    },
    {
      title: "General Assistance",
      contacts: [
        { name: "Accessibility Assistance", number: "1-800-888-9999", description: "General help for people with disabilities" },
        { name: "24/7 Support Line", number: "1-800-888-0000", description: "Always available for any accessibility emergency" }
      ]
    }
  ];

  // Contact information for AI training
  const contactInfo = {
    location: "123 Accessibility Avenue, Innovation City, IC 10101",
    phone: {
      main: "(555) 123-4567",
      support: "(555) 987-6543"
    },
    email: {
      info: "info@accessiblevenues.com",
      support: "support@accessiblevenues.com"
    },
    hours: "Monday - Friday: 9am - 5pm, Weekend: Closed (Emergency Support Available)"
  };

  // Company information for AI training
  const companyInfo = {
    name: "HuruSpaces",
    mission: "To create a seamless experience for users by providing top-notch services and support, empowering everyone to access and enjoy venues without limitations.",
    experience: "10+ years",
    projectsCompleted: "100+",
    clients: "50+",
    renovatedVenues: "100+"
  };

  // State for the carousel
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  // Add new state for assistance buttons
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isAiAgentOpen, setIsAiAgentOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [hasSpeechRecognition, setHasSpeechRecognition] = useState(false);
  
  // Add new state for enhanced AI assistant
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Add state for speech synthesis
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  
  // States for communities section
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [joinedCommunities, setJoinedCommunities] = useState([]);
  
  // Check for speech recognition and speech synthesis support
  useEffect(() => {
    // Check if the browser supports the Web Speech API
    setHasSpeechRecognition(
      'SpeechRecognition' in window || 
      'webkitSpeechRecognition' in window
    );
    
    // Check if speech synthesis is supported
    setSpeechEnabled('speechSynthesis' in window);
  }, []);

  // Scroll to bottom of messages when conversation updates
  useEffect(() => {
    if (messagesEndRef.current && isAiAgentOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation, isAiAgentOpen]);

  // Speech synthesis function for reading AI responses
  const speakText = (text) => {
    if (!speechEnabled) return;
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    
    // Create a new SpeechSynthesisUtterance instance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure the speech
    utterance.lang = 'en-US';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Add event listeners
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    // Start speaking
    window.speechSynthesis.speak(utterance);
  };
  
  // Stop speaking function
  const stopSpeaking = () => {
    if (!speechEnabled) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  // Enhanced knowledge base for AI responses based on website content
  const generateResponse = (query) => {
    const lowercaseQuery = query.toLowerCase().trim();
  
    // Helper function to calculate relevance score
    const calculateRelevance = (item, queryWords, type = 'venue') => {
      let score = 0;
      const fields = type === 'venue' 
        ? [item.name, item.description, item.disability, ...item.features]
        : [item.name, item.description, item.category, ...item.tags];
  
      queryWords.forEach(word => {
        fields.forEach(field => {
          if (field.toLowerCase().includes(word)) {
            score += 1;
            // Boost score for exact disability or tag matches
            if ((type === 'venue' && field === item.disability) || 
                (type === 'community' && field === item.category)) {
              score += 2;
            }
          }
        });
      });
      return score;
    };
  
    // Split query into words for better matching
    const queryWords = lowercaseQuery.split(/\s+/).filter(word => word.length > 2);
  
    // Find matching venues
    const matchingVenues = venues
      .map(venue => ({
        venue,
        score: calculateRelevance(venue, queryWords, 'venue')
      }))
      .filter(v => v.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3); // Limit to top 3 matches
  
    // Find matching communities
    const matchingCommunities = communities
      .map(community => ({
        community,
        score: calculateRelevance(community, queryWords, 'community')
      }))
      .filter(c => c.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3); // Limit to top 3 matches
  
    // Specific handling for visual impairments
    if (lowercaseQuery.includes('visual') || lowercaseQuery.includes('blind') || lowercaseQuery.includes('sight')) {
      const visualVenues = matchingVenues.filter(v => 
        v.venue.disability.toLowerCase().includes('visual') || 
        v.venue.features.some(f => f.toLowerCase().includes('braille') || f.toLowerCase().includes('audio'))
      );
      const visualCommunities = matchingCommunities.filter(c => 
        c.community.category.toLowerCase().includes('visual') || 
        c.community.tags.some(t => t.toLowerCase().includes('blind') || t.toLowerCase().includes('braille'))
      );
  
      if (visualVenues.length > 0 || visualCommunities.length > 0) {
        let response = "For visual impairments, I recommend the following:\n\n";
        
        if (visualVenues.length > 0) {
          response += "Venues:\n" + visualVenues.map(v => 
            `- ${v.venue.name}: ${v.venue.description} Features include: ${v.venue.features.join(', ')}.`
          ).join('\n') + '\n\n';
        }
        
        if (visualCommunities.length > 0) {
          response += "Communities:\n" + visualCommunities.map(c => 
            `- ${c.community.name} (${c.community.members.toLocaleString()} members): ${c.community.description} Upcoming events: ${c.community.events.map(e => e.title + ' on ' + e.date).join(', ')}.`
          ).join('\n');
        }
        
        return response + "\n\nYou can book these venues or join these communities through our website.";
      }
    }
  
    // Specific handling for mobility impairments
    if (lowercaseQuery.includes('wheelchair') || lowercaseQuery.includes('mobility')) {
      const mobilityVenues = matchingVenues.filter(v => 
        v.venue.disability.toLowerCase().includes('mobility') || 
        v.venue.features.some(f => f.toLowerCase().includes('wheelchair') || f.toLowerCase().includes('elevator'))
      );
      const mobilityCommunities = matchingCommunities.filter(c => 
        c.community.category.toLowerCase().includes('mobility') || 
        c.community.tags.some(t => t.toLowerCase().includes('wheelchair') || t.toLowerCase().includes('mobility'))
      );
  
      if (mobilityVenues.length > 0 || mobilityCommunities.length > 0) {
        let response = "For mobility needs, I recommend the following:\n\n";
        
        if (mobilityVenues.length > 0) {
          response += "Venues:\n" + mobilityVenues.map(v => 
            `- ${v.venue.name}: ${v.venue.description} Features include: ${v.venue.features.join(', ')}.`
          ).join('\n') + '\n\n';
        }
        
        if (mobilityCommunities.length > 0) {
          response += "Communities:\n" + mobilityCommunities.map(c => 
            `- ${c.community.name} (${c.community.members.toLocaleString()} members): ${c.community.description} Upcoming events: ${c.community.events.map(e => e.title + ' on ' + e.date).join(', ')}.`
          ).join('\n');
        }
        
        return response + "\n\nYou can book these venues or join these communities through our website.";
      }
    }
  
    // Specific handling for hearing impairments
    if (lowercaseQuery.includes('deaf') || lowercaseQuery.includes('hearing')) {
      const hearingVenues = matchingVenues.filter(v => 
        v.venue.disability.toLowerCase().includes('hearing') || 
        v.venue.features.some(f => f.toLowerCase().includes('caption') || f.toLowerCase().includes('loop'))
      );
      const hearingCommunities = matchingCommunities.filter(c => 
        c.community.category.toLowerCase().includes('hearing') || 
        c.community.tags.some(t => t.toLowerCase().includes('asl') || t.toLowerCase().includes('hearing'))
      );
  
      if (hearingVenues.length > 0 || hearingCommunities.length > 0) {
        let response = "For hearing impairments, I recommend the following:\n\n";
        
        if (hearingVenues.length > 0) {
          response += "Venues:\n" + hearingVenues.map(v => 
            `- ${v.venue.name}: ${v.venue.description} Features include: ${v.venue.features.join(', ')}.`
          ).join('\n') + '\n\n';
        }
        
        if (hearingCommunities.length > 0) {
          response += "Communities:\n" + hearingCommunities.map(c => 
            `- ${c.community.name} (${c.community.members.toLocaleString()} members): ${c.community.description} Upcoming events: ${c.community.events.map(e => e.title + ' on ' + e.date).join(', ')}.`
          ).join('\n');
        }
        
        return response + "\n\nYou can book these venues or join these communities through our website.";
      }
    }
  
    // Specific handling for sensory or neurodiverse needs
    if (lowercaseQuery.includes('sensory') || lowercaseQuery.includes('autism') || lowercaseQuery.includes('neurodiverse')) {
      const sensoryVenues = matchingVenues.filter(v => 
        v.venue.disability.toLowerCase().includes('sensory') || 
        v.venue.features.some(f => f.toLowerCase().includes('sensory') || f.toLowerCase().includes('quiet'))
      );
      const sensoryCommunities = matchingCommunities.filter(c => 
        c.community.category.toLowerCase().includes('neurodevelopmental') || 
        c.community.tags.some(t => t.toLowerCase().includes('autism') || t.toLowerCase().includes('sensory'))
      );
  
      if (sensoryVenues.length > 0 || sensoryCommunities.length > 0) {
        let response = "For sensory or neurodiverse needs, I recommend the following:\n\n";
        
        if (sensoryVenues.length > 0) {
          response += "Venues:\n" + sensoryVenues.map(v => 
            `- ${v.venue.name}: ${v.venue.description} Features include: ${v.venue.features.join(', ')}.`
          ).join('\n') + '\n\n';
        }
        
        if (sensoryCommunities.length > 0) {
          response += "Communities:\n" + sensoryCommunities.map(c => 
            `- ${c.community.name} (${c.community.members.toLocaleString()} members): ${c.community.description} Upcoming events: ${c.community.events.map(e => e.title + ' on ' + e.date).join(', ')}.`
          ).join('\n');
        }
        
        return response + "\n\nYou can book these venues or join these communities through our website.";
      }
    }
  
    // General venue or community query
    if (lowercaseQuery.includes('venue') || lowercaseQuery.includes('community')) {
      let response = "Here are some recommended options based on your query:\n\n";
      
      if (matchingVenues.length > 0) {
        response += "Venues:\n" + matchingVenues.map(v => 
          `- ${v.venue.name}: ${v.venue.description} Features include: ${v.venue.features.join(', ')}.`
        ).join('\n') + '\n\n';
      }
      
      if (matchingCommunities.length > 0) {
        response += "Communities:\n" + matchingCommunities.map(c => 
          `- ${c.community.name} (${c.community.members.toLocaleString()} members): ${c.community.description} Upcoming events: ${c.community.events.map(e => e.title + ' on ' + e.date).join(', ')}.`
        ).join('\n');
      }
      
      if (matchingVenues.length > 0 || matchingCommunities.length > 0) {
        return response + "\n\nYou can explore more details or book through our website.";
      }
    }
  
    // FAQ matching
    for (const faq of faqs) {
      const keywords = faq.question.toLowerCase().split(' ')
        .filter(word => word.length > 3)
        .map(word => word.replace(/[?.,]/g, ''));
      
      const matchCount = keywords.filter(keyword => lowercaseQuery.includes(keyword)).length;
      if (matchCount >= 2) {
        return faq.answer;
      }
    }
  
    // Emergency contacts
    if (lowercaseQuery.includes('emergency') || lowercaseQuery.includes('urgent help')) {
      return "For emergencies, please call 911. For accessibility medical assistance, contact the Accessibility Medical Helpline at 1-800-222-3333. We also have a Crisis Text Line (Text HOME to 741741) and Mental Health Helpline (1-800-666-7777). The Disability Resource Center (1-800-777-8888) provides community resources and rapid assistance.";
    }
  
    // Contact information
    if (lowercaseQuery.includes('contact') || lowercaseQuery.includes('phone number') || lowercaseQuery.includes('email') || lowercaseQuery.includes('whatsapp')) {
      return `You can contact us through:\n\nWhatsApp: +1-555-987-6543\nPhone: Main: ${contactInfo.phone.main} or Support: ${contactInfo.phone.support}\nEmail: ${contactInfo.email.info} or ${contactInfo.email.support}\nLocation: ${contactInfo.location}\nHours: ${contactInfo.hours}`;
    }
  
    // About the company
    if (lowercaseQuery.includes('about') || lowercaseQuery.includes('company') || lowercaseQuery.includes('mission')) {
      return `HuruSpaces is committed to creating accessible venues and spaces for people of all abilities. Our mission is ${companyInfo.mission} We have ${companyInfo.experience} of experience, ${companyInfo.projectsCompleted} completed projects, ${companyInfo.clients} happy clients, and have renovated over ${companyInfo.renovatedVenues} venues to ensure accessibility.`;
    }
  
    // Default response
    return "Thank you for your question about " + query + ". I'm HuruAI, specialized in providing information about HuruSpaces' accessible venues and communities. We offer venues and communities for various needs including mobility, visual, hearing, sensory, and neurodiverse accommodations. Could you please provide more details about your specific needs so I can recommend the best options?";
  };
  
  // Function to process user query and generate AI response with speech output
  const processAiQuery = async () => {
    if (!userInput.trim()) return;
    
    // Add user message to conversation
    const userMessage = userInput.trim();
    setConversation(prev => [...prev, { sender: 'user', text: userMessage }]);
    setUserInput('');
    setIsLoading(true);
    
    try {
      // Simulate network delay to make it feel more natural
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Generate AI response from our comprehensive knowledge base
      const response = generateResponse(userMessage);
      
      // Add AI response to conversation
      setConversation(prev => [...prev, { sender: 'ai', text: response }]);
      
      // Use speech synthesis to read the response if enabled
      if (speechEnabled) {
        speakText(response);
      }
    } catch (error) {
      console.error('Error processing query:', error);
      setConversation(prev => [...prev, { 
        sender: 'ai', 
        text: 'Sorry, I encountered an error while processing your request. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Toggle functions for assistance buttons
  const toggleMessage = () => {
    setIsMessageOpen(!isMessageOpen);
    // Close the AI panel if it's open
    if (isAiAgentOpen) setIsAiAgentOpen(false);
    
    // Stop any ongoing speech
    if (isSpeaking) stopSpeaking();
  };

  const toggleAiAgent = () => {
    setIsAiAgentOpen(!isAiAgentOpen);
    // Close the message panel if it's open
    if (isMessageOpen) setIsMessageOpen(false);
    // Stop recording if it's happening
    if (isRecording) toggleRecording();
    // Stop any ongoing speech
    if (isSpeaking) stopSpeaking();
  };
  
  // Function to handle voice recording
  const toggleRecording = () => {
    if (!hasSpeechRecognition) {
      alert("Sorry, your browser doesn't support speech recognition.");
      return;
    }
    
    if (isRecording) {
      // Stop recording logic would go here in a full implementation
      setIsRecording(false);
    } else {
      // Start recording logic would go here
      setIsRecording(true);
      
      // Implementing basic speech recognition
      if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        
        recognition.start();
        
        recognition.onresult = (event) => {
          const speechResult = event.results[0][0].transcript;
          setUserInput(prev => prev + ' ' + speechResult);
          setIsRecording(false);
        };
        
        recognition.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsRecording(false);
        };
        
        recognition.onend = () => {
          setIsRecording(false);
        };
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      processAiQuery();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    processAiQuery();
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
  
  // Handle joining/leaving a community
  const handleJoinCommunity = (communityId) => {
    if (joinedCommunities.includes(communityId)) {
      setJoinedCommunities(joinedCommunities.filter(id => id !== communityId));
    } else {
      setJoinedCommunities([...joinedCommunities, communityId]);
    }
  };

  // Filter communities based on search and category
  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          community.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || community.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = [...new Set(communities.map(community => community.category))];
  
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
                    
                    <a 
  href="https://wa.me/+254708967800"
  target="_blank"
  rel="noopener noreferrer"
  className='mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-all font-medium flex items-center justify-center'
>
  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
  Book This Venue
</a>
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
      
      {/* Communities Section */}
      <section className="mt-20 w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Disability Communities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with people who share similar experiences. Join communities focused on specific disabilities to share advice, resources, and build meaningful connections.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/2">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search communities by name, description, or tags..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === '' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setSelectedCategory('')}
            >
              All
            </button>
            {uniqueCategories.map(category => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCommunities.map(community => (
            <div key={community.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={community.image} 
                  alt={community.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
                    {community.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{community.name}</h3>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FiUsers className="mr-1" /> {community.members.toLocaleString()} members
                </div>
                
                <p className="text-gray-600 mb-4">{community.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {community.tags.map((tag, index) => (
                    <span key={index} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Upcoming Events */}
                {community.events.length > 0 && (
                  <div className="border-t border-gray-100 pt-3 mb-4">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <FiCalendar className="mr-2 text-blue-600" /> Upcoming Events
                    </h4>
                    <ul className="space-y-2">
                      {community.events.map((event, index) => (
                        <li key={index} className="text-sm">
                          <span className="font-medium">{event.title}</span>
                          <span className="text-gray-500 ml-2">{event.date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Join Button */}
                <button 
                  onClick={() => handleJoinCommunity(community.id)}
                  className={`w-full py-2 rounded-md font-medium flex items-center justify-center gap-2 transition-all ${
                    joinedCommunities.includes(community.id) 
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {joinedCommunities.includes(community.id) 
                    ? <><FiCheckCircle /> Joined</> 
                    : <><FiPlusCircle /> Join Community</>
                  }
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCommunities.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <FiMessageCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">No communities found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or check back later for new communities.</p>
          </div>
        )}
        
        {/* Create Community CTA */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <FiHeart className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Start Your Own Community</h3>
          <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
            Don't see a community that fits your specific needs? Create your own and connect with others who share similar experiences.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2 mx-auto">
            <FiPlusCircle /> Create a Community
          </button>
        </div>
      </section>
      
      {/* Enhanced Floating Assistance Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        {/* Message Button */}
        <div className="relative">
          <button 
            onClick={toggleMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
            aria-label="Get accessibility support via WhatsApp"
          >
            <FiMessageSquare className="w-6 h-6" />
          </button>
          
          {/* Message popup/tooltip */}
          {isMessageOpen && (
            <div className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-xl p-4 transform transition-transform origin-bottom-right">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Support Team</h3>
                <button 
                  onClick={toggleMessage}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close WhatsApp support"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-600">
                  Need help with venue accessibility? Contact us via WhatsApp to discuss your requirements, and our team will respond promptly.
                </p>
              </div>
              <a 
                href="https://wa.me/+254708967800?text=Hello%2C%20I%20need%20assistance%20with%20accessibility%20requirements%20for%20a%20venue."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white text-sm py-2 px-4 rounded-full hover:bg-green-600 transition-colors w-full flex items-center justify-center gap-2"
              >
                <FiMessageSquare className="w-4 h-4" />
                Contact via WhatsApp
              </a>
            </div>
          )}
        </div>
        
        {/* Enhanced AI Agent Button with label */}
        <div className="relative">
          <div className="absolute -left-40 top-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm shadow-md animate-pulse whitespace-nowrap">
            <span className="mr-16">👋</span> Huru AI
          </div>
          <button 
            onClick={toggleAiAgent}
            className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all group relative"
            aria-label="Get AI assistance with accessibility"
          >
            <FiHelpCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-yellow-400 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
              AI
            </span>
          </button>
          
          {/* Enhanced AI Agent popup/tooltip with conversation history and speech output */}
          {isAiAgentOpen && (
            <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl p-4 transform transition-transform origin-bottom-right max-h-[500px] flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <div className="bg-purple-600 rounded-full p-1.5 mr-2">
                    <FiHelpCircle className="text-white w-5 h-5" />
                  </div>
                  <h3 className="font-semibold">HuruAI</h3>
                </div>
                <div className="flex items-center">
                  {/* Speech toggle button */}
                  {speechEnabled && (
                    <button 
                      onClick={() => {
                        if (isSpeaking) {
                          stopSpeaking();
                        } else if (conversation.length > 0) {
                          // Speak the last AI message
                          const lastAiMessage = [...conversation].reverse().find(msg => msg.sender === 'ai');
                          if (lastAiMessage) speakText(lastAiMessage.text);
                        }
                      }}
                      className={`mr-2 p-1 rounded-full ${isSpeaking ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}
                      aria-label={isSpeaking ? "Stop speaking" : "Read aloud"}
                      title={isSpeaking ? "Stop speaking" : "Read response aloud"}
                    >
                      {isSpeaking ? <FiVolumeX className="w-4 h-4" /> : <FiVolume2 className="w-4 h-4" />}
                    </button>
                  )}
                  <button 
                    onClick={toggleAiAgent}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close AI assistant"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Conversation Area - Scrollable */}
              <div className="flex-1 overflow-y-auto mb-3 max-h-[300px] min-h-[200px]">
                {/* Welcome message - only show if no conversation */}
                {conversation.length === 0 && (
                  <div className="bg-purple-100 rounded-lg p-3 mb-3">
                    <p className="text-sm text-purple-800">
                      Hi there! I'm your AI accessibility assistant. I can help you find venues that match your specific needs or answer questions about accessibility features.
                    </p>
                    <p className="text-xs text-purple-700 mt-2 italic">
                      You can type or use voice input to ask me anything about:
                    </p>
                    <ul className="text-xs text-purple-700 mt-1 list-disc pl-4">
                      <li>Accessible venues and their features</li>
                      <li>Community groups and events</li>
                      <li>Service animal policies</li>
                      <li>Sign language interpreters</li>
                      <li>Booking process and accommodations</li>
                      <li>Emergency contacts and support</li>
                    </ul>
                  </div>
                )}
                
                {/* Conversation messages */}
                {conversation.map((message, index) => (
                  <div 
                    key={index} 
                    className={`mb-3 ${
                      message.sender === 'user' 
                        ? 'flex justify-end' 
                        : 'flex justify-start'
                    }`}
                  >
                    <div 
                      className={`rounded-lg p-3 max-w-[85%] ${
                        message.sender === 'user' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      
                      {/* Speech controls for each AI message */}
                      {message.sender === 'ai' && speechEnabled && (
                        <button 
                          onClick={() => speakText(message.text)}
                          className="mt-1 text-xs text-blue-600 hover:text-blue-800 flex items-center"
                          aria-label="Read this message aloud"
                        >
                          <FiVolume2 className="w-3 h-3 mr-1" /> Read aloud
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start mb-3">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '200ms'}}></div>
                          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '400ms'}}></div>
                        </div>
                        <span className="text-sm text-gray-500">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* This invisible div helps us scroll to the bottom */}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input form */}
              <form onSubmit={handleSubmit} className="mt-2">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about accessibility needs..."
                      className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      disabled={isLoading}
                    />
                    {/* Voice input button (inside input) */}
                    {hasSpeechRecognition && (
                      <button 
                        type="button"
                        onClick={toggleRecording}
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 ${isRecording ? 'text-red-500 animate-pulse' : ''}`}
                        aria-label={isRecording ? "Stop recording" : "Start voice input"}
                      >
                        {isRecording ? <FiStopCircle className="w-5 h-5" /> : <FiMic className="w-5 h-5" />}
                      </button>
                    )}
                  </div>
                  
                  {/* Send button */}
                  <button
                    type="submit"
                    disabled={isLoading || !userInput.trim()}
                    className={`bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors ${
                      (isLoading || !userInput.trim()) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-label="Send message"
                  >
                    <FiSend className="w-5 h-5" />
                  </button>
                </div>
              </form>
              
              {/* Accessibility info with speech indication */}
              <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
                <p className="flex items-center">
                  <FiInfo className="mr-1" />
                  This AI assistant is trained on HuruSpaces content and can help with vision, mobility, hearing, and cognitive accessibility needs.
                  {speechEnabled && (
                    <span className="ml-2 flex items-center text-blue-600">
                      <FiVolume2 className="mr-1" /> Voice output enabled
                    </span>
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Accessibility