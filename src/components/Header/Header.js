import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = (props) => {
    const [user] = useAuthState(auth);
    console.log(user)
    const logOut = () => {
        signOut(auth);
    }

    const location = useLocation();

    const textColor = {
        "color": "black"
    }

    const [display, setDisplay] = useState("none");

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/home') {
            setDisplay("none")
        }
        else {
            setDisplay("block")
        }
    }, [location]);

    return (
        <div className="header">
            <Navbar style={{ display: `${display}` }} variant="light" bg="light" id="navbar" className="navbar py-3" expand="md" sticky="top">
                <Container>
                    <Navbar.Brand href="#" as={Link} to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
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
                                <Nav.Link as={Link} to="/blogs" style={textColor} href="#action1" className="header-links m-2">Blogs</Nav.Link>
                                {user && <Nav.Link as={Link} to="/manageInventories" style={textColor} href="#action1" className="header-links m-2">Manage Items</Nav.Link>}
                                {user && <Nav.Link as={Link} to="/addNewItem" style={textColor} href="#action1" className="header-links m-2">Add Items</Nav.Link>}
                                {user && <Nav.Link as={Link} to="/myItems" style={textColor} href="#action1" className="header-links m-2">My Items</Nav.Link>}
                            </Nav>
                            <div className="d-flex justify-content-between">
                                {user ? <button onClick={logOut} className="common-btn">Logout</button> : <Link to="/login"><button className="common-btn">Login</button></Link>}
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;