"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, BookOpen, UserCheck, CalendarCheck, FileText, Settings, Sparkles } from "lucide-react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

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

  const satelliteNodes = [
    { name: "Students", icon: Users, delay: 0, gradient: "from-blue-400 to-indigo-500", size: "w-20 h-20", position: "-top-6 -right-4" },
    { name: "Teachers", icon: BookOpen, delay: 0.1, gradient: "from-orange-400 to-red-500", size: "w-24 h-24", position: "bottom-12 -left-8" },
    { name: "Parents", icon: UserCheck, delay: 0.2, gradient: "from-emerald-400 to-teal-500", size: "w-16 h-16", position: "top-10 -left-6" },
    { name: "Attendance", icon: CalendarCheck, delay: 0.3, gradient: "from-purple-400 to-fuchsia-500", size: "w-20 h-20", position: "-bottom-6 right-10" },
    { name: "Results", icon: FileText, delay: 0.4, gradient: "from-rose-400 to-pink-500", size: "w-16 h-16", position: "top-32 -right-8" },
    { name: "Admin", icon: Settings, delay: 0.5, gradient: "from-gray-300 to-gray-500", size: "w-16 h-16", position: "bottom-0 right-32" },
  ];

  return (
    <section id="experience" className="relative bg-[#0A0A0A] py-32 sm:py-40 overflow-hidden" ref={containerRef}>
      {/* Deep space glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-brand-blue)]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-orange)]/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-3xl text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-white uppercase backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <Sparkles className="h-4 w-4 text-[var(--color-brand-orange)]" />
            Built for Modern Schools
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight"
          >
            A simpler way to run a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">better school.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="mt-8 text-xl leading-relaxed text-gray-400"
          >
            AlphaEdu connects the people, processes, and information that keep a school moving — giving everyone a clearer view of what matters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-center gap-y-20 lg:grid-cols-2 lg:gap-x-24">
          
          {/* LEFT SIDE: Holographic / 3D Glass Ecosystem Mockup */}
          <motion.div
            style={{ y }}
            className="relative flex h-[500px] w-full items-center justify-center lg:h-[600px]"
          >
            {/* The Central "Sun" / Core */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative z-20 flex h-40 w-40 flex-col items-center justify-center rounded-[2rem] border border-white/20 bg-black/40 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,153,204,0.3)] ring-1 ring-inset ring-white/10"
            >
              {/* Inner glowing orb */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[var(--color-brand-blue)]/20 to-[var(--color-brand-orange)]/20 blur-md"></div>
              <span className="relative text-2xl font-black tracking-tighter text-white drop-shadow-lg">
                Alpha<span className="text-[var(--color-brand-orange)]">Edu</span>
              </span>
              <div className="relative mt-2 h-1 w-8 rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-orange)]"></div>
            </motion.div>

            {/* Orbiting Glass Cards */}
            {satelliteNodes.map((node, i) => (
              <motion.div
                key={node.name}
                initial={{ opacity: 0, scale: 0.5, x: 50, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + node.delay, type: "spring", stiffness: 100, damping: 15 }}
                whileHover={{ scale: 1.1, zIndex: 30 }}
                className={`absolute ${node.position} ${node.size} z-30 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${node.gradient} shadow-inner`}>
                  <node.icon className="h-5 w-5 text-white drop-shadow-sm" />
                </div>
                {/* Optional tiny label on hover or default */}
                <span className="mt-2 text-[11px] font-bold tracking-widest text-white/80 uppercase">
                  {node.name}
                </span>
              </motion.div>
            ))}

            {/* Orbit Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute h-[350px] w-[350px] rounded-full border border-white/5"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute h-[480px] w-[480px] rounded-full border border-white/5 border-dashed"
            ></motion.div>
          </motion.div>

          {/* RIGHT SIDE: Cyberpunk / Modern Glass Benefits List */}
          <div className="flex flex-col space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15, type: "spring" }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
              >
                {/* Background glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-[var(--color-brand-blue)]/0 via-[var(--color-brand-blue)]/10 to-[var(--color-brand-orange)]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl"></div>
                
                <div className="relative z-10 flex items-start gap-6">
                  {/* Glowing Number Indicator */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-sm font-black text-white/50 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    {benefit.id}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight transition-colors group-hover:text-[var(--color-brand-blue)]">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-gray-400 leading-relaxed transition-colors group-hover:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
