import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

type Post = {
  readonly message: string;
  readonly mentions: ReadonlyArray<string>;
  readonly mentionsPictures: ReadonlyArray<string>;
  readonly authorPicture: string;
  readonly author: string;
};

const thanksFunction =
  "https://us-central1-winter-runway-279100.cloudfunctions.net/function-2";

export const Thanks: React.FC = () => {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>();
  useEffect(() => {
    fetch(thanksFunction)
      .then((response) => response.json())
      .then((parsed) => setPosts(parsed));
  }, []);
  return (
    <>
      <br />
      <Container>{JSON.stringify(posts)}</Container>
    </>
  );
};
