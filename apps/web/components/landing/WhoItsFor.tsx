"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, BookOpen, Users, GraduationCap, ArrowRight } from "lucide-react";

export default function WhoItsFor() {
  const audiences = [
    {
      id: "schools",
      title: "Schools",
      tagline: "Run your school with clarity.",
      description: "Manage students, teachers, academics, attendance, administration, and more from one connected platform.",
      icon: Building2,
      accent: "blue",
      glow: "bg-blue-400/20",
      iconBg: "bg-blue-50 border-blue-100",
      iconColor: "text-blue-600",
      hoverText: "group-hover:text-blue-600",
    },
    {
      id: "teachers",
      title: "Teachers",
      tagline: "Spend more time teaching.",
      description: "Manage classes, attendance, assessments, results, and student progress with less administrative work.",
      icon: BookOpen,
      accent: "orange",
      glow: "bg-orange-400/20",
      iconBg: "bg-orange-50 border-orange-100",
      iconColor: "text-[var(--color-brand-orange)]",
      hoverText: "group-hover:text-[var(--color-brand-orange)]",
    },
    {
      id: "parents",
      title: "Parents",
      tagline: "Stay connected.",
      description: "Keep up with attendance, academic performance, announcements, and important school updates.",
      icon: Users,
      accent: "green",
      glow: "bg-green-400/20",
      iconBg: "bg-green-50 border-green-100",
      iconColor: "text-green-600",
      hoverText: "group-hover:text-green-600",
    },
    {
      id: "students",
      title: "Students",
      tagline: "Stay on top of your learning.",
      description: "Access academic information, results, schedules, and important updates in one place.",
      icon: GraduationCap,
      accent: "purple",
      glow: "bg-purple-400/20",
      iconBg: "bg-purple-50 border-purple-100",
      iconColor: "text-purple-600",
      hoverText: "group-hover:text-purple-600",
    }
  ];

  return (
    <section className="bg-[#FAFAFA] py-24 sm:py-32 overflow-hidden border-t border-gray-100 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="inline-flex items-center rounded-full bg-[var(--color-brand-blue)]/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-[var(--color-brand-blue)] uppercase mb-6 shadow-sm border border-[var(--color-brand-blue)]/10">
              BUILT FOR EVERYONE IN EDUCATION
            </p>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            One platform. <br className="hidden sm:block" /> Four experiences.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-6 text-xl leading-8 text-gray-500">
            AlphaEdu brings the entire school community together while giving each person the tools they actually need.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {audiences.map((aud, index) => (
            <motion.div 
              key={aud.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, type: "spring", stiffness: 100 }}
              className="relative group bg-white rounded-[2rem] p-10 sm:p-12 border border-gray-100 shadow-xl shadow-gray-200/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Dynamic Animated Glow in the Corner */}
              <div className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700 pointer-events-none opacity-50 ${aud.glow}`}></div>
              
              {/* Sleek Icon Container */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-sm mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ${aud.iconBg} ${aud.iconColor}`}>
                <aud.icon className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">{aud.title}</h3>
                <h4 className={`text-lg font-bold mb-5 tracking-tight ${aud.iconColor}`}>{aud.tagline}</h4>
                <p className="text-gray-500 leading-relaxed mb-10 text-lg">
                  {aud.description}
                </p>
                
                <div className="mt-auto">
                  <a href="#" className={`inline-flex items-center gap-2 text-sm font-black text-gray-900 uppercase tracking-widest ${aud.hoverText} transition-colors`}>
                    For {aud.title} 
                    <ArrowRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
