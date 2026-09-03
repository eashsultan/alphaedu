"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroDashboardMockup() {
  const chartHeights = [40, 70, 45, 90, 65, 85, 75];
  
  return (
    <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-gray-200/60 bg-white/95 shadow-2xl shadow-[var(--color-brand-blue)]/15 backdrop-blur-xl sm:mt-24">
      {/* MacOS-style Window Header */}
      <div className="flex h-12 items-center space-x-2 border-b border-gray-100/80 bg-gray-50/80 px-4 backdrop-blur-sm">
        <div className="h-3 w-3 rounded-full bg-red-400 shadow-sm"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-sm"></div>
        <div className="h-3 w-3 rounded-full bg-green-400 shadow-sm"></div>
        <div className="ml-4 flex-1 text-center text-xs font-medium text-gray-400">
          app.alphaedu.ng/dashboard
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex h-[400px] sm:h-[500px]">
        {/* Sidebar */}
        <div className="hidden w-52 flex-col border-r border-gray-100/80 bg-gray-50/50 p-4 sm:flex">
          <div className="mb-8 font-bold text-gray-800 text-lg">AlphaEdu</div>
          <div className="space-y-2">
            <div className="rounded-lg bg-[var(--color-brand-blue)]/10 px-3 py-2 text-sm font-semibold text-[var(--color-brand-blue)] transition-colors hover:bg-[var(--color-brand-blue)]/20 cursor-pointer">
              Dashboard
            </div>
            {['Students', 'Teachers', 'Classes', 'Results', 'Finance'].map((item) => (
              <div key={item} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white p-6 sm:p-8 overflow-hidden relative">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Overview</h2>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gray-100 ring-2 ring-gray-50"></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Students", value: "1,248", change: "+12%" },
              { label: "Teachers", value: "68", change: "+2" },
              { label: "Classes", value: "32", change: "0" },
              { label: "Attendance", value: "94.8%", change: "+1.2%" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + (idx * 0.1) }}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-[var(--color-brand-blue)]/30"
              >
                <div className="text-xs font-medium text-gray-500">{stat.label}</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <div className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</div>
                  <div className="text-xs font-medium text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-full">{stat.change}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart/Activity area */}
          <div className="mt-8 flex gap-6">
            <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-6 flex justify-between items-center">
                <div className="text-sm font-semibold text-gray-700">Student Performance</div>
                <div className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">This Term</div>
              </div>
              {/* Fake Chart */}
              <div className="flex h-44 items-end justify-between gap-3 px-2">
                {chartHeights.map((height, i) => (
                  <div
                    key={i}
                    className="relative w-full rounded-t-md bg-[var(--color-brand-blue)]/10 overflow-hidden"
                    style={{ height: `${height}%` }}
                  >
                    <motion.div
                      className="absolute bottom-0 w-full rounded-t-md bg-gradient-to-t from-[var(--color-brand-blue)] to-blue-400"
                      initial={{ height: 0 }}
                      animate={{ height: `${height - 15}%` }}
                      transition={{ duration: 1, delay: 1.2 + (i * 0.1), ease: "easeOut" }}
                    ></motion.div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden w-72 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:block">
              <div className="mb-6 text-sm font-semibold text-gray-700">Recent Activity</div>
              <div className="space-y-6">
                {[1, 2, 3].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + (i * 0.2) }}
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-[var(--color-brand-orange)] shadow-sm shadow-[var(--color-brand-orange)]/50"></div>
                    <div className="flex-1">
                      <div className="h-3.5 w-full rounded-full bg-gray-200/80"></div>
                      <div className="mt-2.5 h-2.5 w-2/3 rounded-full bg-gray-100"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Subtle gradient glow in bottom right of dashboard */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-tl from-[var(--color-brand-blue)]/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
