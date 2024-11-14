import "../../components-css/DoctorCardComponent.css";
import { Card, Col } from "react-bootstrap";

// Define the type for the props
interface CardComponentProps {
    imageSrc: string; // imageSrc is a string
    headerText: string; // headerText is a string
    cardText: string; // cardText is a string
}

function CardComponent({ imageSrc, headerText, cardText }: CardComponentProps) {
    return (
        <>
            <Col className="Doctor-card-col">
                <Card className="Doctor-card">
                    <Card.Img
                        variant="top"
                        src={imageSrc}
                        className="Doctor-cardIMG"
                    />
                    <Card.Body className="Doctor-card-body">
                        <Card.Title>{headerText}</Card.Title>
                        <Card.Text>Number of Records: {cardText}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default CardComponent;
