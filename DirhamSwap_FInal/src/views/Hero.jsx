import React from 'react'
import { motion } from 'framer-motion'
import RotatingText
 from '../components/RotatingText'
const Hero = () => {
  return (
    <section className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-semibold mb-6 header-font text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          The Easiest Way to  <span className="text-accent"> Accept Crypto</span> for Real Estate
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl mb-6 max-w-4xl mx-auto leading-relaxed text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
        Seamlessly accept  <span className="text-secondary font-medium">BTC, ETH, USDT, and more </span> 
         — without ever touching crypto. 
        </motion.p>

        

        <motion.p 
          className="text-base mb-10 max-w-3xl mx-auto leading-relaxed text-accent/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Seamless, secure, and fully regulated under Dubai's VARA framework
        </motion.p>
 <motion.div 
          className="text-3xl mb-6 flex max-w-4xl text-center mx-auto leading-relaxed text-white/90 font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <RotatingText
            texts={[
              "Instant",
              "Compliant",
              "Automatic",
            ]}
            rotationInterval={3000}
            mainClassName="text-3xl text-center mb-6 max-w-4xl mx-auto leading-relaxed text-white/90 font-bold"
          />
        </motion.div>
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >

          <button className="group relative overflow-hidden border-2 font-semibold px-10 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm shadow-lg cursor-pointer border-secondary/60 text-secondary bg-transparent hover:bg-secondary/10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative">GET STARTED</span>
          </button>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
        >
           <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="text-sm text-white/80">Compliant with UAE crypto regulations</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-sm text-white/80">VARA Regulated</span>
          </div>
          
         <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-sm text-white/80">Trusted by Developers, Brokers and Banks</span>
          </div>

        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
