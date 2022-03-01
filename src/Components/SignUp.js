import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { signUp } from "../store/actions/userActions";

const SignUp = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
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
            rePassword: rePassword,
            phoneNo: phoneNo,
            location: location,
            address: address,
            speciality: speciality,
        };
        dispatch();
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
    };

    return (
        <div className="signup-form">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUpFormSubmit}>
                <p>Hospital Name</p>
                <input
                    type="text"
                    placeholder="Enter Hospital Name"
                    value={hospitalName}
                    onChange={(e) => {
                        setHospitalName(e.target.value);
                    }}
                />
                <p>Registered No</p>
                <input
                    type="text"
                    placeholder="Enter Registered No"
                    value={registeredNo}
                    onChange={(e) => {
                        setRegisteredNo(e.target.value);
                    }}
                />
                <p>Certificate No</p>
                <input
                    type="text"
                    placeholder="Enter Certificate No"
                    value={certificateNo}
                    onChange={(e) => {
                        setCertificateNo(e.target.value);
                    }}
                />
                <p>GST No</p>
                <input
                    type="text"
                    placeholder="Enter GST No"
                    value={gstNo}
                    onChange={(e) => {
                        setGstNo(e.target.value);
                    }}
                />
                <p>Email</p>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <p>Password</p>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <p>Enter Again</p>
                <input
                    type="password"
                    placeholder="Re Enter Password"
                    value={rePassword}
                    onChange={(e) => {
                        setRePassword(e.target.value);
                    }}
                />
                <p>Phone No</p>
                <input
                    type="text"
                    placeholder="Phone No"
                    value={phoneNo}
                    onChange={(e) => {
                        setPhoneNo(e.target.value);
                    }}
                />
                <p>Location</p>
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }}
                    name="loc"
                />
                <button type="button" onClick={handleGetLocation}>
                    Get Location
                </button>
                <p>Address</p>
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
                <p>Speciality</p>
                <input
                    type="text"
                    placeholder="Speciality"
                    value={speciality}
                    onChange={(e) => {
                        setSpeciality(e.target.value);
                    }}
                />
                <button type="submit">SignUp</button>
            </form>
        </div>
    );
};

export default SignUp;
