"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#020817] text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-gray-900">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-[var(--color-brand-blue)]/20 blur-[150px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP: Centered Text Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-bold tracking-widest text-blue-300 uppercase mb-6 backdrop-blur-sm">
              THE FUTURE OF SCHOOL MANAGEMENT
            </p>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            One platform. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-brand-orange)]">
              Every part of your school.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            AlphaEdu connects schools, teachers, parents, and students in one simple platform — making education management easier, smarter, and more connected.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <button className="px-8 py-4 rounded-xl bg-[var(--color-brand-orange)] text-white font-bold hover:bg-[#d65503] transition-all hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-[var(--color-brand-orange)]/25">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm flex items-center justify-center gap-2">
              Explore AlphaEdu
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* BOTTOM: Appropriately Scaled Uncropped Image */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 z-10"
          >
            {/* The image now scales naturally to the container's width, completely uncropped */}
            <img 
              src="/hero-students.jpg" 
              alt="Students learning in a modern classroom" 
              className="w-full h-auto block"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
