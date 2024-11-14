import { useEffect, useState } from "react";
import DoctorCardComponent from "../DoctorComponents/DoctorCardComponent";
import appointmentImage from "../../assets/appointment.png";
import medicalrecordsImage from "../../assets/medical-records.png";
import prescriptionsImage from "../../assets/prescription.png";

function DoctorCardScreenComponent() {
    const [recordCounts, setRecordCounts] = useState({
        appointments: 0,
        medicalRecords: 0,
        prescriptions: 0,
    });

    useEffect(() => {
        // Fetch the record counts from the backend API
        const fetchRecordCounts = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8081/api/doctor-record-counts",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`, // Assuming JWT is stored in localStorage
                        },
                    }
                );
                const data = await response.json();
                setRecordCounts({
                    appointments: data.appointments,
                    medicalRecords: data.medicalRecords,
                    prescriptions: data.prescriptions,
                });
            } catch (error) {
                console.error("Error fetching record counts:", error);
            }
        };

        fetchRecordCounts();
    }, []);

    return (
        <div className="Doctor-centered-container">
            <div className="Doctor-card-row">
                <DoctorCardComponent
                    imageSrc={appointmentImage}
                    headerText="Appointments"
                    cardText={recordCounts.appointments.toString()} // Pass record count as cardText
                />
                <DoctorCardComponent
                    imageSrc={medicalrecordsImage}
                    headerText="Medical Records"
                    cardText={recordCounts.medicalRecords.toString()}
                />
                <DoctorCardComponent
                    imageSrc={prescriptionsImage}
                    headerText="Prescriptions"
                    cardText={recordCounts.prescriptions.toString()}
                />
            </div>
        </div>
    );
}

export default DoctorCardScreenComponent;
