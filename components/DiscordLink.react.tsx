import React from "react";
import clsx from "clsx";
import Image from "next/image";
import SaferLink from "./SaferLink.react";

type Props = Readonly<{
  style?: React.CSSProperties;
  className?: string;
}>;

const DiscordLink = (props: Props) => (
  <SaferLink
    className={clsx(
      "btn discord-btn bounce-in-top",
    )}
    href="https://discord.gg/BpaFS4h"
  >
    <strong>Join Our Discord</strong>
    <Image
      src="/assets/discord.svg"
      width={45}
      height={35}
      alt="Discord Logo"
    />
  </SaferLink>
);

export default DiscordLink;
