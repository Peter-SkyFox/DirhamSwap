import React, { useEffect, useRef } from 'react'

const CursorWarp = ({ children, className = '' }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      container.style.setProperty('--x', `${x}%`)
      container.style.setProperty('--y', `${y}%`)
    }

    const handleMouseLeave = () => {
      container.style.setProperty('--x', '50%')
      container.style.setProperty('--y', '50%')
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`cursor-warp ${className}`}
    >
      {children}
    </div>
  )
}

export default CursorWarp
