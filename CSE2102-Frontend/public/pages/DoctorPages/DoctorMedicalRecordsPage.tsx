import MedicalRecordsPageComponent from "../../../src/components/PageComponents/MedicalRecordsPageComponent";

function DoctorMedicalRecordsPage() {
    return (
        <MedicalRecordsPageComponent
            initialFetchUrl="http://localhost:8081/doctor-medical-records/20"
            searchBaseUrl="http://localhost:8081/doctor-medical-records"
        />
    );
}

export default DoctorMedicalRecordsPage;
