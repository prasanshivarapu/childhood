import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";

const Example = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if password is correct
        if (password === "may29") {
            navigate("/chat");
        } else {
            setError("Password is invalid");
        }
    };

    const handleChange = (event) => {
        setPassword(event.target.value);
        setError(""); // Clear error message on password change
    };

    return (
        <div className="home2">
            <div className="home">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    {error && <p className="error-message">{error}</p>}

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Example;
