import PatientsPageComponent from "../../../src/components/PageComponents/PatientsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import PatientAdditionForm from "../../components/AdditionForms/PatientAdditionForm";
import Footer from "../../components/WebItemComponents/Footer";

const PATIENTS_ROUTE = import.meta.env.VITE_ADMIN_GET_PATIENTS || "";

function AdminPatientsPage() {
    return (
        <>
            <AdminNavBar />

            <PatientAdditionForm />

            <PatientsPageComponent
                initialFetchUrl={PATIENTS_ROUTE}
                searchBaseUrl={PATIENTS_ROUTE}
            />

            <Footer />
        </>
    );
}

export default AdminPatientsPage;
