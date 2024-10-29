import { useEffect, useState } from "react";
import AdminNavBar from "./AdminComponents/AdminNavBar";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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

            <Form className="d-flex m-3" onSubmit={handleSearch}>
                <Form.Control
                    type="search"
                    placeholder="SQL Search Query"
                    className="me-2"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="outline-success" type="submit">
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
                                <div className="fw-bold">{`Prescription ID: ${d.Prescription_ID}`}</div>
                                {`Patient ID: ${d.Patient_ID} | Staff_ID: ${
                                    d.Staff_ID
                                } | Medication Name: ${
                                    d.Medication_Name
                                } | Dosage: ${d.Dosage} | Instructions: ${
                                    d.Instructions
                                } | Date Issued: ${d.Date_Issued.substring(
                                    0,
                                    10
                                )}`}
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

export default PrescriptionsPageComponent;
