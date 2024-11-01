import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../components-css/AdminComponentsCss/AdminNavBar.css";

function AdminNavBar() {
    return (
        <Navbar
            bg="secondary"
            data-bs-theme="dark"
            expand="lg"
            className="bg-body-tertiary"
        >
            <Container fluid>
                <Navbar.Brand as={Link} to={`/admin/`}>
                    HCDMS Admin Panel
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "300px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={`/admin/staff`}>
                            Staff
                        </Nav.Link>

                        <Nav.Link as={Link} to={`/admin/appointments`}>
                            Appointments
                        </Nav.Link>

                        <Nav.Link as={Link} to={`/admin/medical-records`}>
                            Medical Records
                        </Nav.Link>

                        <Nav.Link as={Link} to={`/admin/patients`}>
                            Patients
                        </Nav.Link>

                        <Nav.Link as={Link} to={`/admin/prescriptions`}>
                            Prescriptions
                        </Nav.Link>

                        <Nav.Link as={Link} to={`/admin/billing-invoices`}>
                            Billing / Invoices
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AdminNavBar;
