import React from "react";
import "../components/styles/image-headers.css";
import Container from "../components/Container";
import labpath from "../components/markdown/Groups-Lab.md";
import { NavbarMain } from "../components/ui/NavbarMain";
import ReactMarkdown from "react-markdown";
import useMarkdown from "../components/hooks/useMarkdown";
import { make as SaferLink } from "../components/ui/SaferLink.bs";

const Lab: React.FC = () => {
  const { markdown, loading, error } = useMarkdown(labpath);

  if (loading) return <Container type="normal">Loading...</Container>;
  if (error) return <Container type="normal">Error: {error}</Container>;
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
          <ReactMarkdown source={markdown} />
          <SaferLink href="https://github.com/DevelopersGuild/developers-guild-site/blob/master/src/components/markdown/Groups-Lab.md">
            Edit this page here.
          </SaferLink>
          <br />
          <br />
        </Container>
      </div>
    </>
  );
};

export default Lab;
