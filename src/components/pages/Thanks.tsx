import React from "react";
import { Container,Card,Media } from "react-bootstrap";
import { useQuery } from "react-query";
import { StyleSheet, css } from 'aphrodite';


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

  if (status === "loading") return <Container>Loading...</Container>;
  if (status === "error") return <Container>Error: {error}</Container>;

  return (
    <>
      <br />
      <Container>{JSON.stringify(data)}</Container>
      <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Media>
      <img
        width={64}
        height={64}
        src="https://cdn.discordapp.com/avatars/480160173361725451/43a19472064aed12d00311b7de8fa67b.webp"
        />
        <img
        width={54}
        height={54}
        src="https://cdn.discordapp.com/avatars/427309830517161995/0c900c648a6aa8443bdf7be27d7ce4db.webp"
        />
        <img
        width={54}
        height={54}
        src="https://cdn.discordapp.com/avatars/533408170706600007/7a824e78ee38c187cfa4e5c30c9d2f30.webp"
        />
        <img
        width={54}
        height={54}
        src="https://cdn.discordapp.com/avatars/260660906130669569/4ffbc0df1ff23ca1747ab79336418453.webp"
        />
      </Media>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
    </>
  );
};
