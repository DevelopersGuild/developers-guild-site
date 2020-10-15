import React from "react";
// import discordsource from "../graphic-assets/discord.svg";
// import "../styles/discordlink.css";
import clsx from "clsx";
import { make as SaferLink } from "./SaferLink.bs";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

function DiscordLink(props: Props): JSX.Element {
  return (
    <SaferLink
      className={clsx(
        "btn btn-primary discord-btn bounce-in-top",
        props.className
      )}
      style={props.style}
      href="https://discord.gg/BpaFS4h"
    >
      <strong>Join Our Discord</strong>
      {/* <img className="discord-logo" src={discordsource} alt="Discord Logo" /> */}
    </SaferLink>
  );
}

export default DiscordLink;
