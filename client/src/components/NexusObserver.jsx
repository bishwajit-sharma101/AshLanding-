import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// !! CRITICAL: Ensure these paths match your asset filenames !!
import reinaVideo from '../assets/Reina6.mp4'; 
import historyScreenshot from '../assets/history-log.png'; 

const NexusObserver = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-32 flex flex-col items-center border-t border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[30%] left-[-20%] w-[600px] h-[600px] bg-rose-900/10 blur-[130px] rounded-full -z-10" />

      {/* Header with high-fidelity animation */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 space-y-4 z-10"
      >
        <div className="uppercase tracking-[0.4em] text-[10px] font-black text-rose-400">Digital Surveillance 01</div>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
          Meet Reina. <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 font-bold">
            Your Digital Observer.
          </span>
        </h2>
      </motion.div>

      {/* Video Container (Reina) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-4xl aspect-video rounded-3xl glass-panel p-1.5 shadow-[0_20px_90px_rgba(225,29,72,0.1)] group overflow-hidden mb-24 z-10 border-white/10"
      >
        {/* Complex HUD Overlay */}
        <div className="absolute top-6 left-6 z-10 text-[9px] font-mono tracking-widest text-white/80 bg-black/60 px-4 py-1.5 rounded-sm backdrop-blur-md border border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse shadow-[0_0_10px_#f43f5e]"></div>
          [LIVE NEURAL STREAM: ACTIVE]
        </div>
        
        <div className="relative w-full h-full bg-[#050505] rounded-2xl overflow-hidden border border-white/5">
          {/* THE REAL VIDEO IMPLEMENTATION */}
          <video 
            src={reinaVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls
            className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.08] transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
          />
        </div>
      </motion.div>

      {/* The Nexus Navigator: Split View (Text/Image) */}
      <div className="w-full flex flex-col lg:flex-row items-center gap-16 z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 lg:pr-10"
        >
          <div className="uppercase tracking-[0.3em] text-[10px] font-black text-rose-400 font-mono">Cognitive Reflection Protocol</div>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            THE NEXUS <br/> NAVIGATOR
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
            The Observer doesn't just watch; she remembers. Opt-in to the matrix to generate deeply personal, poetic diary entries tracking your conversational cadence,Stored securely on your local node.
          </p>
        </motion.div>

        {/* Real Screenshot Replacement */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full perspective-[2000px] transform-style-preserve-3d"
        >
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="relative w-full rounded-2xl p-2 bg-gradient-to-tr from-rose-500/10 to-transparent border border-rose-500/20 rotate-y-[-5deg] rotate-x-[5deg] transition-all duration-700 shadow-[20px_30px_70px_rgba(225,29,72,0.15),0_0_40px_rgba(0,0,0,0.8)]"
          >
            {/* REAL HISTORY LOG SCREENSHOT */}
            <img 
              src={historyScreenshot} 
              alt="Nexus History Log" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
};

export default NexusObserver;