import StaffPageComponent from "../../../src/components/PageComponents/StaffPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";

function AdminStaffPage() {
    return (
        <>
            <AdminNavBar />

            <StaffPageComponent
                initialFetchUrl="http://localhost:8081/admin-staff"
                searchBaseUrl="http://localhost:8081/admin-staff"
            />
        </>
    );
}

export default AdminStaffPage;
