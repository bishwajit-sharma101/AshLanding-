import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// !! LINK YOUR 5 ACTUAL SCREENSHOTS HERE !!
import img1 from '../assets/2.png';
import img2 from '../assets/3.png';
import img3 from '../assets/4.png';
import img4 from '../assets/5.png';
import img5 from '../assets/6.png';

const CoreTranslation = () => {
  // --- RESPONSIVE STATE TRACKER ---
  // THE FIX: Check for < 1024px to perfectly match Tailwind's "lg:" breakpoint.
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsStacked(window.innerWidth < 1024);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // THE FIX: The Vertical Cascade for Mobile
  // If stacked (mobile/tablet), use almost 0 horizontal spread, and fan them vertically.
  const spreadX = isStacked ? 5 : 40; 
  const spreadY = isStacked ? 18 : 30;
  const rotAmount = isStacked ? 2 : 7;

  const deckConfig = [
    { id: 1, rotate: -rotAmount * 2, x: -spreadX * 2, y: -spreadY * 2, scale: 0.85, zIndex: 10 },
    { id: 2, rotate: -rotAmount,     x: -spreadX,     y: -spreadY,     scale: 0.9,  zIndex: 20 },
    { id: 3, rotate: 0,              x: 0,            y: 0,            scale: 0.95, zIndex: 30 },
    { id: 4, rotate: rotAmount,      x: spreadX,      y: spreadY,      scale: 1.0,  zIndex: 40 },
    { id: 5, rotate: rotAmount * 2,  x: spreadX * 2,  y: spreadY * 2,  scale: 1.05, zIndex: 50 },
  ];

  const showcaseImages = [
    { config: deckConfig[0], src: img5 }, 
    { config: deckConfig[1], src: img4 }, 
    { config: deckConfig[2], src: img3 }, 
    { config: deckConfig[3], src: img2 }, 
    { config: deckConfig[4], src: img1 }, 
  ];

  return (
    // THE FIX: Tightened the mobile padding (py-16) and mobile gap (gap-8)
    <section className="relative w-full max-w-7xl mx-auto px-6 py-16 lg:py-40 flex flex-col lg:flex-row items-center gap-8 lg:gap-20 overflow-visible z-10">
      
      {/* LEFT SIDE: Refined Typography */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 space-y-5 lg:space-y-6 z-20"
      >
        <div className="uppercase tracking-[0.4em] text-[9px] lg:text-[10px] font-bold text-white/40 font-mono">
          Core Architecture
        </div>
        
        {/* Adjusted mobile font scaling so "COMMUNICATE" doesn't overwhelm the screen */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight uppercase">
          Communicate, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
            Don't Just Translate.
          </span>
        </h2>
        
        <p className="text-gray-400 text-base lg:text-lg max-w-md leading-relaxed font-light mt-4 lg:mt-6">
          Generic tools lose the nuance. The Neural Engine captures tone, intent, and emotion, preserving the soul of your conversation across languages in a flawless interface.
        </p>

        {/* Premium Metrics Badge */}
        <div className="mt-8 lg:mt-10 inline-flex items-center gap-6 lg:gap-8 glass-panel rounded-xl p-4 lg:p-5 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <div>
            <div className="text-[8px] lg:text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1">Latency</div>
            <div className="text-xl lg:text-2xl font-black text-white tracking-tighter">12<span className="text-xs lg:text-sm text-gray-500 ml-1">ms</span></div>
          </div>
          <div className="w-px h-8 lg:h-10 bg-white/10"></div>
          <div>
            <div className="text-[8px] lg:text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1">Security</div>
            <div className="text-xl lg:text-2xl font-black text-white tracking-tighter">AES<span className="text-xs lg:text-sm text-gray-500 ml-1">-256</span></div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE: The Interactive Cascading Deck */}
      {/* THE FIX: Height is now 300px on mobile, preventing dead space */}
      <div className="flex-1 w-full h-[300px] md:h-[400px] lg:h-[500px] relative flex items-center justify-center perspective-[2000px] z-10 mt-6 lg:mt-0">
        
        {/* Ambient Backlight Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[80%] h-[90%] lg:h-[80%] bg-gradient-to-br from-[#9F4DFF]/40 to-[#00F2FF]/20 rounded-full blur-[80px] lg:blur-[100px] -z-10 pointer-events-none"></div>

        {showcaseImages.map((item, index) => (
          <motion.div
            key={item.config.id}
            initial={{ opacity: 0, x: 0, y: 100, rotate: 0, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              x: item.config.x, 
              y: item.config.y, 
              rotate: item.config.rotate,
              scale: item.config.scale,
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              scale: 1.15,
              rotate: 0,
              x: 0,
              y: -20,
              zIndex: 100,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{ zIndex: item.config.zIndex }}
            /* THE FIX: width adjusted for mobile to prevent bleed */
            className="absolute w-[90%] md:w-[80%] max-w-[450px] aspect-[16/9] rounded-xl border border-white/20 bg-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_20px_rgba(159,77,255,0.1)] cursor-pointer overflow-hidden group"
          >
            {/* Inner Glass Frame */}
            <div className="w-full h-full relative">
              {!item.src && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#050505]">
                  <p className="text-white/20 font-mono text-xs">Image {index + 1} Pending</p>
                </div>
              )}
              
              {item.src && (
                <img 
                  src={item.src} 
                  alt={`Astrix UI Feature ${index + 1}`} 
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                />
              )}

              <div className="absolute inset-0 border border-white/5 group-hover:border-[#9F4DFF]/50 rounded-xl transition-colors duration-300 pointer-events-none z-10"></div>
            </div>
          </motion.div>
        ))}

      </div>
      
    </section>
  );
};

export default CoreTranslation;