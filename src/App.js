import { Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Hospital from "./Pages/Hospital";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";

function App() {
  const auth = useSelector((state) => state.auth);
  
    return (
        <Fragment>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hospital" element={<Hospital />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={Error} />
            </Routes>
        </Fragment>
    );
}

export default App;
