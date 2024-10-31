import PatientsPageComponent from "../../../src/components/PageComponents/PatientsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";

function AdminPatientsPage() {
    return (
        <>
            <AdminNavBar />

            <PatientsPageComponent
                initialFetchUrl="http://localhost:8081/admin-patients"
                searchBaseUrl="http://localhost:8081/admin-patients"
            />
        </>
    );
}

export default AdminPatientsPage;
