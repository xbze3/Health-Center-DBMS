import AppointmentsPageComponent from "../../../src/components/PageComponents/AppointmentsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";
import Footer from "../../components/WebItemComponents/Footer";

const MED_APPOINTMENTS_ROUTE = import.meta.env.VITE_MED_GET_APPOINTMENTS || "";

function DoctorAppointmentsPage() {
    return (
        <>
            <DoctorNavBar />
            <AppointmentsPageComponent
                initialFetchUrl={MED_APPOINTMENTS_ROUTE}
                searchBaseUrl={MED_APPOINTMENTS_ROUTE}
            />
            <Footer />
        </>
    );
}

export default DoctorAppointmentsPage;
