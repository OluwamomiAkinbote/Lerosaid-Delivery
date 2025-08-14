'use client'

import React, { useState } from 'react';
import { X, MessageCircle, Phone, Mail } from 'lucide-react';

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const closeWidget = () => {
    setIsOpen(false);
  };

  const hideWidget = () => {
    setIsVisible(false);
  };

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-green-500 hover:bg-green-600',
      action: () => window.open('https://wa.me/+2347055528483', '_blank'),
      description: 'Chat with us on WhatsApp'
    },
    {
      name: 'WhatsApp Business',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-green-700 hover:bg-green-800',
      action: () => window.open('https://wa.me/+2348051230133', '_blank'),
      description: 'Business inquiries'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => window.open('mailto:maxholexdon@gmail.com', '_blank'),
      description: 'Send us an email'
    },
    {
      name: 'Call Us',
      icon: <Phone className="w-6 h-6" />,
      color: 'bg-purple-500 hover:bg-purple-600',
      action: () => window.open('tel:+2347055528483', '_blank'),
      description: 'Give us a call'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 right-6 z-50">
      {/* Expanded Contact Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl shadow-2xl border border-red-200 overflow-hidden transform transition-all duration-300 ease-out animate-in slide-in-from-right max-w-[90vw]">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4 relative">
            <h3 className="text-lg font-semibold mb-1">Contact Our Team</h3>
            <p className="text-red-100 text-sm">Fast, reliable logistics solutions</p>
          </div>

          {/* Contact Options */}
          <div className="p-4 space-y-3 max-h-96 overflow-y-auto bg-gradient-to-b from-transparent to-red-50/30">
            {contactOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl text-white transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md ${option.color}`}
              >
                <div className="flex-shrink-0">
                  {option.icon}
                </div>
                <div className="text-left flex-grow">
                  <div className="font-medium text-sm">{option.name}</div>
                  <div className="text-xs opacity-90">{option.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer with close button */}
          <div className="border-t border-red-200 p-3 flex justify-between items-center bg-gradient-to-r from-red-50 to-red-100">
            <button 
              onClick={closeWidget}
              className="px-4 py-2 bg-red-800 hover:bg-red-900 text-gray-100 rounded-lg text-sm font-medium transition-colors"
            >
              Close
            </button>
            <p className="text-xs text-gray-600">Available 24/7 for urgent deliveries</p>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={toggleWidget}
        className="relative w-14 h-14 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
        ) : (
          <MessageCircle className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
        )}
        {/* Pulse animation */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-red-400 opacity-75 animate-ping"></div>
        )}
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          {isOpen ? 'Close contact options' : 'Need logistics help? Contact us!'}
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </button>
    </div>
  );
};

export default FloatingContactWidget;