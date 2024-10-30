import { useEffect, useState } from "react";
import AdminNavBar from "../AdminComponents/AdminNavBar";
import ListGroup from "react-bootstrap/ListGroup";
import SearchBarComponent from "../WebItemComponents/SearchBarComponent";
import ListItemComponent from "../WebItemComponents/ListGroupComponent";

interface Prescriptions {
    Prescription_ID: number;
    Patient_ID: number;
    Staff_ID: number;
    Medication_Name: string;
    Dosage: string;
    Instructions: string;
    Date_Issued: string;
}

interface PrescriptionsProps {
    initialFetchUrl: string;
    searchBaseUrl: string;
}

function PrescriptionsPageComponent({
    initialFetchUrl,
    searchBaseUrl,
}: PrescriptionsProps) {
    const [data, setData] = useState<Prescriptions[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch(initialFetchUrl)
            .then((res) => res.json())
            .then((data: Prescriptions[]) => {
                setData(data);
            })
            .catch((err) => console.log(err));
    }, [initialFetchUrl]);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        fetch(`${searchBaseUrl}/${searchQuery}`)
            .then((res) => res.json())
            .then((data: Prescriptions[]) => setData(data))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <AdminNavBar />

            <SearchBarComponent
                searchQuery={searchQuery}
                onSearchChange={(e) => setSearchQuery(e.target.value)}
                onSearchSubmit={handleSearch}
            />

            <ListGroup as="ul">
                {Array.isArray(data) ? (
                    data.map((d, i) => (
                        <ListItemComponent
                            key={i}
                            title={`Prescription ID: ${d.Prescription_ID}`}
                            details={`Patient ID: ${d.Patient_ID} | Staff_ID: ${
                                d.Staff_ID
                            } | Medication Name: ${
                                d.Medication_Name
                            } | Dosage: ${d.Dosage} | Instructions: ${
                                d.Instructions
                            } | Date Issued: ${d.Date_Issued.substring(0, 10)}`}
                        />
                    ))
                ) : (
                    <ListGroup.Item>No data available</ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
}

export default PrescriptionsPageComponent;
