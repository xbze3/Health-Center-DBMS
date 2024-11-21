import StaffPageComponent from "../../../src/components/PageComponents/StaffPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import StaffAdditionForm from "../../components/AdditionForms/StaffAdditionForm";
import Footer from "../../components/WebItemComponents/Footer";
import RemovalForm from "../../components/RemovalForm/RemovalForm";

const STAFF_ROUTE = import.meta.env.VITE_ADMIN_GET_STAFF || "";

function AdminStaffPage() {
    return (
        <>
            <AdminNavBar />

            <StaffAdditionForm />

            <RemovalForm
                page="staff"
                message="ID of Staff Record to be removed"
            />

            <StaffPageComponent
                initialFetchUrl={STAFF_ROUTE}
                searchBaseUrl={STAFF_ROUTE}
            />

            <Footer />
        </>
    );
}

export default AdminStaffPage;
