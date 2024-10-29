import { useEffect, useState } from "react";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface StaffMember {
    Staff_ID: number;
    First_Name: string;
    Last_Name: string;
    Role: string;
    Specialty: string;
    Contact_Number: string;
    Email: string;
}

function AdminStaffPage() {
    const [data, setData] = useState<StaffMember[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("http://localhost:8081/admin-staff")
            .then((res) => res.json())
            .then((data: StaffMember[]) => {
                setData(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        fetch(`http://localhost:8081/admin-staff/${searchQuery}`)
            .then((res) => res.json())
            .then((data: StaffMember[]) => setData(data))
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
                    value={searchQuery} // Bind the input value to state
                    onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
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
                                <div className="fw-bold">{`${d.First_Name} ${d.Last_Name}`}</div>
                                {`Role: ${d.Role} | Specialty: ${d.Specialty} | Contact Number: ${d.Contact_Number} | Email: ${d.Email}`}
                            </div>
                            <Badge bg="primary" pill>
                                ID: {d.Staff_ID}
                            </Badge>
                        </ListGroup.Item>
                    ))
                ) : (
                    <ListGroup.Item>No data available</ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
}

export default AdminStaffPage;
