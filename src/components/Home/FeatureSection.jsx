import { Clock, Home, Warehouse, Zap, Headphones, DollarSign } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Delivery Pickup",
      description: "Round-the-clock pickup services for your convenience"
    },
    {
      icon: Home,
      title: "Door to Door Delivery", 
      description: "Direct delivery from source to destination"
    },
    {
      icon: Warehouse,
      title: "Free Warehousing",
      description: "Complimentary storage solutions for your goods"
    },
    {
      icon: Zap,
      title: "Fast Delivery Feedbacks",
      description: "Real-time updates on your shipment status"
    },
    {
      icon: Headphones,
      title: "Quality Customer Service",
      description: "Professional support team ready to assist you"
    },
    {
      icon: DollarSign,
      title: "Affordable and Reliable Delivery Charges",
      description: "Competitive pricing with guaranteed reliability"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Content Section - Left */}
          <div className="order-2 lg:order-1">
            {/* Professional Headline */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-4 sm:mb-6">
                Why Choose Our 
                <span className="font-bold text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text"> Premium</span> 
                <br />Logistics Services?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
                Experience excellence in logistics with our comprehensive suite of professional services designed for businesses across Delta State.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-800/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-red-300/30">
                        <IconComponent className="h-6 w-6 text-red-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call-to-Action */}
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25">
                <span>Get Started Today</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Section - Right */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 to-red-800/20 rounded-3xl transform rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-300/20">
                <img 
                  src="/assets/Warri.jpeg"
                  alt="Professional logistics services in Warri and Delta State"
                  className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gradient-to-r from-red-500 to-red-700 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-white">Live Operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}