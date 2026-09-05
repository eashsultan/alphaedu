"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="relative bg-[#0099CC] py-32 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-brand-orange)] blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-white blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6"
        >
          Ready to run your school smarter?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
        >
          Bring your school community together with AlphaEdu.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#0099CC] font-extrabold shadow-xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all active:scale-95 text-lg">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 transition-all active:scale-95 backdrop-blur-sm text-lg">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
