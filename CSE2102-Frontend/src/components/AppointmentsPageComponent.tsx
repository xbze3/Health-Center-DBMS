import { useEffect, useState } from "react";
import AdminNavBar from "./AdminComponents/AdminNavBar";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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

            <Form className="d-flex m-3" onSubmit={handleSearch}>
                <Form.Control
                    type="search"
                    placeholder="SQL Search Query"
                    className="me-2"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="outline-success" onClick={handleSearch}>
                    Search
                </Button>
            </Form>

            <ListGroup as="ul">
                {Array.isArray(data) ? (
                    data.map((d, i) => (
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            key={i}
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{`Appointment ID: ${d.Appointment_ID}`}</div>
                                {`Patient ID: ${d.Patient_ID} | Staff ID: ${
                                    d.Staff_ID
                                } | Date: ${d.Date.substring(0, 10)} | Time: ${
                                    d.Time
                                } | Reason for Visit: ${d.Reason_for_Visit}`}
                            </div>
                        </ListGroup.Item>
                    ))
                ) : (
                    <ListGroup.Item>No data available</ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
}

export default AppointmentsPageComponent;
