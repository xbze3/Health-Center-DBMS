import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../components-css/AdminComponentsCss/AdminNavBar.css";
import { useAuth } from "../../../src/misc/AuthContext";

function DoctorNavBar() {
    const { First_Name, Last_Name } = useAuth();

    return (
        <Navbar
            bg="secondary"
            data-bs-theme="dark"
            expand="lg"
            className="bg-body-tertiary"
        >
            <Container fluid>
                <Navbar.Brand as={Link} to={`/med/`}>
                    {`${First_Name} ${Last_Name}'s`} Dashboard
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "300px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={`/med/appointments`}>
                            Appointments
                        </Nav.Link>

                        <Nav.Link as={Link} to={`/med/medical-records`}>
                            Medical Records
                        </Nav.Link>

                        <Nav.Link as={Link} to={`/med/prescriptions`}>
                            Prescriptions
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DoctorNavBar;
