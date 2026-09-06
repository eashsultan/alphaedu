"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section className="bg-white py-24 sm:py-32 border-t border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="inline-flex items-center rounded-full bg-[var(--color-brand-orange)]/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-6 shadow-sm border border-[var(--color-brand-orange)]/10">
            OUR CURRENT PARTNERS
          </p>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Growing with the education community.
        </motion.h2>
        
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-gray-500 max-w-2xl mx-auto mb-16">
          AlphaEdu is built alongside prestigious schools who believe technology can improve how education is managed and delivered.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="w-full px-4"
        >
          <div className="relative group max-w-4xl mx-auto bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-[2.5rem] p-3 sm:p-4 border border-gray-100 hover:border-gray-200 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-[var(--color-brand-blue)]/10 transition-all duration-500 overflow-hidden text-left">
             
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none z-20"></div>

             <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 z-10 bg-white rounded-[2rem] border border-gray-50/50 shadow-sm">
               
               <div className="relative shrink-0">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-blue)]/30 to-[var(--color-brand-orange)]/20 blur-2xl rounded-full group-hover:scale-125 transition-transform duration-700 ease-out"></div>
                 <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border border-gray-100 shadow-lg p-6 flex items-center justify-center relative z-10 group-hover:-translate-y-1 transition-transform duration-500">
                   <img 
                     src="/flying-colors-logo.png" 
                     alt="Flying Colours International Academy Logo" 
                     className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                   />
                 </div>
               </div>

               <div className="flex flex-col text-center md:text-left flex-1">
                  <div className="inline-flex items-center gap-2 mb-4 justify-center md:justify-start">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Active Network Partner</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2 group-hover:text-[var(--color-brand-blue)] transition-colors duration-300">
                    Flying Colours
                  </h3>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-400 mb-6 tracking-tight">
                    International Academy Gombe
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 text-base md:text-lg">
                    A forward-thinking institution committed to excellence, actively powering their administrative and academic workflows with AlphaEdu.
                  </p>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `}} />
    </section>
  );
}
