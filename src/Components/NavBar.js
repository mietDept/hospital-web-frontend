import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    Container,
    Nav,
    NavDropdown,
    Navbar,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

import { logout } from "../actions/userActions";

const NavBar = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, loading, userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand className="ms-3" href="#">
                    PTS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link></Nav.Link>
                        <Nav.Link>Link</Nav.Link>
                    </Nav>
                    {userInfo ? (
                        <Nav className="d-flex pe-5">
                            <NavDropdown
                                title="profile"
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Sign Out
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Settings
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    ) : null}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
