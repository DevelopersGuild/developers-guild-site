import React from "react";
import { useQuery } from "react-query";
import Container from "../../ui/Shared/Container";
import CodeBlock from "../../ui/CodeBlock";
import { Link } from "react-router-dom";

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
  if (status === "loading")
    return <Container type="normal">Loading...</Container>;
  if (status === "error")
    return <Container type="normal">Error: {error}</Container>;
  if (!data) return <Container type="normal">No Results</Container>;

  return (
    <Container type="normal">
      <br />
      <h2>Code Snippets</h2>
      <Link className="float-right" to="/code/new">
        New Snippet
      </Link>
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
      <br />
    </Container>
  );
}

export default Code;
