import Alert from "react-bootstrap/Alert";

function LinksExample() {
    return (
        <>
            {["danger"].map((variant) => (
                <Alert key={variant} variant={variant}>
                    Please{" "}
                    <Alert.Link href="http://localhost:5173/">
                        Login{" "}
                    </Alert.Link>
                    to view content.
                </Alert>
            ))}
        </>
    );
}

export default LinksExample;
