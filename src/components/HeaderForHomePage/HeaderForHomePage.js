import React, { useState } from 'react';
import './HeaderForHomePage.css';
import logo from '../../images/logo.png';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const HeaderForHomePage = (props) => {
    const [user] = useAuthState(auth);
    console.log(user)
    const logOut = () => {
        signOut(auth);
    }

    const [colorChanged, setColorChanged] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorChanged(true);
        }
        else {
            setColorChanged(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const textColor = {
        "color": colorChanged ? "black" : "white"
    }

    return (
        <Navbar variant={colorChanged ? "light" : "dark"} bg={colorChanged ? "light" : "none"} id="navbar" className="navbar py-3" expand="md" sticky="top">
            <Container>
                <Navbar.Brand href="#" as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            Close
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/home" style={textColor} href="#action1" className="header-links m-2">Home</Nav.Link>
                            <Nav.Link style={textColor} href="#action1" className="header-links m-2">Feature</Nav.Link>
                            <Nav.Link style={textColor} href="#action1" className="header-links m-2">Services</Nav.Link>
                            <Nav.Link style={textColor} href="#action1" className="header-links m-2">Tutorial</Nav.Link>
                            <Nav.Link style={textColor} href="#action2" className="header-links m-2">About us</Nav.Link>
                        </Nav>
                        <div className="d-flex justify-content-between">
                        {user ? <button onClick={logOut} className="common-btn">Logout</button> : <Link to="/login"><button className="common-btn">Login</button></Link>}
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default HeaderForHomePage;