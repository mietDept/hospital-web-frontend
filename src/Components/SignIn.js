import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { login } from "../actions/userActions";

const SignIn = () => {
    const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    const handleSignInFormSubmit = (e) => {
        e.preventDefault();
        const creds = {
            email: email,
            password: password,
        };
        dispatch(login(email, password));
        setEmail("");
        setPassword("");
        navigate("/");
    };

    return (
        <Container className=" mt-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={4}>
                    <h1 className="text-center">Sign In</h1>
                    <Form onSubmit={handleSignInFormSubmit}>
                        <Form.Group controlId="formBasicEmail" className="mb-4">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-4"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                    </Form>
                    <Row className="py-3">
                        <Col>
                            New User? <Link to="/signup">Register</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;
