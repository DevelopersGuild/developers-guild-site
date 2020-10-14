import React from "react";
import { Jumbotron } from "react-bootstrap";
import MainLogo from "../components/graphic-assets/Main-Logo.svg";
import GithubBar from "../components/ui/GithubBar";
import Curated from "../components/ui/Curated";
import { StyleSheet, css } from "aphrodite";
import { youtubeMainPageHardCoded } from "../components/data/hardcode";
import Container from "../components/ui/Shared/Container";
import { NavbarMain } from "../components/ui/NavbarMain";
import DiscordLink from "../components/ui/DiscordLink";
import SaferLink from "../components/ui/SaferLink";

export const Landing: React.FC = () => (
  <>
    <NavbarMain />
    <br />
    <Container type="normal">
      <DiscordLink className="float-right" />
      <br />
      <br />
      <br />
      <Jumbotron>
        <div className={css(styles.jumboContainer)}>
          <img src={MainLogo} className={css(styles.logoImage)} alt="Logo" />
          <div>
            <h1>Developers Guild - De Anza</h1>
            <p>A project and contribution based programming club.</p>
            <p>
              Fridays 1:30PM-4:00PM{" "}
              <span style={{ textDecoration: "line-through" }}>AT311</span>
              <strong> Discord & Zoom</strong>
            </p>
          </div>
        </div>
      </Jumbotron>
      <br />
      <Curated curatedDataCollection={youtubeMainPageHardCoded} />
      <br />
      <GithubBar />
      <br />
      <SaferLink
        className="float-right"
        href="https://github.com/DevelopersGuild/developers-guild-site/blob/master/src/components/data/main-curated.json"
      >
        Want to recommend some videos for the Curated section?
      </SaferLink>
      <br />
      <br />
    </Container>
  </>
);

const styles = StyleSheet.create({
  logoImage: {
    marginRight: 20,
    width: "150px",
    height: "150px",
  },
  jumboContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
});
