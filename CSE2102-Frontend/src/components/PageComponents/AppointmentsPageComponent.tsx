import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SearchBarComponent from "../WebItemComponents/SearchBarComponent";
import ListItemComponent from "../WebItemComponents/ListGroupComponent";
import Alert from "../../components/WebItemComponents/Alert";

interface Appointments {
    Appointment_ID: number;
    Patient_ID: number;
    Staff_ID: number;
    Date: string;
    Time: string;
    Reason_for_Visit: string;
}

interface AppointmentsPageProps {
    initialFetchUrl: string;
    searchBaseUrl: string;
}

function AppointmentsPageComponent({
    initialFetchUrl,
    searchBaseUrl,
}: AppointmentsPageProps) {
    const [data, setData] = useState<Appointments[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token"); // Retrieve the token from localStorage
                const response = await fetch(initialFetchUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Attach token in the Authorization header
                    },
                });

                if (!response.ok) {
                    if (response.status == 403) {
                        setError(true);
                    } else
                        `Failed to fetch appointments: ${response.statusText}`;
                }

                const data: Appointments[] = await response.json();
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
                    `Failed to search appointments: ${response.statusText}`
                );
            }

            const data: Appointments[] = await response.json();
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

            {error && <Alert />}

            <ListGroup as="ul">
                {Array.isArray(data) ? (
                    data.map((d, i) => (
                        <ListItemComponent
                            key={i}
                            title={`Appointment ID: ${d.Appointment_ID}`}
                            details={`Patient ID: ${d.Patient_ID} | Staff ID: ${
                                d.Staff_ID
                            } | Date: ${d.Date.substring(0, 10)} | Time: ${
                                d.Time
                            } | Reason for Visit: ${d.Reason_for_Visit}`}
                        />
                    ))
                ) : (
                    <ListGroup.Item>No data available</ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
}

export default AppointmentsPageComponent;
