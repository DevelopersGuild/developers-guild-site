import type { StyleDeclarationValue } from "aphrodite";
import React from "react";
import { css } from "aphrodite";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type AlignItems = "stretch" | "flex-start" | "flex-end" | "center";

type Props = {
  readonly children: React.ReactNode;
  readonly style?: StyleDeclarationValue | false | null | void;
  readonly direction?: FlexDirection;
  readonly wrap?: FlexWrap;
  readonly justify?: JustifyContent;
  readonly align?: AlignItems;
};

export function FlexBox(props: Props): JSX.Element {
  const { children, style, direction, wrap, justify, align } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction ? direction : "row",
        flexWrap: wrap ? wrap : "nowrap",
        justifyContent: justify ? justify : "center",
        alignItems: align ? align : "center",
      }}
      className={css(style)}
    >
      {children}
    </div>
  );
}

type AlignSelf =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";

type FlexItemProps = {
  readonly children: React.ReactNode;
  readonly style?: StyleDeclarationValue | false | null | void;
  readonly order?: number;
  readonly grow?: number;
  readonly shrink?: number;
  readonly basis?: string;
  readonly align?: AlignSelf;
};

/**
 * Children of FlexBox
 */

export function FlexItem(props: FlexItemProps): JSX.Element {
  const { style, children, order, grow, shrink, basis, align } = props;
  return (
    <div
      style={{
        order: order ? order : 0,
        flexGrow: grow ? grow : 0,
        flexShrink: shrink ? shrink : 1,
        flexBasis: basis ? basis : "auto",
        alignSelf: align,
      }}
      className={css(style)}
    >
      {children}
    </div>
  );
}
