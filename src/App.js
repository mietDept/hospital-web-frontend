/* eslint-disable react/jsx-no-undef */
import { Routes, Route } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Error from "./Pages/Error";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Hospital from "./Pages/Hospital";
import Admin from "./Pages/Admin";

import Footer from "./Components/Footer";
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
            <main>
                <NavBar />
                <Container>
                    <Routes>
                        <Route path="/" element={<Hospital />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="*" element={Error} />
                    </Routes>
                </Container>
            </main>
            {/* <Footer /> */}
        </React.Fragment>
    );
}

export default App;
