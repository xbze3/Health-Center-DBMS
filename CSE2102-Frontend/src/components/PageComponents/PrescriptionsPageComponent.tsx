import { useEffect, useState } from "react";
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
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token"); // Retrieve the token from localStorage
                console.log(token);
                const response = await fetch(initialFetchUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Attach token in the Authorization header
                    },
                });

                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch Prescriptions: ${response.statusText}`
                    );
                }

                const data: Prescriptions[] = await response.json();
                setData(data);
            } catch (err) {
                console.error(err); // Log the error
            }
        };

        fetchData();
    }, [initialFetchUrl]);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${searchBaseUrl}/${searchQuery}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(
                    `Failed to search Prescriptions: ${response.statusText}`
                );
            }

            const data: Prescriptions[] = await response.json();
            setData(data);
        } catch (err) {
            console.error(err); // Log the error
        }
    };

    return (
        <>
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
