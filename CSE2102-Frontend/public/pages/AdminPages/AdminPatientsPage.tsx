import PatientsPageComponent from "../../../src/components/PatientsPageComponent";

function AdminPatientsPage() {
    return (
        <PatientsPageComponent
            initialFetchUrl="http://localhost:8081/admin-patients"
            searchBaseUrl="http://localhost:8081/admin-patients"
        />
    );
}

export default AdminPatientsPage;
