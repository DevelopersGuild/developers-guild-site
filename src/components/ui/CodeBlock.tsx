import React from "react";
import { AkCodeBlock } from "@atlaskit/code";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";

type CodeBlockProps = {
  content: ReadonlyArray<string>;
  readonly hash: string;
  readonly name?: string;
  readonly language: string;
  readonly href?: string;
};

function CodeBlock({
  content,
  hash,
  name,
  language,
  href,
}: CodeBlockProps): JSX.Element {
  if (content.length === 1 && href) {
    return (
      <div className={css(styles.container)}>
        <Link
          to={{
            pathname: href.toString(),
            state: {
              content,
              hash,
              name,
              language,
              href,
            },
          }}
        >
          <h5>
            {name} - {hash}
          </h5>
        </Link>
        <AkCodeBlock language={language.toString()} text={content.toString()} />
      </div>
    );
  } else if (content.length > 1 && href) {
    return (
      <div className={css(styles.container)}>
        <Link
          to={{
            pathname: href.toString(),
            state: {
              content,
              hash,
              name,
              language,
              href,
            },
          }}
        >
          <h5>
            {name} - {hash}
          </h5>
        </Link>
        <div className={css(styles.contentRow)}>
          {content.map((x, i) => (
            <div key={i.toString()} className={css(styles.blockHolder)}>
              <AkCodeBlock language={language.toString()} text={x.toString()} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <div>No Results</div>;
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
    maxHeight: "463px",
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
