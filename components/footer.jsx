import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import SaferLink from "./SaferLink.react";
import styles from "../styles/modules/Footer.module.css";

import {
  getNavLinks,
  getAdvisorLinks,
  getCommunityLinks,
  getDocumentLinks,
} from "../lib/links";

function LinkRenderer({ link }) {
  return link.external ? (
    <SaferLink className={`${styles.footerlink} nav-link`} href={link.path}>
      {link.name}
    </SaferLink>
  ) : (
    <Link href={link.path} className={`${styles.footerlink} nav-link`}>
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
      className={`${styles.footer} d-flex flex-column align-items-center bg-lighter-dark text-white text-center pb-4 px-0`}
    >
      <Row className="justify-content-center mx-0 py-4">
        <img
          src="/assets/icons/logo.svg"
          height={55}
          width={55}
          alt="DG Logo"
        />
      </Row>
      <Container fluid="sm" className={styles.communitybar}>
        <Row className="d-flex justify-content-around align-items-center mx-5 my-2">
          {communitylinks.map((link) => (
            <div key={link.path}>
              <a rel="noreferrer noopener" target="__blank" href={link.path}>
                <img
                  className={styles.communitylink}
                  src={link.logo}
                  height={40}
                  width={40}
                />
              </a>
            </div>
          ))}
        </Row>
      </Container>
      <div className={styles.divider} />
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
        </Row>
      </Container>
      <div className={styles.divider} />
    </Container>
  );
};

export default Footer;

/*
removed constitution as instructed, code snippet if we need to add it back:
<Col xs={4}>
  <strong>Documents</strong>
  {documents.map((link) => (
  <Link
    key={link.path}
    href={link.path}
    className={`${styles.footerlink} nav-link`}
    target="__blank"
  >
  {link.name}
  </Link>
  ))}
  </Col> 
*/
