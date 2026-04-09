// src/components/Navbar.jsx (Redesigned floating pill - using subtle gray/white for premium feel)
import React from 'react';
import { motion } from 'framer-motion';

// Added setIsModalOpen as a prop here
const Navbar = ({ setIsModalOpen }) => {
  return (
    // Detached, centered pill container
    <div className="fixed top-8 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50 px-6">
      <motion.nav 
        initial={{ y: -50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Quint easeOut
        className="glass-panel border-white/5 rounded-full px-6 h-16 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
      >
        {/* Brand/Identity: Minimalist Node */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-7 h-7 rounded-sm bg-gradient-to-tr from-[#9F4DFF] to-[#00F2FF] flex items-center justify-center p-[1px] shadow-[0_0_10px_rgba(159,77,255,0.2)]">
            <div className="w-full h-full bg-[#050505] rounded-sm flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-white rounded-sm rotate-45 group-hover:bg-[#00F2FF] transition-colors animate-pulse"></div>
            </div>
          </div>
          <span className="text-lg font-black tracking-[0.2em] text-white uppercase selection:bg-white/10 selection:text-white">Astrix</span>
        </motion.div>

        {/* Global Protocols: Grayed out and minimal */}
        <div className="flex gap-8 text-[9px] font-black tracking-[0.3em] text-white/40 uppercase font-mono selection:bg-[#00F2FF]/10 selection:text-[#00F2FF]">
          {['Nexus', 'Signal', 'Vault'].map((item, idx) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
              className="relative group py-2"
            >
              <span className="group-hover:text-white transition-colors">{item}</span>
              <div className="absolute bottom-0 left-0 w-full h-px bg-[#00F2FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
            </motion.a>
          ))}
        </div>

        {/* Action: Integrated Request button (Sleek gray/white) */}
        <motion.button 
          onClick={() => setIsModalOpen(true)} // Added onClick event here
          whileHover={{ scale: 1.05, shadow: "0px 0px 20px rgba(159, 77, 255, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black text-white/70 hover:border-white text-[9px] font-black tracking-widest uppercase transition-all duration-300"
        >
          Request Invitation
        </motion.button>
        
      </motion.nav>
    </div>
  );
};

export default Navbar;