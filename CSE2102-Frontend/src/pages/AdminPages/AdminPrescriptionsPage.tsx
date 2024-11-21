import PrescriptionsPageComponent from "../../../src/components/PageComponents/PrescriptionsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import PrescriptionAdditionForm from "../../components/AdditionForms/PrescriptionAdditionForm";
import Footer from "../../components/WebItemComponents/Footer";

const PRESCRIPTIONS_ROUTE = import.meta.env.VITE_ADMIN_GET_PRESCRIPTIONS || "";

function AdminPrescriptionsPage() {
    return (
        <>
            <AdminNavBar />

            <PrescriptionAdditionForm />

            <PrescriptionsPageComponent
                initialFetchUrl={PRESCRIPTIONS_ROUTE}
                searchBaseUrl={PRESCRIPTIONS_ROUTE}
            />

            <Footer />
        </>
    );
}

export default AdminPrescriptionsPage;
