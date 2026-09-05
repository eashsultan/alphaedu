"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden bg-white">
      {/* 300% Upgraded CTA with massive colorful gradient meshing */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[#0099CC]"></div>
         <motion.div 
           animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-50%] left-[-20%] w-[100vw] h-[100vw] rounded-full bg-gradient-to-r from-[#0099CC] to-blue-400 blur-[120px] mix-blend-screen opacity-80"
         ></motion.div>
         <motion.div 
           animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[-50%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-r from-[var(--color-brand-orange)] to-orange-400 blur-[150px] mix-blend-screen opacity-60"
         ></motion.div>
      </div>
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 mb-10 shadow-2xl shadow-black/10">
            <div className="h-16 w-16 rounded-2xl bg-white text-[var(--color-brand-blue)] flex items-center justify-center shadow-inner">
              <Zap className="w-8 h-8 fill-current" />
            </div>
          </div>

          <h2 className="text-5xl font-black tracking-tighter sm:text-6xl lg:text-7xl mb-8 drop-shadow-md leading-[1.05]">
            Ready to run your <br className="hidden sm:block" /> school smarter?
          </h2>
          
          <p className="text-xl sm:text-2xl text-blue-50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Bring your entire school community together with the modern platform designed for African education.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-[var(--color-brand-blue)] font-black shadow-2xl shadow-black/20 hover:bg-gray-50 hover:scale-105 hover:shadow-3xl transition-all duration-300 active:scale-95 text-lg group flex items-center justify-center gap-3">
              Get Started Now <ArrowRight className="h-6 w-6 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-black/10 text-white font-bold border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 active:scale-95 backdrop-blur-md text-lg shadow-xl">
              Talk to Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
