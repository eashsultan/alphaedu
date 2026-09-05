import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black text-gray-900">Alpha<span className="text-[var(--color-brand-orange)]">Edu</span></span>
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              Modern school management for connected education.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[var(--color-brand-blue)] transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-blue)] transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[var(--color-brand-blue)] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-blue)] transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-blue)] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} AlphaEdu. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
