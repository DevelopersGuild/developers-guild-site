import type { StyleDeclarationValue } from "aphrodite";
import React from "react";
import { StyleSheet, css } from "aphrodite";

type ContainerType = "normal" | "fluid";

type Props = {
  readonly children: React.ReactNode;
  readonly style?: StyleDeclarationValue | false | null | void;
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

function Container(props: Props) {
  const { children, style, type } = props;
  return (
    <div className={css(selectContainerType(type), style)}>{children}</div>
  );
}

const styles = StyleSheet.create({
  containerFluid: {
    width: "100%",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    marginRight: "auto",
    marginLeft: "auto",
  },
  container: {
    width: "100%",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px",
    },
    "@media (min-width: 1400px)": {
      maxWidth: "1320px",
    },
  },
});

export default Container;
