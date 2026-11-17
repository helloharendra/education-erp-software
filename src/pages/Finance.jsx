import { AlertCircle, IndianRupee, Wallet } from 'lucide-react'
import { Badge, Card, DataTable, PageHeader, Person, StatCard, inr } from '../components/ui'
import { BarsChart } from '../components/Charts'
import { useContact } from '../components/ContactModal'
import { feeByCampus, payments } from '../data'

export default function Finance() {
  const { openContact } = useContact()
  return (
    <>
      <PageHeader title="Fees & finance" subtitle="Consolidated view across campuses" actions={<button onClick={() => openContact('Automated Fee Reminders')} className="btn-primary"><AlertCircle className="h-4 w-4" /> Send reminders</button>} />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Collected (this term)" value="₹15.36 Cr" delta="8.7%" icon={IndianRupee} tone="emerald" />
        <StatCard label="Outstanding" value="₹2.30 Cr" delta="-14.2%" icon={AlertCircle} tone="rose" />
        <StatCard label="Online payments" value="78%" delta="6.0%" icon={Wallet} tone="sky" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-5">
        <Card title="Collection by campus" subtitle="₹ lakh" className="xl:col-span-2">
          <BarsChart data={feeByCampus} stacked series={[{ key: 'collected', name: 'Collected' }, { key: 'due', name: 'Due' }]} height={300} />
        </Card>
        <Card title="Live payments" bodyClass="" className="xl:col-span-3">
          <DataTable
            rows={payments}
            columns={[
              { key: 'student', label: 'Student', render: (p) => <Person name={p.student} sub={p.id} /> },
              { key: 'campus', label: 'Campus' },
              { key: 'head', label: 'Fee head' },
              { key: 'mode', label: 'Mode', render: (p) => <Badge tone="slate" dot={false}>{p.mode}</Badge> },
              { key: 'amount', label: 'Amount', align: 'right', render: (p) => <div><p className="font-semibold text-slate-800">{inr(p.amount)}</p><p className="text-xs text-slate-400">{p.time}</p></div> },
            ]}
          />
        </Card>
      </div>
    </>
  )
}
