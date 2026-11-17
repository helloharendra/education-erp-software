import { useState } from 'react'
import { Link2, Plus } from 'lucide-react'
import { Badge, Card, DataTable, PageHeader, Person, Segmented } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { applications, funnel } from '../data'

const tone = { Applications: 'slate', 'Entrance test': 'blue', Interview: 'amber', Admitted: 'green' }

export default function Admissions() {
  const { openContact } = useContact()
  const [campus, setCampus] = useState('All')
  const rows = applications.filter((a) => campus === 'All' || a.campus === campus)
  const max = funnel[0].count

  return (
    <>
      <PageHeader title="Admissions" subtitle="Session 2027–28 · online applications across all campuses"
        actions={<>
          <button onClick={() => openContact('Online Admission Form Builder')} className="btn-ghost"><Link2 className="h-4 w-4" /> Share form link</button>
          <button onClick={() => openContact('Add Application')} className="btn-primary"><Plus className="h-4 w-4" /> Add applicant</button>
        </>} />
      <Card title="Admission funnel">
        <div className="space-y-3">
          {funnel.map((f, i) => (
            <div key={f.stage} className="flex items-center gap-4">
              <span className="w-28 text-sm font-medium text-slate-600">{f.stage}</span>
              <div className="flex-1">
                <div className="flex h-10 items-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 px-4 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition-all duration-700" style={{ width: `${Math.max(18, (f.count / max) * 100)}%`, opacity: 1 - i * 0.12 }}>
                  {f.count.toLocaleString('en-IN')}
                </div>
              </div>
              <span className="w-14 text-right text-xs font-semibold text-slate-400">{i ? `${Math.round((f.count / funnel[i - 1].count) * 100)}%` : ''}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Recent applications" className="mt-6" bodyClass="" action={<Segmented options={['All', 'Lucknow', 'Kanpur', 'Noida', 'Prayagraj']} value={campus} onChange={setCampus} />}>
        <DataTable
          rows={rows}
          onRowClick={(a) => openContact(`Application ${a.id}`)}
          columns={[
            { key: 'name', label: 'Applicant', render: (a) => <Person name={a.name} sub={a.id} /> },
            { key: 'program', label: 'Programme' },
            { key: 'campus', label: 'Campus' },
            { key: 'score', label: 'Test score', render: (a) => (a.score ? <b className="text-slate-800">{a.score}</b> : <span className="text-slate-300">—</span>) },
            { key: 'stage', label: 'Stage', render: (a) => <Badge tone={tone[a.stage]}>{a.stage}</Badge> },
            { key: 'date', label: 'Applied' },
          ]}
        />
      </Card>
    </>
  )
}
