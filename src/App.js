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
import { Container } from "react-bootstrap";

function App() {
    const userLogin = useSelector((state) => state.userLogin);
    const dispatch = useDispatch();

    const { error, loading, userInfo } = userLogin;

    // useEffect(() => {
    //     dispatch(loadUser());
    // }, [dispatch]);

    return (
        <React.Fragment>
            <main>
                <NavBar />
                <Container>
                    <Routes>
                        <Route
                            path="/"
                            element={userInfo ? <Hospital /> : <SignIn />}
                        />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="*" element={Error} />
                    </Routes>
                </Container>
            </main>
        </React.Fragment>
    );
}

export default App;
