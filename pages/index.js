import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useRecoilValue } from "recoil";

import CustomJumbotron from "../components/CustomJumbotron.react";
import SaferLink from "../components/SaferLink.react";
import Curated from "../components/Curated.react";
import OverflowContainer from "../components/OverflowContainer.react"
import VideoOverlay from "../components/VideoOverlay.react";
import { isCuratedVideoPlayingAtom } from "../lib/AppAtoms";
import Head from 'next/head'

export default function Home(props) {
  const isCuratedVideoPlaying = useRecoilValue(isCuratedVideoPlayingAtom);
  return (
    <OverflowContainer>
      <Head>
        <link rel="preload" as="image" href="/og.jpg"/>
        <title>Developers Guild</title>
      </Head>
      {isCuratedVideoPlaying && <VideoOverlay />}
      <Container>
        <CustomJumbotron/>
        <Container>
          <Image
            priority={true}
            src="/og.jpg"
            width={1832}
            height={1221}
          />
        </Container>
        <Curated className="my-5" curated={props.curated} />
        <Row className="justify-content-end">
          <SaferLink
            href="https://github.com/DevelopersGuild/developers-guild-site/blob/master/src/components/data/main-curated.json"
          >
            Want to recommend some videos for the Curated section?
          </SaferLink>
        </Row>
      </Container>
    </OverflowContainer>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {
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
