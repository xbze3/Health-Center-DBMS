import MedicalRecordsPageComponent from "../../../src/components/PageComponents/MedicalRecordsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import MedicalRecordsAdditionForm from "../../components/AdditionForms/MedicalRecordsAdditionForm";

const MEDICAL_RECORDS_ROUTE =
    import.meta.env.VITE_ADMIN_GET_MEDICAL_RECORDS || "";

function AdminMedicalRecordsPage() {
    return (
        <>
            <AdminNavBar />

            <MedicalRecordsAdditionForm />

            <MedicalRecordsPageComponent
                initialFetchUrl={MEDICAL_RECORDS_ROUTE}
                searchBaseUrl={MEDICAL_RECORDS_ROUTE}
            />
        </>
    );
}

export default AdminMedicalRecordsPage;
