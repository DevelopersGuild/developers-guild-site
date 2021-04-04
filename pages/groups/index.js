import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Container, Row } from "react-bootstrap";

import CardList from "../../components/cardlist"

export default function Groups({ links, groups }) {
  return (
    <Container className="text-center mt-4">
      <h1>Developer's Guild Groups</h1>
      <Row className="justify-content-center" >
        <div className="divider" />
      </Row>
      <p className="mb-2">
        Groups and projects that are currently active in Developers' Guild.
        </p>
      <Row>
        <CardList
          fade
          cards={groups}
        />
      </Row>
    </Container>
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
          link: "/groups/interviewprep",
          title: "Interview Prep Group",
          description: "Career-oriented workshop focused preparing for technical interviews. We introduce the basic required knowledge of data structures and algorithms and solve many common problems from real interviews. We also offer 1-on-1 mock interview sessions and resume reviews. Come check us out!"
        },
        {
          link: "/groups",
          title: "AI Group",
        }
      ]
    },
  };
};
