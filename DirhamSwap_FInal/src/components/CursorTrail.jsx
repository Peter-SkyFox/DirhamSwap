import React, { useEffect, useState } from 'react'

const CursorTrail = () => {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    let animationId

    const handleMouseMove = (e) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random()
      }

      setTrails(prev => [...prev, newTrail])

      // Remove trail after animation
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id))
      }, 600)
    }

    const throttledMouseMove = (e) => {
      if (animationId) return
      
      animationId = requestAnimationFrame(() => {
        handleMouseMove(e)
        animationId = null
      })
    }

    document.addEventListener('mousemove', throttledMouseMove)

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 10,
            top: trail.y - 10,
          }}
        />
      ))}
    </>
  )
}

export default CursorTrail
