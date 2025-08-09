import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  
  ],
  server: {
    host: '0.0.0.0',  // Allows external traffic
    port: 8080        
  },
  preview: {
    allowedHosts: [
      'dirhamswap.com',  // Custom domain
      'dirhamswap-sdpax.ondigitalocean.app', //Default DigitalOcean host
    ]
  },
})
