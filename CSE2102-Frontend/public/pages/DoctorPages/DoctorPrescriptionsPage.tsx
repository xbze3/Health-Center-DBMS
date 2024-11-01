import PrescriptionsPageComponent from "../../../src/components/PageComponents/PrescriptionsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";
import { useAuth } from "../../../src/misc/AuthContext";

function DoctorPrescriptionsPage() {
    const { Staff_ID } = useAuth();

    return (
        <>
            <DoctorNavBar />
            <PrescriptionsPageComponent
                initialFetchUrl={`http://localhost:8081/med-prescriptions/${Staff_ID}`}
                searchBaseUrl={`http://localhost:8081/med-prescriptions/${Staff_ID}`}
            />
        </>
    );
}

export default DoctorPrescriptionsPage;
