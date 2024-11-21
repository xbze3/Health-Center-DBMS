import PrescriptionsPageComponent from "../../../src/components/PageComponents/PrescriptionsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";
import Footer from "../../components/WebItemComponents/Footer";

const PRESCRIPTIONS_MED_ROUTE =
    import.meta.env.VITE_MED_GET_PRESCRIPTIONS || "";

function DoctorPrescriptionsPage() {
    return (
        <>
            <DoctorNavBar />
            <PrescriptionsPageComponent
                initialFetchUrl={PRESCRIPTIONS_MED_ROUTE}
                searchBaseUrl={PRESCRIPTIONS_MED_ROUTE}
            />
            <Footer />
        </>
    );
}

export default DoctorPrescriptionsPage;
