import React from "react";
import { ResponsiveEmbed, Container } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";

type EFieldProps = Readonly<{
  videoID: string;
  height?: number;
  width?: number;
}>;

const EmbeddedField = ({ videoID, width, height }: EFieldProps) => (
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

type Props = Readonly<{
  curated: ReadonlyArray<Readonly<{ source: string; recommendedBy: string }>>;
}>;

const Curated = ({ curated }: Props) => (
  <Container className={css(styles.container)}>
    <h2>Community Curated Videos</h2>
    <div className={css(styles.contentRow)}>
      {curated.map((youtubeVideo, idx) => (
        <EmbeddedField
          key={`${idx}-${youtubeVideo.recommendedBy}`}
          height={300}
          width={500}
          videoID={
            youtubeVideo.source.split("https://www.youtube.com/watch?v=")[1]
          }
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
  embeddedContainer: {
    marginRight: "2vw",
    flex: "0 0 auto",
  },
});

export default Curated;
