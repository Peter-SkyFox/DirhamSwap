import Header from "./views/Header"
import Hero from "./views/Hero"
import HowItWorks from "./views/HowItWorks"
import Features from "./views/Features"
import Footer from "./views/Footer"
import CustomCursor from "./components/CustomCursor"

import { useState, useEffect } from "react"

function App() {
 
 
  return (
    <>
      <CustomCursor />
     
      <div className="relative z-30">
        <Header />
      </div>
      <div className="relative z-20">
        <Hero />
      </div>
 
      <div className=" relative z-10 bg-white/20">
        <HowItWorks />
        <Features />
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  )
}

export default App
