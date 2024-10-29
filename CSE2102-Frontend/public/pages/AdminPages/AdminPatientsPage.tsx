// import { useEffect, useState } from "react";
// import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
// import Badge from "react-bootstrap/Badge";
// import ListGroup from "react-bootstrap/ListGroup";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// interface Patients {
//     Patient_ID: number;
//     First_Name: string;
//     Last_Name: string;
//     Date_of_Birth: string;
//     Gender: string;
//     Contact_Number: string;
//     Address: string;
//     Emergency_Contact: string;
// }

// function AdminPatientsPage() {
//     const [data, setData] = useState<Patients[]>([]);
//     const [searchQuery, setSearchQuery] = useState("");

//     useEffect(() => {
//         fetch("http://localhost:8081/admin-patients")
//             .then((res) => res.json())
//             .then((data: Patients[]) => {
//                 setData(data);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     const handleSearch = (event: React.FormEvent) => {
//         event.preventDefault();
//         fetch(`http://localhost:8081/admin-patients/${searchQuery}`)
//             .then((res) => res.json())
//             .then((data: Patients[]) => setData(data))
//             .catch((err) => console.log(err));
//     };

//     return (
//         <>
//             <AdminNavBar />

//             <Form className="d-flex m-3" onSubmit={handleSearch}>
//                 <Form.Control
//                     type="search"
//                     placeholder="SQL Search Query"
//                     className="me-2"
//                     aria-label="Search"
//                     value={searchQuery} // Bind the input value to state
//                     onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
//                 />
//                 <Button variant="outline-success" onClick={handleSearch}>
//                     Search
//                 </Button>
//             </Form>

//             <ListGroup as="ul">
//                 {Array.isArray(data) ? (
//                     data.map((d, i) => (
//                         <ListGroup.Item
//                             as="li"
//                             className="d-flex justify-content-between align-items-start"
//                             key={i}
//                         >
//                             <div className="ms-2 me-auto">
//                                 <div className="fw-bold">{`${d.First_Name} ${d.Last_Name}`}</div>
//                                 {`Date of Birth: ${d.Date_of_Birth.substring(
//                                     0,
//                                     10
//                                 )} | Gender: ${d.Gender} | Contact Number: ${
//                                     d.Contact_Number
//                                 } | Address: ${
//                                     d.Address
//                                 } | Emergency Contact: ${d.Emergency_Contact}`}
//                             </div>
//                             <Badge bg="primary" pill>
//                                 ID: {d.Patient_ID}
//                             </Badge>
//                         </ListGroup.Item>
//                     ))
//                 ) : (
//                     <ListGroup.Item>No data available</ListGroup.Item>
//                 )}
//             </ListGroup>
//         </>
//     );
// }

// export default AdminPatientsPage;

import PatientsPageComponent from "../../../src/components/PatientsPageComponent";

function AdminPatientsPage() {
    return (
        <PatientsPageComponent
            initialFetchUrl="http://localhost:8081/admin-patients"
            searchBaseUrl="http://localhost:8081/admin-patients"
        />
    );
}

export default AdminPatientsPage;
