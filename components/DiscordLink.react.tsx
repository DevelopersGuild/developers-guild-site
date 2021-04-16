import React from "react";
import Tada from "react-reveal/Tada";

import SaferLink from "./SaferLink.react";
import discordstyles from "../styles/modules/discord-link.module.css";

type Props = Readonly<{
  style?: React.CSSProperties;
  className?: string;
}>;

const DiscordLink = (props: Props) => (
  <Tada>
    <SaferLink
      className={`btn ${discordstyles["discord-btn"]} ${props.className}`}
      href="https://discord.gg/BpaFS4h"
    >
      <strong>Join Our Discord</strong>
      <img
        src="/assets/icons/discord.svg"
        width={45}
        height={35}
        alt="Discord Logo"
      />
    </SaferLink>
  </Tada>
);

export default DiscordLink;
