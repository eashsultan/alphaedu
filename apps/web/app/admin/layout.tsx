"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, School, Users, CreditCard, BarChart3, 
  LifeBuoy, Settings, Bell, Search, Menu, X, ChevronRight, Sparkles 
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Schools", href: "/admin/schools", icon: School },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
    { name: "Payments", href: "/admin/payments", icon: CreditCard },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Support", href: "/admin/support", icon: LifeBuoy },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex flex-col md:flex-row font-sans text-slate-900">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-[#050A15] border-b border-white/10 px-4 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="font-black text-xl tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-blue)] flex items-center justify-center">
            <span className="text-white text-xs">AE</span>
          </div>
          AlphaEdu
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -mr-2 text-slate-300 hover:text-white transition-colors">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-[#050A15] pt-20 px-4 pb-6 flex flex-col overflow-y-auto"
          >
            <nav className="flex-1 flex flex-col gap-2 mt-4">
              {navItems.map(item => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all ${isActive ? 'bg-[var(--color-brand-blue)] text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (Dark Navy SaaS Style) */}
      <motion.aside 
        animate={{ width: sidebarOpen ? 280 : 88 }}
        className="hidden md:flex flex-col bg-[#050A15] border-r border-white/5 sticky top-0 h-screen z-30 overflow-hidden shrink-0 transition-all duration-300 ease-in-out relative"
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/5 shrink-0 relative z-10">
          {sidebarOpen ? (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-orange)] flex items-center justify-center shadow-lg shadow-[var(--color-brand-orange)]/20">
                <span className="text-white font-black text-sm">AE</span>
              </div>
              <span className="font-black text-xl tracking-tight text-white whitespace-nowrap">AlphaEdu</span>
            </div>
          ) : (
            <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-orange)] flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-sm">AE</span>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-4 flex flex-col gap-2 scrollbar-hide relative z-10">
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                title={!sidebarOpen ? item.name : undefined}
                className={`flex items-center gap-4 px-3.5 py-3 rounded-2xl font-bold transition-all duration-300 ${isActive ? 'bg-[var(--color-brand-blue)] text-white shadow-lg shadow-[var(--color-brand-blue)]/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'} ${!sidebarOpen && 'justify-center'}`}
              >
                <item.icon className={`w-5 h-5 shrink-0 transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} />
                {sidebarOpen && <span className="whitespace-nowrap">{item.name}</span>}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/5 shrink-0 relative z-10 bg-black/20">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center'} py-2.5 text-xs font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors rounded-xl hover:bg-white/5`}
          >
            {sidebarOpen ? 'Collapse' : <ChevronRight className="w-5 h-5" />}
            {sidebarOpen && <ChevronRight className="w-4 h-4" />}
          </button>
          
          <div className={`mt-4 flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-black text-white">SA</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate flex items-center gap-1">Super Admin <Sparkles className="w-3 h-3 text-[var(--color-brand-orange)]" /></p>
                <p className="text-xs text-slate-400 font-medium truncate">admin@alphaedu.ng</p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen relative">
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none z-0"></div>

        {/* Topbar */}
        <header className="hidden md:flex h-20 bg-white/70 backdrop-blur-xl border-b border-blue-900/5 items-center justify-between px-10 sticky top-0 z-20 shrink-0">
          <div className="flex items-center text-sm font-bold">
            <span className="text-[var(--color-brand-blue)]">Super Admin</span> 
            <span className="mx-3 text-slate-300">/</span> 
            <span className="text-slate-800">{navItems.find(i => i.href === pathname)?.name || 'Dashboard'}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[var(--color-brand-blue)] transition-colors" />
              <input 
                type="text" 
                placeholder="Search schools, users..." 
                className="w-72 pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[var(--color-brand-blue)]/10 focus:border-[var(--color-brand-blue)] transition-all shadow-sm"
              />
            </div>
            <button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[var(--color-brand-blue)] hover:border-[var(--color-brand-blue)]/30 transition-all shadow-sm">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-[var(--color-brand-orange)] rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-4 md:p-10 overflow-x-hidden relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
