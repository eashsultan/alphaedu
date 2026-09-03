import React from "react";

export default function HeroDashboardMockup() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-[var(--color-brand-blue)]/10 sm:mt-24">
      {/* MacOS-style Window Header */}
      <div className="flex h-12 items-center space-x-2 border-b border-gray-100 bg-gray-50 px-4">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
        <div className="ml-4 flex-1 text-center text-xs font-medium text-gray-400">
          app.alphaedu.ng/dashboard
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex h-[400px] sm:h-[500px]">
        {/* Sidebar */}
        <div className="hidden w-48 flex-col border-r border-gray-100 bg-gray-50 p-4 sm:flex">
          <div className="mb-8 font-bold text-gray-700">AlphaEdu</div>
          <div className="space-y-2">
            <div className="rounded-lg bg-[var(--color-brand-blue)]/10 px-3 py-2 text-sm font-medium text-[var(--color-brand-blue)]">
              Dashboard
            </div>
            <div className="rounded-lg px-3 py-2 text-sm font-medium text-gray-500">Students</div>
            <div className="rounded-lg px-3 py-2 text-sm font-medium text-gray-500">Teachers</div>
            <div className="rounded-lg px-3 py-2 text-sm font-medium text-gray-500">Classes</div>
            <div className="rounded-lg px-3 py-2 text-sm font-medium text-gray-500">Results</div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Overview</h2>
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Students", value: "1,248" },
              { label: "Teachers", value: "68" },
              { label: "Classes", value: "32" },
              { label: "Attendance", value: "94.8%" },
            ].map((stat, idx) => (
              <div key={idx} className="rounded-xl border border-gray-100 p-4">
                <div className="text-xs font-medium text-gray-500">{stat.label}</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Chart/Activity area */}
          <div className="mt-8 flex gap-4">
            <div className="flex-1 rounded-xl border border-gray-100 p-4">
              <div className="mb-4 text-sm font-medium text-gray-500">Student Performance</div>
              {/* Fake Chart */}
              <div className="flex h-40 items-end justify-between gap-2 px-2">
                {[40, 70, 45, 90, 65, 85, 75].map((height, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t-sm bg-[var(--color-brand-blue)]/20"
                    style={{ height: `${height}%` }}
                  >
                    <div
                      className="w-full rounded-t-sm bg-[var(--color-brand-blue)]"
                      style={{ height: `${height - 20}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden w-64 rounded-xl border border-gray-100 p-4 sm:block">
              <div className="mb-4 text-sm font-medium text-gray-500">Recent Activity</div>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                    <div className="flex-1">
                      <div className="h-3 w-3/4 rounded-full bg-gray-200"></div>
                      <div className="mt-2 h-2 w-1/2 rounded-full bg-gray-100"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
