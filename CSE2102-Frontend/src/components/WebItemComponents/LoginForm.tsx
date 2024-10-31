import "../../components-css/LoginForm.css";
import { ChangeEvent, FormEvent, useState } from "react";

function LoginForm() {
    const [details, setDetails] = useState({
        id: "",
        first_name: "",
        last_name: "",
        password: "",
    });

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(details);
    };

    return (
        <div id="body">
            <div className="container">
                <div className="header">
                    <div className="text">HCDMS Login</div>
                    <div className="underline"></div>
                </div>

                <form className="inputs" onSubmit={handleSubmit}>
                    <div className="input">
                        {/* <img src={user_icon} alt="Username" /> */}
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
                        {/* <img src={password_icon} alt="Password" /> */}
                        <input
                            placeholder="First Name"
                            type="name"
                            name="first_name"
                            value={details.first_name}
                            onChange={handleCheck}
                            required
                        />
                    </div>

                    <div className="input">
                        {/* <img src={password_icon} alt="Password" /> */}
                        <input
                            placeholder="Last Name"
                            type="name"
                            name="last_name"
                            value={details.last_name}
                            onChange={handleCheck}
                            required
                        />
                    </div>

                    <div className="input">
                        {/* <img src={password_icon} alt="Password" /> */}
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
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
