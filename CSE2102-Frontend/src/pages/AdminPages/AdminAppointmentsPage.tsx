import AppointmentsPageComponent from "../../../src/components/PageComponents/AppointmentsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import AppointmentsAdditionForm from "../../components/AdditionForms/AppointmentsAdditionForm";
import Footer from "../../components/WebItemComponents/Footer";
import RemovalForm from "../../components/RemovalForm/RemovalForm";

const APPOINTMENTS_ROUTE = import.meta.env.VITE_ADMIN_GET_APPOINTMENTS || "";

function AdminAppointmentsPage() {
    return (
        <>
            <AdminNavBar />

            <AppointmentsAdditionForm />

            <RemovalForm
                page="appointments"
                message="ID of Appointment Record to be removed"
            />

            <AppointmentsPageComponent
                initialFetchUrl={APPOINTMENTS_ROUTE}
                searchBaseUrl={APPOINTMENTS_ROUTE}
            />

            <Footer />
        </>
    );
}

export default AdminAppointmentsPage;
