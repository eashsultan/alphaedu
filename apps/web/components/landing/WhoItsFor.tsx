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
      iconColor: "text-blue-600 bg-blue-50",
      ui: (
        <div className="w-full h-full bg-white rounded-xl border border-blue-100 p-4 flex flex-col gap-3 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
            <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[8px] font-bold">AE</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-50 p-2 rounded border border-gray-100">
              <div className="h-1.5 w-8 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 w-6 bg-gray-800 rounded"></div>
            </div>
            <div className="bg-blue-50 p-2 rounded border border-blue-100">
              <div className="h-1.5 w-10 bg-blue-300 rounded mb-2"></div>
              <div className="h-3 w-8 bg-blue-600 rounded"></div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 rounded border border-gray-100 p-2 flex flex-col gap-1.5 justify-end">
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
      iconColor: "text-orange-600 bg-orange-50",
      ui: (
        <div className="w-full h-full bg-white rounded-xl border border-orange-100 p-4 flex flex-col gap-2 shadow-sm">
          <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
          {[1,2,3].map(i => (
            <div key={i} className="bg-gray-50 p-2 rounded border border-gray-100 flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <div className="h-2 w-12 bg-gray-800 rounded"></div>
                <div className="h-1.5 w-8 bg-gray-300 rounded"></div>
              </div>
              <div className="h-4 w-4 rounded bg-orange-100 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
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
      iconColor: "text-green-600 bg-green-50",
      ui: (
        <div className="w-full h-full bg-white rounded-xl border border-green-100 p-4 flex flex-col gap-3 shadow-sm">
           <div className="flex gap-2 items-center mb-1">
             <div className="h-6 w-6 rounded-full bg-gray-200 shrink-0"></div>
             <div className="w-full">
               <div className="h-2 w-12 bg-gray-800 rounded mb-1"></div>
               <div className="h-1.5 w-8 bg-gray-300 rounded"></div>
             </div>
           </div>
           <div className="bg-gray-50 p-2 rounded border border-gray-100">
             <div className="h-1.5 w-16 bg-gray-300 rounded mb-2"></div>
             <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-green-500"></div>
             </div>
           </div>
           <div className="bg-green-50 p-2 rounded border border-green-100">
             <div className="h-1.5 w-12 bg-green-500 rounded mb-1.5"></div>
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
      iconColor: "text-purple-600 bg-purple-50",
      ui: (
        <div className="w-full h-full bg-white rounded-xl border border-purple-100 p-4 flex flex-col gap-2 shadow-sm">
          <div className="grid grid-cols-2 gap-2 mb-1">
             <div className="bg-purple-50 h-10 rounded border border-purple-100 flex flex-col items-center justify-center gap-1">
               <div className="h-1.5 w-6 bg-purple-300 rounded"></div>
               <div className="h-2 w-4 bg-purple-600 rounded"></div>
             </div>
             <div className="bg-gray-50 h-10 rounded border border-gray-100 flex flex-col items-center justify-center gap-1">
               <div className="h-1.5 w-6 bg-gray-300 rounded"></div>
               <div className="h-2 w-4 bg-gray-800 rounded"></div>
             </div>
          </div>
          <div className="flex-1 bg-gray-50 rounded border border-gray-100 p-2">
             <div className="h-1.5 w-12 bg-gray-300 rounded mb-2"></div>
             <div className="space-y-1.5">
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
    <section className="bg-[#F8FAFC] py-24 sm:py-32 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="inline-flex items-center rounded-full bg-[var(--color-brand-blue)]/10 px-3 py-1 text-xs font-bold tracking-widest text-[var(--color-brand-blue)] uppercase mb-6">
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
              className={`group flex flex-col sm:flex-row gap-6 bg-gradient-to-br ${aud.color} rounded-3xl p-6 sm:p-8 border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0"></div>
              
              <div className="relative z-10 w-full sm:w-2/5 h-40 sm:h-auto rounded-2xl bg-white/50 backdrop-blur-sm border border-white p-2 shadow-sm group-hover:-translate-y-1 group-hover:scale-105 transition-transform duration-500 ease-out">
                {aud.ui}
              </div>
              <div className="relative z-10 w-full sm:w-3/5 flex flex-col justify-center cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${aud.iconColor}`}>
                    <aud.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{aud.title}</h3>
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">{aud.tagline}</h4>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">{aud.description}</p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-[var(--color-brand-blue)] transition-colors">
                    For {aud.title} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
