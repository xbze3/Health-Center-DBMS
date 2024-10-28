import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import App from './App.tsx'
import AdminStaffPage from '../public/pages/AdminPages/AdminStaffPage.tsx'
import AdminAppointmentsPage from '../public/pages/AdminPages/AdminAppointmentsPage.tsx'
import AdminMedicalRecordsPage from '../public/pages/AdminPages/AdminMedicalRecordsPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App /> 
  },
  {
    path: '/admin/staff',
    element: <AdminStaffPage />
  },
  {
    path: '/admin/appointments',
    element: <AdminAppointmentsPage />
  },
  {
    path: '/admin/medical-records',
    element: <AdminMedicalRecordsPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
