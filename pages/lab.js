import React from "react";
import { StyleSheet, css } from "aphrodite";
import NavbarMain from "../components/NavbarMain.react";
import { Container } from "react-bootstrap";

export default function Lab(props) {
  return (
    <>
      <NavbarMain links={props.links} />
      <br />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Container>
          <h4>The Lab</h4>
          <p className="text-justify">
            "The Lab" are groups/projects that are active in Developers' Guild.
          </p>
          <br />
          <br />
          <h1 id="interview-prep-group">Interview Prep Group</h1>
          <p>
            <strong>Quarter Proposed</strong>: Winter Quarter 2020
          </p>
          <p>
            <strong>Project Proposer</strong>: Tung Dao
          </p>
          <p>
            <strong>Project Leader</strong>: Tung Dao
          </p>
          <ul>
            <li>
              Group Purpose: Help prepare participants for upcoming interviews.
            </li>
            <li>Group Size: up to 10 persons.</li>
            <li>Group Leader: Tung</li>
            <li>
              Group Structure:
              <ul>
                <li>Campfire Style 🔥</li>
              </ul>
            </li>
          </ul>
          <h2 id="apprenticeship-group">Apprenticeship Group</h2>
          <p>
            <strong>Quarter Proposed</strong>: Winter Quarter 2020
          </p>
          <p>
            <strong>Quarter Closed</strong>: Winter Quarter 2020
          </p>
          <p>
            <strong>Project Proposer</strong>: Jooho (Brad) Jeong
          </p>
          <p>
            <strong>Project Leader</strong>: Jooho (Brad) Jeong, Johnny To
          </p>
          <ul>
            <li>
              <a href="https://docs.google.com/document/d/1OdzEEAuD_hxE2xEsTPNw496UCWtAdXINj-meTOsLXBk">
                Reference Document
              </a>
            </li>
            <li>Group Purpose: Teach Beginners How To program in Python</li>
            <li>Group Size: up to 6 persons</li>
            <li>Group Leader: Brad</li>
            <li>
              Group Structure:
              <ul>
                <li>
                  2 teams of 3 Apprentices(Learner) in Team Alpha, Team Bravo
                </li>
                <li>
                  1 TA will be picked from one of the new recruits, preferably
                  with python programming experience
                </li>
                <li>TA and I will lead each teams respectively</li>
              </ul>
            </li>
          </ul>

          <br />
          <br />
        </Container>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {
      links: [
        { name: "About", path: "/about", external: false },
        { name: "Contact", path: "/contact", external: false },
        { name: "Constitution", path: "/constitution", external: false },
        { name: "Lab", path: "/lab", external: false },
        { name: "DA Hack", path: "https://dahack.dev/", external: true },
      ],
    },
  };
};
