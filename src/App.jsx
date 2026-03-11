import React from 'react'
import Header from './components/Page/Header'
import Hero from './components/Page/Hero'
import Stats from './components/Page/Stats'
import Plans from './components/Page/Plans'
import LocationSection from './components/Page/Location'

export const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero/>
        <Stats/>
        <Plans/>
        <LocationSection/>
      </main>
      
    </div>
  )
}
