import React, { Fragment, useState } from "react";
import {
    Form,
    Button,
    InputGroup,
    FormControl,
    Col,
    Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../actions/userActions";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const auth = useSelector((state) => state.auth);

    const [hospitalName, setHospitalName] = useState("");
    const [registeredNo, setRegisteredNo] = useState("");
    const [certificateNo, setCertificateNo] = useState("");
    const [gstNo, setGstNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [speciality, setSpeciality] = useState("");

    // const [geoPosition, setGeoPosition] = useState();

    const handleGetLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLocation(`${latitude}, ${longitude}`);
        });
    };

    const handleSignUpFormSubmit = (e) => {
        e.preventDefault();
        const user = {
            hospitalName: hospitalName,
            registeredNo: registeredNo,
            certificateNo: certificateNo,
            gstNo: gstNo,
            email: email,
            password: password,
            phoneNo: phoneNo,
            location: location,
            address: address,
            speciality: speciality,
        };
        dispatch(register(user));
        setHospitalName("");
        setRegisteredNo("");
        setCertificateNo("");
        setGstNo("");
        setEmail("");
        setPassword("");
        setRePassword("");
        setPhoneNo("");
        setLocation("");
        setAddress("");
        setSpeciality("");
        navigate("/");
    };

    return (
        <Fragment>
            <Row className="justify-content-md-center">
                <h1 className="m-4 text-center">Sign Up</h1>
                <Col xs={12} md={12}>
                    <Form onSubmit={handleSignUpFormSubmit}>
                        <Row className="mb-6">
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>Hospital Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Hospital Name"
                                    value={hospitalName}
                                    onChange={(e) => {
                                        setHospitalName(e.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>Registered No</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Registered No"
                                    value={registeredNo}
                                    onChange={(e) => {
                                        setRegisteredNo(e.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-6">
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>Certificate No</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Certificate No"
                                    value={certificateNo}
                                    onChange={(e) => {
                                        setCertificateNo(e.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>GST No</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter GST No"
                                    value={gstNo}
                                    onChange={(e) => {
                                        setGstNo(e.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>Enter Again</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Re Enter Password"
                                    value={rePassword}
                                    onChange={(e) => {
                                        setRePassword(e.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-6">
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>Phone No</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>+91</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Phone No"
                                        value={phoneNo}
                                        onChange={(e) => {
                                            setPhoneNo(e.target.value);
                                        }}
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>Location</Form.Label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="location"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        value={location}
                                        readOnly
                                        required
                                    />
                                    <Button
                                        variant="outline-success"
                                        id="button-addon2"
                                        onClick={handleGetLocation}
                                    >
                                        Get location
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-6">
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Address"
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-4">
                                <Form.Label>Speciality</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Speciality"
                                    value={speciality}
                                    onChange={(e) => {
                                        setSpeciality(e.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-4 float-end">
                            <Button type="submit">SignUp</Button>
                        </Form.Group>
                    </Form>
                    <Row className="float-end mx-2 py-3">
                        <Col>
                            Go back to? <Link to="/">Login</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default SignUp;
