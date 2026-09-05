"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "STARTER",
      price: "₦75,000",
      period: "/ month",
      desc: "For schools getting started.",
      features: ["Student management", "Teacher management", "Basic attendance", "Basic reports"],
      popular: false,
      ctaText: "Get Started"
    },
    {
      name: "PRO",
      price: "₦100,000",
      period: "/ month",
      desc: "For growing schools.",
      features: ["Everything in Starter", "Advanced attendance", "Assessments & results", "Parent access", "Analytics", "Notifications", "Priority support"],
      popular: true,
      ctaText: "Choose Pro"
    },
    {
      name: "ENTERPRISE",
      price: "₦120,000",
      period: "/ month",
      desc: "For larger schools and organizations.",
      features: ["Everything in Pro", "Multiple campuses", "Advanced administration", "Custom integrations", "Dedicated support", "Custom onboarding"],
      popular: false,
      ctaText: "Get Started"
    }
  ];

  return (
    <section className="relative bg-[#FCFCFD] py-24 sm:py-32 border-t border-gray-100 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Simple, transparent pricing.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              className={`relative bg-white rounded-[2rem] p-8 border ${plan.popular ? 'border-[var(--color-brand-blue)]/50 shadow-2xl shadow-[var(--color-brand-blue)]/10 scale-100 md:scale-105 z-10' : 'border-gray-200 shadow-lg shadow-gray-100/50'} hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full group overflow-hidden`}
            >
              {/* Animated Background Gradient for Pro */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white opacity-50 pointer-events-none"></div>
              )}

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-[shimmer_2s_infinite] pointer-events-none z-20"></div>

              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[var(--color-brand-blue)] to-blue-500 text-white px-5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md flex items-center gap-1.5 z-30">
                  <Sparkles className="h-3 w-3" />
                  MOST POPULAR
                </div>
              )}
              
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className={`text-xs font-bold tracking-widest uppercase mb-4 ${plan.popular ? 'text-[var(--color-brand-blue)]' : 'text-gray-500'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-sm text-gray-500 font-medium">{plan.period}</span>}
                </div>
                <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">{plan.desc}</p>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f, idx) => (
                    <motion.li 
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1) + (idx * 0.05) }}
                      className="flex items-start gap-3"
                    >
                      <div className={`mt-0.5 rounded-full p-0.5 ${plan.popular ? 'bg-blue-50 text-[var(--color-brand-blue)]' : 'bg-gray-50 text-gray-400'}`}>
                        <Check className="h-3.5 w-3.5 shrink-0" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 relative overflow-hidden ${plan.popular ? 'bg-[var(--color-brand-blue)] text-white shadow-lg shadow-[var(--color-brand-blue)]/30 hover:shadow-[var(--color-brand-blue)]/40 hover:-translate-y-0.5 border border-blue-500' : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-sm hover:border-gray-300'}`}>
                  <span className="relative z-10">{plan.ctaText}</span>
                  {plan.popular && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `}} />
    </section>
  );
}
