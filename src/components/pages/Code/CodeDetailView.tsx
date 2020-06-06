import React from "react";
import { AkCodeBlock } from "@atlaskit/code";
import { StyleSheet, css } from "aphrodite";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

type CodeData = {
  content: ReadonlyArray<string>;
  readonly hash: string;
  readonly name?: string;
  readonly language: string;
};

async function fetchCodeSnippets(_: string, hash?: string): Promise<CodeData> {
  const endpoint = `https://us-central1-winter-runway-279100.cloudfunctions.net/function-code?hash=${hash}`;
  const response: ReadonlyArray<CodeData> = await (
    await fetch(endpoint)
  ).json();
  return response[0];
}

function CodeDetailView(): JSX.Element {
  const { hash } = useParams();
  const { status, data, error } = useQuery(
    ["fetching-single-snippet", hash],
    fetchCodeSnippets
  );
  if (status === "loading") return <Container>Loading...</Container>;
  if (status === "error") return <Container>Error: {error}</Container>;
  if (!data) return <Container>No Results</Container>;

  if (data.content.length === 1) {
    return (
      <Container>
        <div className={css(styles.container)}>
          <h5>
            {data.name} - {hash}
          </h5>
          <AkCodeBlock
            language={data.language.toString()}
            text={data.content[0].toString()}
          />
        </div>
      </Container>
    );
  } else if (data.content.length > 1) {
    return (
      <Container>
        <div className={css(styles.container)}>
          <h5>
            {data.name} - {data.hash}
          </h5>
          <div className={css(styles.contentRow)}>
            {data.content.map((x) => (
              <div className={css(styles.blockHolder)}>
                <AkCodeBlock
                  language={data.language.toString()}
                  text={x.toString()}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  }
  return <Container>No Results</Container>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: "1vh",
    marginBottom: "1vh",
  },
  contentRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  blockHolder: {
    marginBottom: "1vh",
    minWidth: "476px",
  },
});

export default CodeDetailView;
