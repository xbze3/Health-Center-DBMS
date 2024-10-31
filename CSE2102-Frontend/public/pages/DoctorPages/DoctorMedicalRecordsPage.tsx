import MedicalRecordsPageComponent from "../../../src/components/PageComponents/MedicalRecordsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";

function DoctorMedicalRecordsPage() {
    return (
        <>
            <DoctorNavBar />
            <MedicalRecordsPageComponent
                initialFetchUrl="http://localhost:8081/doctor-medical-records/20"
                searchBaseUrl="http://localhost:8081/doctor-medical-records/20"
            />
        </>
    );
}

export default DoctorMedicalRecordsPage;
