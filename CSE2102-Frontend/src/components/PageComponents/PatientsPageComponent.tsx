import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SearchBarComponent from "../WebItemComponents/SearchBarComponent";
import ListItemComponent from "../WebItemComponents/ListGroupComponent";

interface Patients {
    Patient_ID: number;
    First_Name: string;
    Last_Name: string;
    Date_of_Birth: string;
    Gender: string;
    Contact_Number: string;
    Address: string;
    Emergency_Contact: string;
}

interface PatientsProps {
    initialFetchUrl: string;
    searchBaseUrl: string;
}

function PatientsPageComponent({
    initialFetchUrl,
    searchBaseUrl,
}: PatientsProps) {
    const [data, setData] = useState<Patients[]>([]);
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
                        `Failed to fetch Patients: ${response.statusText}`
                    );
                }

                const data: Patients[] = await response.json();
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
                    `Failed to search Patients: ${response.statusText}`
                );
            }

            const data: Patients[] = await response.json();
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
                            title={`${d.First_Name} ${d.Last_Name}`}
                            details={`Date of Birth: ${d.Date_of_Birth.substring(
                                0,
                                10
                            )} | Gender: ${d.Gender} | Contact Number: ${
                                d.Contact_Number
                            } | Address: ${d.Address} | Emergency Contact: ${
                                d.Emergency_Contact
                            }`}
                            badgeText={`ID: ${d.Patient_ID}`}
                        />
                    ))
                ) : (
                    <ListGroup.Item>No data available</ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
}

export default PatientsPageComponent;
