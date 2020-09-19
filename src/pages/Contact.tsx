import React from "react";
import { Table } from "react-bootstrap";
import Container from "../components/ui/Shared/Container";
import "../components/styles/image-headers.css";
import ContactHeader from "../components/graphic-assets/contact.jpg";
import { StyleSheet, css } from "aphrodite";
import { NavbarMain } from "../components/ui/NavbarMain";
import SaferLink from "../components/ui/SaferLink";

export const Contact: React.FC = () => (
  <React.Fragment>
    <NavbarMain />
    <br />
    <div className={css(styles.containerOne)}>
      <Container type="normal">
        <h4>Contact The Developers' Guild</h4>
        <p className="text-justify">
          Here are different ways to contact the Developers' Guild.
        </p>
      </Container>
      <img
        className="open-source-header lazyload"
        style={{ width: "30vw", alignSelf: "center" }}
        data-src={ContactHeader}
        alt="Header"
      />
      <Container type="normal">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td colSpan={2}>
                <strong>Contact Methods</strong>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <SaferLink href="mailto:developersguildclub@gmail.com">
                  developersguildclub@gmail.com
                </SaferLink>
              </td>
            </tr>
            <tr>
              <td>Github</td>
              <td>
                <SaferLink href="https://github.com/DevelopersGuild">
                  https://github.com/DevelopersGuild
                </SaferLink>
              </td>
            </tr>
            <tr>
              <td>Facebook</td>
              <td>
                <SaferLink href="https://www.facebook.com/officialdevelopersguild/">
                  https://www.facebook.com/officialdevelopersguild
                </SaferLink>
              </td>
            </tr>
            <tr>
              <td>Instagram</td>
              <td>
                <SaferLink href="https://www.instagram.com/da.devguild/">
                  https://www.instagram.com/da.devguild
                </SaferLink>
              </td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>
                <SaferLink href="https://medium.com/@developersguild">
                  https://medium.com/@developersguild
                </SaferLink>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <strong>Advisors</strong>
              </td>
            </tr>
            <tr>
              <td>Ronald Kleinman</td>
              <td>
                <SaferLink href="mailto:kleinmanronald@deanza.edu">
                  kleinmanronald@deanza.edu
                </SaferLink>
              </td>
            </tr>
            <tr>
              <td>Delia Garbacea</td>
              <td>
                <SaferLink href="mailto:GarbaceaDelia@deanza.edu">
                  GarbaceaDelia@deanza.edu
                </SaferLink>
                or <SaferLink href="tel:408-864-8308">408-864-8308</SaferLink>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  </React.Fragment>
);

const styles = StyleSheet.create({
  containerOne: { display: "flex", flexDirection: "column" },
});