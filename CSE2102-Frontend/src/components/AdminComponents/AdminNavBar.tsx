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
        <Navbar.Brand href="#">HCMS Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "300px" }}
            navbarScroll
          >
            <Link to={`/admin/staff`}>
              <Nav.Link href="#action5">Staff</Nav.Link>
            </Link>
            <Link to={`/admin/appointments`}>
              <Nav.Link href="#action2">Appointments</Nav.Link>
            </Link>
            <Link to={`/admin/medical-records`}>
              <Nav.Link href="#action2">Medical Records</Nav.Link>
            </Link>
            <Link to={`/admin/patients`}>
              <Nav.Link href="#action3">Patients</Nav.Link>
            </Link>
            <Link to={`/admin/prescriptions`}>
              <Nav.Link href="#action4">Prescriptions</Nav.Link>
            </Link>
            <Link to={`/admin/billing-invoices`}>
              <Nav.Link href="#action6">Billing / Invoices</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavBar;
