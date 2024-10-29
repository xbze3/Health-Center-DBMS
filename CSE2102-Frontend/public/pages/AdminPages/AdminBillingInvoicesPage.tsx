// import { useEffect, useState } from "react";
// import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
// import ListGroup from "react-bootstrap/ListGroup";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// interface BillingInvoices {
//     Invoice_ID: number;
//     Patient_ID: number;
//     Amount: number;
//     Payment_Status: string;
//     Payment_Date: string;
// }

// function AdminBillingInvoicesPage() {
//     const [data, setData] = useState<BillingInvoices[]>([]);
//     const [searchQuery, setSearchQuery] = useState("");

//     useEffect(() => {
//         fetch("http://localhost:8081/admin-billing-invoices")
//             .then((res) => res.json())
//             .then((data: BillingInvoices[]) => {
//                 setData(data);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     const handleSearch = (event: React.FormEvent) => {
//         event.preventDefault();
//         fetch(`http://localhost:8081/admin-billing-invoices/${searchQuery}`)
//             .then((res) => res.json())
//             .then((data: BillingInvoices[]) => setData(data))
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
//                                 <div className="fw-bold">{`Invoice ID: ${d.Invoice_ID}`}</div>
//                                 {`Patient ID: ${d.Patient_ID} | Amount: $${
//                                     d.Amount
//                                 } | Payment Status: ${
//                                     d.Payment_Status
//                                 } | Payment Date: ${
//                                     d.Payment_Date != null
//                                         ? d.Payment_Date.substring(0, 10)
//                                         : "Not Yet Paid"
//                                 }`}
//                             </div>
//                         </ListGroup.Item>
//                     ))
//                 ) : (
//                     <ListGroup.Item>No data available</ListGroup.Item>
//                 )}
//             </ListGroup>
//         </>
//     );
// }

// export default AdminBillingInvoicesPage;

import BillingInvoicesPage from "../../../src/components/BillingInvoicesPageComponent";

function AdminBillingInvoicesPage() {
    return (
        <BillingInvoicesPage
            initialFetchUrl="http://localhost:8081/admin-billing-invoices"
            searchBaseUrl="http://localhost:8081/admin-billing-invoices"
        />
    );
}

export default AdminBillingInvoicesPage;
