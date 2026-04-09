import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  // State to manage the sleek Waitlist Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* =========================================
          THE CONVERGENCE (Narrative Climax) 
          ========================================= */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-40 flex flex-col items-center justify-center min-h-[80vh] border-t border-white/5 z-10">
        
        {/* Massive Ambient Core Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] max-w-[1000px] bg-gradient-to-b from-[#9F4DFF]/10 via-[#00F2FF]/5 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl space-y-12"
        >
          {/* Section Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-white/20"></div>
            <span className="uppercase tracking-[0.5em] text-[10px] font-black text-gray-400 font-mono">The Synthesis</span>
            <div className="w-8 h-[1px] bg-white/20"></div>
          </div>

          {/* The Massive Philosophical Hook */}
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            A New Era Of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800">
              Human Communication.
            </span>
          </h2>

          {/* The "How it adds up" Explanation */}
          <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-light px-4">
            <p>
              Imagine talking to anyone on earth without a language barrier. Imagine having an assistant help you find the perfect words when you're stuck. Imagine a social feed where you understand every post, and a private diary that remembers your best moments.
            </p>
            <p className="text-white/80 font-medium">
              That's Astrix. It’s not just another chat app—it’s a platform built to help you connect deeper, understand better, and finally break down the walls of global communication.
            </p>
          </div>
          
          {/* The Final Call to Action */}
          <div className="pt-12">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(159, 77, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="relative overflow-hidden group bg-white text-black font-black py-5 px-14 rounded-full uppercase tracking-widest text-[11px] transition-all duration-300"
            >
              {/* Button sweep effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#9F4DFF] to-[#00F2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Enter The Queue
              </span>
            </motion.button>
            <p className="mt-6 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
              Phase II Deployment Commencing Soon
            </p>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          THE ACTUAL FOOTER 
          ========================================= */}
      <footer className="w-full border-t border-white/5 bg-[#020202] py-8 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-[9px] uppercase tracking-widest text-gray-600 font-mono">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="w-4 h-4 rounded-sm bg-gradient-to-tr from-[#9F4DFF]/50 to-[#00F2FF]/50 flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-[#050505] rounded-sm"></div>
            </div>
            <span className="text-white/80">Astrix Neural Systems © 2026</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* =========================================
          THE VIP WAITLIST MODAL 
          ========================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          >
            {/* The blurry backdrop (Click to close) */}
            <div 
              className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            ></div>

            {/* The Modal Box */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9),_0_0_40px_rgba(159,77,255,0.2)] overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2"
              >
                ✕
              </button>

              <div className="uppercase tracking-[0.3em] text-[9px] font-bold text-[#00F2FF] mb-2 font-mono">
                Secure Connection
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                Request Access
              </h3>

              {/* The Form */}
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Connected to backend API. User queued.'); setIsModalOpen(false); }}>
                <div>
                  <label className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1 pl-1">Terminal Handle (Name)</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9F4DFF] font-mono transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1 pl-1">Neural Address (Email)</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9F4DFF] font-mono transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1 pl-1">Intended Frequency</label>
                  <select className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-[#9F4DFF] font-mono transition-colors appearance-none cursor-pointer">
                    <option>Developer / Builder</option>
                    <option>Investor / VC</option>
                    <option>Early Adopter</option>
                    <option>Press / Media</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-white hover:bg-gray-200 text-black font-black py-4 mt-4 rounded-lg uppercase tracking-widest text-[10px] transition-all duration-300"
                >
                  Establish Link
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;