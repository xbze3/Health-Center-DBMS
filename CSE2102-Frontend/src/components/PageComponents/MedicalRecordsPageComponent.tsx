import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SearchBarComponent from "../WebItemComponents/SearchBarComponent";
import ListItemComponent from "../WebItemComponents/ListGroupComponent";

interface MedicalRecords {
    Record_ID: number;
    Patient_ID: number;
    Staff_ID: number;
    Diagnosis: string;
    Treatment: string;
    Visit_Date: string;
    Notes: string;
}

interface MedicalRecordsPageProps {
    initialFetchUrl: string;
    searchBaseUrl: string;
}

function MedicalRecordsPageComponent({
    initialFetchUrl,
    searchBaseUrl,
}: MedicalRecordsPageProps) {
    const [data, setData] = useState<MedicalRecords[]>([]);
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
                        `Failed to fetch Medical Records: ${response.statusText}`
                    );
                }

                const data: MedicalRecords[] = await response.json();
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
                    `Failed to search Medical Records: ${response.statusText}`
                );
            }

            const data: MedicalRecords[] = await response.json();
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
                            title={`Record ID: ${d.Record_ID}`}
                            details={`Patient ID: ${d.Patient_ID} | Staff_ID: ${
                                d.Staff_ID
                            } | Diagnosis: ${d.Diagnosis} | Treatment: ${
                                d.Treatment
                            } | Date: ${d.Visit_Date.substring(
                                0,
                                10
                            )} | Notes: ${d.Notes}`}
                        />
                    ))
                ) : (
                    <ListGroup.Item>No data available</ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
}

export default MedicalRecordsPageComponent;
