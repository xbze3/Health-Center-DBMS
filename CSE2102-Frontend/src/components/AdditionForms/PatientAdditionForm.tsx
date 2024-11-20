import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../components-css/addForm.css";
import "../../components-css/addFormButton.css";
import * as formik from "formik";
import * as yup from "yup";
import { useState } from "react";

function PatientAdditionForm() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        date_of_birth: yup.string().required(),
        gender: yup.string().required(),
        contact_number: yup.string().required(),
        address: yup.string().required(),
        emergency_contact: yup.string().required(),
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
                        first_name: "",
                        last_name: "",
                        date_of_birth: "",
                        gender: "",
                        contact_number: "",
                        address: "",
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
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="first_name"
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
                                        controlId="validationFormik02"
                                    >
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="date_of_birth"
                                            value={values.date_of_birth}
                                            onChange={handleChange}
                                            isInvalid={!!errors.date_of_birth}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.date_of_birth}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="6"
                                        controlId="validationFormik03"
                                    >
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="gender"
                                            value={values.gender}
                                            onChange={handleChange}
                                            isInvalid={!!errors.gender}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.gender}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationFormik04"
                                    >
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="contact_number"
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
                                        controlId="validationFormik04"
                                    >
                                        <Form.Label>address</Form.Label>
                                        <Form.Control
                                            type="address"
                                            name="address"
                                            value={values.address}
                                            onChange={handleChange}
                                            isInvalid={!!errors.address}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.address}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationFormik04"
                                    >
                                        <Form.Label>
                                            Emergency Contact
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="contact_number"
                                            value={values.emergency_contact}
                                            onChange={handleChange}
                                            isInvalid={
                                                !!errors.emergency_contact
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.emergency_contact}
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

export default PatientAdditionForm;
