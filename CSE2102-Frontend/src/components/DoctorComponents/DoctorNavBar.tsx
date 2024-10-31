import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../components-css/AdminComponentsCss/AdminNavBar.css";

function DoctorNavBar() {
    return (
        <Navbar
            bg="secondary"
            data-bs-theme="dark"
            expand="lg"
            className="bg-body-tertiary"
        >
            <Container fluid>
                <Link to={`/admin/`}>
                    <Navbar.Brand href="#">HCDMS Doctor Panel</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "300px" }}
                        navbarScroll
                    >
                        <Link to={`/doctor/appointments`}>
                            <Nav.Link href="#action1">Appointments</Nav.Link>
                        </Link>

                        <Link to={`/doctor/medical-records`}>
                            <Nav.Link href="#action2">Medical Records</Nav.Link>
                        </Link>

                        <Link to={`/doctor/prescriptions`}>
                            <Nav.Link href="#action3">Prescriptions</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DoctorNavBar;
