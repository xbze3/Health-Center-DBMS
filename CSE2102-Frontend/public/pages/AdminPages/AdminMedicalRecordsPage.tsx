import MedicalRecordsPageComponent from "../../../src/components/PageComponents/MedicalRecordsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";

function AdminMedicalRecordsPage() {
    return (
        <>
            <AdminNavBar />

            <MedicalRecordsPageComponent
                initialFetchUrl="http://localhost:8081/admin-medical-records"
                searchBaseUrl="http://localhost:8081/admin-medical-records"
            />
        </>
    );
}

export default AdminMedicalRecordsPage;
