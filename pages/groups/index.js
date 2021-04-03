import React from "react";
import { StyleSheet, css } from "aphrodite";
import NavbarMain from "../../components/NavbarMain.react";
import { Container } from "react-bootstrap";

import CardList from "../../components/cardlist"

export default function Lab({ links, groups }) {
  return (
    <>
      <NavbarMain links={links} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Container className="text-center mt-4">
          <h4>Developer's Guild Groups</h4>
          <p className="mb-4">
            Groups and projects that are currently active in Developers' Guild.
          </p>
          <CardList
            cards={groups}
          />
          {/* <h2 id="interview-prep-group">Interview Prep Group</h2>
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
          </ul> */}

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
        { name: "Groups", path: "/groups", external: false },
        { name: "DA Hack", path: "https://dahack.dev/", external: true },
      ],
      groups: [
        {
          link: "/groups/interprep",
          title: "Interview Prep Group",
          description: "Career-oriented workshop focused preparing for technical interviews. We introduce the basic required knowledge of data structures and algorithms and solve many common problems from real interviews. We also offer 1-on-1 mock interview sessions and resume reviews. Come check us out!"
        },
        {
          link: "/groups",
          title: "AI Group",
          description: "To Be Written"
        }
      ]
    },
  };
};
