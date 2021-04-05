import React from "react";
import Link from "next/link";
import Image from "next/image"
import { Navbar, Nav } from "react-bootstrap";

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
      <Link href={node.path}>
        <a className="nav-link">{node.name}</a>
      </Link>
    </Nav.Item>)
}

const NavbarMain = (props: TProps) => {
  const navlinks = getNavLinks();

  return (
    <React.Fragment>
      <Navbar
        className="navbar-main"
        bg="dark"
        variant="dark"
        expand="md"
      >
        <Navbar.Brand
          className="d-flex p-0 mx-0 align-items-center"
          href="/"
        >
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={40}
            height={40}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" />
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
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarMain;