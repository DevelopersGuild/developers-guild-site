import React from "react";
import { make as SaferLink } from "./SaferLink.bs";
import { ix } from "../lib/ix/ix.gen";
import styles from "../styles/discordlink.module.css";
import clsx from "clsx";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

function DiscordLink(props: Props): JSX.Element {
  return (
    <SaferLink
      className={clsx(
        "btn btn-primary",
        styles.discordBtn,
        styles.bounceInTop,
        props.className
      )}
      style={props.style}
      href="https://discord.gg/BpaFS4h"
    >
      <strong>Join Our Discord</strong>
      <img
        className={styles.discordLogo}
        src={ix("discord.svg")}
        alt="Discord Logo"
      />
    </SaferLink>
  );
}

export default DiscordLink;
