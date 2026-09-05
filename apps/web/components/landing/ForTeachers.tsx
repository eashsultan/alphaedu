"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  ClipboardCheck, 
  FileEdit, 
  LineChart, 
  GraduationCap, 
  Search, 
  Bell, 
  Calendar, 
  Clock,
  CheckCircle2,
  Plus,
  ArrowRight
} from "lucide-react";

export default function ForTeachers() {
  const sidebarItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "My Classes", icon: Users, active: false },
    { name: "Attendance", icon: ClipboardCheck, active: false },
    { name: "Assessments", icon: FileEdit, active: false },
    { name: "Results", icon: LineChart, active: false },
    { name: "Students", icon: GraduationCap, active: false },
  ];

  const classes = [
    { name: "Mathematics — Grade 10A", students: 32, time: "10:00 AM", status: "Upcoming" },
    { name: "Mathematics — Grade 11B", students: 28, time: "12:00 PM", status: "Upcoming" },
    { name: "Mathematics — Grade 12A", students: 30, time: "2:00 PM", status: "Later" },
  ];

  const studentsProgress = [
    { name: "Aisha", score: 92 },
    { name: "Ibrahim", score: 86 },
    { name: "Maryam", score: 81 },
    { name: "Yusuf", score: 74 },
  ];

  const quickActions = [
    { name: "Take Attendance", icon: ClipboardCheck },
    { name: "Add Assessment", icon: FileEdit },
    { name: "View Students", icon: Users },
    { name: "Enter Results", icon: LineChart },
  ];

  const benefits = [
    {
      title: "Plan faster",
      description: "Keep your classes, students, assessments, and schedules organized.",
      icon: Calendar
    },
    {
      title: "Track progress",
      description: "Understand how your students are performing without manually sorting through records.",
      icon: LineChart
    },
    {
      title: "Teach with confidence",
      description: "Spend less time on administrative tasks and more time helping students learn.",
      icon: CheckCircle2
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="for-teachers" className="bg-white py-24 sm:py-32 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP: Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="inline-flex items-center rounded-full bg-[var(--color-brand-blue)]/10 px-3 py-1 text-xs font-bold tracking-widest text-[var(--color-brand-blue)] uppercase mb-6">
              FOR TEACHERS
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Less paperwork. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-orange)]">
              More time to teach.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl leading-8 text-gray-500 max-w-2xl mx-auto"
          >
            AlphaEdu gives teachers simple tools to manage their classes, attendance, assessments, results, and student progress without getting buried in administrative work.
          </motion.p>
        </div>

        {/* MIDDLE: Teacher Workspace UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="relative w-full rounded-[2rem] bg-gray-50/50 border border-gray-200/60 shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none z-30"></div>
          
          {/* LEFT SIDEBAR (Desktop) / TOP NAV (Mobile) */}
          <div className="md:w-60 lg:w-72 border-r border-gray-200/60 bg-white md:bg-gray-50/50 flex-shrink-0 flex flex-row md:flex-col overflow-x-auto md:overflow-visible custom-scrollbar z-20 shadow-sm md:shadow-none">
            {/* Logo / Brand (Hidden on mobile for space) */}
            <div className="hidden md:flex items-center gap-3 p-6 mb-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--color-brand-blue)] to-blue-500 shadow-sm flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xs">AE</span>
              </div>
              <span className="font-bold text-gray-900 text-lg">AlphaEdu</span>
            </div>
            
            {/* Nav Items */}
            <div className="flex md:flex-col flex-1 px-4 md:px-4 py-3 md:py-0 gap-2 md:gap-1">
              {sidebarItems.map((item) => (
                <div 
                  key={item.name}
                  className={`flex items-center gap-3 px-4 md:px-3 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors cursor-default ${
                    item.active 
                      ? 'bg-white text-[var(--color-brand-blue)] shadow-sm border border-gray-100 md:border-transparent md:shadow-[0_2px_10px_rgba(0,153,204,0.1)]' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
                  }`}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span className="hidden md:block">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1 flex flex-col bg-[#FCFCFD] relative z-10 w-full overflow-hidden">
            {/* Header */}
            <div className="h-16 md:h-20 border-b border-gray-100 bg-white flex items-center justify-between px-4 md:px-8 shrink-0">
              <div>
                <h1 className="text-lg md:text-xl font-bold text-gray-900">Good morning, Mr. Ibrahim</h1>
                <p className="text-xs text-gray-500 hidden md:block">Here's what's happening with your classes today.</p>
              </div>
              
              <div className="flex items-center gap-3 md:gap-5">
                <div className="hidden lg:flex items-center text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 w-48">
                  <Search className="h-4 w-4" />
                  <span className="ml-2 text-xs">Search...</span>
                </div>
                <div className="relative">
                  <Bell className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[var(--color-brand-orange)] ring-2 ring-white"></span>
                </div>
                <div className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] border border-[var(--color-brand-blue)]/20 flex items-center justify-center font-bold text-sm shrink-0 cursor-pointer">
                  MI
                </div>
              </div>
            </div>

            {/* Content Scroll Area */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 p-4 md:p-8 overflow-y-auto space-y-6 md:space-y-8 custom-scrollbar"
            >
              
              {/* Quick Actions Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {quickActions.map((action, i) => (
                  <motion.div 
                    variants={itemVariants}
                    key={action.name} 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 bg-white p-3 md:p-4 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md hover:border-gray-200 transition-all text-center md:text-left"
                  >
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[var(--color-brand-blue)]/5 text-[var(--color-brand-blue)] flex items-center justify-center shrink-0">
                      <action.icon className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                      <span className="text-[11px] md:text-sm font-semibold text-gray-900 leading-tight">{action.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Grid Layout for Panels */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                
                {/* Left Column: Today's Classes */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-gray-900">Today's Classes</h3>
                    <span className="text-xs font-semibold text-[var(--color-brand-blue)] cursor-pointer">View Schedule</span>
                  </div>
                  
                  <div className="space-y-3">
                    {classes.map((cls, i) => (
                      <motion.div 
                        variants={itemVariants}
                        key={cls.name}
                        whileHover={{ x: 4, scale: 1.01 }}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-4 mb-3 sm:mb-0">
                          <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner ${cls.status === 'Upcoming' ? 'bg-orange-50 text-orange-500' : 'bg-gray-50 text-gray-400'}`}>
                            <Clock className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm md:text-base group-hover:text-[var(--color-brand-blue)] transition-colors">{cls.name}</h4>
                            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                              <Users className="h-3.5 w-3.5" /> {cls.students} Students
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                          <div className="text-right">
                            <div className="font-bold text-gray-900">{cls.time}</div>
                            <div className={`text-[10px] font-bold uppercase tracking-wider mt-1 ${cls.status === 'Upcoming' ? 'text-orange-500' : 'text-gray-400'}`}>
                              {cls.status}
                            </div>
                          </div>
                          <div className="h-8 w-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-[var(--color-brand-blue)] group-hover:text-white group-hover:border-transparent transition-all">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Attendance & Performance */}
                <div className="space-y-6 md:space-y-8">
                  
                  {/* Attendance Card */}
                  <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                    <h3 className="text-base font-bold text-gray-900 mb-5">Today's Attendance</h3>
                    
                    <div className="flex items-center gap-6">
                      {/* Circular Progress (CSS based) */}
                      <div className="relative h-24 w-24 shrink-0">
                        <svg className="h-24 w-24 transform -rotate-90">
                          <circle cx="48" cy="48" r="40" stroke="#f1f5f9" strokeWidth="8" fill="none" />
                          <motion.circle 
                            initial={{ strokeDasharray: "0 251.2" }}
                            whileInView={{ strokeDasharray: "220 251.2" }} // 87.5% of 2 * pi * 40
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                            cx="48" cy="48" r="40" stroke="var(--color-brand-blue)" strokeWidth="8" fill="none" strokeLinecap="round" 
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-lg font-black text-gray-900">87.5%</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 flex-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></span> Present
                          </span>
                          <span className="font-bold text-gray-900">28</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-orange-400"></span> Absent
                          </span>
                          <span className="font-bold text-gray-900">3</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span> Late
                          </span>
                          <span className="font-bold text-gray-900">1</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Student Performance Card */}
                  <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-bold text-gray-900">Class Performance</h3>
                      <span className="text-xs font-bold text-gray-400">Mathematics</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-5">Average Score: <span className="font-bold text-gray-900">78%</span></p>

                    <div className="space-y-3.5">
                      {studentsProgress.map((student, idx) => (
                        <div key={student.name}>
                          <div className="flex justify-between items-end mb-1.5">
                            <span className="text-[11px] font-bold text-gray-700">{student.name}</span>
                            <span className="text-[10px] font-bold text-gray-500">{student.score}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${student.score}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 1 + (idx * 0.1), ease: "easeOut" }}
                              className="h-full rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-blue-400"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>

        {/* BOTTOM: Product Story Benefits */}
        <div className="mt-20 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="h-12 w-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[var(--color-brand-blue)] mb-5 group-hover:scale-110 group-hover:bg-[var(--color-brand-blue)]/5 transition-all duration-300 shadow-sm">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
