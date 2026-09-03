"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, UserCheck, CalendarCheck, FileText, Settings } from "lucide-react";

export default function Experience() {
  const benefits = [
    {
      id: "01",
      title: "Simple",
      description: "Designed so school administrators, teachers, and parents can get things done without unnecessary complexity.",
    },
    {
      id: "02",
      title: "Connected",
      description: "Keep important school information connected instead of scattered across spreadsheets, notebooks, and separate systems.",
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
    { name: "Students", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Teachers", icon: BookOpen, color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Parents", icon: UserCheck, color: "text-green-500", bg: "bg-green-50" },
    { name: "Attendance", icon: CalendarCheck, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Results", icon: FileText, color: "text-rose-500", bg: "bg-rose-50" },
    { name: "Admin", icon: Settings, color: "text-gray-500", bg: "bg-gray-50" },
  ];

  return (
    <section id="experience" className="bg-gray-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wide text-[var(--color-brand-orange)] uppercase"
          >
            BUILT FOR MODERN SCHOOLS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            A simpler way to run a better school.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl"
          >
            AlphaEdu connects the people, processes, and information that keep a school moving — giving everyone a clearer view of what matters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-center gap-y-16 gap-x-12 lg:grid-cols-2 lg:gap-x-20">
          
          {/* LEFT SIDE: Visual Ecosystem Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="relative flex h-[500px] w-full items-center justify-center rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
            
            {/* Central Node */}
            <div className="relative z-10 flex flex-col items-center justify-center h-28 w-28 rounded-2xl bg-[var(--color-brand-blue)] text-white shadow-2xl shadow-[var(--color-brand-blue)]/40 ring-4 ring-white">
              <span className="text-xl font-bold tracking-tight">Alpha<span className="text-[var(--color-brand-orange)]">Edu</span></span>
            </div>

            {/* Connecting lines and satellite nodes */}
            {connectedModules.map((module, i) => {
              const angle = (i * Math.PI * 2) / connectedModules.length - Math.PI / 2;
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <React.Fragment key={module.name}>
                  {/* Connecting Line */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    className="absolute z-0 bg-gray-200 origin-left"
                    style={{
                      height: "2px",
                      width: `${radius}px`,
                      left: "50%",
                      top: "50%",
                      transform: `rotate(${angle}rad)`,
                    }}
                  />
                  
                  {/* Satellite Node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    className={`absolute z-10 flex flex-col items-center justify-center h-20 w-20 rounded-xl bg-white border border-gray-100 shadow-md transition-all cursor-default hover:shadow-lg`}
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                  >
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${module.bg} ${module.color}`}>
                      <module.icon className="h-4 w-4" />
                    </div>
                    <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">{module.name}</span>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </motion.div>

          {/* RIGHT SIDE: Benefits List */}
          <div className="flex flex-col space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative pl-12"
              >
                {/* Subtle left divider/border line */}
                <div className="absolute left-4 top-14 bottom-0 w-px bg-gray-200 group-last:hidden"></div>
                
                {/* Number Indicator */}
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-bold text-gray-400 transition-colors group-hover:border-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-blue)] shadow-sm">
                  {benefit.id}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors group-hover:text-[var(--color-brand-blue)]">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-7">
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
