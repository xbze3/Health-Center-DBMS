import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App.tsx";
import AdminPage from "../src/pages/AdminPages/AdminPage.tsx";
import AdminStaffPage from "../src/pages/AdminPages/AdminStaffPage.tsx";
import AdminAppointmentsPage from "../src/pages/AdminPages/AdminAppointmentsPage.tsx";
import AdminMedicalRecordsPage from "../src/pages/AdminPages/AdminMedicalRecordsPage.tsx";
import AdminPatientsPage from "../src/pages/AdminPages/AdminPatientsPage.tsx";
import AdminPrescriptionsPage from "../src/pages/AdminPages/AdminPrescriptionsPage.tsx";
import AdminBillingInvoicesPage from "../src/pages/AdminPages/AdminBillingInvoicesPage.tsx";
import DoctorPage from "../src/pages/DoctorPages/DoctorPage.tsx";
import DoctorPrescriptionPage from "../src/pages/DoctorPages/DoctorPrescriptionsPage.tsx";
import DoctorAppointmentsPage from "../src/pages/DoctorPages/DoctorAppointmentsPage.tsx";
import DoctorMedicalRecordsPage from "../src/pages/DoctorPages/DoctorMedicalRecordsPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
    {
        path: "/admin/staff",
        element: <AdminStaffPage />,
    },
    {
        path: "/admin/appointments",
        element: <AdminAppointmentsPage />,
    },
    {
        path: "/admin/medical-records",
        element: <AdminMedicalRecordsPage />,
    },
    {
        path: "/admin/patients",
        element: <AdminPatientsPage />,
    },
    {
        path: "/admin/prescriptions",
        element: <AdminPrescriptionsPage />,
    },
    {
        path: "/admin/billing-invoices",
        element: <AdminBillingInvoicesPage />,
    },

    {
        path: "/med",
        element: <DoctorPage />,
    },
    {
        path: "/med/appointments",
        element: <DoctorAppointmentsPage />,
    },
    {
        path: "/med/medical-records",
        element: <DoctorMedicalRecordsPage />,
    },
    {
        path: "/med/prescriptions",
        element: <DoctorPrescriptionPage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
