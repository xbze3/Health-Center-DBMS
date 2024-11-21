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
    ID: string;
    terms: boolean;
}

interface Props {
    page: string;
    message: string;
}

function RemovalForm({ page, message }: Props) {
    const { Formik } = formik;

    const schema = yup.object().shape({
        page: yup.string(),
        ID: yup.string().required(`${message} is required`),
        terms: yup
            .bool()
            .required(`Consent must be provided`)
            .oneOf([true], "Terms must be accepted"),
    });

    const [isVisible, setIsVisible] = useState(false);

    function toggleAddBox() {
        setIsVisible((prevState) => !prevState);
    }

    async function handleFormSubmit(values: FormValues) {
        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem("token");

            const response = await fetch("http://localhost:8081/delete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                alert(`Record removed successfully`);

                // Add any additional logic here, e.g., resetting the form or showing a success message
            } else {
                const errorData = await response.json();
                console.log(
                    `Removal failed: ${errorData.message || "Unknown error"}`
                );
            }
        } catch (err) {
            console.log(`An error occurred while removing the record: ${err}`);
        }
    }

    return (
        <>
            <div className={isVisible ? "showRemoveBox" : "hideRemoveBox"}>
                <Formik<FormValues>
                    validationSchema={schema}
                    onSubmit={handleFormSubmit}
                    initialValues={{
                        page: page,
                        ID: "",
                        terms: false,
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
                                        <Form.Label>{message}</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="ID"
                                            value={values.ID}
                                            placeholder="E.g. 34"
                                            onChange={handleChange}
                                            isInvalid={!!errors.ID}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.ID}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            required
                                            name="terms"
                                            label="I consent to the removal of this record"
                                            onChange={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: e.target.name,
                                                        value: e.target.checked,
                                                    },
                                                });
                                            }}
                                            isInvalid={!!errors.terms}
                                            feedback={errors.terms}
                                            feedbackType="invalid"
                                            id="validationFormik0"
                                        />
                                    </Form.Group>
                                </Row>
                                <Button
                                    type="submit"
                                    variant="danger"
                                    className="removeRecordButton"
                                >
                                    Remove Item
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            <Button
                variant="danger"
                className="removeFormButton"
                onClick={toggleAddBox}
            >
                {isVisible ? "Close Form" : "Remove Record"}
            </Button>
        </>
    );
}

export default RemovalForm;
