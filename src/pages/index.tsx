import type { TGithubProject } from "../components/GithubBar";
import React from "react";
import fetch from "isomorphic-fetch";
import NavbarMain from "../components/NavbarMain";
import GithubBar from "../components/GithubBar";
import Container from "../components/Container";
import DiscordLink from "../components/DiscordLink";
import styles from "../styles/landing.module.css";

type TProps = {
  readonly data: Array<TGithubProject>;
};

export default function LandingPage(props: TProps) {
  return (
    <>
      <NavbarMain />
      <br />
      <Container type="normal">
        <DiscordLink className="float-right" />
        <GithubBar data={props.data} />
      </Container>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const data: Array<TGithubProject> = await (
    await fetch(
      "https://api.github.com/orgs/DevelopersGuild/repos?sort=updated"
    )
  ).json();
  return {
    props: {
      data: data,
    },
  };
}
