import { useEffect, useState } from "react";
import AdminNavBar from "../AdminComponents/AdminNavBar";
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
        fetch(initialFetchUrl)
            .then((res) => res.json())
            .then((data: StaffMember[]) => {
                setData(data);
            })
            .catch((err) => console.log(err));
    }, [initialFetchUrl]);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        fetch(`${searchBaseUrl}/${searchQuery}`)
            .then((res) => res.json())
            .then((data: StaffMember[]) => setData(data))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <AdminNavBar />

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
