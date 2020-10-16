import React from "react";
import styles from "../styles/container.module.css";

type ContainerType = "normal" | "fluid";

type TProps = {
  readonly children: React.ReactNode;
  readonly style?: React.CSSProperties;
  readonly type: ContainerType;
};

function selectContainerType(type: ContainerType): object {
  switch (type) {
    case "fluid":
      return styles.containerFluid;
    case "normal":
      return styles.container;
    default:
      throw new Error("That is not a supported Container type!");
  }
}

function Container(props: TProps) {
  const { children, style, type } = props;
  return (
    <div className={`${selectContainerType(type)} ${style}`}>{children}</div>
  );
}

export default Container;
