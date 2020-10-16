import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import Container from "./Container";
import styles from "../styles/curated.module.css";

type TCurated = {
  readonly source: string;
  readonly recommendedBy: string;
};

export type TCuratedCollection = {
  readonly data: ReadonlyArray<TCurated>;
};

type EmbeddedFieldProps = {
  videoID: string;
  height?: number;
  width?: number;
};

function EmbeddedField(props: EmbeddedFieldProps) {
  const { videoID, width, height } = props;
  return (
    <ResponsiveEmbed
      className={styles.embeddedContainer}
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

function stripVideoID(passed: string): string {
  return passed.split("https://www.youtube.com/watch?v=")[1];
}

type TProps = {
  curatedDataCollection: TCuratedCollection;
};

function Curated(props: TProps): JSX.Element {
  return (
    <Container type="normal" style={styles.container}>
      <h2>Community Curated Videos</h2>
      <div className={styles.contentRow}>
        {props.curatedDataCollection.data.map((youtubeVideo, idx) => (
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

export default Curated;
