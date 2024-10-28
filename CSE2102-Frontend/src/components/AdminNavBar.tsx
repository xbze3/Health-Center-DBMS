import { useState } from 'react'; // Import useState
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../components-css/AdminNavBar.css'

function AdminNavBar() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleSearch = () => {
    console.log(searchQuery); // Log the search query to the console
    // Optionally, clear the input after searching
    // setSearchQuery('');
  };

  return (
    <Navbar bg="secondary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">HCMS Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Link to={`/staff`}><Nav.Link href="#action5">Staff</Nav.Link></Link>
            <Link to={`/appointments`}><Nav.Link href="#action2">Appointments</Nav.Link></Link>
            <Link to={`/medical-records`}><Nav.Link href="#action2">Medical Records</Nav.Link></Link>
            <Link to={`/patients`}><Nav.Link href="#action3">Patients</Nav.Link></Link>
            <Link to={`/prescriptions`}><Nav.Link href="#action4">Prescriptions</Nav.Link></Link>
            <Link to={`/billing-invoices`}><Nav.Link href="#action6">Billing / Invoices</Nav.Link></Link>

          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery} // Bind the input value to state
              onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
            />
            <Button variant="outline-success" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavBar;
