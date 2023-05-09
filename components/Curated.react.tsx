import React, { useRef, useState } from "react";
import { Container, ResponsiveEmbed } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import SaferLink from "./SaferLink.react";
import styles from "../styles/modules/Curated.react.module.css";
import { useClickOutside, useEscapeKey } from "../lib/hooks";
import { Nullable } from "../lib/common";

interface IVideoData {
  title: string;
  videoID: string;
}

interface IModalDialogProps {
  dialogRef: React.MutableRefObject<HTMLDialogElement>;
  isModalOpen: boolean;
  children: React.ReactNode;
}

const ModalDialog = ({
  dialogRef,
  isModalOpen,
  children,
}: IModalDialogProps) => (
  <dialog className={styles.modalDialog} ref={dialogRef} open={isModalOpen}>
    {children}
  </dialog>
);

interface IVideoIFrameProps extends IVideoData {
  dialogIFrameRef: React.MutableRefObject<HTMLIFrameElement>;
  isModalOpen: boolean;
}

const VideoIFrame = ({
  videoID,
  title,
  dialogIFrameRef,
  isModalOpen,
}: IVideoIFrameProps) =>
  isModalOpen && (
    <ResponsiveEmbed aspectRatio="16by9" className={styles.responsiveEmbed}>
      <iframe
        ref={dialogIFrameRef}
        title={title}
        className={styles.iframe}
        src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </ResponsiveEmbed>
  );

interface IVideoThumbnailProps extends IVideoData {}

const VideoThumbnail = ({ videoID, title }: IVideoThumbnailProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dialogRef = useRef<Nullable<HTMLDialogElement>>(null);
  const dialogIFrameRef = useRef<Nullable<HTMLIFrameElement>>(null);

  useClickOutside(dialogIFrameRef, () => setIsModalOpen(false));
  useEscapeKey(() => setIsModalOpen(false));

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  if (isMobile)
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

  return (
    <React.Fragment>
      <ModalDialog dialogRef={dialogRef} isModalOpen={isModalOpen}>
        <VideoIFrame
          videoID={videoID}
          title={title}
          dialogIFrameRef={dialogIFrameRef}
          isModalOpen={isModalOpen}
        />
      </ModalDialog>
      <img
        onClick={() => setIsModalOpen(true)}
        role="button"
        className={styles.videoThumbnail}
        alt={title}
        src={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`}
      />
    </React.Fragment>
  );
};

interface CuratedProps {
  className: Readonly<String>;
  curated: ReadonlyArray<Readonly<IVideoData>>;
}

const Curated = ({ curated, className }: CuratedProps) => (
  <Container className={`${styles.container} ${className}`}>
    <h2>Community Curated Videos</h2>
    <div className={styles.contentRow}>
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
