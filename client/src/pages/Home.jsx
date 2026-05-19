import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/Aitools'
import Testimonial from '../components/Teatimonial'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <AiTools />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home