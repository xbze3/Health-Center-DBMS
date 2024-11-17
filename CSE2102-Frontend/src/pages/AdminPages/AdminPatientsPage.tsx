import PatientsPageComponent from "../../../src/components/PageComponents/PatientsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";

const PATIENTS_ROUTE = import.meta.env.VITE_ADMIN_GET_PATIENTS || "";

function AdminPatientsPage() {
    return (
        <>
            <AdminNavBar />

            <PatientsPageComponent
                initialFetchUrl={PATIENTS_ROUTE}
                searchBaseUrl={PATIENTS_ROUTE}
            />
        </>
    );
}

export default AdminPatientsPage;
