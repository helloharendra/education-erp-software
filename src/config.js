import {
  BarChart3, BookOpen, Building2, CalendarCheck, ClipboardList, Filter, GraduationCap, IndianRupee, LayoutDashboard, Library, MessageSquare, Settings, ShieldCheck, Users,
} from 'lucide-react'

export const app = {
  name: 'EduERP 360',
  tagline: 'Education ERP · Multi-campus',
  logo: Building2,
  user: { name: 'Mr. Alok Banerjee', role: 'Group Director' },
  searchPlaceholder: 'Search campus, student, application…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Group overview',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Admissions', to: '/admissions', icon: Filter, badge: '64' },
      { label: 'Fees & Finance', to: '/finance', icon: IndianRupee },
    ],
  },
  {
    title: 'Academic',
    items: [
      { label: 'Student Information', icon: GraduationCap },
      { label: 'Academics & Timetable', icon: BookOpen },
      { label: 'Attendance', icon: CalendarCheck },
      { label: 'Exams & Results', icon: ClipboardList },
      { label: 'LMS & Study Material', icon: Library },
    ],
  },
  {
    title: 'Administration',
    items: [
      { label: 'HR & Payroll', icon: Users },
      { label: 'Communication', icon: MessageSquare },
      { label: 'Roles & Permissions', icon: ShieldCheck },
      { label: 'Analytics', icon: BarChart3 },
      { label: 'Settings', icon: Settings },
    ],
  },
]
