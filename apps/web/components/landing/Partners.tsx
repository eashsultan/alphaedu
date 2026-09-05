"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section className="bg-gray-50 py-24 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
          TRUSTED BY EDUCATION PARTNERS
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-extrabold text-gray-900 mb-6">
          Growing with the education community.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-gray-500 max-w-2xl mx-auto mb-16">
          AlphaEdu is built with schools and education partners who believe technology can improve how education is managed and delivered.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale"
        >
          {[1,2,3,4,5].map(i => (
            <div key={i} className="text-xl font-black text-gray-400 hover:text-gray-900 hover:grayscale-0 transition-all cursor-default select-none">
              Partner Logo
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
