import React from "react";
import { Container, ResponsiveEmbed } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";

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

function Curated(): JSX.Element {
  return (
    <Container className={css(styles.container)}>
      <h2>Community Curated Videos</h2>
      <div className={css(styles.contentRow)}>
        <EmbeddedField
          height={300}
          width={500}
          videoID={stripVideoID("https://www.youtube.com/watch?v=6ptI5B4a-ag")}
        />
        <EmbeddedField
          height={300}
          width={500}
          videoID={stripVideoID("https://www.youtube.com/watch?v=Hfr-e13av5I")}
        />
        <EmbeddedField
          height={300}
          width={500}
          videoID={stripVideoID("https://www.youtube.com/watch?v=FYTZkE5BZ-0")}
        />
        <EmbeddedField
          height={300}
          width={500}
          videoID={stripVideoID("https://www.youtube.com/watch?v=cbSrsYiRamo")}
        />
        <EmbeddedField
          height={300}
          width={500}
          videoID={stripVideoID("https://www.youtube.com/watch?v=JTOJsU3FSD8")}
        />
        <EmbeddedField
          height={300}
          width={500}
          videoID={stripVideoID("https://www.youtube.com/watch?v=g2nMKzhkvxw")}
        />
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
  },
});

export default Curated;
