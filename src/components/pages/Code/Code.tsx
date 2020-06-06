import React from "react";
import { useQuery } from "react-query";
import { Container } from "react-bootstrap";
import CodeBlock from "../../ui/CodeBlock";

type CodeFunctionResponse = ReadonlyArray<{
  content: ReadonlyArray<string>;
  readonly hash: string;
  readonly name?: string;
  readonly language: string;
}>;

async function fetchCodeSnippets(): Promise<CodeFunctionResponse> {
  const endpoint = "https://utilapi-rqg4sqdiwq-uc.a.run.app/code";
  return await (await fetch(endpoint)).json();
}

function Code(): JSX.Element {
  const { status, data, error } = useQuery(
    "fetch-all-code-snippets",
    fetchCodeSnippets
  );
  if (status === "loading") return <Container>Loading...</Container>;
  if (status === "error") return <Container>Error: {error}</Container>;
  if (!data) return <Container>No Results</Container>;

  return (
    <Container>
      <h2>Code Snippets</h2>
      {data.map((x) => (
        <CodeBlock
          key={x.hash}
          content={x.content}
          hash={x.hash}
          name={x.name}
          language={x.language}
          href={`/code/${x.hash}`}
        />
      ))}
    </Container>
  );
}

export default Code;
