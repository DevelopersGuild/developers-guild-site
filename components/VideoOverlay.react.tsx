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

// TODO(!ONE) ADD FADE IN ANIMATION FOR "greyAreaContent" on entrance
// TODO(!TWO) ADD SLIDE IN ANIMATION FOR "videoContentContainer" on entrance

// TODO(!THREE) ADD FADE OUT ANIMATION FOR "greyAreaContent" on exit
// TODO(!FOUR) ADD SLIDE OUT ANIMATION FOR "videoContentContainer" on exit

function VideoOverlay() {
  const setIsCuratedVideoPlaying = useSetRecoilState(isCuratedVideoPlayingAtom);
  const [{ videoID, title }, setCuratedVideoInfo] = useRecoilState(
    curatedVideoInfoAtom
  );

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
          <h1 className={css(styles.videoTitle)}>{title}</h1>
          <EmbeddedField videoID={videoID} />
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  embeddedContainer: {
    marginTop: "40px",
    marginLeft: "40px",
    flex: "0 0 auto",
    width: "900px",
    height: "500px",
  },
  videoTitle: {
    marginTop: "40px",
    paddingLeft: "40px",
    textAlign: "start",
  },
  greaterContainer: {
    position: "absolute",
    zIndex: 2,
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
    backgroundColor: "#ffff",
    color: "#181a1b",
    width: "100%",
    height: "100%",
  },
  greyAreaContent: {
    cursor: "url(assets/stop-cursor.svg) 60 60, auto",
    color: "#323436",
    backgroundColor: "#1c1e20",
    opacity: 0.8,
    width: "45%",
    height: "100%",
  },
});

export default VideoOverlay;
