"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, UserCheck, CalendarCheck, FileText, Settings, ArrowRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      name: "Students",
      description: "Manage student profiles, enrollment, classes, academic records, and school information from one place.",
      icon: Users,
    },
    {
      name: "Teachers",
      description: "Give teachers the tools they need to manage classes, subjects, attendance, assessments, and student progress.",
      icon: BookOpen,
    },
    {
      name: "Parents",
      description: "Keep parents connected with their children's attendance, academic performance, announcements, and school updates.",
      icon: UserCheck,
    },
    {
      name: "Attendance",
      description: "Track daily attendance and quickly understand attendance patterns across students, classes, and the school.",
      icon: CalendarCheck,
    },
    {
      name: "Results & Assessments",
      description: "Manage assessments, scores, grades, academic performance, and report cards efficiently.",
      icon: FileText,
    },
    {
      name: "School Administration",
      description: "Simplify everyday school operations with organized records, reporting, communication, and administration tools.",
      icon: Settings,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <section id="features" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-blue)]/20 bg-[var(--color-brand-blue)]/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-[var(--color-brand-blue)] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-blue)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-blue)]"></span>
            </span>
            ONE PLATFORM. EVERYTHING CONNECTED.
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Everything your school needs, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-orange)]">
              in one place.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            From daily attendance to academic results and parent communication, AlphaEdu brings the essential tools of school management together in one simple, powerful platform.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCard key={feature.name} feature={feature} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
      }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:shadow-[var(--color-brand-blue)]/20"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 153, 204, 0.05), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-brand-orange)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--color-brand-orange)]/30">
        <feature.icon className="h-7 w-7" aria-hidden="true" />
      </div>
      
      <h3 className="relative z-10 text-2xl font-bold leading-8 text-gray-900 transition-colors duration-300 group-hover:text-[var(--color-brand-blue)]">
        {feature.name}
      </h3>
      
      <p className="relative z-10 mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
        {feature.description}
      </p>

      <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-blue)] opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Learn more <ArrowRight className="h-4 w-4" />
      </div>

      <div className="absolute inset-0 z-0 rounded-3xl border-2 border-transparent transition-colors duration-300 group-hover:border-[var(--color-brand-blue)]/10"></div>
    </motion.div>
  );
}
