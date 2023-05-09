import React, { useEffect, useRef, useState } from "react";
import { Container, ResponsiveEmbed } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import SaferLink from "./SaferLink.react";
import styles from "../styles/modules/Curated.react.module.css";

const VideoThumbnail = ({ videoID, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dialogRef = useRef(null);
  const dialogIFrameRef = useRef(null);

  function handleClickOutside(event) {
    if (
      dialogRef.current &&
      dialogIFrameRef.current &&
      !dialogIFrameRef.current.contains(event.target)
    ) {
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
          className={styles.videoThumbnail}
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
        className={styles.videoThumbnail}
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
  <Container className={`${styles.container} ${className}`} >
    <h2>Community Curated Videos</h2>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        overflowY: "hidden",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}
    >
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

export default Curated;