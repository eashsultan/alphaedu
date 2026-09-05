"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Tag } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "STARTER",
      price: "₦75,000",
      oldPrice: "₦100,000",
      discount: "Save 25%",
      period: "/ month",
      desc: "For schools getting started.",
      features: ["Student management", "Teacher management", "Basic attendance", "Basic reports"],
      popular: false,
      ctaText: "Get Started"
    },
    {
      name: "PRO",
      price: "₦100,000",
      oldPrice: "₦140,000",
      discount: "Save 28%",
      period: "/ month",
      desc: "For growing schools.",
      features: ["Everything in Starter", "Advanced attendance", "Assessments & results", "Parent access", "Analytics", "Notifications", "Priority support"],
      popular: true,
      ctaText: "Choose Pro"
    },
    {
      name: "ENTERPRISE",
      price: "₦120,000",
      oldPrice: "₦160,000",
      discount: "Save 25%",
      period: "/ month",
      desc: "For larger schools and organizations.",
      features: ["Everything in Pro", "Multiple campuses", "Advanced administration", "Custom integrations", "Dedicated support", "Custom onboarding"],
      popular: false,
      ctaText: "Get Started"
    }
  ];

  return (
    <section className="relative bg-[#FAFAFA] py-24 sm:py-32 border-t border-gray-100 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-brand-blue)]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-green-600 uppercase mb-6 shadow-sm border border-green-500/20">
              <Tag className="w-3 h-3" /> LIMITED TIME LAUNCH PRICING
            </p>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
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
              className={`relative bg-white rounded-[2.5rem] p-8 sm:p-10 border-2 ${plan.popular ? 'border-[var(--color-brand-blue)] shadow-2xl shadow-[var(--color-brand-blue)]/15 scale-100 md:scale-105 z-10' : 'border-gray-100 shadow-xl shadow-gray-200/50 hover:border-gray-200'} hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group overflow-hidden`}
            >
              {/* Animated Background Gradient for Pro */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white pointer-events-none"></div>
              )}

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 group-hover:animate-[shimmer_2s_infinite] pointer-events-none z-20"></div>

              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px bg-[var(--color-brand-blue)] text-white px-5 py-2 rounded-b-2xl text-[10px] font-bold tracking-widest uppercase shadow-md flex items-center gap-1.5 z-30">
                  <Sparkles className="h-3 w-3" />
                  MOST POPULAR
                </div>
              )}
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-sm font-black tracking-widest uppercase ${plan.popular ? 'text-[var(--color-brand-blue)]' : 'text-gray-500'}`}>{plan.name}</h3>
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${plan.popular ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {plan.discount}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1 mb-2">
                  <span className="text-lg text-gray-400 font-bold line-through decoration-red-400/50 decoration-2">
                    {plan.oldPrice}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">{plan.price}</span>
                    <span className="text-sm text-gray-500 font-bold">{plan.period}</span>
                  </div>
                </div>
                
                <p className="text-base text-gray-500 mb-8 pb-8 border-b border-gray-100 font-medium">{plan.desc}</p>
                
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
                      <div className={`mt-0.5 rounded-full p-0.5 ${plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                        <Check className="h-4 w-4 shrink-0 stroke-[3]" />
                      </div>
                      <span className="text-sm text-gray-700 font-bold">{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 relative overflow-hidden ${plan.popular ? 'bg-[var(--color-brand-blue)] text-white shadow-lg shadow-[var(--color-brand-blue)]/30 hover:shadow-[var(--color-brand-blue)]/40 hover:-translate-y-0.5 border border-blue-600' : 'bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-200 shadow-sm hover:border-gray-300'}`}>
                  <span className="relative z-10 text-base">{plan.ctaText}</span>
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
