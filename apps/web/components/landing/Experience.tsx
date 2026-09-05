"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, UserCheck, CalendarCheck, FileText, Settings } from "lucide-react";

export default function Experience() {
  const benefits = [
    {
      id: "01",
      title: "Simple",
      description: "Designed so administrators, teachers, and parents can get things done without unnecessary complexity.",
    },
    {
      id: "02",
      title: "Connected",
      description: "Keep important school information connected instead of scattered across spreadsheets and separate systems.",
    },
    {
      id: "03",
      title: "Powerful",
      description: "Give your school the tools to manage academics, attendance, people, communication, and everyday operations.",
    },
    {
      id: "04",
      title: "Secure",
      description: "Keep school information organized with role-based access and a foundation designed for growing schools.",
    },
  ];

  const connectedModules = [
    { name: "Students", icon: Users, position: "top-8 left-10", delay: 0.1 },
    { name: "Teachers", icon: BookOpen, position: "top-1/2 -translate-y-1/2 left-4", delay: 0.2 },
    { name: "Parents", icon: UserCheck, position: "bottom-8 left-10", delay: 0.3 },
    { name: "Attendance", icon: CalendarCheck, position: "top-8 right-10", delay: 0.15 },
    { name: "Results", icon: FileText, position: "top-1/2 -translate-y-1/2 right-4", delay: 0.25 },
    { name: "Admin", icon: Settings, position: "bottom-8 right-10", delay: 0.35 },
  ];

  return (
    <section id="experience" className="relative bg-gray-50/30 py-24 sm:py-32 overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-[var(--color-brand-blue)]/5 blur-3xl pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-widest text-[var(--color-brand-blue)] shadow-sm ring-1 ring-inset ring-gray-200 uppercase mb-6"
          >
            BUILT FOR MODERN SCHOOLS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            A simpler way to run a <span className="text-[var(--color-brand-orange)] relative whitespace-nowrap">better school.
              <motion.svg 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 -left-2 -right-2 z-[-1] hidden sm:block" 
                viewBox="0 0 200 20" 
                preserveAspectRatio="none"
              >
                 <path d="M 0 10 Q 100 20 200 10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </motion.svg>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl leading-8 text-gray-500 max-w-2xl"
          >
            AlphaEdu connects the people, processes, and information that keep a school moving — giving everyone a clearer view of what matters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          
          {/* LEFT SIDE: Clean Interactive SaaS Ecosystem Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="relative flex h-[480px] w-full items-center justify-center rounded-3xl bg-white border border-gray-200/60 shadow-xl shadow-gray-200/40 overflow-hidden group"
          >
            {/* Subtle background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:24px_24px] transition-transform duration-700 group-hover:scale-105"></div>
            
            {/* Central Node */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative z-20 flex flex-col items-center justify-center h-32 w-32 rounded-2xl bg-white border border-gray-100 shadow-2xl shadow-[var(--color-brand-blue)]/10 ring-4 ring-white"
            >
              <span className="text-2xl font-black tracking-tight text-gray-900">
                Alpha<span className="text-[var(--color-brand-orange)]">Edu</span>
              </span>
              <div className="mt-3 h-1.5 w-10 rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-blue-400"></div>
            </motion.div>

            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
              <motion.g 
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{ opacity: 1, pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" fill="none"
              >
                {/* Horizontal lines to center */}
                <path d="M 60 240 L 200 240" />
                <path d="M 540 240 L 400 240" />
                
                {/* Diagonal lines to center */}
                <path d="M 100 120 L 230 190" />
                <path d="M 100 360 L 230 290" />
                <path d="M 500 120 L 370 190" />
                <path d="M 500 360 L 370 290" />
              </motion.g>
            </svg>

            {/* Satellite Nodes */}
            {connectedModules.map((module) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + module.delay, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.1, y: -5, zIndex: 30 }}
                className={`absolute ${module.position} z-20 flex flex-col items-center justify-center h-24 w-24 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100 transition-shadow hover:shadow-xl cursor-default bg-white/80 backdrop-blur-sm`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-blue)]/5 text-[var(--color-brand-blue)] transition-colors duration-300">
                  <module.icon className="h-5 w-5" />
                </div>
                <span className="mt-3 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                  {module.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE: Interactive Benefits List */}
          <div className="flex flex-col">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative flex gap-6 py-8 first:pt-0 last:pb-0 border-b border-gray-100 last:border-0"
              >
                {/* Number Indicator */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-gray-200 text-sm font-black text-gray-300 shadow-sm transition-all duration-300 group-hover:bg-[var(--color-brand-blue)] group-hover:text-white group-hover:border-[var(--color-brand-blue)] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg group-hover:shadow-[var(--color-brand-blue)]/20">
                  {benefit.id}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[var(--color-brand-blue)]">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
