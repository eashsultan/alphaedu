"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Link2, TrendingUp, Sparkles } from "lucide-react";

export default function About() {
  const principles = [
    {
      title: "Simple",
      desc: "Technology that is easy for schools and their communities to use.",
      icon: CheckCircle2,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Connected",
      desc: "One platform connecting administrators, teachers, parents, and students.",
      icon: Link2,
      color: "text-orange-400",
      bg: "bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Built to Grow",
      desc: "A foundation designed to support schools as they grow.",
      icon: TrendingUp,
      color: "text-green-400",
      bg: "bg-green-500/10 border-green-500/20"
    }
  ];

  return (
    <section className="relative bg-[#050A15] text-white py-32 md:py-48 overflow-hidden">
      {/* Immersive Background Effects */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-20"></div>
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-0 w-[50vw] h-[50vw] bg-[var(--color-brand-blue)]/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-0 w-[60vw] h-[60vw] bg-[var(--color-brand-orange)]/15 blur-[150px] rounded-full pointer-events-none mix-blend-screen"
      ></motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Cinematic Typography */}
          <div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-blue-300 uppercase mb-8 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-[var(--color-brand-orange)]" /> ABOUT ALPHAEDU
              </p>
            </motion.div>
            
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Built to make <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-blue-500 to-[var(--color-brand-orange)]">
                education simpler.
              </span>
            </motion.h2>
            
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl leading-relaxed text-gray-400 font-medium mb-12">
              Schools shouldn't have to depend on disconnected tools, spreadsheets, and manual processes. AlphaEdu brings the essential parts of school management together in one modern platform.
            </motion.p>

            <div className="space-y-6">
              {principles.map((p, i) => (
                <motion.div 
                  key={p.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 100 }}
                  className="flex gap-6 group cursor-default p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${p.bg} ${p.color} shadow-inner`}>
                    <p.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight group-hover:text-blue-300 transition-colors">{p.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-base font-medium">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Floating Cinematic Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group"
          >
            {/* Shimmer line */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none z-20"></div>
            
            <img 
              src="/about-students.jpg" 
              alt="Students collaborating" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            
            {/* Inner shadows for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#050A15]/50 via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 border-[4px] border-white/5 rounded-[3rem] z-20 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `}} />
    </section>
  );
}
