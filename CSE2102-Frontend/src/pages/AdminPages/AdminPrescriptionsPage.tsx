import PrescriptionsPageComponent from "../../../src/components/PageComponents/PrescriptionsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import PrescriptionAdditionForm from "../../components/AdditionForms/PrescriptionAdditionForm";
import Footer from "../../components/WebItemComponents/Footer";
import RemovalForm from "../../components/RemovalForm/RemovalForm";

const PRESCRIPTIONS_ROUTE = import.meta.env.VITE_ADMIN_GET_PRESCRIPTIONS || "";

function AdminPrescriptionsPage() {
    return (
        <>
            <AdminNavBar />

            <PrescriptionAdditionForm />

            <RemovalForm
                page="prescription"
                message="ID of Prescripton Record to be removed"
            />

            <PrescriptionsPageComponent
                initialFetchUrl={PRESCRIPTIONS_ROUTE}
                searchBaseUrl={PRESCRIPTIONS_ROUTE}
            />

            <Footer />
        </>
    );
}

export default AdminPrescriptionsPage;
