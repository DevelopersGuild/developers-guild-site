import type { TGithubProject } from "../components/GithubBar";
import type { TCuratedCollection } from "../components/Curated";
import React from "react";
import fetch from "isomorphic-fetch";
import NavbarMain from "../components/NavbarMain";
import GithubBar from "../components/GithubBar";
import Container from "../components/Container";
import DiscordLink from "../components/DiscordLink";
import Curated from "../components/Curated";
import styles from "../styles/landing.module.css";

type TProps = {
  readonly data: Array<TGithubProject>;
  readonly curated: TCuratedCollection;
};

export default function LandingPage(props: TProps) {
  return (
    <>
      <NavbarMain />
      <br />
      <Curated curatedDataCollection={props.curated} />
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
  const curated: TCuratedCollection = await (
    await fetch("http://localhost:3000/curated.json")
  ).json();
  return {
    props: {
      data: data,
      curated: curated,
    },
  };
}
