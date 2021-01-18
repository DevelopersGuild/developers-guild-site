import React from "react";

type Props = Readonly<{
  style?: React.CSSProperties;
  className?: string;
  href: string;
  children: React.ReactNode;
}>;

const SaferLink = (props: Props) => (
  <a
    rel="noreferrer noopener"
    target="__blank"
    className={props.className}
    style={props.style}
    href={props.href}
  >
    {props.children}
  </a>
);

export default SaferLink;
