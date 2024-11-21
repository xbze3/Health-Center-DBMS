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
    date: string;
    time: string;
    reason_for_visit: string;
}

function AppointmentsAdditionForm() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        page: yup.string(),
        patientID: yup.string().required("Patient ID is required"),
        staffID: yup.string().required("Staff ID is required"),
        date: yup.string().required("Date is required"),
        time: yup.string().required("Time is required"),
        reason_for_visit: yup.string().required("Reason for visit is required"),
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
                const data = await response.json();
                console.log("Record inserted successfully:", data);

                // Add any additional logic here, e.g., resetting the form or showing a success message
            } else {
                const errorData = await response.json();
                console.error(
                    "Insert failed:",
                    errorData.message || "Unknown error"
                );
            }
        } catch (err) {
            console.error("An error occurred while inserting the record:", err);
        }
    }

    return (
        <>
            <div className={isVisible ? "showAddBox" : "hideAddBox"}>
                <Formik<FormValues>
                    validationSchema={schema}
                    onSubmit={handleFormSubmit}
                    initialValues={{
                        page: "appointments",
                        patientID: "",
                        staffID: "",
                        date: "",
                        time: "",
                        reason_for_visit: "",
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
                                            value={values.patientID}
                                            placeholder="E.g. 1"
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
                                            value={values.staffID}
                                            placeholder="E.g. 23"
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
                                        controlId="validationFormik03"
                                    >
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="date"
                                            value={values.date}
                                            placeholder="Date"
                                            onChange={handleChange}
                                            isInvalid={!!errors.date}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.date}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="6"
                                        controlId="validationFormik04"
                                    >
                                        <Form.Label>Time</Form.Label>
                                        <Form.Control
                                            type="time"
                                            placeholder="E.g. 12:00:00"
                                            name="time"
                                            value={values.time}
                                            onChange={handleChange}
                                            isInvalid={!!errors.time}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.time}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="6"
                                        controlId="validationFormik05"
                                    >
                                        <Form.Label>
                                            Reason for Visit
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="reason_for_visit"
                                            placeholder="E.g. Emergency"
                                            value={values.reason_for_visit}
                                            onChange={handleChange}
                                            isInvalid={
                                                !!errors.reason_for_visit
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.reason_for_visit}
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

export default AppointmentsAdditionForm;
