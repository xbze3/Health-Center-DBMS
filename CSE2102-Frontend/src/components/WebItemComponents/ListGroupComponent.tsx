import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

interface ListItemProps {
    title: string;
    details: string;
    badgeText?: string; // Mark badgeText as optional
}

const ListItemComponent: React.FC<ListItemProps> = ({
    title,
    details,
    badgeText,
}) => {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{title}</div>
                {details}
            </div>
            {/* Conditionally render the badge */}
            {badgeText && (
                <Badge bg="primary" pill>
                    {badgeText}
                </Badge>
            )}
        </ListGroup.Item>
    );
};

export default ListItemComponent;
