"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Bell, ChevronDown, CheckCircle2, TrendingUp, Users, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

// Simple CountUp Component
const CountUp = ({ to, duration = 2, delay = 0, suffix = "" }: { to: number, duration?: number, delay?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < delay * 1000) {
        animationFrame = requestAnimationFrame(startAnimation);
        return;
      }

      const activeProgress = (progress - delay * 1000) / (duration * 1000);
      
      if (activeProgress < 1) {
        // Ease out quad
        const easeOutProgress = 1 - (1 - activeProgress) * (1 - activeProgress);
        setCount(Math.floor(easeOutProgress * to));
        animationFrame = requestAnimationFrame(startAnimation);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(startAnimation);
    return () => cancelAnimationFrame(animationFrame);
  }, [to, duration, delay, isInView]);

  // Handle decimals if 'to' is a float
  const displayValue = to % 1 !== 0 ? (count * (to / Math.floor(to))).toFixed(1) : count;

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

export default function ForSchools() {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const benefits = [
    {
      id: "01",
      title: "Know what is happening",
      description: "Get a clear overview of students, teachers, classes, attendance, and academic activity without digging through multiple systems.",
      highlightIndex: 0 // highlights the stats
    },
    {
      id: "02",
      title: "Manage with confidence",
      description: "Keep school records organized and make everyday administrative work easier for your team.",
      highlightIndex: 3 // highlights activity
    },
    {
      id: "03",
      title: "Spot problems early",
      description: "Use attendance and academic information to identify patterns that need attention before they become bigger problems.",
      highlightIndex: 2 // highlights attendance
    },
    {
      id: "04",
      title: "Grow without the chaos",
      description: "Give your school a system that can grow with more students, teachers, classes, and campuses.",
      highlightIndex: 1 // highlights enrollment chart
    }
  ];

  const stats = [
    { label: "Students", value: 1248, icon: Users },
    { label: "Teachers", value: 68, icon: BookOpen },
    { label: "Classes", value: 32, icon: GraduationCap },
    { label: "Attendance", value: 94.8, suffix: "%", icon: CheckCircle2 }
  ];

  const chartData = [
    { month: "Jan", height: "40%" },
    { month: "Feb", height: "55%" },
    { month: "Mar", height: "70%" },
    { month: "Apr", height: "85%" },
    { month: "May", height: "95%" },
    { month: "Jun", height: "100%" },
  ];

  const activities = [
    { title: "New student enrolled", subtitle: "Aisha Mohammed • Grade 10", initial: "AM", color: "bg-blue-100 text-blue-700" },
    { title: "Results published", subtitle: "Grade 12 Mathematics", initial: "RM", color: "bg-orange-100 text-orange-700" },
    { title: "Teacher added", subtitle: "Mr. Ibrahim • Mathematics", initial: "MI", color: "bg-green-100 text-green-700" },
  ];

  return (
    <section id="for-schools" className="bg-gray-50/20 py-24 sm:py-32 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24 items-center">
          
          {/* LEFT: Interactive Dashboard Mockup */}
          <div className="order-2 lg:order-1 relative w-full h-[650px] sm:h-[700px] lg:h-[750px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
              className="absolute inset-0 rounded-[2rem] bg-white border border-gray-200 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Dashboard Sidebar & Topbar Simulation */}
              <div className="flex h-full">
                {/* Sidebar */}
                <div className="hidden sm:flex w-16 md:w-56 flex-col border-r border-gray-100 bg-gray-50/50 p-4">
                  <div className="flex items-center gap-3 md:mb-10 mb-6 px-1">
                    <div className="h-8 w-8 rounded-lg bg-[var(--color-brand-blue)] flex-shrink-0"></div>
                    <span className="font-bold text-gray-900 hidden md:block">AlphaEdu</span>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`h-10 rounded-lg flex items-center px-3 ${i === 1 ? 'bg-white shadow-sm border border-gray-100' : 'hover:bg-gray-100/50 transition-colors'}`}>
                        <div className={`h-5 w-5 rounded ${i === 1 ? 'bg-[var(--color-brand-blue)]/20' : 'bg-gray-200'} flex-shrink-0`}></div>
                        <div className={`ml-3 h-2 rounded bg-gray-200 hidden md:block ${i === 1 ? 'w-20' : 'w-16'}`}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col h-full bg-[#FAFAFA] overflow-hidden">
                  {/* Topbar */}
                  <div className="h-16 border-b border-gray-100 bg-white flex items-center justify-between px-6 shrink-0">
                    <div className="flex items-center text-gray-400">
                      <Search className="h-4 w-4" />
                      <span className="ml-2 text-sm hidden sm:block">Search students, teachers...</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Bell className="h-5 w-5 text-gray-400" />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[var(--color-brand-orange)] ring-2 ring-white"></span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gray-200 border border-gray-300"></div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex-1 p-6 overflow-y-auto space-y-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 tracking-tight">School Overview</h2>
                        <p className="text-xs text-gray-500 mt-1">Today • {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm">
                        This Term <ChevronDown className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-opacity duration-300 ${activeHighlight !== null && activeHighlight !== 0 ? 'opacity-30' : 'opacity-100'}`}>
                      {stats.map((stat, i) => (
                        <div key={stat.label} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
                          <div className="flex justify-between items-start mb-4">
                            <stat.icon className={`h-5 w-5 ${i === 3 ? 'text-[var(--color-brand-orange)]' : 'text-[var(--color-brand-blue)]'}`} />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900 tracking-tight">
                              <CountUp to={stat.value} delay={0.2 + i * 0.1} suffix={stat.suffix} />
                            </div>
                            <div className="text-xs font-medium text-gray-500">{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Charts & Activity Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      {/* Left Column: Charts */}
                      <div className="md:col-span-2 space-y-6">
                        {/* Enrollment Chart */}
                        <div className={`bg-white p-5 rounded-xl border border-gray-100 shadow-sm transition-opacity duration-300 ${activeHighlight !== null && activeHighlight !== 1 ? 'opacity-30' : 'opacity-100'}`}>
                          <div className="flex justify-between items-center mb-6">
                            <h3 className="text-sm font-semibold text-gray-900">Student Enrollment</h3>
                            <span className="flex items-center text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-md">
                              <TrendingUp className="h-3 w-3 mr-1" /> +12%
                            </span>
                          </div>
                          <div className="h-32 flex items-end justify-between gap-2 px-2">
                            {chartData.map((d, i) => (
                              <div key={d.month} className="flex flex-col items-center w-full gap-2">
                                <motion.div 
                                  initial={{ height: 0 }}
                                  whileInView={{ height: d.height }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1, type: "spring" }}
                                  className={`w-full rounded-t-sm ${i === chartData.length - 1 ? 'bg-[var(--color-brand-blue)]' : 'bg-blue-100'}`}
                                />
                                <span className="text-[10px] text-gray-400 font-medium">{d.month}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Attendance Overview */}
                        <div className={`bg-white p-5 rounded-xl border border-gray-100 shadow-sm transition-opacity duration-300 ${activeHighlight !== null && activeHighlight !== 2 ? 'opacity-30' : 'opacity-100'}`}>
                          <h3 className="text-sm font-semibold text-gray-900 mb-4">Today's Attendance</h3>
                          
                          {/* Progress Bar */}
                          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden flex">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: "94.8%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} className="h-full bg-[var(--color-brand-blue)]" />
                            <motion.div initial={{ width: 0 }} whileInView={{ width: "3.6%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} className="h-full bg-orange-400" />
                            <motion.div initial={{ width: 0 }} whileInView={{ width: "1.6%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} className="h-full bg-red-500" />
                          </div>
                          
                          <div className="mt-4 flex justify-between">
                            <div>
                              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></div><span className="text-xs text-gray-500">Present</span></div>
                              <div className="text-sm font-bold mt-1 text-gray-900">94.8%</div>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-400"></div><span className="text-xs text-gray-500">Absent</span></div>
                              <div className="text-sm font-bold mt-1 text-gray-900">3.6%</div>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500"></div><span className="text-xs text-gray-500">Late</span></div>
                              <div className="text-sm font-bold mt-1 text-gray-900">1.6%</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Activity */}
                      <div className={`bg-white p-5 rounded-xl border border-gray-100 shadow-sm transition-opacity duration-300 ${activeHighlight !== null && activeHighlight !== 3 ? 'opacity-30' : 'opacity-100'}`}>
                        <h3 className="text-sm font-semibold text-gray-900 mb-5">Recent Activity</h3>
                        <div className="space-y-5">
                          {activities.map((act, i) => (
                            <motion.div 
                              key={act.title}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
                              className="flex gap-3 items-start"
                            >
                              <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${act.color}`}>
                                {act.initial}
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-gray-900 leading-tight">{act.title}</p>
                                <p className="text-[11px] text-gray-500 mt-0.5">{act.subtitle}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Content & Benefits */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="inline-flex items-center rounded-full bg-[var(--color-brand-orange)]/10 px-3 py-1 text-xs font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-6">
                FOR SCHOOL ADMINISTRATORS
              </p>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Run the entire school from one place.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg leading-8 text-gray-600 mb-10"
            >
              From student records to staff management and academic performance, AlphaEdu gives school administrators a clear view of everything happening across the school.
            </motion.p>

            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setActiveHighlight(benefit.highlightIndex)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  className="group relative flex gap-6 py-6 border-t border-gray-100 first:border-t-0 hover:bg-white rounded-2xl -mx-4 px-4 transition-all duration-300 cursor-default"
                >
                  <div className="text-sm font-bold text-gray-300 transition-colors duration-300 group-hover:text-[var(--color-brand-blue)] mt-1">
                    {benefit.id}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[var(--color-brand-blue)]">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8"
            >
              <a href="#" className="inline-flex items-center gap-2 text-base font-semibold text-[var(--color-brand-blue)] hover:text-blue-700 transition-colors group">
                Explore School Management 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
