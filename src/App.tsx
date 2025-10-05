import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import NFTShowcase from './components/NFTShowcase'
import UniqueFeatures from './components/UniqueFeatures'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    // Add your email submission logic here
  }

  return (
    <div className="app">
      <Header />
      <Hero email={email} setEmail={setEmail} onSubmit={handleEmailSubmit} />
      <HowItWorks />
      <NFTShowcase />
      <UniqueFeatures />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App