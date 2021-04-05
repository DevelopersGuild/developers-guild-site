import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StyleSheet, css } from 'aphrodite';
import { Container, Row, Col } from 'react-bootstrap';

import SaferLink from "./SaferLink.react";
import { getNavLinks, getAdvisorLinks, getCommunityLinks } from "../lib/links"

function LinkRenderer({ link }) {
  return link.external ?
    (
      <SaferLink
        className={`nav-link ${css(styles.footerlink)}`}
        href={link.path}
      >
        {link.name}
      </SaferLink>
    )
    :
    (
      <Link href={link.path}>
        <a className=
          {`nav-link ${css(styles.footerlink)}`}
        >
          {link.name}
        </a>
      </Link>
    )
}

const Footer = () => {
  const navlinks = getNavLinks();
  const advisors = getAdvisorLinks();
  const communitylinks = getCommunityLinks();

  return (
    <Container fluid className="footer pb-4 pt-4 px-0 bg-dark text-white text-center">
      <Row className="justify-content-center mx-0">
        <Image
          src="/assets/icons/logo.svg"
          height={55}
          width={55}
          alt="DG Logo"
        />
      </Row>
      <div className={css(styles.divider)} />
      <Row className="mx-5">
        <Col
          xs={6}
          md={3}
        >
          <strong>Navigation</strong>
          {navlinks.map(link =>
            <LinkRenderer
              key={link.path}
              link={link}
            />
          )}
        </Col>
        <Col
          xs={6}
          md={3}
        >
          <strong>Advisors</strong>
          {advisors.map(link =>
            <LinkRenderer
              key={link.path}
              link={link}
            />
          )}
        </Col>
        <Col
          md={5}
          lg={5}
          xl={4}
          className="d-flex justify-content-around align-items-center mx-3 my-3"
        >
          {communitylinks.map(link =>
            <div
              key={link.path}
            >
              <a
                rel="noreferrer noopener"
                target="__blank"
                href={link.path}
              >
                <Image
                  className={css(styles.communityicon)}
                  src={link.logo}
                  height={40}
                  width={40}
                />
              </a>
            </div>
          )}
        </Col>
      </Row>
      <div className={css(styles.divider)} />
    </Container>
  );
}

const styles = StyleSheet.create({
  footerlink: {
    padding: '0.1rem 0 !important',
  },
  divider: {
    display: 'inline-block',
    height: '0.05rem !important',
    width: '85vw !important',
    backgroundColor: '#bdbdbd !important',
    margin: '1.75rem 0 !important'
  },
  communityicon: {
    filter: 'saturate(0) invert(1)',
    display: 'inline-block',
    ':hover': {
      filter: 'invert(0.65)'
    }
  }
})

export default Footer;