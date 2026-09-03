import React from "react";
import { Users, BookOpen, UserCheck, CalendarCheck, FileText, Settings } from "lucide-react";

export default function Experience() {
  const benefits = [
    {
      id: "01",
      title: "Simple",
      description: "Designed so administrators, teachers, and parents can get things done without unnecessary complexity.",
    },
    {
      id: "02",
      title: "Connected",
      description: "Keep important school information connected instead of scattered across spreadsheets and separate systems.",
    },
    {
      id: "03",
      title: "Powerful",
      description: "Give your school the tools to manage academics, attendance, people, communication, and everyday operations.",
    },
    {
      id: "04",
      title: "Secure",
      description: "Keep school information organized with role-based access and a foundation designed for growing schools.",
    },
  ];

  const connectedModules = [
    { name: "Students", icon: Users, position: "top-8 left-10" },
    { name: "Teachers", icon: BookOpen, position: "top-1/2 -translate-y-1/2 left-4" },
    { name: "Parents", icon: UserCheck, position: "bottom-8 left-10" },
    { name: "Attendance", icon: CalendarCheck, position: "top-8 right-10" },
    { name: "Results", icon: FileText, position: "top-1/2 -translate-y-1/2 right-4" },
    { name: "Admin", icon: Settings, position: "bottom-8 right-10" },
  ];

  return (
    <section id="experience" className="bg-gray-50/40 py-24 sm:py-32 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mb-16">
          <p className="inline-flex items-center rounded-full bg-[var(--color-brand-blue)]/5 px-3 py-1 text-xs font-semibold tracking-widest text-[var(--color-brand-blue)] ring-1 ring-inset ring-[var(--color-brand-blue)]/10 uppercase mb-6">
            BUILT FOR MODERN SCHOOLS
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            A simpler way to run a better school.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
            AlphaEdu connects the people, processes, and information that keep a school moving — giving everyone a clearer view of what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          
          {/* LEFT SIDE: Clean SaaS Ecosystem Mockup */}
          <div className="relative flex h-[480px] w-full items-center justify-center rounded-[2rem] bg-white border border-gray-100/80 shadow-sm overflow-hidden">
            {/* Subtle background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            
            {/* Central Node */}
            <div className="relative z-10 flex flex-col items-center justify-center h-28 w-28 rounded-2xl bg-white border border-gray-100 shadow-md ring-4 ring-gray-50">
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Alpha<span className="text-[var(--color-brand-orange)]">Edu</span>
              </span>
              <div className="mt-2 h-1 w-8 rounded-full bg-[var(--color-brand-blue)]"></div>
            </div>

            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
                {/* Horizontal lines to center */}
                <path d="M 60 240 L 220 240" />
                <path d="M 540 240 L 380 240" />
                
                {/* Diagonal lines to center */}
                <path d="M 100 120 L 250 200" />
                <path d="M 100 360 L 250 280" />
                <path d="M 500 120 L 350 200" />
                <path d="M 500 360 L 350 280" />
              </g>
            </svg>

            {/* Satellite Nodes */}
            {connectedModules.map((module) => (
              <div
                key={module.name}
                className={`absolute ${module.position} z-10 flex flex-col items-center justify-center h-20 w-20 rounded-xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md cursor-default`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
                  <module.icon className="h-4 w-4" />
                </div>
                <span className="mt-2 text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
                  {module.name}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Benefits List */}
          <div className="flex flex-col">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="group relative flex gap-6 py-8 first:pt-0 last:pb-0 border-b border-gray-100 last:border-0"
              >
                {/* Number Indicator */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-sm font-bold text-gray-400 transition-colors group-hover:bg-[var(--color-brand-blue)]/5 group-hover:text-[var(--color-brand-blue)] group-hover:border-[var(--color-brand-blue)]/20">
                  {benefit.id}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
