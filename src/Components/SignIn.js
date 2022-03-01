import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

import { signIn } from "../store/actions/authActions";

const SignIn = () => {
    const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignInFormSubmit = (e) => {
        e.preventDefault();
        const creds = {
            email: email,
            password: password,
        };
        dispatch(signIn(creds));

        setEmail("");
        setPassword("");
    };

    // if (auth._id) return navigate("/");

    return (
        <div className="signin-form">
            <h1>Sign In</h1>
            <form onSubmit={handleSignInFormSubmit}>
                <p>Email</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <p>Password</p>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button type="submit">Signin</button>
            </form>
        </div>
    );
};

export default SignIn;
