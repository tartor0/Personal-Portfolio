import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Track hoverable elements
    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Initial setup and on DOM changes
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
        
        body {
          cursor: none !important;
        }
      `}</style>

      {/* Main cursor - Solid circle with glow */}
      <div
        className="fixed pointer-events-none z-[99999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s ease-out',
        }}
      >
        <div
          className={`bg-black rounded-full transition-all duration-200 ${
            isClicking 
              ? 'w-4 h-4 shadow-[0_0_20px_rgba(0,0,0,0.6)]' 
              : isHovering 
              ? 'w-8 h-8 shadow-[0_0_30px_rgba(0,0,0,0.4)]' 
              : 'w-6 h-6 shadow-[0_0_25px_rgba(0,0,0,0.3)]'
          }`}
        />
      </div>

      {/* Trailing circle with blur */}
      <div
        className="fixed pointer-events-none z-[99998]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      >
        <div
          className={`bg-black/20 rounded-full blur-sm transition-all duration-300 ${
            isClicking
              ? 'w-12 h-12'
              : isHovering 
              ? 'w-16 h-16' 
              : 'w-14 h-14'
          }`}
        />
      </div>
    </>
  );
}