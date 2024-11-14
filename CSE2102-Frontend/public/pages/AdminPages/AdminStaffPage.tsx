import StaffPageComponent from "../../../src/components/PageComponents/StaffPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";

const STAFF_ROUTE = import.meta.env.VITE_ADMIN_GET_STAFF || "";

function AdminStaffPage() {
    return (
        <>
            <AdminNavBar />

            <StaffPageComponent
                initialFetchUrl={STAFF_ROUTE}
                searchBaseUrl={STAFF_ROUTE}
            />
        </>
    );
}

export default AdminStaffPage;
