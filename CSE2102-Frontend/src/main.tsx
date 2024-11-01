import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App.tsx";
import AdminPage from "../public/pages/AdminPages/AdminPage.tsx";
import AdminStaffPage from "../public/pages/AdminPages/AdminStaffPage.tsx";
import AdminAppointmentsPage from "../public/pages/AdminPages/AdminAppointmentsPage.tsx";
import AdminMedicalRecordsPage from "../public/pages/AdminPages/AdminMedicalRecordsPage.tsx";
import AdminPatientsPage from "../public/pages/AdminPages/AdminPatientsPage.tsx";
import AdminPrescriptionsPage from "../public/pages/AdminPages/AdminPrescriptionsPage.tsx";
import AdminBillingInvoicesPage from "../public/pages/AdminPages/AdminBillingInvoicesPage.tsx";
import DoctorPage from "../public/pages/DoctorPages/DoctorPage.tsx";
import DoctorPrescriptionPage from "../public/pages/DoctorPages/DoctorPrescriptionsPage.tsx";
import DoctorAppointmentsPage from "../public/pages/DoctorPages/DoctorAppointmentsPage.tsx";
import DoctorMedicalRecordsPage from "../public/pages/DoctorPages/DoctorMedicalRecordsPage.tsx";
import { AuthProvider } from "./misc/AuthContext";

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
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
);
