import AppointmentsPageComponent from "../../../src/components/PageComponents/AppointmentsPageComponent";

function DoctorAppointmentsPage() {
    return (
        <>
            <AppointmentsPageComponent
                initialFetchUrl="http://localhost:8081/doctor-appointments/20"
                searchBaseUrl="http://localhost:8081/doctor-appointments"
            />
        </>
    );
}

export default DoctorAppointmentsPage;
