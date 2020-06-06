import React from "react";
import { AkCodeBlock } from "@atlaskit/code";
import { StyleSheet, css } from "aphrodite";

type CodeBlockProps = {
  content: ReadonlyArray<string>;
  readonly hash: string;
  readonly name?: string;
  readonly language: string;
  readonly href?: string;
};

function CodeBlock({ content, hash, name, language, href }: CodeBlockProps) {
  if (content.length === 1) {
    return (
      <div className={css(styles.container)}>
        <a href={href} target="__blank">
          <h5>
            {name} - {hash}
          </h5>
        </a>
        <AkCodeBlock language={language.toString()} text={content.toString()} />
      </div>
    );
  } else {
    return (
      <div className={css(styles.container)}>
        <a href={href} target="__blank">
          <h5>
            {name} - {hash}
          </h5>
        </a>
        <div className={css(styles.contentRow)}>
          {content.map((x) => (
            <div className={css(styles.blockHolder)}>
              <AkCodeBlock language={language.toString()} text={x.toString()} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: "1vh",
    marginBottom: "1vh",
  },
  contentRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
    overflowY: "hidden",
    overflowX: "auto",
  },
  blockHolder: {
    marginRight: "2vw",
    flex: "0 0 auto",
    height: "463px",
    minWidth: "476px",
    overflowY: "scroll",
  },
});

export default CodeBlock;
