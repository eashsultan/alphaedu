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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[400px] sm:h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>

            {/* Decorative Floating UI */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 hidden sm:flex"
            >
               <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-brand-blue)]">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
               </div>
               <div>
                 <p className="text-sm font-bold text-gray-900">Community Connected</p>
                 <p className="text-xs text-gray-500">100% Seamless Integration</p>
               </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="inline-flex items-center rounded-full bg-[var(--color-brand-orange)]/10 px-3 py-1 text-xs font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-6">
                ABOUT ALPHAEDU
              </p>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Built to make education management simpler.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg leading-relaxed text-gray-500 mb-10">
              Schools shouldn't have to depend on disconnected tools, spreadsheets, and manual processes to manage everyday education. AlphaEdu brings the essential parts of school management together in one modern platform.
            </motion.p>

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
      </div>
    </section>
  );
}
