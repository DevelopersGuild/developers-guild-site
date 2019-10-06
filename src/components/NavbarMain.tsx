import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const NavbarMain: React.FC = () => (
    <React.Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Developers Guild</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Link className="nav-link" to="/about">About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/contributing">Contributing</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/roles">Roles</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </React.Fragment>
);
