import React from "react";
import { useDispatch } from "react-redux";
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

// import { signOut } from "../store/actions/userActions";

const NavBar = () => {
    // const auth = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate("/");
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
                    <Nav className="d-flex pe-5 me-3">
                        <NavDropdown
                            title="Profile"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="#action3">
                                Sign In
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">
                                Sign Out
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Settings
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
