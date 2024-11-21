import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../components-css/addForm.css";
import "../../components-css/addFormButton.css";
import * as formik from "formik";
import * as yup from "yup";
import { useState } from "react";

function StaffAdditionForm() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        page: yup.string(),
        first_name: yup.string().required("First Name is required"),
        last_name: yup.string().required("Last Name is required"),
        role: yup.string().required("Role is required"),
        specialty: yup.string().required("Specialty is required"),
        contact_number: yup.string().required("Contact Number is required"),
        email: yup
            .string()
            .email("Invalid email format")
            .required("Email is required"),
    });

    const [isVisible, setIsVisible] = useState(false);

    function toggleAddBox() {
        setIsVisible((prevState) => !prevState);
    }

    const handleSubmit = async (values: any) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch("http://localhost:8081/insert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
                },
                body: JSON.stringify(values), // Send the form data as JSON
            });

            if (response.ok) {
                alert(`Record inserted successfully`);

                // Add any additional logic here, e.g., resetting the form or showing a success message
            } else {
                const errorData = await response.json();
                alert(`Insert failed: ${errorData.message || "Unknown error"}`);
            }
        } catch (err) {
            alert(`An error occurred while inserting the record: ${err}`);
        }
    };

    return (
        <>
            <div className={isVisible ? "showAddBox" : "hideAddBox"}>
                <Formik
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                    initialValues={{
                        page: "staff",
                        first_name: "",
                        last_name: "",
                        role: "",
                        specialty: "",
                        contact_number: "",
                        email: "",
                    }}
                >
                    {({ handleSubmit, handleChange, values, errors }) => (
                        <Form
                            noValidate
                            onSubmit={handleSubmit}
                            className="addForm"
                        >
                            <div className="addFormDiv">
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationFormik01"
                                    >
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="first_name"
                                            placeholder="E.g. John"
                                            value={values.first_name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.first_name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.first_name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationFormik02"
                                    >
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="last_name"
                                            placeholder="E.g. Doe"
                                            value={values.last_name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.last_name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.last_name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationFormik03"
                                    >
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="role"
                                            placeholder="E.g. Nurse"
                                            value={values.role}
                                            onChange={handleChange}
                                            isInvalid={!!errors.role}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.role}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="6"
                                        controlId="validationFormik04"
                                    >
                                        <Form.Label>Specialty</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="specialty"
                                            placeholder="E.g. Oncology"
                                            value={values.specialty}
                                            onChange={handleChange}
                                            isInvalid={!!errors.specialty}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.specialty}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationFormik05"
                                    >
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="contact_number"
                                            placeholder="E.g. 555-5555"
                                            value={values.contact_number}
                                            onChange={handleChange}
                                            isInvalid={!!errors.contact_number}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.contact_number}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationFormik06"
                                    >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="E.g. johndoe@gmail.com"
                                            value={values.email}
                                            onChange={handleChange}
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Button
                                    type="submit"
                                    variant="success"
                                    className="submitRecordButton"
                                >
                                    Insert
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            <Button
                variant="success"
                className="addFormButton"
                onClick={toggleAddBox}
            >
                {isVisible ? "Close Form" : "Add Record"}
            </Button>
        </>
    );
}

export default StaffAdditionForm;
