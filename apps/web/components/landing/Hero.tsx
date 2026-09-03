"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroDashboardMockup from "./HeroDashboardMockup";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-20 sm:pb-24 sm:pt-32 lg:pb-32">
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--color-brand-orange)] to-[var(--color-brand-blue)] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <p className="inline-flex rounded-full bg-[var(--color-brand-blue)]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[var(--color-brand-blue)] ring-1 ring-inset ring-[var(--color-brand-blue)]/20 shadow-sm">
              THE FUTURE OF SCHOOL MANAGEMENT
            </p>
          </motion.div>
          <motion.h1 variants={itemVariants} className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Run your school <span className="relative whitespace-nowrap text-[var(--color-brand-orange)]">
              <span className="relative z-10">smarter.</span>
              <svg className="absolute -bottom-2 -left-2 -right-2 -z-10 hidden sm:block" viewBox="0 0 200 20" preserveAspectRatio="none">
                 <motion.path 
                   d="M 0 10 Q 100 20 200 10" 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="8" 
                   strokeLinecap="round"
                   initial={{ pathLength: 0, opacity: 0 }}
                   animate={{ pathLength: 1, opacity: 0.2 }}
                   transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                 />
              </svg>
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            AlphaEdu brings students, teachers, parents, results, attendance, and school
            administration together in one simple, powerful platform.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#get-started"
              className="group relative flex items-center justify-center gap-x-2 rounded-full bg-[var(--color-brand-orange)] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-orange-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Get Started
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="#how-it-works"
              className="group text-base font-semibold leading-6 text-gray-900 transition-colors hover:text-[var(--color-brand-blue)]"
            >
              See How It Works <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.6 }}
        >
          <HeroDashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
