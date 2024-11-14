import "../../components-css/CardComponent.css";
import { Card, Col } from "react-bootstrap";

// Define the type for the props
interface CardComponentProps {
    imageSrc: string; // imageSrc is a string
}

function CardComponent({ imageSrc }: CardComponentProps) {
    return (
        <>
            <Col className="card-col">
                <Card>
                    <Card.Img variant="top" src={imageSrc} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default CardComponent;
