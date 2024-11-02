import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SearchBarComponent from "../WebItemComponents/SearchBarComponent";
import ListItemComponent from "../WebItemComponents/ListGroupComponent";

interface StaffMember {
    Staff_ID: number;
    First_Name: string;
    Last_Name: string;
    Role: string;
    Specialty: string;
    Contact_Number: string;
    Email: string;
}

interface StaffPageProps {
    initialFetchUrl: string;
    searchBaseUrl: string;
}

function StaffPageComponent({
    initialFetchUrl,
    searchBaseUrl,
}: StaffPageProps) {
    const [data, setData] = useState<StaffMember[]>([]);
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
                        `Failed to fetch Staff Member: ${response.statusText}`
                    );
                }

                const data: StaffMember[] = await response.json();
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
                    `Failed to search Staff Member: ${response.statusText}`
                );
            }

            const data: StaffMember[] = await response.json();
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
                            title={`${d.First_Name} ${d.Last_Name}`}
                            details={`Role: ${d.Role} | Specialty: ${d.Specialty} | Contact Number: ${d.Contact_Number} | Email: ${d.Email}`}
                            badgeText={`ID: ${d.Staff_ID}`}
                        />
                    ))
                ) : (
                    <ListGroup.Item>No data available</ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
}

export default StaffPageComponent;
