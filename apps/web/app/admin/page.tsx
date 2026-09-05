"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, Users, GraduationCap, School as SchoolIcon, 
  ArrowUpRight, ArrowRight, MoreHorizontal, Plus, Wallet,
  AlertTriangle, ShieldAlert, CheckCircle2, Bell, Clock, LineChart, Sparkles
} from "lucide-react";
import { adminMockData } from "../../lib/mock-data/admin";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

export default function AdminOverview() {
  const { kpis, health, revenueData, schoolGrowthData, subscriptionDistribution, recentSchools, expiringSchools, recentActivity } = adminMockData;

  const kpiCards = [
    { title: "TOTAL SCHOOLS", data: kpis.totalSchools, icon: Building2, color: "blue" },
    { title: "ACTIVE SCHOOLS", data: kpis.activeSchools, icon: CheckCircle2, color: "green" },
    { title: "TOTAL STUDENTS", data: kpis.totalStudents, icon: Users, color: "orange" },
    { title: "TOTAL TEACHERS", data: kpis.totalTeachers, icon: GraduationCap, color: "purple" }
  ];

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto relative z-10">
      
      {/* Non-Traditional Welcome Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-[#050A15] p-8 md:p-12 shadow-2xl shadow-blue-900/20 border border-white/10"
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-brand-blue)]/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-brand-orange)]/15 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
              AlphaEdu Control Center
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
              Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-orange)]">Overview</span>
            </h1>
            <p className="text-blue-100/80 text-lg md:text-xl font-medium max-w-xl">
              You are viewing the live production state. The platform currently has {kpis.totalSchools.value} registered schools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link href="/admin/subscriptions" className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md">
              View Expiring
            </Link>
            <Link href="/admin/schools" className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-orange)] hover:opacity-90 text-white rounded-2xl font-bold text-sm shadow-[0_0_40px_-10px_rgba(232,93,4,0.5)] transition-all flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" /> Create School
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Modern KPI Banners (Linear Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, i) => (
          <motion.div 
            key={kpi.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + (i * 0.05) }}
            className="bg-white rounded-3xl p-6 border-b-4 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform"
            style={{ borderBottomColor: kpi.title === 'TOTAL STUDENTS' ? 'var(--color-brand-orange)' : kpi.title === 'ACTIVE SCHOOLS' ? '#10b981' : kpi.title === 'TOTAL TEACHERS' ? '#8b5cf6' : 'var(--color-brand-blue)' }}
          >
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform text-slate-700">
                <kpi.icon className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                {kpi.data.change}
              </div>
            </div>
            
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{kpi.title}</p>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">{kpi.data.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Charts) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Revenue Chart - Soft aesthetic */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-sm font-bold text-[var(--color-brand-blue)] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)] animate-pulse"></span>
                  Financial Overview
                </p>
                <div className="flex items-baseline gap-4">
                  <h3 className="text-5xl font-black text-slate-900 tracking-tight">{kpis.subscriptionRevenue.value}</h3>
                  <span className="text-sm font-bold text-slate-400">Total Revenue</span>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-brand-blue)" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="var(--color-brand-blue)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} />
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', padding: '12px 20px' }}
                    formatter={(value) => [`₦${value}`, 'Revenue']}
                    labelStyle={{ fontWeight: '900', color: '#0f172a', marginBottom: '4px' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="var(--color-brand-blue)" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" animationDuration={2000} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* School Growth Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-sm font-bold text-[var(--color-brand-orange)] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <LineChart className="w-4 h-4" /> Growth Trajectory
                </p>
                <div className="flex items-baseline gap-4">
                  <h3 className="text-4xl font-black text-slate-900 tracking-tight">{kpis.totalSchools.value}</h3>
                  <span className="text-sm font-bold text-slate-400">Total Schools</span>
                </div>
              </div>
            </div>
            
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={schoolGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} />
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                    formatter={(value) => [value, 'Schools']}
                    labelStyle={{ fontWeight: '900', color: '#0f172a' }}
                    cursor={{ fill: '#f8fafc' }}
                  />
                  <Bar dataKey="schools" fill="var(--color-brand-orange)" radius={[8, 8, 8, 8]} barSize={32} animationDuration={1500} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>

        {/* Right Column (Side Panels) */}
        <div className="space-y-8">
          
          {/* Plan Distribution (Stripe Style) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8"
          >
            <div className="mb-10">
              <h3 className="text-2xl font-black text-slate-900 mb-1">Plan Distribution</h3>
              <p className="text-sm font-medium text-slate-400">Active subscriptions across tiers</p>
            </div>
            
            <div className="space-y-8">
              {subscriptionDistribution.map((plan) => {
                const total = subscriptionDistribution.reduce((acc, curr) => acc + curr.value, 0);
                const percent = total === 0 ? 0 : Math.round((plan.value / total) * 100);
                return (
                  <div key={plan.name} className="relative">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <span className="text-slate-900 font-bold block text-lg leading-none mb-1">{plan.name}</span>
                        <span className="text-xs text-slate-400 font-bold uppercase">{plan.price}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-900 font-black text-xl leading-none block">{percent}%</span>
                        <span className="text-slate-400 font-bold text-xs">{plan.value} schools</span>
                      </div>
                    </div>
                    <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: plan.name === 'Pro' ? 'var(--color-brand-blue)' : plan.name === 'Enterprise' ? 'var(--color-brand-orange)' : plan.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Empty State Activity Feed */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col overflow-hidden min-h-[300px]"
          >
            <div className="p-8 pb-4">
              <h3 className="text-2xl font-black text-slate-900 mb-1">System Activity</h3>
              <p className="text-sm font-medium text-slate-400">Real-time audit log</p>
            </div>
            
            <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-slate-50 border-2 border-slate-100 border-dashed flex items-center justify-center mb-4 text-slate-300">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <p className="text-slate-900 font-bold">No activity yet</p>
              <p className="text-slate-400 text-sm mt-1 max-w-[200px]">System logs will appear here once the platform is active.</p>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
