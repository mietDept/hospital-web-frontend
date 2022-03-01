/* eslint-disable react/jsx-no-undef */
import { Routes, Route } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Hospital from "./Pages/Hospital";
import Profile from "./Components/Profile";

import SignUp from "./Components/SignUp";
import NavBar from "./Components/NavBar";
import SignIn from "./Components/SignIn";
// import {  } from "./store/actions/authActions";

function App() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(loadUser());
    // }, [dispatch]);

    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hospital" element={<Hospital />} />
                <Route path="/hospital/profile" element={<Profile />} />
                <Route path="/hospital/signin" element={<SignIn />} />
                <Route path="/hospital/signup" element={<SignUp />} />
                <Route path="*" element={Error} />
            </Routes>

        </React.Fragment>
    );
}

export default App;
