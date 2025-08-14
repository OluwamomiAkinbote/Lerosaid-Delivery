'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Phone, MessageCircle, User, Send, CheckCircle, MapPin, Clock, Mail } from 'lucide-react';

function ThankYouSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-gray-200 flex items-center justify-center py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-transparent rounded-3xl shadow-sm p-8 sm:p-12 border border-gray-100">
          
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mb-6 shadow-lg">
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
            </div>
            
            {/* Thank You Message */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Message Sent Successfully
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
              Thank you for reaching out to our logistics team. We've received your inquiry and will respond within 24 hours.
            </p>
          </div>
          
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-xl mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Primary Line</h3>
              <p className="text-blue-600 font-medium text-lg">+234 705 552 8483</p>
              <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-xl mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Support</h3>
              <p className="text-green-600 font-medium text-lg">+234 805 123 0133</p>
              <p className="text-sm text-gray-500 mt-1">Quick responses</p>
            </div>
          </div>
          
          {/* Service Promise */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 mb-8 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">What Happens Next?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">1</div>
                <p className="text-sm text-gray-600">Review your requirements</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">2</div>
                <p className="text-sm text-gray-600">Prepare custom quote</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">3</div>
                <p className="text-sm text-gray-600">Contact you within 24hrs</p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.reload()} 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/25"
            >
              <Send className="h-5 w-5" />
              Send Another Message
            </button>
            
            <a 
              href="https://wa.me/2348051230133" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm("mblkbggr");
  
  if (state.succeeded) {
    return <ThankYouSection />;
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight mb-3 sm:mb-4 lg:mb-6">
            Get Your 
            <span className="font-bold text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text"> Free Quote</span>
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-300 block mt-1 sm:mt-2">Contact Our Logistics Team</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto px-4">
            Ready to streamline your logistics? Get in touch with our professional team for customized solutions across Warri and Delta State.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    <User className="inline h-4 w-4 mr-2" />
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                  <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">
                    <MessageCircle className="inline h-4 w-4 mr-2" />
                    WhatsApp Number *
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    name="whatsapp"
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="+234 XXX XXX XXXX"
                  />
                  <ValidationError prefix="WhatsApp" field="whatsapp" errors={state.errors} />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail className="inline h-4 w-4 mr-2" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base sm:rows-5"
                    placeholder="Tell us about your logistics needs, package details, delivery locations, or any specific requirements..."
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {state.submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            {/* Main Contact Info */}
            <div className="bg-gradient-to-br from-red-600/10 to-red-800/10 rounded-2xl p-4 sm:p-6 lg:p-8 border border-red-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500/20 to-red-800/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1">Our Location</h4>
                    <p className="text-sm sm:text-base text-gray-300">Warri, Delta State, Nigeria</p>
                    <p className="text-xs sm:text-sm text-gray-400">Serving all Delta State communities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500/20 to-red-800/20 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1">Phone Number</h4>
                    <p className="text-sm sm:text-base text-gray-300">+234 705 552 8483</p>
                    <p className="text-xs sm:text-sm text-gray-400">Available 24/7 for urgent deliveries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500/20 to-red-800/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1">WhatsApp</h4>
                    <p className="text-sm sm:text-base text-gray-300">+234 805 123 0133</p>
                    <p className="text-xs sm:text-sm text-gray-400">Quick responses and updates</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500/20 to-red-800/20 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-sm sm:text-base text-gray-300">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-xs sm:text-sm text-gray-400">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Our Response Promise</h4>
              <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Response within 2 hours during business hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Free consultation and quote estimation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Customized logistics solutions</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function App() {
  return <ContactForm />;
}