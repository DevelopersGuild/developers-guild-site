import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";

type Post = {
  readonly message: string;
  readonly mentions: ReadonlyArray<string>;
  readonly mentionsPictures: ReadonlyArray<string>;
  readonly authorPicture: string;
  readonly author: string;
};

async function fetchThankYou(): Promise<ReadonlyArray<Post>> {
  return await (
    await fetch(
      "https://us-central1-winter-runway-279100.cloudfunctions.net/function-2"
    )
  ).json();
}

export const Thanks: React.FC = () => {
  const { status, data, error } = useQuery("fetch-thank-yous", fetchThankYou);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error: {error}</div>;

  return (
    <>
      <br />
      <Container>{JSON.stringify(data)}</Container>
    </>
  );
};
