import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <motion.div 
      className="text-center mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-4xl mx-auto backdrop-blur-xl border rounded-2xl p-10 shadow-2xl bg-primary/5 border-secondary/20">
        <motion.div 
          className="inline-flex items-center px-4 py-2 backdrop-blur-xl rounded-lg border mb-6 bg-secondary/10 border-secondary/30"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-2 h-2 rounded-full mr-2 bg-secondary"></div>
          <span className="text-sm font-medium text-secondary">READY TO START?</span>
        </motion.div>
        
        <motion.h3 
          className="text-4xl !font-primary font-semibold mb-6 text-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Professional Cryptocurrency Solutions
        </motion.h3>
        <motion.p 
          className="mb-8 text-lg leading-relaxed text-text/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Over 500+ institutional clients trust DirhamSwap for secure cryptocurrency payment processing
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <button className="group relative overflow-hidden font-bold px-10 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-2xl cursor-pointer bg-secondary text-white hover:bg-secondary/90">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative">Start Partnership</span>
          </button>
          
          <button className="group relative overflow-hidden border-2 font-semibold px-10 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm shadow-lg cursor-pointer border-secondary/60 text-secondary bg-transparent hover:bg-secondary/10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative">Schedule Demo</span>
          </button>
        </motion.div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 pt-8 border-t border-secondary/20">
          <div className="flex items-center space-x-2 text-text/70">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-sm">VARA Regulated</span>
          </div>
          <div className="flex items-center space-x-2 text-text/70">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-sm">Institution-Grade Security</span>
          </div>
          <div className="flex items-center space-x-2 text-text/70">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-sm">24/7 Professional Support</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CTA
