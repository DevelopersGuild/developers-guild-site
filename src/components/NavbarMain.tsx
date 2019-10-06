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
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                            <Nav.Link><Link to="/contributing">Contributing</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                       <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                            <Nav.Link><Link to="/roles">Roles</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </React.Fragment>
);
