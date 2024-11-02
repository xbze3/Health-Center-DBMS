import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SearchBarComponent from "../WebItemComponents/SearchBarComponent";
import ListItemComponent from "../WebItemComponents/ListGroupComponent";

interface BillingInvoices {
    Invoice_ID: number;
    Patient_ID: number;
    Amount: number;
    Payment_Status: string;
    Payment_Date: string;
}

interface BillingInvoicesPageProps {
    initialFetchUrl: string;
    searchBaseUrl: string;
}

function BillingInvoicesPageComponent({
    initialFetchUrl,
    searchBaseUrl,
}: BillingInvoicesPageProps) {
    const [data, setData] = useState<BillingInvoices[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token"); // Retrieve the token from localStorage
                console.log(token);
                const response = await fetch(initialFetchUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Attach token in the Authorization header
                    },
                });

                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch appointments: ${response.statusText}`
                    );
                }

                const data: BillingInvoices[] = await response.json();
                setData(data);
            } catch (err) {
                console.error(err); // Log the error
            }
        };

        fetchData();
    }, [initialFetchUrl]);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${searchBaseUrl}/${searchQuery}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(
                    `Failed to search Billing and Invoices: ${response.statusText}`
                );
            }

            const data: BillingInvoices[] = await response.json();
            setData(data);
        } catch (err) {
            console.error(err); // Log the error
        }
    };

    return (
        <>
            <SearchBarComponent
                searchQuery={searchQuery}
                onSearchChange={(e) => setSearchQuery(e.target.value)}
                onSearchSubmit={handleSearch}
            />

            <ListGroup as="ul">
                {Array.isArray(data) ? (
                    data.map((d, i) => (
                        <ListItemComponent
                            key={i}
                            title={`Invoice ID: ${d.Invoice_ID}`}
                            details={`Patient ID: ${d.Patient_ID} | Amount: $${
                                d.Amount
                            } | Payment Status: ${
                                d.Payment_Status
                            } | Payment Date: ${
                                d.Payment_Date != null
                                    ? d.Payment_Date.substring(0, 10)
                                    : "Not Yet Paid"
                            }`}
                        />
                    ))
                ) : (
                    <ListGroup.Item>No data available</ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
}

export default BillingInvoicesPageComponent;
