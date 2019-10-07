import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/navbar.css'
import MainLogo from './graphic-assets/Main-Logo.svg'

export const NavbarMain: React.FC = () => (
    <React.Fragment>
        <Navbar className="navbar-main"  variant="light" expand="lg">
            <Navbar.Brand href="/">
                <img src={MainLogo} alt="Logo" width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
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
