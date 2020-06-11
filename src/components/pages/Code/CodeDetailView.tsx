import React from "react";
import { AkCodeBlock } from "@atlaskit/code";
import { StyleSheet, css } from "aphrodite";
import Container from "../../ui/Shared/Container";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

type CodeData = {
  content: ReadonlyArray<string>;
  readonly hash: string;
  readonly name?: string;
  readonly language: string;
};

async function fetchCodeSnippets(_: string, hash?: string): Promise<CodeData> {
  const endpoint = `https://utilapi-rqg4sqdiwq-uc.a.run.app/code/${hash}`;
  const response: ReadonlyArray<CodeData> = await (
    await fetch(endpoint)
  ).json();
  return response[0];
}

type QueriedProps = {
  readonly hash: string;
};

/**
 * Rendered when on previously passed state data exists
 * such as a new tab or direct to url load.
 */
function CodeDetailViewQueried(props: QueriedProps): JSX.Element {
  const { hash } = props;
  const { status, data, error } = useQuery(
    ["fetching-single-snippet", hash],
    fetchCodeSnippets
  );
  if (status === "loading")
    return <Container type="normal">Loading...</Container>;
  if (status === "error")
    return <Container type="normal">Error: {error}</Container>;
  if (!data) return <Container type="normal">No Results</Container>;

  if (data.content.length === 1) {
    return (
      <Container type="normal">
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
      <Container type="normal">
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
  return <Container type="normal">No Results</Container>;
}

type PassedProps = {
  readonly data: CodeData;
};
/** Rendered when state data exists and is passed on as to avoid refetching already
 * fetched data.
 */
function CodeDetailViewPassed(props: PassedProps): JSX.Element {
  const { content, hash, name, language } = props.data;

  if (content.length === 1) {
    return (
      <Container type="normal">
        <div className={css(styles.container)}>
          <h5>
            {name} - {hash}
          </h5>
          <AkCodeBlock
            language={language.toString()}
            text={content[0].toString()}
          />
        </div>
      </Container>
    );
  } else if (content.length > 1) {
    return (
      <Container type="normal">
        <div className={css(styles.container)}>
          <h5>
            {name} - {hash}
          </h5>
          <div className={css(styles.contentRow)}>
            {content.map((x) => (
              <div className={css(styles.blockHolder)}>
                <AkCodeBlock
                  language={language.toString()}
                  text={x.toString()}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  }
  return <Container type="normal">No Results</Container>;
}

function CodeDetailView(props: any): JSX.Element {
  const { hash } = useParams();
  const stateObject: CodeData = props.location.state;

  if (stateObject) {
    return <CodeDetailViewPassed data={stateObject} />;
  }

  return <CodeDetailViewQueried hash={hash} />;
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
