import React from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import SaferLink from "./SaferLink.react";

type TLinkMetaInfo = Readonly<{
  name: string;
  path: string;
  external: boolean;
}>;

type TLRendererProps = Readonly<{
  node: TLinkMetaInfo;
}>;

type TProps = Readonly<{
  links: ReadonlyArray<TLinkMetaInfo>;
}>;

function LinkRenderer({ node }: TLRendererProps) {
  if (node.external) {
    return (
      <Nav.Item>
        <SaferLink className="nav-link" href={node.path}>
          {node.name}
        </SaferLink>
      </Nav.Item>
    );
  }
  return (
    <Nav.Item>
      <Link href={node.path}>
        <a className="nav-link">{node.name}</a>
      </Link>
    </Nav.Item>
  );
}

export default function NavbarMain(props: TProps) {
  return (
    <React.Fragment>
      <Navbar className="navbar-main" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="assets/logo.svg"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            style={{ color: "black", fontWeight: "bold" }}
          >
            {props.links.map((node) => (
              <LinkRenderer key={node.path} node={node} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
