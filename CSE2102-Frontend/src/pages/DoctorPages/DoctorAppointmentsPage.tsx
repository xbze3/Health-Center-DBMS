import AppointmentsPageComponent from "../../../src/components/PageComponents/AppointmentsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";

const MED_APPOINTMENTS_ROUTE = import.meta.env.VITE_MED_GET_APPOINTMENTS || "";

function DoctorAppointmentsPage() {
    return (
        <>
            <DoctorNavBar />
            <AppointmentsPageComponent
                initialFetchUrl={MED_APPOINTMENTS_ROUTE}
                searchBaseUrl={MED_APPOINTMENTS_ROUTE}
            />
        </>
    );
}

export default DoctorAppointmentsPage;
