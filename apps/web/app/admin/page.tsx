"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, Users, GraduationCap, ArrowUpRight, ArrowRight, 
  MoreHorizontal, Plus, Wallet, AlertTriangle, ShieldAlert, 
  CheckCircle2, Bell, Clock, LineChart, Sparkles, School as SchoolIcon
} from "lucide-react";
import { adminMockData } from "../../lib/mock-data/admin";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

export default function AdminOverview() {
  const { kpis, revenueData, schoolGrowthData, subscriptionDistribution, recentSchools, expiringSchools, recentActivity } = adminMockData;

  const kpiCards = [
    { title: "Total Schools", data: kpis.totalSchools, icon: Building2, color: "var(--color-brand-blue)", gradient: "from-[var(--color-brand-blue)]/10 to-transparent" },
    { title: "Active Students", data: kpis.totalStudents, icon: Users, color: "var(--color-brand-orange)", gradient: "from-[var(--color-brand-orange)]/10 to-transparent" },
    { title: "Total Teachers", data: kpis.totalTeachers, icon: GraduationCap, color: "#8b5cf6", gradient: "from-purple-500/10 to-transparent" },
    { title: "Monthly Revenue", data: kpis.subscriptionRevenue, icon: Wallet, color: "#10b981", gradient: "from-emerald-500/10 to-transparent" }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 relative z-10">
      
      {/* Modern Compact Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-[#050A15] p-8 shadow-xl shadow-blue-900/10 border border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-brand-blue)]/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-brand-orange)]/15 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
            Live Environment
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-orange)]">Overview</span>
          </h1>
        </div>

        <div className="relative z-10 flex gap-3 w-full md:w-auto">
          <Link href="/admin/subscriptions" className="flex-1 md:flex-none px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-sm transition-all text-center backdrop-blur-md">
            Subscriptions
          </Link>
          <Link href="/admin/schools" className="flex-1 md:flex-none px-5 py-2.5 bg-[var(--color-brand-blue)] hover:bg-blue-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_rgba(0,153,204,0.5)] transition-all flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add School
          </Link>
        </div>
      </motion.div>

      {/* Sleek KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, i) => (
          <motion.div 
            key={kpi.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + (i * 0.05) }}
            className={`bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden group`}
          >
            {/* Subtle top gradient using brand colors */}
            <div className={`absolute top-0 inset-x-0 h-24 bg-gradient-to-b ${kpi.gradient} opacity-50 pointer-events-none`}></div>
            
            <div className="relative z-10 flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform duration-300">
                <kpi.icon className="w-5 h-5" style={{ color: kpi.color }} />
              </div>
              <div className="text-[11px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                {kpi.data.change}
              </div>
            </div>
            
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{kpi.title}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">{kpi.data.value}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Charts spanning 2/3) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Revenue Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  Revenue Growth
                  <span className="text-[10px] font-bold text-[var(--color-brand-blue)] bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">YTD</span>
                </h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Platform subscription revenue over time</p>
              </div>
              <div className="text-right">
                <h4 className="text-2xl font-black text-slate-900">{kpis.subscriptionRevenue.value}</h4>
              </div>
            </div>
            
            <div className="h-[280px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-brand-blue)" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="var(--color-brand-blue)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }} />
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    formatter={(value) => [`₦${value}`, 'Revenue']}
                    labelStyle={{ fontWeight: '900', color: '#0f172a', marginBottom: '4px' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="var(--color-brand-blue)" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" animationDuration={1500} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* School Growth Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  School Onboarding
                  <span className="text-[10px] font-bold text-[var(--color-brand-orange)] bg-orange-50 px-2 py-0.5 rounded uppercase tracking-wider">YTD</span>
                </h3>
              </div>
            </div>
            
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={schoolGrowthData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }} />
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    formatter={(value) => [value, 'Schools']}
                    labelStyle={{ fontWeight: '900', color: '#0f172a' }}
                    cursor={{ fill: '#f8fafc' }}
                  />
                  <Bar dataKey="schools" fill="var(--color-brand-orange)" radius={[6, 6, 6, 6]} barSize={28} animationDuration={1500} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>

        {/* Right Column (Side Panels spanning 1/3) */}
        <div className="space-y-6">
          
          {/* Plan Distribution */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6"
          >
            <div className="mb-8">
              <h3 className="text-lg font-black text-slate-900 mb-1">Plan Distribution</h3>
              <p className="text-xs font-medium text-slate-400">Current subscription tiers</p>
            </div>
            
            <div className="space-y-6">
              {subscriptionDistribution.map((plan) => {
                const total = subscriptionDistribution.reduce((acc, curr) => acc + curr.value, 0);
                const percent = total === 0 ? 0 : Math.round((plan.value / total) * 100);
                return (
                  <div key={plan.name} className="relative">
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <span className="text-slate-900 font-bold block text-sm mb-0.5">{plan.name}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{plan.price}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-900 font-black text-base block">{percent}%</span>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: plan.name === 'Pro' ? 'var(--color-brand-blue)' : plan.name === 'Enterprise' ? 'var(--color-brand-orange)' : plan.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Recent Schools Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-base font-bold text-slate-900">Recent Schools</h3>
              <Link href="/admin/schools" className="text-xs font-bold text-[var(--color-brand-blue)] hover:underline">View all</Link>
            </div>
            <div className="p-8 flex flex-col items-center justify-center text-center bg-white min-h-[200px]">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-3 text-slate-300">
                <SchoolIcon className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-slate-900">No schools yet</p>
              <p className="text-xs text-slate-400 mt-1 max-w-[180px]">New signups will appear here.</p>
            </div>
          </motion.div>

          {/* Activity Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-base font-bold text-slate-900">Audit Log</h3>
            </div>
            <div className="p-8 flex flex-col items-center justify-center text-center bg-white min-h-[160px]">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-3 text-slate-300">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <p className="text-xs font-bold text-slate-500">System is clean.</p>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
