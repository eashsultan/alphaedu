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
      color: "from-blue-500/10 to-blue-500/5",
      hoverColor: "hover:shadow-[0_20px_40px_rgba(0,153,204,0.1)] hover:border-blue-200",
      iconColor: "text-blue-600 bg-blue-100 border-blue-200",
      ui: (
        <div className="w-full h-full bg-white rounded-xl border border-blue-100 p-4 flex flex-col gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="flex justify-between items-center">
            <div className="h-3 w-16 bg-blue-50 rounded border border-blue-100"></div>
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-[8px] font-bold shadow-sm">AE</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
              <div className="h-1.5 w-8 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 w-6 bg-gray-800 rounded"></div>
            </div>
            <div className="bg-blue-50 p-2.5 rounded-lg border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-blue-400/20 rounded-full blur-xl"></div>
              <div className="h-1.5 w-10 bg-blue-300 rounded mb-2"></div>
              <div className="h-3 w-8 bg-blue-600 rounded"></div>
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-100 p-3 flex flex-col gap-2 justify-end">
             <div className="h-1.5 w-full bg-gray-200 rounded"></div>
             <div className="h-1.5 w-3/4 bg-gray-200 rounded"></div>
          </div>
        </div>
      )
    },
    {
      id: "teachers",
      title: "Teachers",
      tagline: "Spend more time teaching.",
      description: "Manage classes, attendance, assessments, results, and student progress with less administrative work.",
      icon: BookOpen,
      color: "from-orange-500/10 to-orange-500/5",
      hoverColor: "hover:shadow-[0_20px_40px_rgba(232,93,4,0.1)] hover:border-orange-200",
      iconColor: "text-orange-600 bg-orange-100 border-orange-200",
      ui: (
        <div className="w-full h-full bg-white rounded-xl border border-orange-100 p-4 flex flex-col gap-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="h-3 w-20 bg-orange-50 rounded border border-orange-100 mb-1"></div>
          {[1,2,3].map(i => (
            <div key={i} className="bg-gradient-to-r from-gray-50 to-white p-2.5 rounded-lg border border-gray-100 flex justify-between items-center group-hover:border-orange-100 transition-colors">
              <div className="flex flex-col gap-1.5">
                <div className="h-2 w-12 bg-gray-800 rounded"></div>
                <div className="h-1.5 w-8 bg-gray-300 rounded"></div>
              </div>
              <div className="h-5 w-5 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 shadow-sm"></div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "parents",
      title: "Parents",
      tagline: "Stay connected.",
      description: "Keep up with attendance, academic performance, announcements, and important school updates.",
      icon: Users,
      color: "from-green-500/10 to-green-500/5",
      hoverColor: "hover:shadow-[0_20px_40px_rgba(34,197,94,0.1)] hover:border-green-200",
      iconColor: "text-green-600 bg-green-100 border-green-200",
      ui: (
        <div className="w-full h-full bg-white rounded-xl border border-green-100 p-4 flex flex-col gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
           <div className="flex gap-3 items-center mb-1">
             <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 shrink-0"></div>
             <div className="w-full">
               <div className="h-2 w-12 bg-gray-800 rounded mb-1.5"></div>
               <div className="h-1.5 w-8 bg-gray-300 rounded"></div>
             </div>
           </div>
           <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
             <div className="h-1.5 w-16 bg-gray-300 rounded mb-2.5"></div>
             <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-green-400 to-green-500"></div>
             </div>
           </div>
           <div className="bg-green-50 p-3 rounded-lg border border-green-200/50">
             <div className="h-1.5 w-12 bg-green-600 rounded mb-2"></div>
             <div className="h-1.5 w-full bg-green-500/20 rounded"></div>
           </div>
        </div>
      )
    },
    {
      id: "students",
      title: "Students",
      tagline: "Stay on top of your learning.",
      description: "Access academic information, results, schedules, and important updates in one place.",
      icon: GraduationCap,
      color: "from-purple-500/10 to-purple-500/5",
      hoverColor: "hover:shadow-[0_20px_40px_rgba(168,85,247,0.1)] hover:border-purple-200",
      iconColor: "text-purple-600 bg-purple-100 border-purple-200",
      ui: (
        <div className="w-full h-full bg-white rounded-xl border border-purple-100 p-4 flex flex-col gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-2 gap-2 mb-1">
             <div className="bg-gradient-to-br from-purple-50 to-white h-12 rounded-lg border border-purple-100 flex flex-col items-center justify-center gap-1.5">
               <div className="h-1.5 w-6 bg-purple-300 rounded"></div>
               <div className="h-2.5 w-5 bg-purple-600 rounded"></div>
             </div>
             <div className="bg-gradient-to-br from-gray-50 to-white h-12 rounded-lg border border-gray-100 flex flex-col items-center justify-center gap-1.5">
               <div className="h-1.5 w-6 bg-gray-300 rounded"></div>
               <div className="h-2.5 w-5 bg-gray-800 rounded"></div>
             </div>
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg border border-gray-100 p-3">
             <div className="h-1.5 w-12 bg-gray-300 rounded mb-3"></div>
             <div className="space-y-2">
               {[1,2,3].map(i => (
                 <div key={i} className="flex justify-between items-center">
                   <div className="h-1.5 w-8 bg-gray-300 rounded"></div>
                   <div className="h-1.5 w-4 bg-gray-800 rounded"></div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 sm:py-32 overflow-hidden border-t border-gray-100 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="inline-flex items-center rounded-full bg-[var(--color-brand-blue)]/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-[var(--color-brand-blue)] uppercase mb-6 shadow-sm border border-[var(--color-brand-blue)]/10">
              BUILT FOR EVERYONE IN EDUCATION
            </p>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            One platform. Four experiences.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-6 text-xl leading-8 text-gray-500">
            AlphaEdu brings the entire school community together while giving each person the tools they actually need.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((aud, index) => (
            <motion.div 
              key={aud.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`group flex flex-col xl:flex-row gap-6 bg-gradient-to-br ${aud.color} rounded-3xl p-6 sm:p-8 border border-white/80 ${aud.hoverColor} hover:bg-white hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0 transition-opacity group-hover:opacity-0"></div>
              
              <div className="relative z-10 w-full xl:w-2/5 h-48 sm:h-56 xl:h-auto rounded-2xl bg-white/60 backdrop-blur-md border border-white p-2.5 shadow-sm group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:shadow-lg transition-all duration-500 ease-out">
                {aud.ui}
              </div>
              
              <div className="relative z-10 w-full xl:w-3/5 flex flex-col justify-center cursor-default pt-2 xl:pt-0">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center border shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ${aud.iconColor}`}>
                    <aud.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{aud.title}</h3>
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">{aud.tagline}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">{aud.description}</p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-[var(--color-brand-blue)] transition-colors">
                    For {aud.title} 
                    <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
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
