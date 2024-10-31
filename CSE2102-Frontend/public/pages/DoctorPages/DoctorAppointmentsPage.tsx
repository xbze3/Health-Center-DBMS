import AppointmentsPageComponent from "../../../src/components/PageComponents/AppointmentsPageComponent";
import DoctorNavBar from "../../../src/components/DoctorComponents/DoctorNavBar";

function DoctorAppointmentsPage() {
    return (
        <>
            <DoctorNavBar />
            <AppointmentsPageComponent
                initialFetchUrl="http://localhost:8081/doctor-appointments/20"
                searchBaseUrl="http://localhost:8081/doctor-appointments/20"
            />
        </>
    );
}

export default DoctorAppointmentsPage;
