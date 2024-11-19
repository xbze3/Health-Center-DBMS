import AppointmentsPageComponent from "../../../src/components/PageComponents/AppointmentsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import AppointmentsAdditionForm from "../../components/AdditionForms/AppointmentsAdditionForm";

const APPOINTMENTS_ROUTE = import.meta.env.VITE_ADMIN_GET_APPOINTMENTS || "";

function AdminAppointmentsPage() {
    return (
        <>
            <AdminNavBar />

            <AppointmentsAdditionForm />

            <AppointmentsPageComponent
                initialFetchUrl={APPOINTMENTS_ROUTE}
                searchBaseUrl={APPOINTMENTS_ROUTE}
            />
        </>
    );
}

export default AdminAppointmentsPage;
