import PrescriptionsPageComponent from "../../../src/components/PageComponents/PrescriptionsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";

function DoctorPrescriptionsPage() {
    return (
        <>
            <DoctorNavBar />
            <PrescriptionsPageComponent
                initialFetchUrl={`http://localhost:8081/med-prescriptions/`}
                searchBaseUrl={`http://localhost:8081/med-prescriptions`}
            />
        </>
    );
}

export default DoctorPrescriptionsPage;
