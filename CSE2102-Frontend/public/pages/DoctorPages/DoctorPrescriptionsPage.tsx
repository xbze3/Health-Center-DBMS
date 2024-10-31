import PrescriptionsPageComponent from "../../../src/components/PageComponents/PrescriptionsPageComponent";

function DoctorPrescriptionsPage() {
    return (
        <PrescriptionsPageComponent
            initialFetchUrl="http://localhost:8081/doctor-prescriptions/20"
            searchBaseUrl="http://localhost:8081/doctor-prescriptions"
        />
    );
}

export default DoctorPrescriptionsPage;
