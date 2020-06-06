import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import MainLogo from "../graphic-assets/Main-Logo.svg";
import GithubBar from "../ui/GithubBar";
import Curated from "../ui/Curated";

export const Landing: React.FC = () => (
  <React.Fragment>
    <br />
    <Container>
      <Jumbotron>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <img
            className="lazyload"
            style={{ marginRight: 20 }}
            data-src={MainLogo}
            alt="Logo"
            width="150"
            height="150"
          />
          <div>
            <h1>Developers Guild - De Anza</h1>
            <p>A project and contribution based programming club.</p>
            <p>Fridays 1:30PM-4:00PM AT311</p>
          </div>
        </div>
      </Jumbotron>
      <br />
      <Curated />
      <br />
      <GithubBar />
      <br />
    </Container>
  </React.Fragment>
);
