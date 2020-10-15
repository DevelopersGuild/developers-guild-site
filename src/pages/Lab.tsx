import type { GetServerSideProps } from "next";
import Container from "../components/Container";
import NavbarMain from "../components/NavbarMain";
import ReactMarkdown from "react-markdown";
import { make as SaferLink } from "../components/SaferLink.bs";
import { genMarkdown } from "../lib/genMarkdown";

type TResponse = {
  readonly text: string;
};

type TProps = {
  readonly markdown: TResponse;
};

export default function (props: TProps) {
  return (
    <>
      <NavbarMain />
      <br />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Container type="normal">
          <h4>The Lab</h4>
          <p className="text-justify">
            "The Lab" are groups/projects that are active in Developers' Guild.
          </p>
        </Container>
        <Container type="normal">
          <br />
          <br />
          <ReactMarkdown source={props.markdown.text} />
          <SaferLink href="https://github.com/DevelopersGuild/developers-guild-site/blob/master/src/components/markdown/Groups-Lab.md">
            Edit this page here.
          </SaferLink>
          <br />
          <br />
        </Container>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const markdown = await genMarkdown("Groups-Lab.md", "http://localhost:3000");
  return {
    props: {
      markdown: {
        text: markdown,
      },
    },
  };
};
