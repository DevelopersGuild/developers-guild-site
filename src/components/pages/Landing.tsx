import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import MainLogo from "../graphic-assets/Main-Logo.svg";
import GithubBar from "../ui/GithubBar";
import Curated from "../ui/Curated";
import { StyleSheet, css } from "aphrodite";
import { youtubeMainPageHardCoded } from "../data/hardcode";

export const Landing: React.FC = () => (
  <React.Fragment>
    <br />
    <Container>
      <Jumbotron>
        <div className={css(styles.jumboContainer)}>
          <img
            className="lazyload"
            data-src={MainLogo}
            style={{
              marginRight: 20,
              width: "150px",
              height: "150px",
            }}
            alt="Logo"
          />
          <div>
            <h1>Developers Guild - De Anza</h1>
            <p>A project and contribution based programming club.</p>
            <p>Fridays 1:30PM-4:00PM AT311</p>
          </div>
        </div>
      </Jumbotron>
      <br />
      <Curated curatedDataCollection={youtubeMainPageHardCoded} />
      <br />
      <GithubBar />
      <br />
    </Container>
  </React.Fragment>
);

const styles = StyleSheet.create({
  jumboContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
});
