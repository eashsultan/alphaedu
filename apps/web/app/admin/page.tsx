"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, Users, GraduationCap, School as SchoolIcon, 
  ArrowUpRight, ArrowRight, MoreHorizontal, Plus, Wallet,
  AlertTriangle, ShieldAlert, CheckCircle2, Bell, Clock, LineChart
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

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'green': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'orange': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'purple': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'red': return 'bg-red-50 text-red-600 border-red-100';
      case 'amber': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <div className="space-y-8 pb-16 max-w-7xl mx-auto">
      
      {/* Header & Quick Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1 text-[var(--color-brand-blue)] font-bold text-sm tracking-widest uppercase">
            <ShieldAlert className="w-4 h-4" /> Super Admin
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Platform Overview</h1>
          <p className="text-slate-500 mt-2 text-lg">Monitor and control the entire AlphaEdu ecosystem from one place.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/admin/subscriptions" className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 shadow-sm transition-colors flex items-center gap-2">
            View Expiring
          </Link>
          <Link href="/admin/users" className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 shadow-sm transition-colors flex items-center gap-2">
            Manage Users
          </Link>
          <Link href="/admin/schools" className="px-5 py-2.5 bg-[var(--color-brand-blue)] text-white rounded-xl font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create School
          </Link>
        </div>
      </div>

      {/* PLATFORM HEALTH */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-2 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden"
      >
        <div className="flex-1 p-6 flex items-center gap-5 hover:bg-slate-50/50 transition-colors rounded-t-[1.5rem] md:rounded-tr-none md:rounded-l-[1.5rem]">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Active Schools</p>
            <p className="text-3xl font-black text-slate-900">{health.active}</p>
          </div>
        </div>
        <div className="flex-1 p-6 flex items-center gap-5 hover:bg-slate-50/50 transition-colors">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Expiring Soon</p>
            <p className="text-3xl font-black text-slate-900">{health.expiringSoon}</p>
          </div>
        </div>
        <div className="flex-1 p-6 flex items-center gap-5 hover:bg-slate-50/50 transition-colors rounded-b-[1.5rem] md:rounded-bl-none md:rounded-r-[1.5rem]">
          <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Suspended Schools</p>
            <p className="text-3xl font-black text-slate-900">{health.suspended}</p>
          </div>
        </div>
      </motion.div>

      {/* CORE KPIS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {kpiCards.map((kpi, i) => (
          <motion.div 
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[1.5rem] p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-[3rem] opacity-10 transition-transform group-hover:scale-125 ${getColorClass(kpi.color).split(' ')[0]}`}></div>
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${getColorClass(kpi.color)}`}>
                <kpi.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md ${kpi.data.isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                <ArrowUpRight className="w-3.5 h-3.5" />
                {kpi.data.change}
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-slate-900 tracking-tight mb-2">{kpi.data.value}</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{kpi.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CHARTS ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Revenue Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 lg:p-8 flex flex-col"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Wallet className="w-4 h-4" /> Subscription Revenue</p>
              <div className="flex items-baseline gap-3">
                <h3 className="text-4xl font-black text-slate-900">{kpis.subscriptionRevenue.value}</h3>
                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">{kpis.subscriptionRevenue.change} this period</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0099CC" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0099CC" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`₦${value}M`, 'Revenue']}
                  labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#0099CC" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" animationDuration={1500} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* School Growth Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 lg:p-8 flex flex-col"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><LineChart className="w-4 h-4" /> School Growth</p>
              <div className="flex items-baseline gap-3">
                <h3 className="text-4xl font-black text-slate-900">{kpis.totalSchools.value}</h3>
                <span className="text-sm font-bold text-slate-500">Registered Schools</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={schoolGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [value, 'Schools']}
                  labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
                  cursor={{ fill: '#f1f5f9' }}
                />
                <Bar dataKey="schools" fill="var(--color-brand-orange)" radius={[6, 6, 0, 0]} animationDuration={1500} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>

      {/* SUBSCRIPTIONS & EXPIRING */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Subscription Distribution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 lg:p-8 flex flex-col"
        >
          <div className="mb-8">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">Plan Distribution</p>
            <h3 className="text-2xl font-black text-slate-900">Active Subscriptions</h3>
          </div>
          
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {subscriptionDistribution.map((plan) => {
              const total = subscriptionDistribution.reduce((acc, curr) => acc + curr.value, 0);
              const percent = total === 0 ? 0 : Math.round((plan.value / total) * 100);
              return (
                <div key={plan.name}>
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <span className="text-slate-900 font-bold text-lg">{plan.name}</span>
                      <p className="text-xs text-slate-400 font-bold uppercase">{plan.price}</p>
                    </div>
                    <span className="text-slate-900 font-black text-xl">{percent}% <span className="text-slate-400 font-bold text-sm ml-1">({plan.value})</span></span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percent}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: plan.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Expiring Soon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden lg:col-span-2 flex flex-col"
        >
          <div className="p-6 lg:p-8 border-b border-slate-100 flex justify-between items-center bg-amber-50/30">
            <div>
              <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1 flex items-center gap-2"><Clock className="w-4 h-4" /> Action Required</p>
              <h3 className="text-2xl font-black text-slate-900">Schools Expiring Soon</h3>
            </div>
            <button className="text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3">
            {expiringSchools.map(school => (
              <div key={school.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-500 font-black flex items-center justify-center shrink-0 text-xl border border-slate-200">
                    {school.logo}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{school.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-slate-500 uppercase px-2 py-0.5 bg-slate-100 rounded-md">{school.plan}</span>
                      <span className="text-xs font-bold text-amber-600 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Expires in {school.expiresIn} days</span>
                    </div>
                  </div>
                </div>
                <button className="w-full sm:w-auto px-4 py-2 bg-amber-100 text-amber-700 rounded-xl font-bold text-sm hover:bg-amber-200 transition-colors flex items-center justify-center gap-2 shrink-0">
                  <Bell className="w-4 h-4" /> Send Reminder
                </button>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* BOTTOM ROW */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Recent Schools List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden xl:col-span-2"
        >
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-xl font-black text-slate-900">Recent Schools</h3>
            <button className="text-sm font-bold text-[var(--color-brand-blue)] hover:text-blue-700 transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">School</th>
                  <th className="px-6 py-4">School Code</th>
                  <th className="px-6 py-4">Plan & Status</th>
                  <th className="px-6 py-4">Students</th>
                  <th className="px-6 py-4">Date Joined</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentSchools.map((school) => (
                  <tr key={school.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] font-black flex items-center justify-center shrink-0 border border-blue-100">
                          {school.logo}
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 block">{school.name}</span>
                          <span className="text-xs text-slate-500 font-medium">{school.location}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{school.code}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-slate-900 font-bold text-xs uppercase">{school.plan}</span>
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${school.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                          {school.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-700">{school.students}</td>
                    <td className="px-6 py-4 text-slate-500 font-medium">{school.dateJoined}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-[var(--color-brand-blue)] transition-colors opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-blue-50">
                        <MoreHorizontal className="w-5 h-5 ml-auto" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Activity Feed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-[2rem] border border-slate-200 shadow-sm flex flex-col overflow-hidden"
        >
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-xl font-black text-slate-900">Recent Activity</h3>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-200 before:via-slate-200 before:to-transparent">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="relative flex items-start gap-5 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-white bg-slate-50 text-slate-500 shadow-sm shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                    {activity.entity === 'School' && <Building2 className="w-4 h-4 text-[var(--color-brand-blue)]" />}
                    {activity.entity === 'Subscription' && <ArrowUpRight className="w-4 h-4 text-emerald-500" />}
                    {activity.entity === 'User' && <Users className="w-4 h-4 text-[var(--color-brand-orange)]" />}
                    {activity.entity === 'Payment' && <Wallet className="w-4 h-4 text-purple-500" />}
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm group-hover:border-slate-200 transition-colors">
                    <p className="text-sm text-slate-900 font-bold mb-1">{activity.action}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                      <span>{activity.school}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span className="text-slate-400">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
