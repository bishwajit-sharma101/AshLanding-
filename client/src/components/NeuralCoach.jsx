import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// !! LINK YOUR NEURAL COACH SCREENSHOT HERE !!
// E.g., import coachScreenshot from '../assets/Screenshot 2026-04-08 143724.png';
import coachScreenshot from '../assets/8.png'; // Placeholder, replace with yours

const NeuralCoach = () => {
  // State to track which "Coach" is currently active in the showcase
  const [activeMode, setActiveMode] = useState(0);

  const modes = [
    { 
      id: 0, 
      name: 'The Relationship Expert', 
      desc: 'Formal & Professional Tone Control',
      color: 'from-blue-600/40 to-cyan-400/20',
      shadow: 'rgba(6, 182, 212, 0.4)',
      line: 'bg-cyan-400'
    },
    { 
      id: 1, 
      name: 'Synthetic Vibe', 
      desc: 'GenZ & Social Precision',
      color: 'from-[#9F4DFF]/40 to-fuchsia-500/20',
      shadow: 'rgba(159, 77, 255, 0.4)',
      line: 'bg-[#9F4DFF]'
    },
    { 
      id: 2, 
      name: 'Empathy Core', 
      desc: 'High Emotional Intelligence Support',
      color: 'from-rose-600/40 to-orange-400/20',
      shadow: 'rgba(225, 29, 72, 0.4)',
      line: 'bg-rose-400'
    }
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-40 flex flex-col lg:flex-row items-center gap-16 overflow-visible z-10 border-t border-white/5">
      
      {/* LEFT SIDE: Interactive Typography & Controls */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-8 z-20 w-full"
      >
        <div>
          <div className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#9F4DFF] font-mono mb-4">
            Cognitive Layer Active
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight uppercase">
            Your Personal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
              Communication <br/> Analyst.
            </span>
          </h2>
        </div>
        
        <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light">
          Refine your messaging in real-time. Select a cognitive mode below to see how Astrix dynamically shifts your conversational tone.
        </p>

        {/* Interactive Mode Selectors */}
        <div className="space-y-3 mt-8">
          {modes.map((mode, idx) => (
            <div 
              key={mode.id}
              onMouseEnter={() => setActiveMode(idx)}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                activeMode === idx 
                  ? 'bg-white/10 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                  : 'bg-[#050505] border-white/5 hover:border-white/10'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${activeMode === idx ? mode.line + ' animate-pulse shadow-[0_0_10px_currentColor]' : 'bg-gray-700'}`}></div>
              <div>
                <h4 className={`text-sm font-bold uppercase tracking-wider transition-colors ${activeMode === idx ? 'text-white' : 'text-gray-500'}`}>
                  {mode.name}
                </h4>
                <p className="text-[10px] text-gray-500 font-mono mt-1">{mode.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT SIDE: The Scanning Cognitive Engine Showcase */}
      <div className="flex-1 w-full relative flex items-center justify-center perspective-[2000px] z-10 mt-16 lg:mt-0 min-h-[500px]">
        
        {/* Dynamic Backlight: Changes color based on active mode! */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-br ${modes[activeMode].color} rounded-full blur-[100px] -z-10 transition-all duration-700 ease-in-out`}></div>

        <motion.div
          initial={{ opacity: 0, rotateY: 15, x: 50 }}
          whileInView={{ opacity: 1, rotateY: -5, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ boxShadow: `0 30px 60px rgba(0,0,0,0.8), 0 0 40px ${modes[activeMode].shadow}` }}
          className="relative w-[95%] max-w-2xl rounded-2xl border border-white/20 bg-[#0A0A0A] p-2 transform-style-preserve-3d transition-shadow duration-700"
        >
          {/* The Inner Screen */}
          <div className="relative w-full rounded-xl overflow-hidden border border-white/5 bg-[#050505]">
            
            {/* The actual screenshot */}
            <img 
              src={coachScreenshot} 
              alt="Astrix Neural Coach Analysis" 
              loading="lazy"
              className="w-full h-auto object-cover opacity-90"
            />

            {/* The Infinite Laser Scan Line */}
            <motion.div 
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[100px] pointer-events-none z-20"
              style={{
                background: `linear-gradient(to bottom, transparent, ${modes[activeMode].shadow.replace('0.4', '0.1')}, transparent)`,
                borderBottom: `1px solid ${modes[activeMode].shadow.replace('rgba', 'rgb').replace(', 0.4)', ')')}`
              }}
            />
          </div>

          {/* Floating Telemetry Glass Panel (Overlapping the image) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 glass-panel border border-white/20 rounded-xl p-4 shadow-2xl z-30"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-1.5 h-1.5 rounded-full ${modes[activeMode].line} animate-pulse`}></div>
              <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Live Analysis</span>
            </div>
            <div className="text-sm font-bold text-white tracking-tight mb-1">
              Context Refined
            </div>
            <div className="text-xs text-gray-400">
              Shifted to: <span className="text-white">{modes[activeMode].name}</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
      
    </section>
  );
};

export default NeuralCoach;