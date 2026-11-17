import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Admissions from './pages/Admissions'
import Finance from './pages/Finance'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="finance" element={<Finance />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
