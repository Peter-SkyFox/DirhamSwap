import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      title: "Invoicing",

      details: [
        "Schedule and automate invoice delivery with embedded crypto payment links",
        "Accept USDT, USDC, BTC, ETH and SOL and get paid in AED",
        "Dynamic price updates ensure exact amounts",
        "Customize invoices with your branding and fees"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Accounting & Reporting", 
    
      details: [
        "Automatically itemize and organize every transaction",
        "Download reports directly from your dashboard",
        "Assign unique wallet addresses for clients to track every payment with full transparency"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Wallets",
      details: [
        "Create wallets instantly",
        "Accept crypto payments with compliance and security",
        "Track activity in real-time with full audit logs and permissions"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "24/7 Settlements",
      details: [
        "Get paid any day, any time",
        "Lower fees than traditional FX",
        "Fully secure and faster than wire transfers"
      ],
      gradient: "from-accent to-secondary"
    },
    {
      title: "Be the Bank",
      details: [
        "Offer your clients seamless crypto payments",
        "Increase conversions, unlock global liquidity",
        "Optimize your treasury and grow revenue with best-in-class infrastructure"
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Security & Audits",
      details: [
        "Bank-grade security protocols",
        "Controls and permissions for team members",
        "Independently audited smart contracts and swap engines",
        "Secure and compliant in partnership with BitGo"
      ],
      gradient: "from-red-500 to-rose-500"
    }
  ]

  return (
    <section id="features" className="bg-background relative py-24">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          {/* Section Badge */}
        
          
          <motion.h2 
            className="text-4xl md:text-6xl font-semibold mb-8 leading-tight !font-poppins text-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Why choose <span className="text-secondary">Dirham Swap</span>
          </motion.h2>
     
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              {/* Background Accent */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-secondary"></div>
              
              <div className="relative backdrop-blur-xl rounded-2xl p-8 border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl h-full border-secondary/20">
                
                <h3 className="text-3xl font-bold mb-6 transition-all duration-300 !font-poppins text-secondary group-hover:text-secondary/90">
                  {feature.title}
                </h3>
                
                <p className="leading-relaxed mb-6 text-base text-text/80">
                  {feature.description}
                </p>
                
                {/* Feature Details */}
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm transition-colors duration-300 text-text/70">
                      <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0 mt-2 bg-secondary"></div>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional CTA Section */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-5xl mx-auto relative">
            {/* Traditional Background */}
            <div className="absolute inset-0 rounded-2xl opacity-20 bg-secondary/10"></div>
            
            <div className="relative backdrop-blur-2xl border rounded-2xl p-12 shadow-2xl border-secondary/20">
            
              
              <motion.h3 
                className="text-5xl md:text-6xl font-semibold mb-6 font-poppins text-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Partner with Excellence
              </motion.h3>
              
          
              
              <motion.div 
                className="flex flex-col lg:flex-row gap-6 justify-center mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <button className="group relative overflow-hidden font-bold px-12 py-5 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-xl cursor-pointer border bg-secondary text-white border-secondary/30 hover:bg-secondary/90">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <span className="text-xl">Start Your Partnership</span>
                  </div>
                </button>
                
                <button className="group relative overflow-hidden border-2 font-semibold px-12 py-5 rounded-xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm shadow-lg cursor-pointer" style={{
                  borderColor: 'rgba(68, 125, 155, 0.6)',
                  color: '#447D9B',
                  backgroundColor: 'rgba(68, 125, 155, 0.05)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#447D9B' }}></div>
                    <span className="text-xl">Schedule Demo</span>
                  </div>
                </button>
              </motion.div>
              
              {/* Traditional Trust Indicators */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t"
                style={{ borderColor: 'rgba(254, 119, 67, 0.2)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-4 h-4 rounded-full mr-2 bg-secondary"></div>
                    <span className="font-semibold text-sm text-primary">VARA LICENSED</span>
                  </div>
                  <p className="text-xs text-accent">U.A.E Regulated</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2 ">
                    <div className="w-4 h-4 rounded-full mr-2 bg-secondary"></div>
                    <span className="font-semibold text-sm text-primary">BITGO SECURED</span>
                  </div>
                  <p className="text-xs text-accent">Institutional Custody</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2 ">
                    <div className="w-4 h-4 rounded-full mr-2 bg-secondary"></div>
                    <span className="font-semibold text-sm text-primary">Built by Experts</span>
                  </div>
                  <p className="text-xs text-accent">15+ Years of Experience</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2 ">
                    <div className="w-4 h-4 rounded-full mr-2 bg-secondary"></div>
                    <span className="font-semibold text-sm text-primary">24/7 SUPPORT</span>
                  </div>
                  <p className="text-xs text-accent">Always Available</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* CSS Animation for traditional styling */}
      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  )
}

export default Features
