"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, CheckCircle2, AlertTriangle, ShieldAlert,
  Edit, CalendarDays, RefreshCw, Mail, Power, X, 
  MapPin, Phone, Globe, Calendar, Users, GraduationCap, 
  CreditCard, Activity, Copy, Check, ChevronLeft
} from "lucide-react";
import { schoolsMockData } from "../../../../lib/mock-data/admin-schools";

export default function SchoolDetails() {
  const { id } = useParams();
  const school = schoolsMockData.find(s => s.id === id) || schoolsMockData[0]; // fallback for mock
  
  const [copied, setCopied] = useState(false);
  const [activeModal, setActiveModal] = useState<"suspend" | "reactivate" | "extend" | "changePlan" | "reminder" | null>(null);

  const copyCode = () => {
    navigator.clipboard.writeText(school.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Active': return <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5"/> Active</span>;
      case 'Expiring Soon': return <span className="px-3 py-1 bg-orange-50 text-orange-600 border border-orange-200 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5"/> Expiring Soon</span>;
      case 'Suspended': return <span className="px-3 py-1 bg-red-50 text-red-600 border border-red-200 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"><ShieldAlert className="w-3.5 h-3.5"/> Suspended</span>;
      default: return <span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-wider">{status}</span>;
    }
  };

  // Mock data for lists
  const admins = [
    { name: "Fatima Abubakar", email: "fatima@school.edu.ng", role: "Super Administrator", status: "Active", lastLogin: "2 hours ago" },
    { name: "Ibrahim Musa", email: "ibrahim@school.edu.ng", role: "Administrator", status: "Active", lastLogin: "1 day ago" }
  ];
  
  const payments = [
    { date: "2026-01-15", amount: "₦100,000", plan: "Pro", status: "Successful", ref: "TXN-88219" },
    { date: "2025-01-12", amount: "₦75,000", plan: "Starter", status: "Successful", ref: "TXN-33012" }
  ];

  const activities = [
    { action: "Teacher added", actor: "Fatima Abubakar", time: "2 hours ago" },
    { action: "Payment received", actor: "System", time: "8 months ago" },
    { action: "School created", actor: "Super Admin", time: "1 year ago" }
  ];

  const daysRemaining = Math.max(0, Math.ceil((new Date(school.subscriptionExpiry).getTime() - new Date().getTime()) / (1000 * 3600 * 24)));

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 relative z-10">
      
      {/* Back Link */}
      <Link href="/admin/schools" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[var(--color-brand-blue)] transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back to Schools
      </Link>

      {/* Header Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-slate-50 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        
        <div className="flex gap-6 items-center relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] flex items-center justify-center shrink-0 border border-blue-100">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">{school.name}</h1>
              {getStatusBadge(school.status)}
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md border border-slate-200 cursor-pointer hover:bg-slate-200 transition-colors" onClick={copyCode}>
                <span className="font-mono text-slate-800 font-bold">{school.code}</span>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </div>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {school.state}, Nigeria</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 relative z-10">
          <button className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center gap-2">
            <Edit className="w-4 h-4" /> Edit
          </button>
          <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
          {school.status !== 'Suspended' ? (
            <button onClick={() => setActiveModal('suspend')} className="px-4 py-2 bg-white border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-slate-700 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center gap-2">
              <Power className="w-4 h-4" /> Suspend
            </button>
          ) : (
            <button onClick={() => setActiveModal('reactivate')} className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white border border-emerald-600 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center gap-2">
              <Power className="w-4 h-4" /> Reactivate
            </button>
          )}
        </div>
      </motion.div>

      {/* KPI Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Students", value: school.studentCount, icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
          { label: "Teachers", value: school.teacherCount, icon: GraduationCap, color: "text-orange-500", bg: "bg-orange-50" },
          { label: "Parents", value: school.parentCount, icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
          { label: "Administrators", value: school.adminCount, icon: ShieldAlert, color: "text-emerald-500", bg: "bg-emerald-50" }
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 leading-none">{stat.value}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Subscription Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-slate-50 to-white">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[var(--color-brand-blue)]" /> Subscription Details
              </h3>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Plan</p>
                  <div className="flex items-baseline gap-2">
                    <h4 className="text-3xl font-black text-[var(--color-brand-blue)]">{school.subscriptionPlan}</h4>
                    <span className="text-sm font-bold text-slate-500">₦{school.subscriptionPrice.toLocaleString()} / yr</span>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Time Remaining</p>
                  <div className="flex items-baseline gap-2">
                    <h4 className="text-3xl font-black text-slate-900">{daysRemaining}</h4>
                    <span className="text-sm font-bold text-slate-500">days</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Started</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">{new Date(school.subscriptionStart).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Expires</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">{new Date(school.subscriptionExpiry).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100">
                <button onClick={() => setActiveModal('changePlan')} className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm">
                  <RefreshCw className="w-4 h-4" /> Change Plan
                </button>
                <button onClick={() => setActiveModal('extend')} className="px-5 py-2.5 bg-[var(--color-brand-blue)] hover:bg-blue-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_rgba(0,153,204,0.5)] transition-all flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" /> Extend Subscription
                </button>
                <button onClick={() => setActiveModal('reminder')} className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm ml-auto">
                  <Mail className="w-4 h-4" /> Send Reminder
                </button>
              </div>
            </div>
          </div>

          {/* Administrators Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-slate-50 to-white">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-500" /> School Administrators
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                    <th className="p-4">Name</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Last Login</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {admins.map((admin, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="p-4">
                        <p className="font-bold text-slate-900 text-sm">{admin.name}</p>
                        <p className="text-xs text-slate-500">{admin.email}</p>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded text-xs font-bold">{admin.role}</span>
                      </td>
                      <td className="p-4 text-sm text-slate-500">{admin.lastLogin}</td>
                      <td className="p-4 text-right">
                        <button className="text-xs font-bold text-[var(--color-brand-blue)] hover:underline">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payments */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-slate-50 to-white">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-emerald-500" /> Recent Payments
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                    <th className="p-4">Date</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Plan</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {payments.map((payment, i) => (
                    <tr key={i}>
                      <td className="p-4 text-sm font-medium text-slate-900">{payment.date}</td>
                      <td className="p-4 text-sm font-bold text-slate-900">{payment.amount}</td>
                      <td className="p-4 text-sm text-slate-500">{payment.plan}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs font-bold flex items-center gap-1 w-max">
                          <CheckCircle2 className="w-3 h-3" /> {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Contact Info */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-slate-400" /> Information
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Address</p>
                  <p className="text-sm font-medium text-slate-900">{school.address}</p>
                  <p className="text-sm text-slate-500">{school.lga}, {school.state}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Phone</p>
                  <p className="text-sm font-medium text-slate-900">{school.phone}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Email</p>
                  <p className="text-sm font-medium text-slate-900 break-all">{school.email}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Globe className="w-5 h-5 text-slate-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Website</p>
                  <p className="text-sm font-medium text-slate-900">{school.website}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Calendar className="w-5 h-5 text-slate-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Created</p>
                  <p className="text-sm font-medium text-slate-900">{new Date(school.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[var(--color-brand-orange)]" /> Recent Activity
              </h3>
            </div>
            <div className="p-6 space-y-6">
              {activities.map((act, i) => (
                <div key={i} className="flex gap-4 relative">
                  {i !== activities.length - 1 && <div className="absolute top-8 bottom-[-24px] left-[11px] w-px bg-slate-200"></div>}
                  <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 z-10">
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{act.action}</p>
                    <p className="text-xs text-slate-500 mt-0.5">by {act.actor} • {act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050A15]/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-md overflow-hidden flex flex-col shadow-2xl"
            >
              
              {/* Suspend Modal */}
              {activeModal === 'suspend' && (
                <>
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-red-50">
                    <h2 className="text-xl font-black text-red-600 flex items-center gap-2"><Power className="w-5 h-5"/> Suspend School?</h2>
                    <button onClick={() => setActiveModal(null)} className="p-2 text-red-400 hover:bg-red-100 rounded-full transition-colors"><X className="w-5 h-5" /></button>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-slate-600 font-medium">Suspending this school will prevent its users from accessing AlphaEdu while preserving all school data.</p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex justify-between text-sm"><span className="text-slate-500 font-bold">School</span><span className="font-bold text-slate-900">{school.name}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-slate-500 font-bold">Code</span><span className="font-mono font-bold text-slate-900">{school.code}</span></div>
                    </div>
                  </div>
                  <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
                    <button onClick={() => setActiveModal(null)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">Cancel</button>
                    <button onClick={() => setActiveModal(null)} className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)] transition-all">Confirm Suspend</button>
                  </div>
                </>
              )}

              {/* Reactivate Modal */}
              {activeModal === 'reactivate' && (
                <>
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-emerald-50">
                    <h2 className="text-xl font-black text-emerald-600 flex items-center gap-2"><Power className="w-5 h-5"/> Reactivate School?</h2>
                    <button onClick={() => setActiveModal(null)} className="p-2 text-emerald-400 hover:bg-emerald-100 rounded-full transition-colors"><X className="w-5 h-5" /></button>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-slate-600 font-medium">This will restore access to AlphaEdu for all users in this school.</p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex justify-between text-sm"><span className="text-slate-500 font-bold">School</span><span className="font-bold text-slate-900">{school.name}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-slate-500 font-bold">Plan</span><span className="font-bold text-slate-900">{school.subscriptionPlan}</span></div>
                    </div>
                  </div>
                  <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
                    <button onClick={() => setActiveModal(null)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">Cancel</button>
                    <button onClick={() => setActiveModal(null)} className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] transition-all">Confirm Reactivate</button>
                  </div>
                </>
              )}

              {/* Extend Modal */}
              {activeModal === 'extend' && (
                <>
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-blue-50">
                    <h2 className="text-xl font-black text-blue-600 flex items-center gap-2"><CalendarDays className="w-5 h-5"/> Extend Subscription</h2>
                    <button onClick={() => setActiveModal(null)} className="p-2 text-blue-400 hover:bg-blue-100 rounded-full transition-colors"><X className="w-5 h-5" /></button>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Plan</p>
                        <p className="font-black text-slate-900 text-lg">{school.subscriptionPlan}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expires</p>
                        <p className="font-bold text-slate-900 text-sm">{new Date(school.subscriptionExpiry).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase">Extension Period</label>
                      <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 outline-none">
                        <option>1 Year</option>
                        <option>6 Months</option>
                        <option>3 Months</option>
                      </select>
                    </div>
                  </div>
                  <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
                    <button onClick={() => setActiveModal(null)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">Cancel</button>
                    <button onClick={() => setActiveModal(null)} className="px-6 py-2.5 bg-[var(--color-brand-blue)] hover:bg-blue-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_rgba(0,153,204,0.5)] transition-all">Apply Extension</button>
                  </div>
                </>
              )}

              {/* Change Plan Modal */}
              {activeModal === 'changePlan' && (
                <>
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-blue-50">
                    <h2 className="text-xl font-black text-blue-600 flex items-center gap-2"><RefreshCw className="w-5 h-5"/> Change Plan</h2>
                    <button onClick={() => setActiveModal(null)} className="p-2 text-blue-400 hover:bg-blue-100 rounded-full transition-colors"><X className="w-5 h-5" /></button>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="text-sm font-bold text-slate-900 mb-2">Current Plan: <span className="text-[var(--color-brand-blue)]">{school.subscriptionPlan}</span></p>
                    <div className="space-y-3">
                      {['Starter', 'Pro', 'Enterprise'].map(p => (
                        <label key={p} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${school.subscriptionPlan === p ? 'border-[var(--color-brand-blue)] bg-blue-50/50' : 'border-slate-100 hover:border-slate-300'}`}>
                          <div className="flex items-center gap-3">
                            <input type="radio" name="newPlan" defaultChecked={school.subscriptionPlan === p} className="w-4 h-4 text-[var(--color-brand-blue)] focus:ring-[var(--color-brand-blue)]" />
                            <span className="font-bold text-slate-900">{p}</span>
                          </div>
                          <span className="text-sm font-bold text-slate-500">
                            {p === 'Starter' ? '₦75,000' : p === 'Pro' ? '₦100,000' : '₦120,000'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
                    <button onClick={() => setActiveModal(null)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">Cancel</button>
                    <button onClick={() => setActiveModal(null)} className="px-6 py-2.5 bg-[var(--color-brand-blue)] hover:bg-blue-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_rgba(0,153,204,0.5)] transition-all">Confirm Change</button>
                  </div>
                </>
              )}

              {/* Send Reminder Modal */}
              {activeModal === 'reminder' && (
                <>
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-orange-50">
                    <h2 className="text-xl font-black text-orange-600 flex items-center gap-2"><Mail className="w-5 h-5"/> Send Reminder</h2>
                    <button onClick={() => setActiveModal(null)} className="p-2 text-orange-400 hover:bg-orange-100 rounded-full transition-colors"><X className="w-5 h-5" /></button>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">School</p>
                      <p className="font-bold text-slate-900">{school.name}</p>
                      <div className="flex justify-between mt-2 pt-2 border-t border-slate-100">
                        <span className="text-sm text-slate-500">Expires: <strong className="text-slate-900">{new Date(school.subscriptionExpiry).toLocaleDateString()}</strong></span>
                        <span className="text-sm text-orange-600 font-bold">{daysRemaining} days left</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase">Message Preview</label>
                      <textarea readOnly className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 h-24 resize-none focus:outline-none" defaultValue={`Hello Admin,\n\nThis is a reminder that the ${school.subscriptionPlan} subscription for ${school.name} will expire in ${daysRemaining} days. Please renew to avoid service interruption.`}></textarea>
                    </div>
                  </div>
                  <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
                    <button onClick={() => setActiveModal(null)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">Cancel</button>
                    <button onClick={() => setActiveModal(null)} className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)] transition-all flex items-center gap-2">Send Email</button>
                  </div>
                </>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
