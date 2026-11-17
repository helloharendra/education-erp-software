import { Building2, GraduationCap, IndianRupee, Users } from 'lucide-react'
import { Card, Hero, HeroStat, Progress, StatCard } from '../components/ui'
import { TrendChart } from '../components/Charts'
import { useContact } from '../components/ContactModal'
import { campuses, enrolment } from '../data'

export default function Dashboard() {
  const { openContact } = useContact()
  return (
    <>
      <Hero
        eyebrow="Banerjee Education Group"
        title="4 campuses. 8,330 learners. One ERP."
        subtitle="Admissions, academics, fees, HR and communication across schools, colleges and coaching centres."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Fee realisation" value="86%" /><HeroStat label="Avg. attendance" value="90%" /></div>}
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total learners" value="8,330" delta="5.2%" icon={GraduationCap} />
        <StatCard label="Staff" value="562" icon={Users} tone="sky" />
        <StatCard label="Campuses" value="4" icon={Building2} tone="amber" hint="School · College · Coaching" />
        <StatCard label="Fee collected (FY)" value="₹15.4 Cr" delta="12.1%" icon={IndianRupee} tone="emerald" />
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
        {campuses.map((c) => (
          <button key={c.name} onClick={() => openContact(`${c.name} campus console`)} className="card overflow-hidden text-left animate-fade-up transition hover:-translate-y-1 hover:shadow-xl">
            <div className={`bg-gradient-to-br ${c.gradient} p-5 text-white`}>
              <p className="text-xs font-semibold uppercase tracking-wide opacity-80">{c.type}</p>
              <p className="mt-1 text-lg font-bold">{c.name}</p>
              <p className="mt-3 text-3xl font-extrabold">{c.students.toLocaleString('en-IN')}<span className="ml-1 text-sm font-medium opacity-80">students</span></p>
            </div>
            <div className="space-y-3 p-5 text-sm">
              <div><div className="mb-1 flex justify-between text-slate-500"><span>Attendance</span><b className="text-slate-800">{c.attendance}%</b></div><Progress value={c.attendance} /></div>
              <div><div className="mb-1 flex justify-between text-slate-500"><span>Fee realisation</span><b className="text-slate-800">{c.fees}%</b></div><Progress value={c.fees} tone={c.fees < 80 ? 'amber' : 'green'} /></div>
              <p className="text-xs text-slate-400">{c.staff} staff members</p>
            </div>
          </button>
        ))}
      </div>
      <Card title="Group enrolment growth" className="mt-6"><TrendChart data={enrolment} series={[{ key: 'students', name: 'Students' }]} height={260} /></Card>
    </>
  )
}
