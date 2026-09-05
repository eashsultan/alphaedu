"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
    <section className="bg-gray-50/50 py-24 sm:py-32 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Simple, transparent pricing.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border ${plan.popular ? 'border-[var(--color-brand-blue)] shadow-2xl shadow-[var(--color-brand-blue)]/10 scale-100 md:scale-105 z-10' : 'border-gray-200 shadow-sm'} hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-brand-blue)] text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  MOST POPULAR
                </div>
              )}
              <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${plan.popular ? 'text-[var(--color-brand-blue)]' : 'text-gray-500'}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                {plan.period && <span className="text-gray-500 font-medium">{plan.period}</span>}
              </div>
              <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 ${plan.popular ? 'text-[var(--color-brand-blue)]' : 'text-gray-400'}`} />
                    <span className="text-sm text-gray-700 font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-xl font-bold transition-all active:scale-95 ${plan.popular ? 'bg-[var(--color-brand-blue)] text-white hover:bg-blue-600 shadow-lg shadow-[var(--color-brand-blue)]/20' : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-sm'}`}>
                {plan.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
