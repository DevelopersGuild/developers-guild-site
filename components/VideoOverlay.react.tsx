import { useRecoilState, useSetRecoilState } from "recoil";
import {
  isCuratedVideoPlayingAtom,
  curatedVideoInfoAtom,
} from "../lib/AppAtoms";
import { StyleSheet, css } from "aphrodite";


// TODO(!ONE) ADD FADE IN ANIMATION FOR "greyAreaContent" on entrance
// TODO(!TWO) ADD SLIDE IN ANIMATION FOR "videoContentContainer" on entrance

// TODO(!THREE) ADD FADE OUT ANIMATION FOR "greyAreaContent" on exit
// TODO(!FOUR) ADD SLIDE OUT ANIMATION FOR "videoContentContainer" on exit

function VideoOverlay() {

  const setIsCuratedVideoPlaying = useSetRecoilState(isCuratedVideoPlayingAtom);
  const [{ videoID, title }, setCuratedVideoInfo] = useRecoilState(
    curatedVideoInfoAtom
  );

  function clickGreyHandle(){
      setIsCuratedVideoPlaying(false)
  }

  return (
    <div className={css(styles.greaterContainer)}>
      <div className={css(styles.innerContainer)}>
        <div onClick={clickGreyHandle} className={css(styles.greyAreaContent)}>
       
        </div>
        <div className={css(styles.videoContentContainer)}>
          <h1>
            Embedded Video {videoID} {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
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
    textAlign: 'center',
    color: '#181a1b',
    width: "100%",
    height: "100%",
  },
  greyAreaContent: {
    cursor: "url(assets/stop-cursor.svg) 60 60, auto",
    color: "#323436",
    backgroundColor: '#1c1e20',
    opacity: 0.8,
    width: "45%",
    height: "100%",
    
  },
});

export default VideoOverlay;
