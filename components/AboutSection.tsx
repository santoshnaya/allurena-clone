'use client'

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Left side - Person applying skincare */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-teal-100 to-sage-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Face placeholder */}
                <div className="w-48 h-48 bg-peach-200 rounded-full relative">
                  <div className="absolute top-8 left-8 w-8 h-8 bg-peach-400 rounded-full"></div>
                  <div className="absolute top-12 right-12 w-6 h-6 bg-peach-400 rounded-full"></div>
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-peach-500 rounded-full"></div>
                </div>
                
                {/* Product jar */}
                <div className="absolute top-8 right-8 w-16 h-20">
                  <div className="w-full h-12 bg-amber-800 rounded-lg relative">
                    <div className="absolute top-1 left-1 right-1 h-2 bg-amber-600 rounded-sm"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-amber-600 rounded-full"></div>
                  </div>
                  <div className="w-full h-8 bg-amber-900 rounded-t-lg mt-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">
                FOUNDERS OF THE BRAND
              </p>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-6">
                Alex and Olga's many years of experience allows them to proudly
                offer consumers the most modern care products
              </h3>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                ENHANCE THE NATURAL BEAUTY OF YOUR SKIN EVERY
                DAY WITH ALLURENA PRODUCTS. CHOOSE
                ACCORDING TO THE NEEDS OF YOUR SKIN, AGE AND
                TIME OF USE FROM THE RANGE OF CLEANERS,
                TREATMENTS AND OTHER PRODUCTS.
              </p>
            </div>

            {/* Founders avatars */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-peach-300 to-peach-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <div className="w-6 h-6 bg-peach-600 rounded-full"></div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <div className="w-6 h-6 bg-teal-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Alex & Olga</p>
                <p className="text-xs text-gray-500">Co-founders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Product showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left side - Green section with product */}
          <div className="bg-sage-200 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-sm font-medium text-gray-700 mb-4 tracking-wide">
                SKIN PRESERVATION
              </p>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">
                Protection
              </h3>
              
              {/* Product bottle */}
              <div className="mb-8">
                <div className="w-24 h-32 bg-amber-800 rounded-lg mx-auto relative">
                  <div className="absolute top-2 left-2 right-2 h-4 bg-amber-600 rounded-sm"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-amber-600 rounded-full"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-amber-700 rounded-full"></div>
                  {/* Pump */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gray-800 rounded-sm"></div>
                </div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">Product type: <span className="font-medium">CLEANERS & TREATMENTS</span></p>
                <p className="text-sm text-gray-600">Price: <span className="font-medium">FROM $60.00</span></p>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-16 h-16 border border-gray-400/20 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border border-gray-400/20 rounded-full"></div>
          </div>

          {/* Right side - Black and white portrait */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden relative">
            <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              {/* Portrait placeholder */}
              <div className="w-64 h-80 bg-gray-600 rounded-lg relative overflow-hidden">
                {/* Face area */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gray-400 rounded-full"></div>
                {/* Eyes */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
                {/* Hair/head area */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gray-500 rounded-t-full"></div>
                {/* Body/neck area */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-32 bg-gray-500 rounded-t-full"></div>
                {/* Freckles effect */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 space-y-1">
                  <div className="flex space-x-1 justify-center">
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                  </div>
                  <div className="flex space-x-2 justify-center">
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 