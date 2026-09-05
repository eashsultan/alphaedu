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
      image: "/hero-students.jpg",
      imageOverlay: "bg-blue-600/10",
      accent: "blue",
      glow: "bg-blue-400/20",
      iconColor: "text-blue-600",
      hoverText: "group-hover:text-blue-600",
      hoverBorder: "hover:border-blue-400/60",
      hoverShadow: "hover:shadow-2xl hover:shadow-blue-500/20",
    },
    {
      id: "teachers",
      title: "Teachers",
      tagline: "Spend more time teaching.",
      description: "Manage classes, attendance, assessments, results, and student progress with less administrative work.",
      icon: BookOpen,
      image: "/about-students.jpg",
      imageOverlay: "bg-orange-600/10",
      accent: "orange",
      glow: "bg-orange-400/20",
      iconColor: "text-[var(--color-brand-orange)]",
      hoverText: "group-hover:text-[var(--color-brand-orange)]",
      hoverBorder: "hover:border-orange-400/60",
      hoverShadow: "hover:shadow-2xl hover:shadow-[var(--color-brand-orange)]/20",
    },
    {
      id: "parents",
      title: "Parents",
      tagline: "Stay connected.",
      description: "Keep up with attendance, academic performance, announcements, and important school updates.",
      icon: Users,
      image: "/aud-parents.jpg",
      imageOverlay: "bg-green-600/10",
      accent: "green",
      glow: "bg-green-400/20",
      iconColor: "text-green-600",
      hoverText: "group-hover:text-green-600",
      hoverBorder: "hover:border-green-400/60",
      hoverShadow: "hover:shadow-2xl hover:shadow-green-500/20",
    },
    {
      id: "students",
      title: "Students",
      tagline: "Stay on top of your learning.",
      description: "Access academic information, results, schedules, and important updates in one place.",
      icon: GraduationCap,
      image: "/aud-students.jpg",
      imageOverlay: "bg-purple-600/10",
      accent: "purple",
      glow: "bg-purple-400/20",
      iconColor: "text-purple-600",
      hoverText: "group-hover:text-purple-600",
      hoverBorder: "hover:border-purple-400/60",
      hoverShadow: "hover:shadow-2xl hover:shadow-purple-500/20",
    }
  ];

  return (
    <section className="bg-[#FAFAFA] py-24 sm:py-32 overflow-hidden border-t border-gray-200 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="inline-flex items-center rounded-full bg-[var(--color-brand-blue)]/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-[var(--color-brand-blue)] uppercase mb-6 shadow-sm border border-[var(--color-brand-blue)]/20">
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
              className={`relative group bg-white rounded-[2.5rem] p-5 sm:p-6 border-2 border-gray-200 shadow-md hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col ${aud.hoverBorder} ${aud.hoverShadow}`}
            >
              {/* Dynamic Animated Glow behind content */}
              <div className={`absolute bottom-0 right-0 w-64 h-64 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700 pointer-events-none opacity-0 group-hover:opacity-60 ${aud.glow}`}></div>
              
              {/* Premium Image Container */}
              <div className="relative h-48 sm:h-56 w-full rounded-[1.5rem] overflow-hidden mb-8 shadow-inner border-2 border-gray-100 bg-gray-50">
                 <div className={`absolute inset-0 ${aud.imageOverlay} mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500`}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-70"></div>
                 <img 
                   src={aud.image} 
                   alt={aud.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                 />
                 
                 {/* Floating Glass Icon */}
                 <div className={`absolute bottom-4 left-4 z-20 w-12 h-12 rounded-xl flex items-center justify-center border-2 border-white/30 shadow-xl bg-white/95 backdrop-blur-md ${aud.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                    <aud.icon className="w-6 h-6" />
                 </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 px-2 sm:px-4 flex-1 flex flex-col">
                <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 tracking-tight group-hover:translate-x-1 transition-transform">{aud.title}</h3>
                <h4 className={`text-base sm:text-lg font-bold mb-5 tracking-tight ${aud.iconColor}`}>{aud.tagline}</h4>
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  {aud.description}
                </p>
                
                <div className="mt-auto pb-2">
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
