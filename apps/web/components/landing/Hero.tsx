"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  // Staggered text animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <section className="relative bg-[#020817] text-white pt-32 pb-24 md:pt-40 md:pb-40 overflow-hidden border-b border-gray-900 flex items-center">
      {/* 200% Upgraded Animated Background Mesh */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[var(--color-brand-blue)]/20 blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-brand-orange)]/15 blur-[120px] pointer-events-none"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10">
          
          {/* LEFT: Confident Text Content */}
          <motion.div 
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="w-full lg:w-5/12 flex flex-col items-start text-left z-20"
          >
            <motion.div variants={itemVars}>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-blue-300 uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,153,204,0.15)] overflow-hidden relative group cursor-default">
                <Sparkles className="h-3 w-3 text-[var(--color-brand-orange)]" />
                THE FUTURE OF SCHOOL MANAGEMENT
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }} 
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </p>
            </motion.div>
            
            <motion.h1 variants={itemVars} className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.05] mb-6">
              One platform. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-200 via-blue-500 to-[var(--color-brand-orange)] drop-shadow-sm">
                Every part of your school.
              </span>
            </motion.h1>

            <motion.p variants={itemVars} className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-lg font-medium">
              AlphaEdu connects schools, teachers, parents, and students in one simple platform — making education management easier, smarter, and more connected.
            </motion.p>

            <motion.div variants={itemVars} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="relative px-8 py-4 rounded-xl bg-gradient-to-b from-[var(--color-brand-orange)] to-[#cc5204] text-white font-bold hover:shadow-[0_0_30px_rgba(232,93,4,0.4)] transition-all hover:-translate-y-1 active:scale-95 group overflow-hidden border border-[#ff7b29]">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 active:scale-95 backdrop-blur-md flex items-center justify-center gap-2 group">
                Explore AlphaEdu
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
          
          {/* RIGHT: Modern Asymmetrical Framed Image */}
          <div className="w-full lg:w-7/12 relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full lg:w-[115%] xl:w-[125%] max-w-2xl lg:max-w-none transition-transform duration-700 hover:scale-[1.03]">
              
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-brand-blue)]/40 to-[var(--color-brand-orange)]/30 blur-3xl opacity-60 rounded-[3rem] mix-blend-screen pointer-events-none"></div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }} 
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-[#020817] group"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent z-20"></div>
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>
                <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent z-20"></div>
                
                <img 
                  src="/hero-students.jpg" 
                  alt="Students learning in a modern classroom" 
                  className="relative w-full h-auto block z-10 transition-transform duration-1000 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-tr from-[#020817]/60 via-transparent to-transparent pointer-events-none z-20"></div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
