'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

const GallerySection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const galleryItems = [
    {
      id: 1,
      title: '100% CLIMATE NEUTRAL',
      subtitle: 'SUSTAINABLE COSMETICS',
      description: 'Our climate project',
      color: 'bg-peach-200',
      textColor: 'text-gray-800',
      size: 'large'
    },
    {
      id: 2,
      title: 'BOTANICAL INGREDIENTS',
      subtitle: 'NATURAL SKINCARE',
      description: 'Explore our range',
      color: 'bg-gray-800',
      textColor: 'text-white',
      size: 'large',
      pattern: true
    },
    {
      id: 3,
      title: 'Knowledge',
      subtitle: 'Skin-Care Routine Guide',
      description: 'Learn more',
      color: 'bg-sage-200',
      textColor: 'text-gray-800',
      size: 'medium',
      hasIcon: true
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Among our wide range<br />
            you&apos;ll find solutions for<br />
            any skin problems.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ABOUT OUR COMPANY
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl ${item.color} ${
                item.size === 'large' ? 'lg:col-span-1 h-80 lg:h-96' : 'h-80'
              } cursor-pointer hover-lift transition-all duration-300`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {item.pattern && (
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-transparent to-gray-900/20">
                    <div className="absolute inset-4 border border-white/20 rounded-xl"></div>
                    <div className="absolute top-8 left-8 w-16 h-16 border border-white/30 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-12 h-12 border border-white/30 rounded-full"></div>
                  </div>
                </div>
              )}

              {item.hasIcon && (
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 opacity-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M20 50 Q50 20 80 50 Q50 80 20 50" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M20 50 L50 35 L80 50 L50 65 Z" fill="currentColor" opacity="0.3" />
                    </svg>
                  </div>
                </div>
              )}

              <div className={`p-6 lg:p-8 h-full flex flex-col justify-between ${item.textColor}`}>
                <div>
                  <p className="text-sm font-medium mb-2 opacity-80">
                    {item.subtitle}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold leading-tight mb-4">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium underline">
                    {item.description}
                  </p>
                  <div className={`transition-transform duration-300 ${
                    hoveredCard === item.id ? 'translate-x-1' : ''
                  }`}>
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                hoveredCard === item.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection 