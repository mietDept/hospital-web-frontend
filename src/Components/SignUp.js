import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signUp } from "../store/actions/authAction";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

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
        dispatch(signUp(user));
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

    if (auth._id) return navigate("/");
    return (
        <Fragment>
            <form onSubmit={handleSignUpFormSubmit}>
                <label htmlFor="">Hospital Name</label>
                <input
                    type="text"
                    placeholder="Enter Hospital Name"
                    value={hospitalName}
                    onChange={(e) => {
                        setHospitalName(e.target.value);
                    }}
                />
                <label htmlFor="">Registered No</label>
                <input
                    type="text"
                    placeholder="Enter Registered No"
                    value={registeredNo}
                    onChange={(e) => {
                        setRegisteredNo(e.target.value);
                    }}
                />
                <label htmlFor="">Certificate No</label>
                <input
                    type="text"
                    placeholder="Enter Certificate No"
                    value={certificateNo}
                    onChange={(e) => {
                        setCertificateNo(e.target.value);
                    }}
                />
                <label htmlFor="">GST No</label>
                <input
                    type="text"
                    placeholder="Enter GST No"
                    value={gstNo}
                    onChange={(e) => {
                        setGstNo(e.target.value);
                    }}
                />
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <label htmlFor="">Enter Again</label>
                <input
                    type="password"
                    placeholder="Re Enter Password"
                    value={rePassword}
                    onChange={(e) => {
                        setRePassword(e.target.value);
                    }}
                />
                <label htmlFor="">Phone No</label>
                <input
                    type="text"
                    placeholder="Phone No"
                    value={phoneNo}
                    onChange={(e) => {
                        setPhoneNo(e.target.value);
                    }}
                />
                <label htmlFor="">Location</label>
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }}
                />
                <label htmlFor="">Address</label>
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
                <label htmlFor="">Speciality</label>
                <input
                    type="text"
                    placeholder="Speciality"
                    value={speciality}
                    onChange={(e) => {
                        setSpeciality(e.target.value);
                    }}
                />
            </form>
        </Fragment>
    );
};

export default SignUp;
