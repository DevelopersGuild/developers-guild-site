import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const NavbarMain: React.FC = () => (
    <React.Fragment>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Developers Guild</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Link to="/about">About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/contributing">Contributing</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/contact">Contact Us</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/roles">Roles</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </React.Fragment>
);
