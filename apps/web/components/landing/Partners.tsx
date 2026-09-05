"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section className="bg-white py-24 sm:py-32 border-t border-gray-100 overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center rounded-full bg-[var(--color-brand-orange)]/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-6 shadow-sm border border-[var(--color-brand-orange)]/10">
          OUR CURRENT PARTNERS
        </motion.p>
        
        <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Growing with the education community.
        </motion.h2>
        
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-gray-500 max-w-2xl mx-auto mb-16">
          AlphaEdu is built alongside schools who believe technology can improve how education is managed and delivered.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          {/* Featured Partner */}
          <div className="group relative flex flex-col items-center gap-4 bg-gray-50/50 hover:bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 hover:border-[var(--color-brand-blue)]/20 shadow-sm hover:shadow-2xl hover:shadow-[var(--color-brand-blue)]/10 hover:-translate-y-1 transition-all duration-500 w-full max-w-sm">
             <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white border border-gray-100 shadow-md p-2 flex items-center justify-center overflow-hidden mb-2 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500">
               <img src="/flying-colors-logo.png" alt="Flying Colours International Academy Logo" className="w-full h-full object-contain" />
             </div>
             <div>
               <h3 className="text-xl font-bold text-gray-900 leading-snug tracking-tight group-hover:text-[var(--color-brand-blue)] transition-colors">Flying Colours</h3>
               <p className="text-gray-500 font-medium">International Academy Gombe</p>
             </div>
             
             {/* Decorative glow */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-blue)]/0 via-[var(--color-brand-blue)]/5 to-[var(--color-brand-orange)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
