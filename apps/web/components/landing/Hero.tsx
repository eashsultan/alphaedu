"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#020817] text-white pt-32 pb-24 md:pt-40 md:pb-40 overflow-hidden border-b border-gray-900 flex items-center">
      {/* Modern Background Accents */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-[var(--color-brand-blue)]/10 blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-[var(--color-brand-orange)]/10 blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10">
          
          {/* LEFT: Confident Text Content */}
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left z-20">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="inline-flex items-center rounded-full bg-[var(--color-brand-blue)]/20 border border-[var(--color-brand-blue)]/30 px-3 py-1 text-[10px] font-bold tracking-widest text-blue-300 uppercase mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(0,153,204,0.3)]">
                THE FUTURE OF SCHOOL MANAGEMENT
              </p>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.05] mb-6">
              One platform. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-blue-500 to-[var(--color-brand-orange)]">
                Every part of your school.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-lg">
              AlphaEdu connects schools, teachers, parents, and students in one simple platform — making education management easier, smarter, and more connected.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-8 py-4 rounded-xl bg-[var(--color-brand-orange)] text-white font-bold hover:bg-[#d65503] transition-all hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-[var(--color-brand-orange)]/25">
                Get Started
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm flex items-center justify-center gap-2 group">
                Explore AlphaEdu
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          
          {/* RIGHT: Modern Asymmetrical Framed Image */}
          <div className="w-full lg:w-7/12 relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full lg:w-[115%] xl:w-[125%] max-w-2xl lg:max-w-none transition-transform duration-700 hover:scale-[1.02]">
              {/* Vibrant backlight glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-brand-blue)]/30 to-[var(--color-brand-orange)]/20 blur-3xl opacity-50 rounded-[3rem]"></div>
              
              <motion.div 
                initial={{ opacity: 0, x: 40 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#020817]"
              >
                {/* Subtle top glare/reflection line for a 3D glass effect */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-20"></div>
                
                {/* The Uncropped Image */}
                <img 
                  src="/hero-students.jpg" 
                  alt="Students learning in a modern classroom" 
                  className="relative w-full h-auto block z-10"
                />
                
                {/* Soft gradient overlay to blend into the dark theme slightly */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#020817]/40 via-transparent to-transparent pointer-events-none z-20"></div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
