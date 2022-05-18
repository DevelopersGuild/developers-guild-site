import React from "react";
import { Container } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import { useSetRecoilState } from "recoil";
import {
  isCuratedVideoPlayingAtom,
  curatedVideoInfoAtom,
} from "../lib/AppAtoms";
import { useMediaQuery } from "react-responsive";
import SaferLink from "./SaferLink.react";

const VideoThumbnail = ({ videoID, title }) => {
  const setIsCuratedVideoPlaying = useSetRecoilState(isCuratedVideoPlayingAtom);

  const setCuratedVideoInfo = useSetRecoilState(curatedVideoInfoAtom);

  const isOnMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  function clickHandler() {
    setCuratedVideoInfo({ videoID, title });
    setIsCuratedVideoPlaying(true);
  }

  if (isOnMobile) {
    return (
      <SaferLink href={`https://www.youtube.com/watch?v=${videoID}`}>
        <img
          role="button"
          className={css(styles.videoThumbnail)}
          alt={title}
          src={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`}
        />
      </SaferLink>
    );
  }

  return (
    <img
      onClick={clickHandler}
      role="button"
      className={css(styles.videoThumbnail)}
      alt={title}
      src={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`}
    />
  );
};

type Props = Readonly<{
  className: Readonly<String>;
  curated: ReadonlyArray<Readonly<{ title: string; videoID: string }>>;
}>;

const Curated = ({ curated, className }: Props) => (
  <Container className={`${css(styles.container)} ${className}`}>
    <h2>Community Curated Videos</h2>
    <div className={css(styles.contentRow)}>
      {curated.map((node) => (
        <VideoThumbnail
          key={node.videoID}
          videoID={node.videoID}
          title={node.title}
        />
      ))}
    </div>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    marginTop: "1vh",
    marginBottom: "1vh",
  },
  contentRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
    overflowY: "hidden",
    overflowX: "auto",
    scrollbarWidth: "none",
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  videoThumbnail: {
    cursor: "url(assets/play-cursor.svg) 60 60, auto",
    marginRight: "2vw",
    flex: "0 0 auto",
    width: "500px",
    height: "300px",
  },
});

export default Curated;
