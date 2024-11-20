import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../components-css/addForm.css";
import "../../components-css/addFormButton.css";
import * as formik from "formik";
import * as yup from "yup";
import { useState } from "react";

function MedicalRecordsAdditionForm() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        patientID: yup.string().required(),
        staffID: yup.string().required(),
        diagnosis: yup.string().required(),
        treatment: yup.string().required(),
        date: yup.string().required(),
        notes: yup.string().required(),
    });

    const [isVisible, setIsVisible] = useState(false);

    function toggleAddBox() {
        setIsVisible((prevState) => !prevState);
    }

    return (
        <>
            <div className={isVisible ? "showAddBox" : "hideAddBox"}>
                <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                        patientID: "",
                        staffID: "",
                        diagnosis: "",
                        treatment: "",
                        date: "",
                        notes: "",
                        emergency_contact: "",
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
                                            type="date"
                                            name="diagnosis"
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
