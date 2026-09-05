"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, UserCheck, CalendarCheck, FileText, Settings, ArrowRight } from "lucide-react";

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
    <section id="experience" className="bg-white py-24 sm:py-32 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="inline-flex items-center rounded-full bg-[var(--color-brand-blue)]/5 px-3 py-1 text-xs font-bold tracking-widest text-[var(--color-brand-blue)] ring-1 ring-inset ring-[var(--color-brand-blue)]/10 uppercase mb-6">
              BUILT FOR MODERN SCHOOLS
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            A simpler way to run a better school.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl leading-8 text-gray-500 max-w-2xl"
          >
            AlphaEdu connects the people, processes, and information that keep a school moving — giving everyone a clearer view of what matters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          
          {/* LEFT SIDE: Clean Framer-style Ecosystem Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="relative flex h-[500px] w-full items-center justify-center rounded-3xl bg-gray-50/50 border border-gray-200/50 shadow-sm overflow-hidden group"
          >
            {/* Subtle dot pattern background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 transition-transform duration-1000 group-hover:scale-105"></div>
            
            {/* Central Node */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative z-20 flex flex-col items-center justify-center h-28 w-28 rounded-2xl bg-white border border-gray-100 shadow-xl ring-4 ring-gray-50/50 transition-shadow hover:shadow-2xl hover:shadow-[var(--color-brand-blue)]/10"
            >
              <span className="text-xl font-black tracking-tight text-gray-900">
                Alpha<span className="text-[var(--color-brand-orange)]">Edu</span>
              </span>
              <div className="mt-2 h-1.5 w-8 rounded-full bg-[var(--color-brand-blue)]"></div>
            </motion.div>

            {/* Connecting lines SVG - Animated Draw */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
              <motion.g 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" fill="none"
              >
                {/* Horizontal lines to center */}
                <path d="M 60 250 L 220 250" />
                <path d="M 540 250 L 380 250" />
                
                {/* Diagonal lines to center */}
                <path d="M 100 130 L 250 210" />
                <path d="M 100 370 L 250 290" />
                <path d="M 500 130 L 350 210" />
                <path d="M 500 370 L 350 290" />
              </motion.g>
            </svg>

            {/* Satellite Nodes */}
            {connectedModules.map((module) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 + module.delay, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.05, y: -5, zIndex: 30 }}
                className={`absolute ${module.position} z-20 flex flex-col items-center justify-center h-20 w-20 rounded-xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-lg hover:shadow-[var(--color-brand-blue)]/5 cursor-default`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand-blue)]/5 text-[var(--color-brand-blue)] transition-colors duration-300">
                  <module.icon className="h-4 w-4" />
                </div>
                <span className="mt-2 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
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
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                className="group relative flex gap-6 py-8 first:pt-0 last:pb-0 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 rounded-2xl -mx-4 px-4 transition-colors duration-300 cursor-pointer"
              >
                {/* Number Indicator */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-sm font-bold text-gray-400 transition-all duration-300 group-hover:bg-[var(--color-brand-blue)] group-hover:text-white group-hover:border-[var(--color-brand-blue)] group-hover:shadow-md group-hover:shadow-[var(--color-brand-blue)]/20 group-hover:scale-105 group-hover:-rotate-3">
                  {benefit.id}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[var(--color-brand-blue)] flex items-center justify-between">
                    {benefit.title}
                    <ArrowRight className="h-5 w-5 text-gray-300 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--color-brand-blue)]" />
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 pr-8">
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
