import CardComponent from "./cardComponent";
import "../../components-css/CardComponent.css";
import appointmentImage from "../../assets/appointment.png";

function CardScreenComponent() {
    return (
        <div className="centered-container">
            <div className="card-row">
                <CardComponent imageSrc={appointmentImage} />
                <CardComponent imageSrc={appointmentImage} />
                <CardComponent imageSrc={appointmentImage} />
                <CardComponent imageSrc={appointmentImage} />
                <CardComponent imageSrc={appointmentImage} />
                <CardComponent imageSrc={appointmentImage} />
            </div>
        </div>
    );
}

export default CardScreenComponent;
