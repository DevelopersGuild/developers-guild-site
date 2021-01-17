import { Container } from "react-bootstrap";
import DiscordLink from "../components/DiscordLink.react";
import NavbarMain from "../components/NavbarMain.react";
import GithubBar from "../components/GithubBar.react";
import CustomJumbotron from "../components/CustomJumbotron.react";
import SaferLink from "../components/SaferLink.react";
import axios from "axios";

export default function Home(props) {
  return (
    <>
      <NavbarMain links={props.links} />
      <br />
      <Container>
        <DiscordLink className="float-right" />
        <br />
        <br />
        <br />
        <CustomJumbotron />
        <br />
        <h1>Curated will go here</h1>
        <br />
        <GithubBar githubProjects={props.githubProjects} />
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
    </>
  );
}

export const getStaticProps = async (context) => {
  const githubProjects = await axios.get(
    "https://api.github.com/orgs/DevelopersGuild/repos?sort=updated"
  );

  return {
    props: {
      githubProjects: githubProjects.data,
      links: [
        { name: "About", path: "/about", external: false },
        { name: "Contact", path: "/contact", external: false },
        { name: "Constitution", path: "/constitution", external: false },
        { name: "Lab", path: "/lab", external: false },
        { name: "DA Hack", path: "https://dahack.dev/", external: true },
      ],
      curated: [
        {
          source: "https://www.youtube.com/watch?v=6ptI5B4a-ag",
          recommendedBy: "Carlos Alba",
        },
        {
          source: "https://www.youtube.com/watch?v=FTeE3OrTNoA",
          recommendedBy: "Carlos Alba",
        },
        {
          source: "https://www.youtube.com/watch?v=_NrSWLQsDL4",
          recommendedBy: "Carlos Alba",
        },
        {
          source: "https://www.youtube.com/watch?v=CZO3AxdkgqM",
          recommendedBy: "Carlos Alba",
        },
        {
          source: "https://www.youtube.com/watch?v=Hfr-e13av5I",
          recommendedBy: "Carlos Alba",
        },
        {
          source: "https://www.youtube.com/watch?v=FYTZkE5BZ-0",
          recommendedBy: "Carlos Alba",
        },
        {
          source: "https://www.youtube.com/watch?v=cbSrsYiRamo",
          recommendedBy: "Carlos Alba",
        },
        {
          source: "https://www.youtube.com/watch?v=JTOJsU3FSD8",
          recommendedBy: "Carlos Alba",
        },
        {
          source: "https://www.youtube.com/watch?v=g2nMKzhkvxw",
          recommendedBy: "Carlos Alba",
        },
      ],
    },
  };
};
