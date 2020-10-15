import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { make as SaferLink } from "./SaferLink.bs";
import { ix } from "../ix/ix.gen";
import styles from "../styles/navbar.module.css";

const NavbarMain = () => (
  <>
    <Navbar className={styles.navbarMain} bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={ix("Main-Logo.svg")}
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ color: "black", fontWeight: "bold" }}>
          <Nav.Item>
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link href="/constitution">
              <a className="nav-link">Constitution</a>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/lab">
              <a className="nav-link">The Lab</a>
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
  </>
);

export default NavbarMain;
