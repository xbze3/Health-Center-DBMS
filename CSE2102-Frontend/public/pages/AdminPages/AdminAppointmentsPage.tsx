import AppointmentsPageComponent from "../../../src/components/PageComponents/AppointmentsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";

function AdminAppointmentsPage() {
    return (
        <>
            <AdminNavBar />

            <AppointmentsPageComponent
                initialFetchUrl="http://localhost:8081/admin-appointments"
                searchBaseUrl="http://localhost:8081/admin-appointments"
            />
        </>
    );
}

export default AdminAppointmentsPage;
