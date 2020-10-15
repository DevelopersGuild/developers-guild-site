import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../styles/navbar.css";
// import MainLogo from "../graphic-assets/Main-Logo.svg";
import { make as SaferLink } from "./SaferLink.bs";

export const NavbarMain: React.FC = () => (
  <React.Fragment>
    <Navbar className="navbar-main" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        {/* <img
          src={MainLogo}
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ color: "black", fontWeight: "bold" }}>
          <Nav.Item>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link className="nav-link" to="/constitution">
              Constitution
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/lab">
              The Lab
            </Link>
          </Nav.Item>
          <Nav.Item>
            <SaferLink className="nav-link" href="https://dahack.dev/">
              DA Hack
            </SaferLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </React.Fragment>
);
