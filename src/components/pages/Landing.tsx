import React from "react";
import { Jumbotron } from "react-bootstrap";
import MainLogo from "../graphic-assets/Main-Logo.svg";
import GithubBar from "../ui/GithubBar";
import Curated from "../ui/Curated";
import { StyleSheet, css } from "aphrodite";
import { youtubeMainPageHardCoded } from "../data/hardcode";
import Container from "../ui/Shared/Container";
import { NavbarMain } from "../ui/NavbarMain";
import DiscordLink from "../ui/DiscordLink";
import SaferLink from "../ui/SaferLink";

export const Landing: React.FC = () => (
  <div>
    <NavbarMain />
    <br />
    <Container type="normal">
      <DiscordLink className="float-right" />
      <br />
      <br />
      <br />
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
      <SaferLink
        className="float-right"
        href="https://github.com/DevelopersGuild/developers-guild-site/blob/master/src/components/data/main-curated.json"
      >
        Want to recommend some videos for the Curated section?
      </SaferLink>
      <br />
      <br />
    </Container>
  </div>
);

const styles = StyleSheet.create({
  jumboContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
});
