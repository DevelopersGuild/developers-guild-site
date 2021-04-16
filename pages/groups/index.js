import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Row } from "react-bootstrap";

import CardList from "../../components/cardlist.react";
import { getAllGroups, getGroupData } from "../../lib/groups.js";

export default function Groups({ groups }) {
  return (
    <div className="text-center">
      <h1>Developer's Guild Groups</h1>
      <Row className="justify-content-center" >
        <div className="divider" />
      </Row>
      <p className="mb-2">
        Groups and projects that are currently active in Developers' Guild.
      </p>
      <Row className="py-3">
        <CardList
          fade
          cards={groups}
          cardStyle={css(styles.cardStyle)}
        />
      </Row>
    </div>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    maxWidth: "45.425rem !important"
  }
})

export const getStaticProps = async (context) => {
  const groups = getAllGroups();
  const groupDataList = [];

  for (const group of groups) {
    const groupData = await getGroupData(group);
    groupDataList.push(groupData);
  }

  return {
    props: {
      groups: groupDataList.map((groupData) => { 
        return {
          title: groupData.title || null,
          description: groupData.description || null,
          icon: groupData.icon || null,
          link: groupData.link || null,
        }
      })
        // {
        //   icon: "/assets/icons/chat.svg",
        //   link: "/groups/interviewprep",
        //   title: "Interview Prep Group",
        //   description: "Career-oriented workshop focused preparing for technical interviews. We introduce the basic required knowledge of data structures and algorithms and solve many common problems from real interviews. We also offer 1-on-1 mock interview sessions and resume reviews. Come check us out!"
        // },
        // {
        //   link: "/groups",
        //   title: "AI Group",
        // },
    },
  };
};
