"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Link2, TrendingUp } from "lucide-react";

export default function About() {
  const principles = [
    {
      title: "Simple",
      desc: "Technology that is easy for schools and their communities to use.",
      icon: CheckCircle2,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Connected",
      desc: "One platform connecting administrators, teachers, parents, and students.",
      icon: Link2,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Built to Grow",
      desc: "A foundation designed to support schools as they grow.",
      icon: TrendingUp,
      color: "text-green-500",
      bg: "bg-green-50"
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-32 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP: Uncropped Image, Constrained Size */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100 mb-20"
        >
          <img 
            src="/about-students.jpg" 
            alt="Students collaborating" 
            className="w-full h-auto block"
          />
        </motion.div>

        {/* BOTTOM: Text and Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="inline-flex items-center rounded-full bg-[var(--color-brand-orange)]/10 px-3 py-1 text-xs font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-6">
                ABOUT ALPHAEDU
              </p>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Built to make education management simpler.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg leading-relaxed text-gray-500">
              Schools shouldn't have to depend on disconnected tools, spreadsheets, and manual processes to manage everyday education. AlphaEdu brings the essential parts of school management together in one modern platform.
            </motion.p>
          </div>

          <div className="space-y-6">
            {principles.map((p, i) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex gap-5 group cursor-default"
              >
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${p.bg} ${p.color}`}>
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
