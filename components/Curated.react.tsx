import React from "react";
import { ResponsiveEmbed, Container } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";

function stripVideoID(passed: string): string {
  return passed.split("https://www.youtube.com/watch?v=")[1];
}

type EmbeddedFieldProps = {
  videoID: string;
  height?: number;
  width?: number;
};

type Props = {
  curated: ReadonlyArray<Readonly<{ source: string; recommendedBy: string }>>;
};

function EmbeddedField(props: EmbeddedFieldProps) {
  const { videoID, width, height } = props;
  return (
    <ResponsiveEmbed
      className={css(styles.embeddedContainer)}
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

export default function Curated({ curated }: Props): JSX.Element {
  return (
    <Container style={styles.container}>
      <h2>Community Curated Videos</h2>
      <div className={css(styles.contentRow)}>
        {curated.map((youtubeVideo, idx) => (
          <EmbeddedField
            key={`${idx}-${youtubeVideo.recommendedBy}`}
            height={300}
            width={500}
            videoID={stripVideoID(youtubeVideo.source)}
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
  embeddedContainer: {
    marginRight: "2vw",
    flex: "0 0 auto",
  },
});
