import MedicalRecordsPageComponent from "../../../src/components/PageComponents/MedicalRecordsPageComponent";

function AdminMedicalRecordsPage() {
    return (
        <MedicalRecordsPageComponent
            initialFetchUrl="http://localhost:8081/admin-medical-records"
            searchBaseUrl="http://localhost:8081/admin-medical-records"
        />
    );
}

export default AdminMedicalRecordsPage;
