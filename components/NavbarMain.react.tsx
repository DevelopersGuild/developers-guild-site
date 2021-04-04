import React from "react";
import Link from "next/link";
import Image from "next/image"
import { Navbar, Nav } from "react-bootstrap";

import SaferLink from "./SaferLink.react";
import DiscordLink from "./DiscordLink.react";

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
  const navlinks = [
    { name: "About", path: "/about", external: false },
    { name: "Contact", path: "/contact", external: false },
    { name: "Constitution", path: "/constitution", external: false },
    { name: "Groups", path: "/groups", external: false },
    { name: "DA Hack", path: "https://dahack.dev/", external: true },
  ];

  return (
    <React.Fragment>
      <Navbar
        className="navbar-main"
        bg="dark"
        variant="dark"
        expand="md"
      >
        <Navbar.Brand href="/">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="d-inline-block align-top"
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
            <DiscordLink />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarMain;