import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../components-css/addForm.css";
import "../../components-css/addFormButton.css";
import * as formik from "formik";
import * as yup from "yup";
import { useState } from "react";

interface FormValues {
    page: string;
    patientID: string;
    staffID: string;
    diagnosis: string;
    treatment: string;
    date: string;
    notes: string;
}

function MedicalRecordsAdditionForm() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        page: yup.string(),
        patientID: yup.string().required("Patient ID is required"),
        staffID: yup.string().required("Staff ID is required"),
        diagnosis: yup.string().required("Diagnosis is required"),
        treatment: yup.string().required("Treatment is required"),
        date: yup.string().required("Date is required"),
        notes: yup.string().required("Notes are required"),
    });

    const [isVisible, setIsVisible] = useState(false);

    function toggleAddBox() {
        setIsVisible((prevState) => !prevState);
    }

    async function handleFormSubmit(values: FormValues) {
        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem("token");

            const response = await fetch("http://localhost:8081/insert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
                },
                body: JSON.stringify(values),
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
    }

    return (
        <>
            <div className={isVisible ? "showAddBox" : "hideAddBox"}>
                <Formik<FormValues>
                    validationSchema={schema}
                    onSubmit={handleFormSubmit}
                    initialValues={{
                        page: "medical-records",
                        patientID: "",
                        staffID: "",
                        diagnosis: "",
                        treatment: "",
                        date: "",
                        notes: "",
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
                                        <Form.Label>Patient ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="patientID"
                                            placeholder="E.g. 1"
                                            value={values.patientID}
                                            onChange={handleChange}
                                            isInvalid={!!errors.patientID}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.patientID}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationFormik02"
                                    >
                                        <Form.Label>Staff ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="staffID"
                                            placeholder="E.g. 20"
                                            value={values.staffID}
                                            onChange={handleChange}
                                            isInvalid={!!errors.staffID}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.staffID}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationFormik02"
                                    >
                                        <Form.Label>Diagnosis</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="diagnosis"
                                            placeholder="E.g. Fracture"
                                            value={values.diagnosis}
                                            onChange={handleChange}
                                            isInvalid={!!errors.diagnosis}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.diagnosis}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="6"
                                        controlId="validationFormik03"
                                    >
                                        <Form.Label>Treatment</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="treatment"
                                            placeholder="E.g. Amoxicillin 460 mg"
                                            value={values.treatment}
                                            onChange={handleChange}
                                            isInvalid={!!errors.treatment}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.treatment}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationFormik04"
                                    >
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="date"
                                            value={values.date}
                                            onChange={handleChange}
                                            isInvalid={!!errors.date}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.date}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationFormik04"
                                    >
                                        <Form.Label>Notes</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="notes"
                                            placeholder="E.g. Follow-up needed"
                                            value={values.notes}
                                            onChange={handleChange}
                                            isInvalid={!!errors.notes}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.notes}
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

export default MedicalRecordsAdditionForm;
