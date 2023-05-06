import { useRecoilState, useSetRecoilState } from "recoil";
import {
  isCuratedVideoPlayingAtom,
  curatedVideoInfoAtom,
} from "../lib/AppAtoms";
import { StyleSheet, css } from "aphrodite";
import { ResponsiveEmbed } from "react-bootstrap";

type EFieldProps = Readonly<{
  videoID: string;
}>;

const EmbeddedField = ({ videoID }: EFieldProps) => (
  <ResponsiveEmbed
    className={css(styles.embeddedContainer)}
    aspectRatio="16by9"
  >
    <iframe
      title={videoID}
      width={900}
      height={500}
      src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </ResponsiveEmbed>
);

function VideoOverlay() {
  const setIsCuratedVideoPlaying = useSetRecoilState(isCuratedVideoPlayingAtom);
  const [{ videoID, title }, setCuratedVideoInfo] =
    useRecoilState(curatedVideoInfoAtom);

  function clickGreyHandle() {
    setIsCuratedVideoPlaying(false);
    setCuratedVideoInfo(null);
  }

  return (
    <div className={css(styles.greaterContainer)}>
      <div className={css(styles.innerContainer)}>
        <div
          onClick={clickGreyHandle}
          className={`${css(styles.greyAreaContent)} fade-in`}
        ></div>
        <div className={`${css(styles.videoContentContainer)} slide-in-right`}>
          <h3 className={css(styles.videoTitle)}>{title}</h3>
          <EmbeddedField videoID={videoID} />
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  embeddedContainer: {
    marginTop: "2.25rem",
    flex: "0 0 auto",
    width: "900px",
    maxWidth: "90%",
    height: "auto",
    // width: "900px",
    // height: "500px",
  },
  videoTitle: {
    textAlign: "start",
  },
  greaterContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    width: "100vw",
    height: "100vh",
  },
  innerContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
  },
  videoContentContainer: {
    overflow: "auto",
    padding: "2.25rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "baseline",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: "#ffff",
    color: "#181a1b",
    width: "auto",
    maxWidth: "70vw",
    height: "100%",
    maxHeight: "100vh",
  },
  greyAreaContent: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    cursor: "url(assets/stop-cursor.svg) 60 60, auto",
    color: "#323436",
    backgroundColor: "#1c1e20",
    opacity: 0.8,
    width: "100%",
    height: "100%",
  },
});

export default VideoOverlay;
