import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import App from './App.tsx'
import AdminStaffPage from '../public/pages/AdminPages/AdminStaffPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App /> 
  },
  {
    path: '/admin/staff',
    element: <AdminStaffPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
