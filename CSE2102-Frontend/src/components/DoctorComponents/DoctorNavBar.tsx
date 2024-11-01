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
                <Link to={`/admin/`}>
                    <Navbar.Brand href="#">
                        {`${First_Name} ${Last_Name}'s`} Dashboard
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "300px" }}
                        navbarScroll
                    >
                        <Link to={`/med/appointments`}>
                            <Nav.Link href="#action1">Appointments</Nav.Link>
                        </Link>

                        <Link to={`/med/medical-records`}>
                            <Nav.Link href="#action2">Medical Records</Nav.Link>
                        </Link>

                        <Link to={`/med/prescriptions`}>
                            <Nav.Link href="#action3">Prescriptions</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DoctorNavBar;
