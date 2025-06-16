'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gray-50 relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-8 w-32 h-32 bg-peach-200 rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-1/4 right-8 w-24 h-24 bg-teal-200 rounded-full opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-sage-200 rounded-full opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-12 lg:pt-20">
          {/* Main heading with profile images */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight tracking-tight">
                <span className="block">SKIN ROUTINE</span>
                <div className="relative inline-flex items-center">
                  {/* Profile image 1 */}
                  <div className="absolute -left-16 lg:-left-24 top-1/2 transform -translate-y-1/2">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-peach-300 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-peach-200 to-peach-400 flex items-center justify-center">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-peach-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <span className="relative z-10">THAT</span>
                </div>
              </h1>
            </div>

            <div className="mt-4 lg:mt-8 relative">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight tracking-tight">
                <span className="block">WORKS FROM</span>
                <div className="relative inline-flex items-center mt-2 lg:mt-4">
                  <span className="relative z-10">THE</span>
                  {/* Profile image 2 */}
                  <div className="mx-4 lg:mx-8">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-teal-300 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-teal-200 to-teal-400 flex items-center justify-center">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-teal-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <span className="relative z-10">INSIDE OUT</span>
                </div>
              </h2>
            </div>

            <div className="mt-4 lg:mt-8">
              <h3 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight tracking-tight">
                <span className="relative inline-flex items-center">
                  <span>&amp; THE OUTSIDE IN</span>
                  {/* Profile image 3 */}
                  <div className="absolute -right-16 lg:-right-24 top-1/2 transform -translate-y-1/2">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-sage-300 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-sage-200 to-sage-400 flex items-center justify-center">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-sage-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </span>
              </h3>
            </div>

            {/* CTA Button */}
            <div className={`mt-12 lg:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 group">
                <span>JOIN US</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Badge */}
            <div className={`mt-8 lg:mt-12 flex justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2">
                <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-600">SHOP NOW</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation categories */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-4 overflow-x-auto">
            {[
              { name: 'Cleansers', icon: '🧼' },
              { name: 'Treatments', icon: '✨' },
              { name: 'Moisturisers', icon: '💧' },
              { name: 'Sunscreens', icon: '☀️' },
              { name: 'Toners and Mists', icon: '🌸' },
              { name: 'Masks', icon: '🎭' }
            ].map((item, index) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 