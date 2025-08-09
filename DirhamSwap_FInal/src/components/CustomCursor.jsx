import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                            window.innerWidth <= 768 ||
                            'ontouchstart' in window;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Don't add mouse listeners on mobile
    if (isMobile) return;
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check for interactive elements on every mouse move
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor) {
        const isInteractive = elementUnderCursor.closest('button, a, input, textarea, select, [role="button"] , [role="steps"], .cursor-hover') ||
                             elementUnderCursor.tagName.toLowerCase() === 'button' ||
                             elementUnderCursor.tagName.toLowerCase() === 'a' ||
                             elementUnderCursor.style.cursor === 'pointer' ||
                             window.getComputedStyle(elementUnderCursor).cursor === 'pointer';
        setIsHovering(!!isInteractive);
      }
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isMobile]);

  // Don't render cursor on mobile
  if (isMobile) return null;

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </div>
  );
};

export default CustomCursor;
