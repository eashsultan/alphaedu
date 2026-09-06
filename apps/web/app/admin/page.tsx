"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, Users, GraduationCap, ArrowUpRight, ArrowRight, 
  MoreHorizontal, Plus, Wallet, AlertTriangle, ShieldAlert, 
  CheckCircle2, Bell, Clock, LineChart
} from "lucide-react";
import { adminMockData } from "../../lib/mock-data/admin";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

export default function AdminOverview() {
  const { kpis, revenueData, schoolGrowthData, subscriptionDistribution, recentSchools, expiringSchools, recentActivity } = adminMockData;

  const kpiCards = [
    { title: "Total Schools", data: kpis.totalSchools, icon: Building2, color: "var(--color-brand-blue)", bg: "bg-blue-50" },
    { title: "Active Students", data: kpis.totalStudents, icon: Users, color: "var(--color-brand-orange)", bg: "bg-orange-50" },
    { title: "Total Teachers", data: kpis.totalTeachers, icon: GraduationCap, color: "#8b5cf6", bg: "bg-purple-50" },
    { title: "Monthly Revenue", data: kpis.subscriptionRevenue, icon: Wallet, color: "#10b981", bg: "bg-emerald-50" }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      
      {/* Compact Elegant Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Platform Overview</h1>
          <p className="text-sm text-slate-500 font-medium mt-0.5">Production environment metrics and health.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Link href="/admin/subscriptions" className="px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-lg font-semibold text-sm transition-all shadow-sm">
            View Expiring
          </Link>
          <Link href="/admin/schools" className="px-4 py-2 bg-[var(--color-brand-blue)] hover:opacity-90 text-white rounded-lg font-semibold text-sm transition-all shadow-sm shadow-blue-500/20 flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create School
          </Link>
        </div>
      </div>

      {/* Refined KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, i) => (
          <motion.div 
            key={kpi.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-lg ${kpi.bg} flex items-center justify-center`}>
                <kpi.icon className="w-5 h-5" style={{ color: kpi.color }} />
              </div>
              <div className="text-[11px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                {kpi.data.change}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-1">{kpi.title}</p>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">{kpi.data.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-slate-200 shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-bold text-slate-900">Revenue Growth</h3>
            <span className="text-xs font-semibold text-[var(--color-brand-blue)] bg-blue-50 px-2 py-1 rounded-md">YTD</span>
          </div>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-brand-blue)" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="var(--color-brand-blue)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`₦${value}`, 'Revenue']}
                  labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-brand-blue)" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" animationDuration={1000} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-slate-200 shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-bold text-slate-900">School Onboarding</h3>
            <span className="text-xs font-semibold text-[var(--color-brand-orange)] bg-orange-50 px-2 py-1 rounded-md">YTD</span>
          </div>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={schoolGrowthData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f8fafc' }}
                  labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
                />
                <Bar dataKey="schools" fill="var(--color-brand-orange)" radius={[4, 4, 4, 4]} barSize={24} animationDuration={1000} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Empty State Table */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl border border-slate-200 shadow-sm lg:col-span-2 overflow-hidden flex flex-col"
        >
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-base font-bold text-slate-900">Recent Schools</h3>
            <button className="text-xs font-semibold text-[var(--color-brand-blue)] hover:underline">View all</button>
          </div>
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-3 text-slate-300">
              <SchoolIcon className="w-5 h-5" />
            </div>
            <p className="text-sm font-bold text-slate-900">No schools yet</p>
            <p className="text-xs text-slate-500 mt-1 max-w-xs">When schools are added to the AlphaEdu platform, they will appear here.</p>
            <Link href="/admin/schools" className="mt-4 text-xs font-semibold text-[var(--color-brand-blue)] bg-blue-50 px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors">
              Add first school
            </Link>
          </div>
        </motion.div>

        {/* Empty State Activity */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden"
        >
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-base font-bold text-slate-900">System Activity</h3>
          </div>
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-3 text-slate-300">
              <Bell className="w-5 h-5" />
            </div>
            <p className="text-sm font-bold text-slate-900">No activity yet</p>
            <p className="text-xs text-slate-500 mt-1">Audit logs will be recorded here.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
