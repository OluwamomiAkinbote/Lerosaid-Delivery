import { ChevronDown, ShieldCheck, MapPin, Clock, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] sm:h-screen min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black mt-0">
      
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 bg-cover bg-center" />

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
        <div className="w-full text-center space-y-4 sm:space-y-6 md:space-y-8">
          
          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-100">Trusted Across Delta State</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
            Premium <span className="font-bold text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text">Logistics</span>
            <br />
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-300">
              Services in Warri & Delta State
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            Professional freight forwarding, warehousing, and distribution services across Warri, 
            Asaba, Sapele, and all Delta State communities — connecting businesses with reliable logistics infrastructure.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6">
            <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-red-500/25">
              Download Location-Price Guide
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-gray-100 hover:text-white font-semibold py-3 px-6 rounded-full text-sm sm:text-base transition-all duration-300 flex items-center justify-center">
              <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View Service Areas
            </button>
          </div>

          {/* Stats */}
          <div className="pt-8 sm:pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-600/20 rounded-full mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white">99.8%</h3>
              <p className="text-gray-400 text-xs sm:text-base">On-Time Delivery in Delta</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-600/20 rounded-full mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white">24/7</h3>
              <p className="text-gray-400 text-xs sm:text-base">Warri Hub Operations</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-600/20 rounded-full mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white">25+</h3>
              <p className="text-gray-400 text-xs sm:text-base">LGAs Covered Statewide</p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
