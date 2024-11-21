import PatientsPageComponent from "../../../src/components/PageComponents/PatientsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import PatientAdditionForm from "../../components/AdditionForms/PatientAdditionForm";
import Footer from "../../components/WebItemComponents/Footer";
import RemovalForm from "../../components/RemovalForm/RemovalForm";

const PATIENTS_ROUTE = import.meta.env.VITE_ADMIN_GET_PATIENTS || "";

function AdminPatientsPage() {
    return (
        <>
            <AdminNavBar />

            <PatientAdditionForm />

            <RemovalForm
                page="patients"
                message="ID of Patient Record to be removed"
            />

            <PatientsPageComponent
                initialFetchUrl={PATIENTS_ROUTE}
                searchBaseUrl={PATIENTS_ROUTE}
            />

            <Footer />
        </>
    );
}

export default AdminPatientsPage;
