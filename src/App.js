import { Routes, Route } from "react-router-dom";
import React, { createContext, Fragment, useContext } from "react";

import "./App.css";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Hospital from "./Pages/Hospital";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";

function App() {
  const authctx = useContext(AuthContext);
  return (
    <Fragment>
      <NavBar />
      <main>
        {!authctx.isLoggedIn && <Login />}
        {authctx.isLoggedIn && <Home />}
      </main>
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
