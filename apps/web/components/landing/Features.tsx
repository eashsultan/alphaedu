"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, UserCheck, CalendarCheck, FileText, Settings } from "lucide-react";

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

  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wide text-[var(--color-brand-blue)] uppercase"
          >
            ONE PLATFORM. EVERYTHING CONNECTED.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Everything your school needs, in one place.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            From daily attendance to academic results and parent communication, AlphaEdu brings the essential tools of school management together in one simple platform.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-[var(--color-brand-blue)]/20 group"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] group-hover:bg-[var(--color-brand-blue)] group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-7 text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
