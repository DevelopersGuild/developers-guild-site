import React from "react";
import Link from "next/link";
import { StyleSheet, css } from "aphrodite";
import { Container, Row, Jumbotron } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function renderList(elements) {
  let count = 0;
  
  return (
    <ul>
      {elements.map(element => (
        <li key={count++}>{element}</li>
      ))}
    </ul>
  )
}

function createSection({ jumbotron = false, list = false, title, body }) {
  return (
    <Fade bot>
      <div className={css(styles.section)}>
        {jumbotron ? 
        <Jumbotron className="bg-lighter-dark">
          <h2 className="mb-4">{title}</h2>
          <p className="text-left">{list ? renderList(body) : body}</p>
        </Jumbotron> : 
          <>
            <h2 className="mb-4">{title}</h2>
            <p className="text-left">{list ? renderList(body) : body}</p>
          </>
        }
      </div>
    </Fade>
  );
}

export default function About(props) {
  const sections = [
    { 
      jumbotron: true, 
      title: "Our purpose", 
      body: "Developers’ Guild started in 2014 with the goal of facilitating the exploration of computer science through hands-on experience. Developers’ Guild creates a casual environment to practice real-world programming. We foster a community of avid programmers by tackling projects that interest us, participating and competing in events, and gathering skills and experience for the future. Our members are divided into various groups that focus on a different aspect of computer science, such as video game development, machine learning/AI, and web application development. Members in these groups will learn these computer science concepts and apply them in projects, ranging from beginner to advanced difficulties." },
    { 
      title: "Why Join?", 
      body: "When you join DG and attend our meetings, you can help contribute code and more to existing and new projects that you can add to your portfolio for future jobs or even transfer. Learn new concepts with a community of people that share a passion for programming!" },
    { 
      jumbotron: true,
      title: "Open To Everyone",
      body: "Even people who aren’t majoring in computer science can still join! Learn to work with computer programmers and create software that’s appealing to end-users! There are more aspects of software development than just coding and we at Developers’ Guild understand that. Create assets for games and UI mockups for websites and applications!"
    },
    {
      list: true,
      title: "TL;DR",
      body: [
        "No prior experience necessary!",
        "Provides a good way to get real-world programming experience.",
        "Facilitates the exploration of computer science through hands-on experience.",
        "Adept programmers can work on new challenges and mentor others.",
        "Contribute/Create open-source projects for your portfolio and resume!",
        "Collaboration with individuals with different skills, perspectives and backgrounds.",
        "Communication with mentors, industry leaders and speakers."
      ]
    },
    {
      title: "Club Constitution",
      body: <Link href="/documents/constitution.pdf"><a target="__blank" style={{textDecoration: "underline"}}>constitution.pdf</a></Link>
    }
  ]

  return (
    <div className={`${css(styles.biggerFont)} text-center`}>
      <h1 className="text-center">About The Developers' Guild</h1>
      <Row className="justify-content-center">
        <div className="divider" />
      </Row>
      <Container>
        {sections.map(section => {
          return createSection(section);
        })}
      </Container>
    </div>
  );
}

const styles = StyleSheet.create({
  biggerFont: {
    fontSize: '1.125rem'
  },
  section: {
    padding: '2.5rem 0 !important'
  }
});

export const getStaticProps = async (context) => {
  return {
    props: {
    },
  };
};
