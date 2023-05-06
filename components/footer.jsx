import React, { useEffect } from "react";
import Link from "next/link";
import { StyleSheet, css } from "aphrodite";
import { Container, Row, Col } from "react-bootstrap";

import SaferLink from "./SaferLink.react";
import {
  getNavLinks,
  getAdvisorLinks,
  getCommunityLinks,
  getDocumentLinks,
} from "../lib/links";

function LinkRenderer({ link }) {
  return link.external ? (
    <SaferLink
      className={`nav-link ${css(styles.footerlink)}`}
      href={link.path}
    >
      {link.name}
    </SaferLink>
  ) : (
    <Link href={link.path} className={`nav-link ${css(styles.footerlink)}`}>
      {link.name}
    </Link>
  );
}

const Footer = () => {
  const navlinks = getNavLinks();
  const advisors = getAdvisorLinks();
  const communitylinks = getCommunityLinks();
  const documents = getDocumentLinks();

  return (
    <Container
      fluid
      className="footer d-flex flex-column align-items-center bg-lighter-dark text-white text-center pb-4 px-0"
    >
      <Row className="justify-content-center mx-0 py-4">
        <img
          src="/assets/icons/logo.svg"
          height={55}
          width={55}
          alt="DG Logo"
        />
      </Row>
      <Container fluid="sm" className={css(styles.communitybar)}>
        <Row className="d-flex justify-content-around align-items-center mx-5 my-2">
          {communitylinks.map((link) => (
            <div key={link.path}>
              <a rel="noreferrer noopener" target="__blank" href={link.path}>
                <img
                  className={css(styles.communitylink)}
                  src={link.logo}
                  height={40}
                  width={40}
                />
              </a>
            </div>
          ))}
        </Row>
      </Container>
      <div className={css(styles.divider)} />
      <Container fluid="sm" className="w-60">
        <Row className="mx-0 w-100 justify-content-around">
          <Col xs={4}>
            <strong>Navigation</strong>
            {navlinks.map((link) => (
              <LinkRenderer key={link.path} link={link} />
            ))}
          </Col>
          <Col xs={4}>
            <strong>Advisors</strong>
            {advisors.map((link) => (
              <LinkRenderer key={link.path} link={link} />
            ))}
          </Col>
          <Col xs={4}>
            <strong>Documents</strong>
            {documents.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link ${css(styles.footerlink)}`}
                target="__blank"
              >
                {link.name}
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
      <div className={css(styles.divider)} />
    </Container>
  );
};

const styles = StyleSheet.create({
  footerlink: {
    padding: "0.1rem 0 !important",
  },
  divider: {
    display: "inline-block",
    height: "0.05rem !important",
    width: "85vw !important",
    backgroundColor: "#bdbdbd !important",
    margin: "1.75rem 0 !important",
  },
  communitybar: {
    maxWidth: "575.98px",
  },
  communitylink: {
    filter: "saturate(0) invert(1)",
    display: "inline-block",
    ":hover": {
      filter: "invert(0.65)",
    },
  },
});

export default Footer;
