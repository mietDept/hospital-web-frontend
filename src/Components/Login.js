import React, { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/HospitalUser";
import "./Login.css";

const Login = (props) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={}>
                <p>Email</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                />
                <p>Password</p>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                />
                <button type="submit">login</button>
            </form>
        </div>
    );
};

export default Login;
