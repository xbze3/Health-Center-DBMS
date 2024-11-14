import { useEffect, useState } from "react";
import AdminCardComponent from "../AdminComponents/AdminCardComponent";
import appointmentImage from "../../assets/appointment.png";
import medicalrecordsImage from "../../assets/medical-records.png";
import prescriptionsImage from "../../assets/prescription.png";
import staffImage from "../../assets/group.png";
import patientsImage from "../../assets/patient.png";
import billinginvoicesImage from "../../assets/bill.png";

function AdminCardScreenComponent() {
    const [recordCounts, setRecordCounts] = useState({
        appointments: 0,
        medicalRecords: 0,
        prescriptions: 0,
        staff: 0,
        patients: 0,
        billingInvoices: 0,
    });

    useEffect(() => {
        // Fetch the record counts from the backend API
        const fetchRecordCounts = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8081/api/record-counts",
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
                    staff: data.staff,
                    patients: data.patients,
                    billingInvoices: data.billingInvoices,
                });
            } catch (error) {
                console.error("Error fetching record counts:", error);
            }
        };

        fetchRecordCounts();
    }, []);

    return (
        <div className="Admin-centered-container-wrapper">
            <div className="Admin-centered-container-left">
                <div className="Admin-card-row-left">
                    <AdminCardComponent
                        imageSrc={appointmentImage}
                        headerText="Appointments"
                        cardText={recordCounts.appointments.toString()} // Pass record count as cardText
                    />
                    <AdminCardComponent
                        imageSrc={medicalrecordsImage}
                        headerText="Medical Records"
                        cardText={recordCounts.medicalRecords.toString()}
                    />
                    <AdminCardComponent
                        imageSrc={prescriptionsImage}
                        headerText="Prescriptions"
                        cardText={recordCounts.prescriptions.toString()}
                    />
                </div>
            </div>

            <div className="Admin-centered-container-right">
                <div className="Admin-card-row-right">
                    <AdminCardComponent
                        imageSrc={staffImage}
                        headerText="Staff"
                        cardText={recordCounts.staff.toString()}
                    />
                    <AdminCardComponent
                        imageSrc={patientsImage}
                        headerText="Patients"
                        cardText={recordCounts.patients.toString()}
                    />
                    <AdminCardComponent
                        imageSrc={billinginvoicesImage}
                        headerText="Billing / Invoices"
                        cardText={recordCounts.billingInvoices.toString()}
                    />
                </div>
            </div>
        </div>
    );
}

export default AdminCardScreenComponent;
