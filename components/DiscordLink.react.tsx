import React from "react";
import clsx from "clsx";
import SaferLink from "./SaferLink.react"

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

export default function DiscordLink(props: Props): JSX.Element {
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
      <img className="discord-logo" src="assets/discord.svg" alt="Discord Logo" />
    </SaferLink>
  );
}

