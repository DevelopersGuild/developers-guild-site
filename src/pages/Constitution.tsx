import type { GetServerSideProps } from "next";
import React from "react";
import Container from "../components/Container";
import NavbarMain from "../components/NavbarMain";
import ReactMarkdown from "react-markdown";
import { make as SaferLink } from "../components/SaferLink.bs";
import { genMarkdown } from "../lib/genMarkdown";
import styles from "../styles/constitution.module.css";

type TResponse = {
  readonly text: string;
};

type TProps = {
  readonly markdown: TResponse;
};

export default function (props: TProps) {
  return (
    <>
      <NavbarMain />
      <br />
      <div className={styles.containerOne}>
        <Container type="normal">
          <ReactMarkdown source={props.markdown.text} />
          <SaferLink href="https://github.com/DevelopersGuild/developers-guild-site/blob/master/src/components/markdown/Constitution.md">
            Edit this page here.
          </SaferLink>
          <br />
          <br />
        </Container>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const markdown = await genMarkdown(
    "Constitution.md",
    "http://localhost:3000"
  );
  return {
    props: {
      markdown: {
        text: markdown,
      },
    },
  };
};
