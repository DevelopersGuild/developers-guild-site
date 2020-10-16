import React from "react";
import { make as SaferLink } from "./SaferLink.bs";
import { ix } from "../lib/ix/ix.gen";

type TProps = {
  style?: React.CSSProperties;
  className?: string;
};

export default function DiscordLink(
  props: TProps
): React.ReactElement<typeof SaferLink> {
  return (
    <SaferLink
      className={`btn btn-primary discord-btn ${props.className}`}
      style={props.style}
      href="https://discord.gg/BpaFS4h"
    >
      <strong>Join Our Discord</strong>
      <img
        className="discord-logo"
        src={ix("discord.svg")}
        alt="Discord Logo"
      />
      <style jsx>
        {`
          .discord-btn {
            background-color: #738adb !important;
            color: #ffffff !important;
            border: none !important;
            outline: none !important;
          }

          .discord-btn:focus {
            outline: none !important;
          }

          .discord-btn:visited {
            outline: none !important;
          }

          .discord-logo {
            height: 35px;
            width: 45px;
          }
        `}
      </style>
    </SaferLink>
  );
}
