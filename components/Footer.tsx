'use client'

import { Facebook, Twitter, Linkedin, Instagram, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-8">
            LET&apos;S TALK<br />
            BOUT BEAUTY
          </h2>
          <button className="inline-block border-b-2 border-white pb-1 hover:border-gray-300 transition-colors">
            GO BACK TO TOP
          </button>
        </div>

        {/* Footer links and info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Website map */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Website map</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Popular</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Catalog</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Reviews</a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacts</h3>
            <div className="space-y-3">
              <a href="mailto:mail@halo-lab.com" className="block text-gray-300 hover:text-white transition-colors">
                mail@halo-lab.com
              </a>
              <a href="tel:+380963722100" className="block text-gray-300 hover:text-white transition-colors">
                UA: +3 8096 272 2100
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                www.halo-lab.com
              </a>
              <span className="block text-gray-300">
                Ukraine, Odessa
              </span>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                />
                <button className="absolute right-0 bottom-2 text-gray-400 hover:text-white transition-colors">
                  Please fill in this field.
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Commission-free investing, plus<br />
                all tools that you need.
              </p>
            </div>
          </div>

          {/* Logo and social */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-400">2022 halo lab</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">© All rights reserved</p>
            </div>

            {/* Social icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 