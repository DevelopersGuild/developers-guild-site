/**
 * Coptic Components are only meant to
 * be used in the LMS system.
 */

import type { StyleDeclarationValue } from "aphrodite";
import React from "react";
import { StyleSheet, css } from "aphrodite";
import Colors from "./Colors";

type Props = {
  readonly children: React.ReactNode;
  readonly style?: StyleDeclarationValue | false | null | void;
};

function FlatCard({ children, style }: Props): JSX.Element {
  return <div className={css(styles.card, style)}>{children}</div>;
}

const styles = StyleSheet.create({
  card: {
    border: `1px solid ${Colors.Gainsboro}`,
  },
});

export default FlatCard;
