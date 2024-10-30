import { useEffect, useState } from "react";
import AdminNavBar from "../AdminComponents/AdminNavBar";
import ListGroup from "react-bootstrap/ListGroup";
import SearchBarComponent from "../WebItemComponents/SearchBarComponent";
import ListItemComponent from "../WebItemComponents/ListGroupComponent";

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

    useEffect(() => {
        fetch(initialFetchUrl)
            .then((res) => res.json())
            .then((data: Appointments[]) => {
                setData(data);
            })
            .catch((err) => console.log(err));
    }, [initialFetchUrl]);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        fetch(`${searchBaseUrl}/${searchQuery}`)
            .then((res) => res.json())
            .then((data: Appointments[]) => setData(data))
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
