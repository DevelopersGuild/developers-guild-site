import React from "react";
import Link from "next/link";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";

import SaferLink from "./SaferLink.react";
import DiscordLink from "./DiscordLink.react";
import { getNavLinks } from "../lib/links"

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
  return node.external ?
    (<Nav.Item>
      <SaferLink className="nav-link" href={node.path}>
        {node.name}
      </SaferLink>
    </Nav.Item>)
    :
    (<Nav.Item>
      <Link href={node.path} className="nav-link">
        {node.name}
      </Link>
    </Nav.Item>)
}

const NavbarMain = (props: TProps) => {
  const navlinks = getNavLinks();

  return (
    <React.Fragment>
      <Navbar
        sticky="top"
        className="navbar-main py-2 justify-content-center"
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <div className={`${css(navStyles.navElements)} w-100`}>
          <Row className="justify-content-between">
            <Col
              md={12}
              lg={3}
              className="d-flex flex-row justify-content-between"
            >
              <Navbar.Brand
                className="d-flex p-0 mx-0 align-items-center"
                href="/"
              >
                <img
                  src="/assets/icons/logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-collapse" />
            </Col>
            <Col
              md={12}
              lg={9}
            >
              <Navbar.Collapse id="navbar-collapse" className="justify-content-end">
                <Nav
                  className="align-items-center"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  {navlinks.map((node) => (
                    <LinkRenderer
                      key={node.path}
                      node={node}
                    />
                  ))}
                  <DiscordLink
                    className="mx-2"
                  />
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

const navStyles = StyleSheet.create({
  navElements: {
    maxWidth: '1199.98px'
  }
})

export default NavbarMain;
