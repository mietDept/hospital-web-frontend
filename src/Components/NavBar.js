import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { signOut } from "../store/actions/authActions";

const NavBar = () => {
    // const auth = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(signOut());
        navigate("/");
    };

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
            <Link to="/hospital/signin">
                <button className="btn">signIn</button>
            </Link>
            <button className="btn" onClick={handleSignOut}>
                SignOut
            </button>
            <Link to="/hospital/signup">
                <button className="btn">Signup</button>
            </Link>
        </nav>
    );
};

export default NavBar;
