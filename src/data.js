// Sample data for the UI demo. The complete project uses live APIs + database.
export const campuses = [
  { name: 'Lucknow – Gomti Nagar', type: 'School (K–12)', students: 2410, staff: 168, attendance: 94, fees: 88, gradient: 'from-violet-500 to-fuchsia-500' },
  { name: 'Kanpur – Civil Lines', type: 'School (K–12)', students: 1860, staff: 132, attendance: 91, fees: 81, gradient: 'from-sky-500 to-indigo-500' },
  { name: 'Noida – Sector 62', type: 'Degree College', students: 3120, staff: 214, attendance: 86, fees: 92, gradient: 'from-emerald-500 to-teal-500' },
  { name: 'Prayagraj – Civil Lines', type: 'Coaching Institute', students: 940, staff: 48, attendance: 89, fees: 76, gradient: 'from-amber-500 to-orange-500' },
]

export const enrolment = [
  { label: '2021', students: 5200 }, { label: '2022', students: 6050 }, { label: '2023', students: 6780 },
  { label: '2024', students: 7410 }, { label: '2025', students: 7920 }, { label: '2026', students: 8330 },
]

export const funnel = [
  { stage: 'Enquiries', count: 4820 }, { stage: 'Applications', count: 2140 }, { stage: 'Entrance test', count: 1580 },
  { stage: 'Interview', count: 1120 }, { stage: 'Admitted', count: 864 },
]

export const applications = [
  { id: 'APP-26-3381', name: 'Ritvik Saxena', program: 'Class 6', campus: 'Lucknow', score: 88, stage: 'Interview', date: '16 Nov' },
  { id: 'APP-26-3379', name: 'Tanvi Mishra', program: 'B.Com (Hons)', campus: 'Noida', score: 92, stage: 'Admitted', date: '16 Nov' },
  { id: 'APP-26-3374', name: 'Aryan Tripathi', program: 'JEE Foundation', campus: 'Prayagraj', score: 74, stage: 'Entrance test', date: '15 Nov' },
  { id: 'APP-26-3370', name: 'Ira Chaturvedi', program: 'Class 11 (Science)', campus: 'Kanpur', score: 81, stage: 'Applications', date: '15 Nov' },
  { id: 'APP-26-3366', name: 'Kabir Srivastava', program: 'BCA', campus: 'Noida', score: 69, stage: 'Interview', date: '14 Nov' },
  { id: 'APP-26-3361', name: 'Myra Pandey', program: 'Nursery', campus: 'Lucknow', score: null, stage: 'Admitted', date: '14 Nov' },
]

export const feeByCampus = [
  { label: 'Lucknow', collected: 412, due: 56 }, { label: 'Kanpur', collected: 298, due: 70 },
  { label: 'Noida', collected: 684, due: 59 }, { label: 'Prayagraj', collected: 142, due: 45 },
]

export const payments = [
  { id: 'RCPT-90812', student: 'Aadhya Sharma', campus: 'Lucknow', head: 'Term 2 tuition', mode: 'UPI', amount: 38500, time: '10 min ago' },
  { id: 'RCPT-90811', student: 'Vivaan Kapoor', campus: 'Noida', head: 'Semester fee', mode: 'Net banking', amount: 72000, time: '32 min ago' },
  { id: 'RCPT-90810', student: 'Sara Ali', campus: 'Kanpur', head: 'Transport (Q3)', mode: 'Card', amount: 9600, time: '1 hr ago' },
  { id: 'RCPT-90809', student: 'Dev Tiwari', campus: 'Prayagraj', head: 'Course fee – Inst. 2', mode: 'Cash', amount: 24000, time: '2 hr ago' },
]
