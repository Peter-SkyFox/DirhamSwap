import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [fade, setFade] = useState(false);

  const steps = [
    {
      number: "1",
      title: "Send Invoice",
      description: "Create and schedule invoices with crypto payment links.",
      image: "/laptop.webp"
    },
    {
      number: "2", 
      title: "Client Pays in Crypto",
      description: "Accept USDT, USDC, BTC, ETH, and SOL.",
      image: "/laptop.webp"
    },
    {
      number: "3",
      title: "We Handle the Swap",
      description: "Instantly convert crypto into AED, USD, or EUR.",
      image: "/laptop.webp"
    },
    {
      number: "4",
      title: "You Get Paid In AED",
      description: "Funds settle directly to your bank account with real-time notifications.",
      image: "/laptop.webp"
    }
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setSelectedItem(prev => (prev + 1) % steps.length);
        setFade(false);
      }, 500); // match fade duration
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  const handleItemClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setSelectedItem(index);
      setFade(false);
    }, 500);
  };

  return (
    <section id="how-it-works" className="bg-background relative min-h-screen py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full blur-3xl opacity-20 bg-accent"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full blur-3xl opacity-15 bg-secondary"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
        
          
          <motion.h2 
            className="text-4xl md:text-6xl font-semibold mb-6 header-font text-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-lg max-w-3xl mx-auto leading-relaxed text-text/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Institutional-grade cryptocurrency payments for real estate transactions
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Interactive Steps Layout */}
          <div className="flex flex-col lg:flex-row justify-center gap-8 items-center">
            {/* Dynamic Image */}
            <div className="w-full flex items-center justify-center">
              <img
                src={steps[selectedItem].image}
                alt={steps[selectedItem].title}
                className={`rounded-3xl w-full max-w-xs sm:max-w-md md:max-w-2xl lg:w-[40rem] h-auto transition-all duration-500 ease-in-out
                  ${fade ? 'opacity-0 scale-100' : 'opacity-100 scale-100'}
                  hover:scale-110
                `}
              />
            </div>
            
            {/* Steps Buttons */}
            <div className="w-full flex flex-col justify-center">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`mb-4 p-8 rounded-2xl border cursor-pointer w-full text-left focus:outline-none group transition-all backdrop-blur-2xl duration-300 ease-in-out
                    ${selectedItem === index
                      ? 'bg-secondary scale-105 shadow-xl border-secondary'
                      : 'bg-primary/10 border-secondary/20 hover:bg-secondary/20 hover:scale-105 hover:shadow-lg'}
                  `}
                  onClick={() => handleItemClick(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg transition-all duration-300
                        ${selectedItem === index ? 'bg-white text-secondary' : 'bg-secondary text-white'}
                      `}>
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-3 header-font transition-all duration-300
                        ${selectedItem === index ? 'text-white' : 'text-text'}
                      `}>
                        {step.title}
                      </h3>
                      <p className={`leading-relaxed transition-all duration-300
                        ${selectedItem === index ? 'text-white/90' : 'text-text/80'}
                      `}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

    
      </div>
    </section>
  )
}

export default HowItWorks
