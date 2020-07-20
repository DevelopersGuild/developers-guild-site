import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import Container from "../ui/Shared/Container";

type EmbeddedFieldProps = {
  videoID: string;
  height?: number;
  width?: number;
};

function EmbeddedField(props: EmbeddedFieldProps) {
  const { videoID, width, height } = props;
  return (
    <ResponsiveEmbed
      className={css(embeddedStyles.embeddedContainer)}
      style={{
        width: width ? width : "560",
        height: height ? height : "315",
      }}
      aspectRatio="16by9"
    >
      <iframe
        title={videoID}
        width={width ? width : "560"}
        height={height ? height : "315"}
        src={`https://www.youtube.com/embed/${videoID}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </ResponsiveEmbed>
  );
}

const embeddedStyles = StyleSheet.create({
  embeddedContainer: {
    marginRight: "2vw",
    flex: "0 0 auto",
  },
});

function stripVideoID(passed: string): string {
  return passed.split("https://www.youtube.com/watch?v=")[1];
}

// feed in Youtube Video Array
type Props = {
  curatedDataCollection: ReadonlyArray<string>;
};

function Curated(props: Props): JSX.Element {
  const { curatedDataCollection } = props;
  return (
    <Container type="normal" style={styles.container}>
      <h2>Community Curated Videos</h2>
      <div className={css(styles.contentRow)}>
        {curatedDataCollection.map((youtubeVideo) => (
          <EmbeddedField
            key={youtubeVideo}
            height={300}
            width={500}
            videoID={stripVideoID(youtubeVideo)}
          />
        ))}
      </div>
    </Container>
  );
}

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
});

export default Curated;
