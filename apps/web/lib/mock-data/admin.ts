export const adminMockData = {
  kpis: {
    totalSchools: { value: 0, change: "0%", isPositive: true },
    activeSchools: { value: 0, change: "0%", isPositive: true },
    totalStudents: { value: 0, change: "0%", isPositive: true },
    totalTeachers: { value: 0, change: "0%", isPositive: true },
    subscriptionRevenue: { value: "₦0", change: "0%", isPositive: true },
    pendingPayments: { value: "₦0", change: "0%", isPositive: true },
  },
  health: {
    active: 0,
    suspended: 0,
    expiringSoon: 0
  },
  revenueData: [
    { name: "Jan", revenue: 0 },
    { name: "Feb", revenue: 0 },
    { name: "Mar", revenue: 0 },
    { name: "Apr", revenue: 0 },
    { name: "May", revenue: 0 },
    { name: "Jun", revenue: 0 },
    { name: "Jul", revenue: 0 },
  ],
  schoolGrowthData: [
    { name: "Jan", schools: 0 },
    { name: "Feb", schools: 0 },
    { name: "Mar", schools: 0 },
    { name: "Apr", schools: 0 },
    { name: "May", schools: 0 },
    { name: "Jun", schools: 0 },
    { name: "Jul", schools: 0 },
    { name: "Aug", schools: 0 },
  ],
  subscriptionDistribution: [
    { name: "Starter", value: 0, color: "#94a3b8", price: "₦75,000" },
    { name: "Pro", value: 0, color: "#0099CC", price: "₦100,000" },
    { name: "Enterprise", value: 0, color: "#E85D04", price: "₦120,000" },
  ],
  recentSchools: [],
  expiringSchools: [],
  recentActivity: []
};
