import PrescriptionsPageComponent from "../../../src/components/PageComponents/PrescriptionsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";

function AdminPrescriptionsPage() {
    return (
        <>
            <AdminNavBar />

            <PrescriptionsPageComponent
                initialFetchUrl="http://localhost:8081/admin-prescriptions"
                searchBaseUrl="http://localhost:8081/admin-prescriptions"
            />
        </>
    );
}

export default AdminPrescriptionsPage;
