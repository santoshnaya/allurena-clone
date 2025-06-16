'use client'

import { Star } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      rating: 4.2,
      text: "Very cool products, I use more than a week and the effect is already there. There are less rashes and not so fast new ones appear. I have problematic skin, so it helps me a lot. Also for the best effect I use their face milk. I recommend it!",
      author: "Brooklin White",
      status: "New customer",
      avatar: "bg-gradient-to-br from-blue-300 to-blue-500"
    },
    {
      id: 2,
      rating: 4.7,
      text: "I recommend to try who has problem skin! Previously, I used other pharmacy products, but this one helped! The gel is economical, the smell is wow, it's second, after washing it is not felt, it also moisturizes the skin. The result is super!",
      author: "Kate Taubiks",
      status: "Regular customer",
      avatar: "bg-gradient-to-br from-sage-300 to-sage-500"
    },
    {
      id: 3,
      rating: 4.9,
      text: "This is my first experience of buying products of this brand. I am satisfied. I have been using it for less than a week. I really liked it! A big plus is that the cream with hyaluronic acid does not dry the skin, but gives a feeling of softness.",
      author: "Alexandra Nubeniuk",
      status: "Regular customer",
      avatar: "bg-gradient-to-br from-peach-300 to-peach-500"
    },
    {
      id: 4,
      rating: 4.2,
      text: "Very cool products! The effect is already visible after just one week of use. There are significantly fewer breakouts and new ones appear much less frequently. For problematic skin, this is exactly what I needed. The face milk complements the routine perfectly!",
      author: "Emma Rodriguez",
      status: "New customer",
      avatar: "bg-gradient-to-br from-teal-300 to-teal-500"
    }
  ]

  const brands = [
    'vestox', 'DATABEST', 'ONPLAY', 'AIG', 'Nature Morte', 'ONPLAY', 'Peekr', 'vestox'
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      {/* Brand logos */}
      <div className="border-b border-gray-200 pb-16 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto space-x-8 lg:space-x-12">
            {brands.map((brand, index) => (
              <div key={index} className="flex-shrink-0">
                <span className="text-xl lg:text-2xl font-bold text-gray-400 whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 lg:p-8 rounded-2xl hover-lift transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  {testimonial.rating}
                </span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(testimonial.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author info */}
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatar} flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 