import PrescriptionsPageComponent from "../../../src/components/PageComponents/PrescriptionsPageComponent";

function AdminPrescriptionsPage() {
    return (
        <PrescriptionsPageComponent
            initialFetchUrl="http://localhost:8081/admin-prescriptions"
            searchBaseUrl="http://localhost:8081/admin-prescriptions"
        />
    );
}

export default AdminPrescriptionsPage;
