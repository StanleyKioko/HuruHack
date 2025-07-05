import React, { useState, useEffect } from 'react'
import { FiMessageSquare, FiHelpCircle, FiX, FiMic, FiStopCircle } from 'react-icons/fi' // Added mic icons

const Accessibility = () => {
  // [... existing venue data code remains the same ...]
  
  // State for the carousel
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  // Add new state for assistance buttons
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isAiAgentOpen, setIsAiAgentOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [hasSpeechRecognition, setHasSpeechRecognition] = useState(false);
  
  // Check for speech recognition support
  useEffect(() => {
    // Check if the browser supports the Web Speech API
    setHasSpeechRecognition(
      'SpeechRecognition' in window || 
      'webkitSpeechRecognition' in window
    );
  }, []);
  
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
    // Stop recording if it's happening
    if (isRecording) toggleRecording();
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
      // In a real implementation, we would process the audio here
      // For demonstration purposes, we'll simulate by adding a message to the textarea
      const textarea = document.getElementById('ai-assistant-input');
      if (textarea) {
        textarea.value += "Voice input: I need a wheelchair accessible venue with visual aids. ";
        textarea.focus();
      }
    } else {
      // Start recording logic would go here
      setIsRecording(true);
      // In a real implementation, we would actually start speech recognition here
      // For now we'll just set the state to show the recording UI
    }
  };
  
  // [... other existing functions remain unchanged ...]
  
  return (
    <div className='relative flex flex-col items-center justify-center container mx-auto p-8 md:px-20 lg:px-32 w-full' id='Accessibility'>
      <h2 className='text-center text-3xl md:text-4xl font-bold mb-4'>Inclusive Venues</h2>
      <p className='text-center text-lg font-light mb-10 max-w-2xl'>
        Dedicated to creating accessible environments for people of all abilities, our venues combine comfort with comprehensive accessibility features.
      </p>
      
      {/* [... existing carousel code remains the same ...] */}
      
      <div className='mt-12 text-center bg-gray-50 p-8 rounded-xl shadow-sm w-full'>
        <h3 className='text-2xl font-semibold mb-3'>Need Special Accommodations?</h3>
        <p className='mb-6 max-w-2xl mx-auto'>We're committed to making our venues accessible to everyone. Contact us to discuss your specific needs or to request custom accommodations for your next event.</p>
        <a href="#contact" className='inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all'>Request Accommodations</a>
      </div>
      
      {/* Enhanced Floating Assistance Buttons */}
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
        
        {/* Enhanced AI Agent Button with label */}
        <div className="relative">
          <div className="absolute -left-40 top-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm shadow-md animate-pulse whitespace-nowrap">
            <span className="mr-1">👋</span> AI Assistant Available
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
          
          {/* Enhanced AI Agent popup/tooltip */}
          {isAiAgentOpen && (
            <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl p-4 transform transition-transform origin-bottom-right">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <div className="bg-purple-600 rounded-full p-1.5 mr-2">
                    <FiHelpCircle className="text-white w-5 h-5" />
                  </div>
                  <h3 className="font-semibold">HuruAI Accessibility Assistant</h3>
                </div>
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
                  Hi there! I'm your AI accessibility assistant. I can help you find venues that match your specific needs or answer questions about accessibility features.
                </p>
                <p className="text-xs text-purple-700 mt-2 italic">
                  You can type or use voice input to ask me anything!
                </p>
              </div>
              <textarea 
                id="ai-assistant-input"
                className="w-full border border-gray-300 rounded p-2 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" 
                placeholder="Type or use voice to describe your needs..."
                rows="3"
                aria-label="Type your request or use voice input"
              ></textarea>
              
              {/* Voice Input Option */}
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <button 
                    onClick={toggleRecording}
                    disabled={!hasSpeechRecognition}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm 
                      ${isRecording 
                        ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                        : 'bg-purple-100 text-purple-600 hover:bg-purple-200'} 
                      ${!hasSpeechRecognition ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    aria-label={isRecording ? "Stop voice recording" : "Start voice recording"}
                  >
                    {isRecording 
                      ? <><FiStopCircle className="w-4 h-4" /> Recording...</>
                      : <><FiMic className="w-4 h-4" /> Voice Input</>
                    }
                  </button>
                  {isRecording && (
                    <div className="flex justify-center mt-1">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-4 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
                        <div className="w-1.5 h-5 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
                        <div className="w-1.5 h-3 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
                        <div className="w-1.5 h-6 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '600ms'}}></div>
                        <div className="w-1.5 h-2 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '800ms'}}></div>
                      </div>
                    </div>
                  )}
                </div>
                <button className="bg-purple-600 text-white text-sm py-2 px-4 rounded-full hover:bg-purple-700 transition-colors">
                  Ask AI
                </button>
              </div>
              
              {/* Accessibility info */}
              <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
                <p>
                  This AI assistant is optimized for accessibility and can help with vision, mobility, hearing, and cognitive needs.
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