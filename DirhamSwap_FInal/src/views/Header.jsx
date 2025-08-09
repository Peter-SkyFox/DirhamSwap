import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { href: "#how-it-works", text: "How It Works" },
    { href: "#features", text: "Features" },
    { href: "#about", text: "About" },
    { href: "#contact", text: "Contact" }
  ];

  const buttonLinks = [
    {
      text: "Get Started",
      type: "primary",
      className: "group relative overflow-hidden font-semibold px-5 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer text-sm border bg-secondary border-secondary/30 text-white hover:bg-secondary/90",
      mobileClassName: "group relative overflow-hidden font-semibold px-8 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer text-lg border bg-secondary border-secondary/30 text-white hover:bg-secondary/90 w-full"
    },
    {
      text: "Schedule Demo",
      type: "secondary",
      className: "group relative overflow-hidden border-2 font-semibold px-5 py-2 rounded-xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm shadow-lg cursor-pointer text-sm text-secondary bg-transparent border-secondary/60 hover:bg-secondary/10",
      mobileClassName: "group relative overflow-hidden border-2 font-semibold px-8 py-5 rounded-xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm shadow-lg cursor-pointer text-lg text-secondary bg-transparent border-secondary/60 hover:bg-secondary/10 w-full"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <motion.header 
      className={`w-full transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'relative z-50'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="backdrop-blur-xl border-b px-12 py-4 shadow-2xl transition-all duration-500 bg-primary/95 border-secondary/20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <img src='/logo.webp' alt="Dirham Swap Logo" className="w-14 h-14 rounded-xl pointer-events-none" />
            
            </div>
            <div>
              <span className="text-xl font-semibold header-font text-white !font-primary">
                Dirham Swap
              </span>
            
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="hidden lg:flex items-center space-x-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.href} text={link.text} />
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {buttonLinks.map((button, index) => (
              <button key={index} className={`hidden lg:block ${button.className}`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${button.type === 'primary' ? 'via-white/20' : 'via-white/10'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform ${button.type === 'primary' ? 'duration-700' : 'duration-1000'}`}></div>
                <span className="relative">{button.text}</span>
              </button>
            ))}

            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-xl transition-colors backdrop-blur-sm border  border-primary/30 text-white"
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ 
            duration: 0.4, 
            ease: "easeInOut",
            opacity: { duration: 0.3 },
            height: { duration: 0.4 }
          }}
        >
          <motion.div 
            className="px-4 py-6 h-screen flex flex-col items-center justify-center  "
            initial={{ y: -20 }}
            animate={{ 
              y: isMobileMenuOpen ? 0 : -20,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            transition={{ 
              duration: 0.3,
              delay: isMobileMenuOpen ? 0.1 : 0,
              ease: "easeOut"
            }}
          >
            {/* Mobile Navigation Links */}
            <div className="flex flex-col text-center space-y-8 mb-12">
              {navLinks.map((link, index) => (
                <MobileNavLink 
                  key={index}
                  href={link.href} 
                  text={link.text} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                />
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-6 w-full max-w-sm">
              {buttonLinks.map((button, index) => (
                <button key={index} className={button.mobileClassName}>
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${button.type === 'primary' ? 'via-white/20' : 'via-white/10'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform ${button.type === 'primary' ? 'duration-700' : 'duration-1000'}`}></div>
                  <span className="relative">{button.text}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

const NavLink = ({ href, text }) => (
  <a 
    href={href}
    className="px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10"
  >
    {text}
  </a>
)

const MobileNavLink = ({ href, text, onClick }) => (
  <a 
    href={href}
    onClick={onClick}
    className="px-8 py-4 rounded-xl transition-all duration-300 text-3xl font-semibold text-white/90 hover:text-white hover:bg-white/10 border border-transparent hover:border-secondary/30"
  >
    {text}
  </a>
)

export default Header
