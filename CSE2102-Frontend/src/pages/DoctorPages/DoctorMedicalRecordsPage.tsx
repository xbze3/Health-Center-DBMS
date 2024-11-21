import MedicalRecordsPageComponent from "../../../src/components/PageComponents/MedicalRecordsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";
import Footer from "../../components/WebItemComponents/Footer";

const MEDICAL_RECORDS_MED_ROUTE =
    import.meta.env.VITE_MED_GET_MEDICAL_RECORDS || "";

function DoctorMedicalRecordsPage() {
    return (
        <>
            <DoctorNavBar />
            <MedicalRecordsPageComponent
                initialFetchUrl={MEDICAL_RECORDS_MED_ROUTE}
                searchBaseUrl={MEDICAL_RECORDS_MED_ROUTE}
            />
            <Footer />
        </>
    );
}

export default DoctorMedicalRecordsPage;
