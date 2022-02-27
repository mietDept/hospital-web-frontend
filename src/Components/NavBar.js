import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <li className="list">
        <Link to="/">Home</Link>
      </li>
      <li className="list">
        <Link to="/Hospital">Hospital</Link>
      </li>
      <li className="list">
        <Link to="/patients">Patients</Link>
      </li>
      <button className="btn">Login</button>
      <button className="btn">Logout</button>
      <button className="btn">Signup</button>
    </nav>
  );
};

export default NavBar;
