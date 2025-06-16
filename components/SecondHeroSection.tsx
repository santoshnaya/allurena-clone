'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const SecondHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-peach-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-8 w-24 h-24 bg-sage-200 rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-1/3 left-8 w-32 h-32 bg-teal-200 rounded-full opacity-50 animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-peach-300 rounded-full opacity-50 animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-20 lg:pt-32">
          {/* Main heading with profile images */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight tracking-tight text-gray-900">
                <div className="relative inline-flex items-center mb-4 lg:mb-8">
                  <span className="relative z-10">MAIN THING</span>
                  {/* Profile image 1 */}
                  <div className="absolute -right-16 lg:-right-24 top-1/2 transform -translate-y-1/2">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-peach-400 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-peach-300 to-peach-500 flex items-center justify-center">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-peach-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative inline-flex items-center mb-4 lg:mb-8">
                  <span className="block">FOR</span>
                  {/* Profile image 2 */}
                  <div className="mx-6 lg:mx-12">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-teal-400 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-teal-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <span className="block">EVERY GIRL</span>
                </div>

                <div className="mb-8 lg:mb-12">
                  <span className="block">IS TO ESTABLISH AN</span>
                </div>

                <div className="mb-8 lg:mb-12">
                  <span className="block">ORDER OF SKIN</span>
                </div>

                <div className="relative inline-flex items-center">
                  {/* Profile image 3 */}
                  <div className="absolute -left-16 lg:-left-24 top-1/2 transform -translate-y-1/2">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-sage-400 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-sage-300 to-sage-500 flex items-center justify-center">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-sage-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <span className="relative z-10">DAILY CARE</span>
                </div>
              </h1>
            </div>

            {/* CTA Button and Badge */}
            <div className={`mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Shop now badge */}
              <div className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2">
                <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-600">SHOP NOW</span>
              </div>

              {/* Join us button */}
              <button className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 group">
                <span>Join us</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondHeroSection 