import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const links = [];
const contacts = [];

const Footer = () => {
  return (
    <Container>
      <footer class="footer pt-6 pb-5 bg-dark text-white">
        <Row>
          <Col>
            <img class="navbar-brand-dark mb-4" height="35" src="../../assets/img/brand/light.svg" alt="Logo light" />
            <p>Pixel Pro is a premium Bootstrap 5 UI Kit that will help you prototype and design beautiful, creative
                    and modern websites.</p>
            <ul class="social-buttons mb-5 mb-lg-0">
              <li>
                <a href="https://twitter.com/themesberg" aria-label="twitter social link"
                  class="icon-white me-2">
                  <span class="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/themesberg/" class="icon-white me-2"
                  aria-label="facebook social link">
                  <span class="fab fa-facebook"></span>
                </a>
              </li>
              <li>
                <a href="https://github.com/themesberg" aria-label="github social link" class="icon-white me-2">
                  <span class="fab fa-github"></span>
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/themesberg" class="icon-white" aria-label="dribbble social link">
                  <span class="fab fa-dribbble"></span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default Footer;