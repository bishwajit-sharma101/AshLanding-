import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// !! LINK YOUR ACTUAL SCREENSHOT HERE !!
// Use the screenshot that shows the "Context Log" open on the right side (Screenshot 2026-04-08 143939.png)
import matrixFeedImg from '../assets/7.png'; 

const GlobalMatrix = () => {
  const targetRef = useRef(null);
  
  // Subtle parallax for the main showcase image
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  // The 3 core pillars of why your social media is better
  const features = [
    {
      step: "01",
      title: "Native Auto-Translation",
      desc: "Stop clicking 'Translate Tweet'. The Public Signal natively detects your language preference and translates global broadcasts instantly as you scroll, preserving the original tone."
    },
    {
      step: "02",
      title: "The Context Log",
      desc: "Curious about the deeper meaning? Click the 'Neural Link' on any post to open the Context Log, revealing the source language, cultural nuances, and intent behind the message."
    },
    {
      step: "03",
      title: "Borderless Frequencies",
      desc: "Share images and thoughts globally. Astrix breaks the geographical echo chambers, allowing you to connect with 'frequencies' (communities) completely unhindered by language barriers."
    }
  ];

  return (
    <section ref={targetRef} className="relative w-full max-w-7xl mx-auto px-6 py-40 border-t border-white/5 z-10">
      
      {/* Intense Ambient Backlight for the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[600px] bg-gradient-to-tr from-[#9F4DFF]/15 to-[#00F2FF]/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      {/* HEADER SECTION: Clean, Monochromatic, Pitch-Focused */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="uppercase tracking-[0.4em] text-[10px] font-bold text-white/40 font-mono mb-6">
            Global Matrix Protocol
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9]">
            A Borderless <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
              Public Square.
            </span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-md text-lg font-light leading-relaxed border-l border-white/10 pl-6"
        >
          We didn't just build a feed; we destroyed the language barrier. Experience a global network where every post, image, and idea is natively understood, no matter where it originated.
        </motion.p>
      </div>

      {/* MAIN SHOWCASE: The Framed App Screenshot */}
      <motion.div 
        style={{ y: imageY }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full relative flex items-center justify-center mb-24"
      >
        {/* The Frame */}
        <div className="w-full rounded-2xl md:rounded-[2rem] border border-white/20 bg-[#1A1A1A]/60 backdrop-blur-2xl p-2 md:p-4 shadow-[0_30px_80px_rgba(0,0,0,0.8),_0_0_40px_rgba(159,77,255,0.15)] group relative overflow-hidden">
          
          {/* Subtle animated border glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#9F4DFF]/0 via-[#9F4DFF]/20 to-[#00F2FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>

          <div className="w-full rounded-xl md:rounded-2xl overflow-hidden relative border border-white/10 bg-[#050505] z-10">
            {/* Fake Chrome Dots */}
            <div className="absolute top-4 left-5 flex gap-2 z-30">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-600/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-600/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-600/80"></div>
            </div>

            {/* YOUR ACTUAL SCREENSHOT - Showing the feed and Context Log */}
            <img 
              src={matrixFeedImg} 
              alt="Astrix Public Signal Matrix" 
              className="w-full h-auto object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-700" 
            /> 
          </div>
        </div>
      </motion.div>

      {/* FEATURE EXPLANATION GRID: The "Why it's better" */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors duration-500 group relative overflow-hidden"
          >
            {/* Subtle background glow effect on card hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9F4DFF]/10 rounded-full blur-[40px] group-hover:bg-[#00F2FF]/10 transition-colors duration-500"></div>
            
            <div className="text-[10px] font-mono text-white/30 mb-6">{feature.step} //</div>
            
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
              {feature.title}
            </h3>
            
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default GlobalMatrix;