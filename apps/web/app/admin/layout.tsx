"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, School, Users, CreditCard, BarChart3, 
  LifeBuoy, Settings, Bell, Search, Menu, X, ChevronRight,
  Command
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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row font-sans text-slate-900">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-[#0A0F1C] border-b border-white/5 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="font-black text-lg tracking-tight text-white flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[var(--color-brand-blue)] flex items-center justify-center">
            <span className="text-white text-[10px]">AE</span>
          </div>
          AlphaEdu
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -mr-2 text-slate-400 hover:text-white transition-colors">
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-[#0A0F1C] pt-16 px-4 pb-6 flex flex-col overflow-y-auto"
          >
            <nav className="flex-1 flex flex-col gap-1 mt-4">
              {navItems.map(item => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${isActive ? 'bg-[var(--color-brand-blue)] text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    <item.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (Ultra-Sleek SaaS) */}
      <motion.aside 
        animate={{ width: sidebarOpen ? 260 : 80 }}
        className="hidden md:flex flex-col bg-[#0A0F1C] border-r border-slate-800 sticky top-0 h-screen z-30 shrink-0 transition-all duration-300 ease-in-out"
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/5 shrink-0">
          {sidebarOpen ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-blue)] flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-xs">AE</span>
              </div>
              <span className="font-bold text-base tracking-tight text-white">AlphaEdu</span>
            </div>
          ) : (
            <div className="w-8 h-8 mx-auto rounded-lg bg-[var(--color-brand-blue)] flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-xs">AE</span>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1 scrollbar-hide">
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                title={!sidebarOpen ? item.name : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'} ${!sidebarOpen && 'justify-center'}`}
              >
                <item.icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[var(--color-brand-blue)]' : ''}`} />
                {sidebarOpen && <span className="whitespace-nowrap">{item.name}</span>}
              </Link>
            );
          })}
        </div>

        <div className="p-3 border-t border-white/5 shrink-0 bg-[#060913]">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-3' : 'justify-center'} py-2 text-xs font-bold text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-white/5`}
          >
            {sidebarOpen ? 'Collapse menu' : <ChevronRight className="w-4 h-4" />}
            {sidebarOpen && <Command className="w-3.5 h-3.5 opacity-50" />}
          </button>
          
          <div className={`mt-3 flex items-center gap-3 ${!sidebarOpen && 'justify-center px-0'} px-2`}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center shrink-0 border border-slate-500">
              <span className="text-xs font-bold text-white">SA</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-200 truncate">Super Admin</p>
                <p className="text-[11px] text-slate-500 truncate">admin@alphaedu.ng</p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Topbar */}
        <header className="hidden md:flex h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/60 items-center justify-between px-8 sticky top-0 z-20 shrink-0">
          <div className="flex items-center text-sm font-medium text-slate-500">
            AlphaEdu <span className="mx-2 text-slate-300">/</span> 
            <span className="text-slate-900 font-semibold">{navItems.find(i => i.href === pathname)?.name || 'Dashboard'}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[var(--color-brand-blue)] transition-colors" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-64 pl-9 pr-4 py-1.5 bg-slate-100/50 border border-slate-200 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 focus:border-[var(--color-brand-blue)] focus:bg-white transition-all"
              />
            </div>
            <button className="relative w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-500 transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[var(--color-brand-orange)] rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
          {children}
        </div>
      </main>

    </div>
  );
}
