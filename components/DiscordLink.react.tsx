import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Tada from "react-reveal/Tada";

import SaferLink from "./SaferLink.react";

type Props = Readonly<{
  style?: React.CSSProperties;
  className?: string;
}>;

const DiscordLink = (props: Props) => (
  <Tada>
    <SaferLink
      className={clsx("btn discord-btn ") + props.className}
      href="https://discord.gg/BpaFS4h"
    >
      <strong>Join Our Discord</strong>
      <Image
        src="/assets/icons/discord.svg"
        width={45}
        height={35}
        alt="Discord Logo"
      />
    </SaferLink>
  </Tada>
);

export default DiscordLink;
