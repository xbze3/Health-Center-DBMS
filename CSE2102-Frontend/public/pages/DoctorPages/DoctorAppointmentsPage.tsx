import AppointmentsPageComponent from "../../../src/components/PageComponents/AppointmentsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";
import { useAuth } from "../../../src/misc/AuthContext";

function DoctorAppointmentsPage() {
    const { Staff_ID } = useAuth();

    return (
        <>
            <DoctorNavBar />
            <AppointmentsPageComponent
                initialFetchUrl={`http://localhost:8081/med-appointments/${Staff_ID}`}
                searchBaseUrl={`http://localhost:8081/med-appointments/${Staff_ID}`}
            />
        </>
    );
}

export default DoctorAppointmentsPage;
