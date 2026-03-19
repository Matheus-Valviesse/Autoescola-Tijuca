import React from 'react'
import Header from './components/Page/Header'
import Hero from './components/Page/Hero'
import Stats from './components/Page/Stats'
import Plans from './components/Page/Plans'
import LocationSection from './components/Page/Location'
import ReviewsData from './components/Page/ReviewsData'
import Footer from './components/Page/Footer'
import FloatingWhatsApp from './components/buttons/FloatingWhatsApp'

export const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <FloatingWhatsApp/>
      <main className="flex-1">
        <Hero/>
        <Stats/>
        <Plans/>
        <LocationSection/>
        <ReviewsData/>
      </main>
      <Footer/>
    </div>
  )
}
