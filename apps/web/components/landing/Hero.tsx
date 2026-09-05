"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, CheckCircle2, Bell } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#020817] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-gray-900">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-blue)]/20 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[var(--color-brand-orange)]/15 blur-[120px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-bold tracking-widest text-blue-300 uppercase mb-6 backdrop-blur-sm">
                THE FUTURE OF SCHOOL MANAGEMENT
              </p>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              One platform. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-brand-orange)]">
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
              <button className="px-8 py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm flex items-center justify-center gap-2">
                Explore AlphaEdu
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT: Photography + Product UI */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
            
            {/* Main Photography */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-4 sm:inset-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 via-transparent to-transparent z-10"></div>
              <img 
                src="/hero-students.jpg" 
                alt="Students learning in a modern classroom" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating UI Card 1: Attendance */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              className="absolute top-12 left-0 sm:left-4 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4 text-gray-900 w-48 hover:-translate-y-1 transition-transform"
            >
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Attendance</p>
                <p className="text-xl font-black text-gray-900">94.8%</p>
              </div>
            </motion.div>

            {/* Floating UI Card 2: Students */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
              className="absolute bottom-32 right-0 sm:-right-4 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4 text-gray-900 w-52 hover:-translate-y-1 transition-transform"
            >
              <div className="h-10 w-10 rounded-full bg-[var(--color-brand-blue)]/10 flex items-center justify-center text-[var(--color-brand-blue)] shrink-0">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Total Students</p>
                <p className="text-xl font-black text-gray-900">1,248</p>
              </div>
            </motion.div>

            {/* Floating UI Card 3: Notification */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3 text-gray-900 hover:-translate-y-1 transition-transform whitespace-nowrap"
            >
              <div className="relative">
                <Bell className="h-4 w-4 text-[var(--color-brand-orange)]" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-orange)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-orange)]"></span>
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Results Published</p>
                <p className="text-[10px] text-gray-500">Grade 12 Mathematics</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
