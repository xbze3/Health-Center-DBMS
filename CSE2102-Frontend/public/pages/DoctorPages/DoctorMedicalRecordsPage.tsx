import MedicalRecordsPageComponent from "../../../src/components/PageComponents/MedicalRecordsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";

function DoctorMedicalRecordsPage() {
    return (
        <>
            <DoctorNavBar />
            <MedicalRecordsPageComponent
                initialFetchUrl={`http://localhost:8081/med-medical-records/`}
                searchBaseUrl={`http://localhost:8081/med-medical-records`}
            />
        </>
    );
}

export default DoctorMedicalRecordsPage;
