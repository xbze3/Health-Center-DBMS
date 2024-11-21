import MedicalRecordsPageComponent from "../../../src/components/PageComponents/MedicalRecordsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import MedicalRecordsAdditionForm from "../../components/AdditionForms/MedicalRecordsAdditionForm";
import Footer from "../../components/WebItemComponents/Footer";
import RemovalForm from "../../components/RemovalForm/RemovalForm";

const MEDICAL_RECORDS_ROUTE =
    import.meta.env.VITE_ADMIN_GET_MEDICAL_RECORDS || "";

function AdminMedicalRecordsPage() {
    return (
        <>
            <AdminNavBar />

            <MedicalRecordsAdditionForm />

            <RemovalForm
                page="medical-records"
                message="ID of Medical Record to be removed"
            />

            <MedicalRecordsPageComponent
                initialFetchUrl={MEDICAL_RECORDS_ROUTE}
                searchBaseUrl={MEDICAL_RECORDS_ROUTE}
            />

            <Footer />
        </>
    );
}

export default AdminMedicalRecordsPage;
