import MedicalRecordsPageComponent from "../../../src/components/PageComponents/MedicalRecordsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";
import { useAuth } from "../../../src/misc/AuthContext";

function DoctorMedicalRecordsPage() {
    const { Staff_ID } = useAuth();

    return (
        <>
            <DoctorNavBar />
            <MedicalRecordsPageComponent
                initialFetchUrl={`http://localhost:8081/med-medical-records/${Staff_ID}`}
                searchBaseUrl={`http://localhost:8081/med-medical-records/${Staff_ID}`}
            />
        </>
    );
}

export default DoctorMedicalRecordsPage;
