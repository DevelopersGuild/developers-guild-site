import { Container } from "react-bootstrap";
import DiscordLink from "../components/DiscordLink.react";
import NavbarMain from "../components/NavbarMain.react";
import GithubBar from "../components/GithubBar.react";
import CustomJumbotron from "../components/CustomJumbotron.react";
import SaferLink from "../components/SaferLink.react";
import Curated from "../components/Curated.react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { isCuratedVideoPlayingAtom } from "../lib/AppAtoms";
import VideoOverlay from "../components/VideoOverlay.react";
import OverflowContainer from "../components/OverflowContainer.react";

export default function Home(props) {
  const isCuratedVideoPlaying = useRecoilValue(isCuratedVideoPlayingAtom);
  return (
    <OverflowContainer>
      {isCuratedVideoPlaying && <VideoOverlay />}
      <NavbarMain links={props.links} />
      <br />
      <Container>
        <DiscordLink className="float-right" />
        <br />
        <br />
        <br />
        <CustomJumbotron />
        <br />
        <Curated curated={props.curated} />
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
    </OverflowContainer>
  );
}

export const getStaticProps = async (context) => {
  // const githubProjects = await axios.get(
  //   "https://api.github.com/orgs/DevelopersGuild/repos?sort=updated"
  // );

  return {
    props: {
      // githubProjects: githubProjects.data,
      links: [
        { name: "About", path: "/about", external: false },
        { name: "Contact", path: "/contact", external: false },
        { name: "Constitution", path: "/constitution", external: false },
        { name: "Lab", path: "/lab", external: false },
        { name: "DA Hack", path: "https://dahack.dev/", external: true },
      ],
      curated: [
        {
          videoID: "6ptI5B4a-ag",
          title: "How to Start Coding (and Keep Up With It)",
        },
        {
          videoID: "FTeE3OrTNoA",
          title: "Hacker101 - JavaScript for Hackers (Created by @STÖK)",
        },
        {
          videoID: "CZO3AxdkgqM",
          title: "Using reduce to code filter and map in vanilla JavaScript",
        },
        {
          videoID: "Hfr-e13av5I",
          title:
            "Angular.js Most Dreaded Framework of 2020 | StackOverflow Survey",
        },
        {
          videoID: "FYTZkE5BZ-0",
          title: "Making Music with Haskell From Scratch",
        },
        {
          videoID: "cbSrsYiRamo",
          title: "Backend Development explained in 2 minutes // Tech in 2",
        },
        {
          videoID: "JTOJsU3FSD8",
          title:
            "7 Full Stack App Ideas for Developers w/ Instructions Included",
        },
        {
          videoID: "g2nMKzhkvxw",
          title: "Junior Vs Senior Code - How To Write Better Code",
        },
      ],
    },
  };
};
