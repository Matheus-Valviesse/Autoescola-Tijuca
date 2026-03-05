import React from 'react'
import Header from './components/Page/Header'
import Hero from './components/Page/Hero'

export const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero/>
      </main>
      
    </div>
  )
}
