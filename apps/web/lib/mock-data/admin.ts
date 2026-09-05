export const adminMockData = {
  kpis: {
    totalSchools: { value: 128, change: "+12.5%", isPositive: true },
    activeSchools: { value: 114, change: "+8.2%", isPositive: true },
    totalStudents: { value: "18,642", change: "+14.7%", isPositive: true },
    totalTeachers: { value: "1,284", change: "+9.4%", isPositive: true },
    subscriptionRevenue: { value: "₦8.42M", change: "+18.6%", isPositive: true },
    pendingPayments: { value: "₦450K", change: "-2.1%", isPositive: false },
  },
  health: {
    active: 114,
    suspended: 7,
    expiringSoon: 7
  },
  revenueData: [
    { name: "Jan", revenue: 4.2 },
    { name: "Feb", revenue: 4.8 },
    { name: "Mar", revenue: 5.1 },
    { name: "Apr", revenue: 6.2 },
    { name: "May", revenue: 7.0 },
    { name: "Jun", revenue: 7.8 },
    { name: "Jul", revenue: 8.42 },
  ],
  schoolGrowthData: [
    { name: "Jan", schools: 72 },
    { name: "Feb", schools: 78 },
    { name: "Mar", schools: 84 },
    { name: "Apr", schools: 91 },
    { name: "May", schools: 103 },
    { name: "Jun", schools: 112 },
    { name: "Jul", schools: 121 },
    { name: "Aug", schools: 128 },
  ],
  subscriptionDistribution: [
    { name: "Starter", value: 45, color: "#94a3b8", price: "₦75,000" },
    { name: "Pro", value: 65, color: "#0099CC", price: "₦100,000" },
    { name: "Enterprise", value: 18, color: "#E85D04", price: "₦120,000" },
  ],
  recentSchools: [
    { id: "1", name: "Asmau Memorial Academy", code: "AMA-GOM-4827", location: "Gombe", plan: "Pro", status: "ACTIVE", students: 842, dateJoined: "2026-08-15", logo: "A" },
    { id: "2", name: "Gombe International College", code: "GIC-GOM-9102", location: "Gombe", plan: "Enterprise", status: "ACTIVE", students: 1250, dateJoined: "2026-08-12", logo: "G" },
    { id: "3", name: "PenResource Academy", code: "PRA-ABJ-3391", location: "Abuja", plan: "Pro", status: "ACTIVE", students: 950, dateJoined: "2026-08-09", logo: "P" },
    { id: "4", name: "Matrix Academy", code: "MAT-LAG-2211", location: "Lagos", plan: "Starter", status: "SUSPENDED", students: 312, dateJoined: "2026-08-05", logo: "M" },
    { id: "5", name: "Northern Scholars School", code: "NSS-KAD-5510", location: "Kaduna", plan: "Pro", status: "ACTIVE", students: 640, dateJoined: "2026-07-28", logo: "N" },
  ],
  expiringSchools: [
    { id: "1", name: "Asmau Memorial Academy", plan: "Pro", expiresIn: 3, logo: "A" },
    { id: "2", name: "Northern Scholars School", plan: "Starter", expiresIn: 7, logo: "N" },
    { id: "3", name: "Global Heights Academy", plan: "Enterprise", expiresIn: 12, logo: "G" },
  ],
  recentActivity: [
    { id: "1", action: "School created", actor: "Super Admin", entity: "School", school: "Asmau Memorial Academy", time: "2 hours ago" },
    { id: "2", action: "Subscription upgraded to Pro", actor: "System", entity: "Subscription", school: "PenResource Academy", time: "5 hours ago" },
    { id: "3", action: "Administrator account created", actor: "Super Admin", entity: "User", school: "Gombe International", time: "Yesterday" },
    { id: "4", action: "Payment received (₦100,000)", actor: "System", entity: "Payment", school: "PenResource Academy", time: "Yesterday" },
    { id: "5", action: "School suspended (Non-payment)", actor: "System", entity: "School", school: "Matrix Academy", time: "2 days ago" },
  ]
};
