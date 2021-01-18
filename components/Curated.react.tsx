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

const VideoThumbnail = ({ videoID, title }) => {
  return (
    <img
      role="button"
      className={css(styles.videoThumbnail)}
      alt={title}
      src={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`}
    />
  );
};

type Props = Readonly<{
  curated: ReadonlyArray<Readonly<{ title: string; videoID: string }>>;
}>;

// const Curated = ({ curated }: Props) => (
//   <Container className={css(styles.container)}>
//     <h2>Community Curated Videos</h2>
//     <div className={css(styles.contentRow)}>
//       {curated.map((node) => (
//         <EmbeddedField
//           key={node.videoID}
//           height={300}
//           width={500}
//           videoID={node.videoID}
//         />
//       ))}
//     </div>
//   </Container>
// );

const Curated = ({ curated }: Props) => (
  <Container className={css(styles.container)}>
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
  embeddedContainer: {
    marginRight: "2vw",
    flex: "0 0 auto",
  },
});

export default Curated;
