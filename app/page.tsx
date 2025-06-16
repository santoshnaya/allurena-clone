import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import GallerySection from '@/components/GallerySection'
import AboutSection from '@/components/AboutSection'
import SecondHeroSection from '@/components/SecondHeroSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <SecondHeroSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
} 