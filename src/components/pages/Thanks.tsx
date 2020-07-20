import React from "react";
import { Container, Card, Media } from "react-bootstrap";
import { useQuery } from "react-query";
// import { StyleSheet, css } from "aphrodite";
import { NavbarMain } from "../ui/NavbarMain";

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

  /**
   * TODO(1) merge mentions and mentionsPictures into a array of tuples to use
   * mentions as a alt={mentioned} and key={mentioned} for the array.
   */

  return (
    <>
      <NavbarMain />
      <br />
      <Container>
        {data?.map((thanks, thanksidx) => (
          <Card
            key={`author-${thanks.author}-${thanksidx}`}
            style={{ width: "18rem", marginBottom: "1vh" }}
          >
            <Card.Body>
              <Media>
                <img
                  width={64}
                  height={64}
                  src={thanks.authorPicture}
                  alt={thanks.author}
                />
                {thanks.mentionsPictures
                  .filter((mentioned) => mentioned !== thanks.authorPicture)
                  .map((mentioned, idx) => (
                    <img
                      width={54}
                      height={54}
                      src={mentioned}
                      key={`mentioned-${idx}`}
                      alt={`mentioned-${idx}`}
                    />
                  ))}
              </Media>
              <Card.Text>{thanks.message}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        <br />
      </Container>
    </>
  );
};
