export interface SchoolMock {
  id: string;
  name: string;
  code: string;
  type: "Primary" | "Secondary" | "K-12" | "Tertiary";
  address: string;
  state: string;
  lga: string;
  phone: string;
  email: string;
  website: string;
  status: "Active" | "Expiring Soon" | "Expired" | "Suspended";
  subscriptionPlan: "Starter" | "Pro" | "Enterprise";
  subscriptionPrice: number;
  subscriptionStart: string;
  subscriptionExpiry: string;
  studentCount: number;
  teacherCount: number;
  parentCount: number;
  adminCount: number;
  createdAt: string;
}

export const schoolsMockData: SchoolMock[] = [
  {
    id: "sch_001",
    name: "Asmau Memorial Academy",
    code: "AMA-GOM-4827",
    type: "Secondary",
    address: "15 Bauchi Road",
    state: "Gombe",
    lga: "Gombe",
    phone: "08012345678",
    email: "admin@asmaumemorial.edu.ng",
    website: "www.asmaumemorial.edu.ng",
    status: "Active",
    subscriptionPlan: "Pro",
    subscriptionPrice: 100000,
    subscriptionStart: "2026-01-15T00:00:00Z",
    subscriptionExpiry: "2026-10-01T00:00:00Z",
    studentCount: 642,
    teacherCount: 48,
    parentCount: 510,
    adminCount: 3,
    createdAt: "2026-01-10T00:00:00Z",
  },
  {
    id: "sch_002",
    name: "Northern Scholars School",
    code: "NSS-GOM-1938",
    type: "K-12",
    address: "42 Kano Way",
    state: "Kano",
    lga: "Nassarawa",
    phone: "08087654321",
    email: "info@northernscholars.edu.ng",
    website: "www.northernscholars.edu.ng",
    status: "Expiring Soon",
    subscriptionPlan: "Starter",
    subscriptionPrice: 75000,
    subscriptionStart: "2025-09-12T00:00:00Z",
    subscriptionExpiry: "2026-09-12T00:00:00Z",
    studentCount: 418,
    teacherCount: 31,
    parentCount: 380,
    adminCount: 2,
    createdAt: "2025-09-10T00:00:00Z",
  },
  {
    id: "sch_003",
    name: "Lagos Heights International",
    code: "LHI-LAG-9921",
    type: "Secondary",
    address: "7 Victoria Island",
    state: "Lagos",
    lga: "Eti Osa",
    phone: "08111223344",
    email: "contact@lagosheights.com",
    website: "www.lagosheights.com",
    status: "Suspended",
    subscriptionPlan: "Enterprise",
    subscriptionPrice: 120000,
    subscriptionStart: "2025-06-01T00:00:00Z",
    subscriptionExpiry: "2026-06-01T00:00:00Z",
    studentCount: 1250,
    teacherCount: 85,
    parentCount: 1100,
    adminCount: 5,
    createdAt: "2025-05-28T00:00:00Z",
  }
];

export const schoolStatsMock = {
  total: 128,
  active: 114,
  expiringSoon: 7,
  suspended: 7,
  expired: 0
};
