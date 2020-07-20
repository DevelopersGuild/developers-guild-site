import React from "react";
import discordsource from "../graphic-assets/discord.svg";
import "../styles/discordlink.css";
import clsx from "clsx";

type Props = {
  style?: React.CSSProperties;
  className?: String;
};

function DiscordLink(props: Props): JSX.Element {
  return (
    <a
      className={clsx(
        "btn btn-primary discord-btn bounce-in-top",
        props.className
      )}
      style={props.style}
      rel="noreferrer noopener"
      target="__blank"
      href="https://discord.gg/BpaFS4h"
    >
      <strong>Join Our Discord</strong>
      <img className="discord-logo" src={discordsource} alt="Discord Logo" />
    </a>
  );
}

export default DiscordLink;
