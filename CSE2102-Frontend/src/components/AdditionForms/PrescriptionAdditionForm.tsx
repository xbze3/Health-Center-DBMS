import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../components-css/addForm.css";
import "../../components-css/addFormButton.css";
import * as formik from "formik";
import * as yup from "yup";
import { useState } from "react";

function PrescriptionAdditionForm() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        patientID: yup.string().required(),
        staffID: yup.string().required(),
        medication_name: yup.string().required(),
        dosage: yup.string().required(),
        instructions: yup.string().required(),
        date_issued: yup.string().required(),
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
                        medication_name: "",
                        dosage: "",
                        instructions: "",
                        date_issued: "",
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
                                            placeholder="E.g. 23"
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
                                        <Form.Label>Medication Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="medication_name"
                                            placeholder="E.g. Amoxicillin"
                                            value={values.medication_name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.medication_name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.medication_name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="6"
                                        controlId="validationFormik03"
                                    >
                                        <Form.Label>Dosage</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="dosage"
                                            placeholder="E.g. 13 mg"
                                            value={values.dosage}
                                            onChange={handleChange}
                                            isInvalid={!!errors.dosage}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.dosage}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationFormik04"
                                    >
                                        <Form.Label>Instructions</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="instructions"
                                            placeholder="E.g. Take at bedtime"
                                            value={values.instructions}
                                            onChange={handleChange}
                                            isInvalid={!!errors.instructions}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.instructions}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationFormik04"
                                    >
                                        <Form.Label>Date Issued</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="date_issued"
                                            value={values.date_issued}
                                            onChange={handleChange}
                                            isInvalid={!!errors.date_issued}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.date_issued}
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

export default PrescriptionAdditionForm;
