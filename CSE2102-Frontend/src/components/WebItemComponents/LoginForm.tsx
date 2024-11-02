import "../../components-css/LoginForm.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../../misc/AuthContext"; // Import the useAuth hook

function LoginForm() {
    const [details, setDetails] = useState({
        id: "",
        first_name: "",
        last_name: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);

    const { setAuthData } = useAuth(); // Destructure setAuthData from context

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8081/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(details),
            });

            if (response.ok) {
                const data = await response.json();
                // Set the Staff_ID, First_Name, and Last_Name in context
                setAuthData(details.id, details.first_name, details.last_name);
                localStorage.setItem("token", data.token);
                forward(data.role);
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Login failed");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    function forward(role: string) {
        if (role === "Admin") {
            window.location.href = "http://localhost:5173/admin/";
        } else if (role === "Doctor" || role === "Nurse") {
            window.location.href = "http://localhost:5173/med/";
        }
    }

    const invalidStyle = {
        margin: "20px 0px 0px 0px",
        color: "red",
    };

    return (
        <div id="body">
            <div className="container">
                <div className="header">
                    <div className="text">HCDMS Login</div>
                    <div className="underline"></div>
                </div>

                {error && (
                    <div className="error-message" style={invalidStyle}>
                        {error}
                    </div>
                )}

                <form className="inputs" onSubmit={handleSubmit}>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="ID"
                            name="id"
                            value={details.id}
                            onChange={handleCheck}
                            required
                        />
                    </div>

                    <div className="input">
                        <input
                            placeholder="First Name"
                            type="text"
                            name="first_name"
                            value={details.first_name}
                            onChange={handleCheck}
                            required
                        />
                    </div>

                    <div className="input">
                        <input
                            placeholder="Last Name"
                            type="text"
                            name="last_name"
                            value={details.last_name}
                            onChange={handleCheck}
                            required
                        />
                    </div>

                    <div className="input">
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={details.password}
                            onChange={handleCheck}
                            required
                        />
                    </div>

                    <div className="submit-container">
                        <button type="submit" className="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
