import StaffPageComponent from "../../../src/components/PageComponents/StaffPageComponent";

function AdminStaffPage() {
    return (
        <StaffPageComponent
            initialFetchUrl="http://localhost:8081/admin-staff"
            searchBaseUrl="http://localhost:8081/admin-staff"
        />
    );
}

export default AdminStaffPage;
