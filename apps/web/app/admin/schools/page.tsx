"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, CheckCircle2, AlertTriangle, ShieldAlert, Plus, 
  Search, Filter, MoreVertical, Eye, Edit, CalendarDays, 
  RefreshCw, Mail, Power, X, Copy, Check
} from "lucide-react";
import { schoolsMockData, schoolStatsMock, SchoolMock } from "../../../lib/mock-data/admin-schools";

export default function SchoolsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [newSchool, setNewSchool] = useState<SchoolMock | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const kpiCards = [
    { title: "Total Schools", value: schoolStatsMock.total, icon: Building2, color: "var(--color-brand-blue)", gradient: "from-[var(--color-brand-blue)]/10 to-transparent" },
    { title: "Active", value: schoolStatsMock.active, icon: CheckCircle2, color: "#10b981", gradient: "from-emerald-500/10 to-transparent" },
    { title: "Expiring Soon", value: schoolStatsMock.expiringSoon, icon: AlertTriangle, color: "var(--color-brand-orange)", gradient: "from-[var(--color-brand-orange)]/10 to-transparent" },
    { title: "Suspended", value: schoolStatsMock.suspended, icon: ShieldAlert, color: "#ef4444", gradient: "from-red-500/10 to-transparent" }
  ];

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate generation
    const mockCreated: SchoolMock = {
      id: "sch_new",
      name: (e.target as any).schoolName.value,
      code: "NEW-LAG-9999",
      type: "Secondary",
      address: "", state: "", lga: "", phone: "", email: "", website: "",
      status: "Active",
      subscriptionPlan: (e.target as any).plan.value,
      subscriptionPrice: (e.target as any).plan.value === "Starter" ? 75000 : 100000,
      subscriptionStart: new Date().toISOString(),
      subscriptionExpiry: new Date(Date.now() + 31536000000).toISOString(),
      studentCount: 0, teacherCount: 0, parentCount: 0, adminCount: 1,
      createdAt: new Date().toISOString()
    };
    setNewSchool(mockCreated);
    setIsCreateModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const copyCode = () => {
    if (newSchool) {
      navigator.clipboard.writeText(newSchool.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Active': return <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md text-[10px] font-bold uppercase tracking-wider">Active</span>;
      case 'Expiring Soon': return <span className="px-2.5 py-1 bg-orange-50 text-orange-600 border border-orange-200 rounded-md text-[10px] font-bold uppercase tracking-wider">Expiring Soon</span>;
      case 'Suspended': return <span className="px-2.5 py-1 bg-red-50 text-red-600 border border-red-200 rounded-md text-[10px] font-bold uppercase tracking-wider">Suspended</span>;
      default: return <span className="px-2.5 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-md text-[10px] font-bold uppercase tracking-wider">{status}</span>;
    }
  };

  const filteredSchools = schoolsMockData.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.code.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 relative z-10" onClick={() => setActiveDropdown(null)}>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Schools</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage every school connected to AlphaEdu.</p>
        </div>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="px-5 py-2.5 bg-[var(--color-brand-blue)] hover:bg-blue-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_rgba(0,153,204,0.5)] transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" /> Create School
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, i) => (
          <motion.div 
            key={kpi.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + (i * 0.05) }}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden group"
          >
            <div className={`absolute top-0 inset-x-0 h-24 bg-gradient-to-b ${kpi.gradient} opacity-50 pointer-events-none`}></div>
            <div className="relative z-10 flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform duration-300">
                <kpi.icon className="w-5 h-5" style={{ color: kpi.color }} />
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{kpi.title}</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">{kpi.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search schools by name or code..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 focus:border-[var(--color-brand-blue)] transition-all"
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <select className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 cursor-pointer">
            <option>Status: All</option>
            <option>Active</option>
            <option>Expiring Soon</option>
            <option>Suspended</option>
          </select>
          <select className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 cursor-pointer">
            <option>Plan: All</option>
            <option>Starter</option>
            <option>Pro</option>
            <option>Enterprise</option>
          </select>
          <select className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 cursor-pointer">
            <option>Sort: Newest</option>
            <option>Name (A-Z)</option>
            <option>Expiry (Earliest)</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs uppercase tracking-wider font-bold text-slate-500">
                <th className="p-5">School</th>
                <th className="p-5">Location</th>
                <th className="p-5">Plan</th>
                <th className="p-5">Users</th>
                <th className="p-5">Subscription</th>
                <th className="p-5">Status</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredSchools.map((school) => (
                <tr key={school.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-5">
                    <p className="font-bold text-slate-900">{school.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{school.code}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <p className="text-sm font-medium text-slate-900">{school.state}</p>
                    <p className="text-xs text-slate-500">{school.lga}</p>
                  </td>
                  <td className="p-5">
                    <span className="text-sm font-bold text-slate-900">{school.subscriptionPlan}</span>
                  </td>
                  <td className="p-5">
                    <p className="text-sm font-medium text-slate-900">{school.studentCount} students</p>
                    <p className="text-xs text-slate-500">{school.teacherCount} teachers</p>
                  </td>
                  <td className="p-5">
                    <p className="text-sm font-medium text-slate-900">
                      Expires {new Date(school.subscriptionExpiry).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                    </p>
                  </td>
                  <td className="p-5">
                    {getStatusBadge(school.status)}
                  </td>
                  <td className="p-5 text-right relative">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(activeDropdown === school.id ? null : school.id);
                      }}
                      className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    
                    {/* Action Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === school.id && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 10 }}
                          className="absolute right-8 top-12 w-48 bg-white rounded-xl shadow-xl border border-slate-100 z-50 overflow-hidden text-left"
                        >
                          <div className="py-1">
                            <Link href={`/admin/schools/${school.id}`} className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                              <Eye className="w-4 h-4 text-slate-400" /> View School
                            </Link>
                            <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                              <Edit className="w-4 h-4 text-slate-400" /> Edit School
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                              <CalendarDays className="w-4 h-4 text-slate-400" /> Extend Subscription
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                              <RefreshCw className="w-4 h-4 text-slate-400" /> Change Plan
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                              <Mail className="w-4 h-4 text-slate-400" /> Send Reminder
                            </button>
                            <div className="h-px bg-slate-100 my-1"></div>
                            {school.status !== "Suspended" ? (
                              <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50">
                                <Power className="w-4 h-4 text-red-500" /> Suspend School
                              </button>
                            ) : (
                              <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-emerald-600 hover:bg-emerald-50">
                                <Power className="w-4 h-4 text-emerald-500" /> Reactivate School
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create School Modal */}
      <AnimatePresence>
        {isCreateModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050A15]/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100">
                <h2 className="text-xl font-black text-slate-900">Create New School</h2>
                <button onClick={() => setIsCreateModalOpen(false)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                <form id="createSchoolForm" onSubmit={handleCreateSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[var(--color-brand-blue)]" /> Basic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">School Name *</label>
                        <input name="schoolName" required type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 focus:border-[var(--color-brand-blue)] outline-none transition-all" placeholder="Enter school name" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase">School Type</label>
                        <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 focus:border-[var(--color-brand-blue)] outline-none transition-all">
                          <option>Primary</option>
                          <option>Secondary</option>
                          <option>K-12</option>
                          <option>Tertiary</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 outline-none" placeholder="080..." />
                      </div>
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Address</label>
                        <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 outline-none" placeholder="Street address" />
                      </div>
                    </div>
                  </div>

                  {/* Subscription Info */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-[var(--color-brand-orange)]" /> Subscription Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Subscription Plan *</label>
                        <select name="plan" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 outline-none">
                          <option value="Starter">Starter — ₦75,000 / year</option>
                          <option value="Pro">Pro — ₦100,000 / year</option>
                          <option value="Enterprise">Enterprise — ₦120,000 / year</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Admin Info */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-purple-500" /> Primary Administrator
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase">Admin Name</label>
                        <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 outline-none" placeholder="Full name" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase">Admin Email</label>
                        <input type="email" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 outline-none" placeholder="email@example.com" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                <button type="button" onClick={() => setIsCreateModalOpen(false)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
                  Cancel
                </button>
                <button type="submit" form="createSchoolForm" className="px-6 py-2.5 bg-[var(--color-brand-blue)] hover:bg-blue-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_rgba(0,153,204,0.5)] transition-all">
                  Create School
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Modal with Code */}
      <AnimatePresence>
        {isSuccessModalOpen && newSchool && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050A15]/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden flex flex-col shadow-2xl relative"
            >
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[var(--color-brand-blue)]/10 to-transparent pointer-events-none"></div>
              
              <div className="p-8 pt-10 text-center relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-1">School Created!</h2>
                <p className="text-sm font-medium text-slate-500 mb-6">{newSchool.name} is now on AlphaEdu.</p>

                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 text-left">
                  <p className="text-[10px] font-bold text-[var(--color-brand-blue)] uppercase tracking-widest mb-2 text-center">Generated School Code</p>
                  <div className="flex items-center justify-between bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
                    <span className="font-mono font-bold text-lg text-slate-800 tracking-wider pl-2">{newSchool.code}</span>
                    <button onClick={copyCode} className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors flex items-center gap-1 text-xs font-bold uppercase">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 text-center mt-3 font-medium">This code identifies the school. Users will need it to log in.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mb-8 text-left">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Plan</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{newSchool.subscriptionPlan}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</p>
                    <p className="text-sm font-bold text-emerald-600 mt-0.5">Active</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <Link 
                    href={`/admin/schools/${newSchool.id}`}
                    className="w-full py-3.5 bg-[var(--color-brand-blue)] hover:bg-blue-600 text-white rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_rgba(0,153,204,0.5)] transition-all flex items-center justify-center gap-2"
                  >
                    View School Dashboard <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={() => setIsSuccessModalOpen(false)}
                    className="w-full py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-sm transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
