import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// !! LINK YOUR ACTUAL SCREENSHOT HERE !!
import chatInterface from '../assets/1.png'; 

const Hero = () => {
  const targetRef = useRef(null);
  
  // --- RESPONSIVE STATE TRACKER ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile-sized (less than 768px wide)
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleResize(); // Check immediately on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // ---------------------------------

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // 1. TEXT ANIMATION
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.45], ["0%", "-60%"]);
  
  // 2. DYNAMIC IMAGE POSITION (THE FIX)
  // If mobile, start at 15vh. If desktop, restore to the original 45vh.
  const startY = isMobile ? "15vh" : "45vh";
  const endY = isMobile ? "-5vh" : "0vh";
  
  const imageYRaw = useTransform(scrollYProgress, [0, 0.5], [startY, endY]);
  const imageY = useSpring(imageYRaw, { stiffness: 80, damping: 25 }); 
  
  // 3. IMAGE SCALE
  const imageScaleRaw = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const imageScale = useSpring(imageScaleRaw, { stiffness: 80, damping: 25 });

  // 4. DYNAMIC PURPLE BOTTOM GLOW
  const imageGlowBlurRaw = useTransform(scrollYProgress, [0, 0.5], ["30px", "140px"]);
  const imageGlowBlur = useSpring(imageGlowBlurRaw, { stiffness: 80, damping: 25 }); 

  return (
    <section ref={targetRef} className="relative w-full h-[300vh] bg-[#020202]">
      
      <div className="neural-noise"></div>

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  {/* Reduced blur on mobile (blur-[60px]), removed animate-pulse which kills mobile CPUs */}
  <div className="w-[80vw] h-[40vw] bg-white/10 rounded-full blur-[60px] md:blur-[150px]"></div>
</div>

        <motion.div 
          style={{ y: textY, opacity: textOpacity }} 
          // Bumped the text up slightly on mobile (top-[18vh]) to balance the layout perfectly
          className="absolute top-[18vh] md:top-[22vh] text-center z-10 px-4 w-full flex flex-col items-center"
        >
          <p className="text-gray-400 font-mono text-[8px] md:text-[10px] tracking-[0.6em] uppercase mb-4 md:mb-5 selection:bg-[#00F2FF]/10 selection:text-[#00F2FF]">
            Astrix Core Architecture
          </p>
          
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-[6vw] leading-[1] tracking-tight text-white/95 font-medium mb-1 selection:bg-white/10">
              Communicate
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600 shadow-xl selection:bg-white/10">
              Beyond Words.
            </h1>
          </div>
        </motion.div>

        <motion.div
          style={{ 
            y: imageY, 
            scale: imageScale,
            boxShadow: `0 40px ${imageGlowBlur} 20px rgba(159, 77, 255, 0.8)` ,
            willChange: "transform"
          }}
          className="absolute z-20 flex items-center justify-center w-[95%] max-w-6xl transform-style-preserve-3d"
        >
          <div className="w-full rounded-xl md:rounded-[2rem] border border-white/10 bg-[#1A1A1A]/50 backdrop-blur-2xl p-1 md:p-3 shadow-[0_0_80px_rgba(255,255,255,0.03),_0_30px_60px_rgba(0,0,0,0.6)] group transition-all duration-500 hover:border-white/20">
            <div className="w-full rounded-lg md:rounded-2xl overflow-hidden relative border border-white/10 bg-[#050505] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              
              <div className="absolute top-2 left-3 md:top-4 md:left-5 flex gap-1.5 md:gap-2 z-30">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-gray-700/70"></div>
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-gray-700/70"></div>
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-gray-700/70"></div>
              </div>

              <img 
                src={chatInterface} 
                alt="Astrix Chat Interface Matrix Showcase" 
                className="w-full h-auto object-contain rounded-lg opacity-85 hover:opacity-100 transition-opacity duration-700" 
              /> 

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;