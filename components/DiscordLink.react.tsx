import React from "react";
import clsx from "clsx";
import SaferLink from "./SaferLink.react";

type Props = Readonly<{
  style?: React.CSSProperties;
  className?: string;
}>;

const DiscordLink = (props: Props) => (
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

export default DiscordLink;