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
    amount: string;
    payment_status: string;
    payment_date: string;
}

function BillingInvoicesAdditionForm() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        page: yup.string(),
        patientID: yup.string().required("Patient ID is required"),
        amount: yup.string().required("Amount is required"),
        payment_status: yup.string().required("Payment status is required"),
        payment_date: yup.string().required("Payment date is required"),
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
                        page: "billing-invoices",
                        patientID: "",
                        amount: "",
                        payment_status: "",
                        payment_date: "",
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
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="amount"
                                            placeholder="E.g. $300.00"
                                            value={values.amount}
                                            onChange={handleChange}
                                            isInvalid={!!errors.amount}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.amount}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationFormik02"
                                    >
                                        <Form.Label>Payment Status</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="payment_status"
                                            placeholder="E.g. Pending / Paid"
                                            value={values.payment_status}
                                            onChange={handleChange}
                                            isInvalid={!!errors.payment_status}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.payment_status}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="6"
                                        controlId="validationFormik03"
                                    >
                                        <Form.Label>Payment Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="payment_date"
                                            value={values.payment_date}
                                            onChange={handleChange}
                                            isInvalid={!!errors.payment_date}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.payment_date}
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

export default BillingInvoicesAdditionForm;
