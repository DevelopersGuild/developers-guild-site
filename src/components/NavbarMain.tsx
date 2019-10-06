import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


export const NavbarMain: React.FC = () => (
    <React.Fragment>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Developers Guild</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" href="/contributing">Contributing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3" href="/contact" >Contact Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" href="/roles" >Roles</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </React.Fragment>
);
