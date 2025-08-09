import React from 'react'

const Footer = () => {
  const quickLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#security", label: "Security" },
    { href: "#contact", label: "Support" }
  ];

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "hello@dirhamswap.ae",
      labelStyle: { color: '#D7D7D7', opacity: 0.6 }
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+971 4 XXX XXXX",
      labelStyle: "text-white/60"
    },
    {
      icon: "📍",
      label: "Address",
      value: "DIFC, Dubai, UAE",
      labelStyle: "text-white/60"
    }
  ];

  const legalLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Compliance" }
  ];

  return (
    <footer className="py-10 relative overflow-hidden bg-primary">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 bg-accent"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 bg-secondary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6 lg:mb-8">
              <div className="relative">
              <img src='/logo.webp' alt="Dirham Swap Logo" className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl pointer-events-none" />
            
            </div>
              <span className="text-xl lg:text-2xl bold header-font text-white !font-primary">Dirham Swap</span>
            </div>
            
            <p className="mb-6 lg:mb-8 max-w-lg text-sm lg:text-base leading-relaxed text-white/80 mx-auto lg:mx-0">
            The future of real estate payments in the U.A.E. Pay your mortgage with cryptocurrency and join the digital revolution of property ownership
            </p>
            

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start">
              <div className="border rounded-lg px-3 py-1.5 lg:px-4 lg:py-2 flex items-center space-x-2 bg-secondary/10 border-secondary/30">
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-secondary"></div>
                <span className="text-xs lg:text-sm text-secondary">VARA Regulated</span>
              </div>
              <div className="border rounded-lg px-3 py-1.5 lg:px-4 lg:py-2 flex items-center space-x-2 bg-accent/10 border-accent/30">
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-accent"></div>
                <span className="text-xs lg:text-sm text-accent">BitGo Secured</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg lg:text-2xl bold mb-4 lg:mb-6 header-font text-white">Contact Us</h3>
            <div className="space-y-3 lg:space-y-4 text-white/80">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 border rounded-lg flex items-center justify-center bg-accent/10 border-accent/30 flex-shrink-0">
                    <span className="text-accent text-xs lg:text-sm">{contact.icon}</span>
                  </div>
                  <div>
                    <p 
                      className={`text-xs lg:text-sm ${typeof contact.labelStyle === 'string' ? contact.labelStyle : ''}`}
                      style={typeof contact.labelStyle === 'object' ? contact.labelStyle : {}}
                    >
                      {contact.label}
                    </p>
                    <p className="text-sm lg:text-base text-white/80">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h3 className="text-lg lg:text-2xl bold mb-4 lg:mb-6 header-font" style={{ color: '#D7D7D7' }}>Quick Links</h3>
            <div className="space-y-2 lg:space-y-3">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block transition-colors hover:text-secondary text-sm lg:text-base" 
                  style={{ color: '#D7D7D7', opacity: 0.8 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 lg:mt-16 pt-6 lg:pt-8" style={{ borderColor: 'rgba(254, 119, 67, 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-center md:text-left text-xs lg:text-sm" style={{ color: '#D7D7D7', opacity: 0.6 }}>
              © 2025 Dirham Swap. All rights reserved.
              
            </p>
            <div className="flex space-x-4 lg:space-x-6 text-xs lg:text-sm">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="transition-colors text-white/60 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
