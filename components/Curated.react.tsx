import React, { useEffect, useRef, useState } from "react";
import { Container, ResponsiveEmbed } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import { useMediaQuery } from "react-responsive";
import SaferLink from "./SaferLink.react";

const VideoThumbnail = ({ videoID, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const dialogIFrameRef = useRef<HTMLIFrameElement | null>(null);

  function handleClickOutside(event) {
    if (dialogRef.current && dialogIFrameRef.current && !dialogIFrameRef.current?.contains(event.target)) {
      setIsModalOpen(false);
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, dialogRef]);

  if (
    useMediaQuery({
      query: "(max-width: 768px)",
    })
  ) {
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
    <>
      <dialog
        style={{
          width: "900px",
          height: "500px",
          padding: 0,
        }}
        ref={dialogRef}
      >
        {isModalOpen && (
          <ResponsiveEmbed
            id="dialog-responsive-embed"
            aspectRatio="16by9"
            style={{ width: "100%", height: "100%" }}
          >
            <iframe
              ref={dialogIFrameRef}
              title={videoID}
              width={900}
              height={500}
              src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </ResponsiveEmbed>
        )}
        {/* <button onClick={() => setIsModalOpen(false)}>Close</button> */}
      </dialog>
      <img
        onClick={() => setIsModalOpen(true)}
        role="button"
        className={css(styles.videoThumbnail)}
        alt={title}
        src={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`}
      />
    </>
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
