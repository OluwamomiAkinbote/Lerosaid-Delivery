"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck, MapPin, Clock, Star, Download } from "lucide-react";

export default function HeroSection() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    // Create a link and trigger download
    const link = document.createElement("a");
    link.href = "/assets/lerosaid-price-list.pdf"; // file path in public/assets
    link.download = "lerosaid-price-list.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset download state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 bg-cover bg-center" />

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto pt-20 pb-10">
        <div className="w-full text-center space-y-6 sm:space-y-8">
          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-100">Trusted Across Delta State</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
            Premium{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text">
              Logistics
            </span>
            <br />
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-300">
              Services in Warri & Delta State
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            Professional freight forwarding, warehousing, and distribution services across Warri,
            Asaba, Sapele, and all Delta State communities — connecting businesses with reliable
            logistics infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-red-500/25 disabled:opacity-70"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              {isDownloading ? "Downloading..." : "Download Location-Price Guide"}
            </button>

            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-gray-100 hover:text-white font-semibold py-3 px-6 rounded-full text-sm sm:text-base transition-all duration-300 flex items-center justify-center">
              <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View Service Areas
            </button>
          </div>

          {/* Stats */}
          <div className="pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-600/20 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 border border-red-500/30">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-red-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">99.8%</h3>
              <p className="text-gray-400 text-sm sm:text-base font-medium">On-Time Delivery in Delta</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-600/20 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 border border-red-500/30">
                <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-red-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-400 text-sm sm:text-base font-medium">Warri Hub Operations</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-600/20 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 border border-red-500/30">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-red-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">25+</h3>
              <p className="text-gray-400 text-sm sm:text-base font-medium">LGAs Covered Statewide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Explore Services</span>
        <ChevronDown className="h-6 w-6 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
}