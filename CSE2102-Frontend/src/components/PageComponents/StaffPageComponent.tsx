import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SearchBarComponent from "../WebItemComponents/SearchBarComponent";
import ListItemComponent from "../WebItemComponents/ListGroupComponent";
import Alert from "../../components/WebItemComponents/Alert";

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
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token"); // Retrieve the token from localStorage
                const response = await fetch(initialFetchUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Attach token in the Authorization header
                    },
                });

                if (!response.ok) {
                    if (response.status == 403) {
                        setError(true);
                    } else `Failed to fetch Member: ${response.statusText}`;
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

            {error && <Alert />}

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
