import React from "react";
import "../styles/image-headers.css";
import Container from "../ui/Shared/Container";
import labpath from "../markdown/Groups-Lab.md";
import { NavbarMain } from "../ui/NavbarMain";
import ReactMarkdown from "react-markdown";
import useMarkdown from "../hooks/useMarkdown";

const Lab: React.FC = () => {
  const { markdown, loading, error } = useMarkdown(labpath);

  if (loading) return <Container type="normal">Loading...</Container>;
  if (error) return <Container type="normal">Error: {error}</Container>;
  return (
    <React.Fragment>
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
          <a
            target="__blank"
            href="https://github.com/DevelopersGuild/developers-guild-site-roles/blob/master/Groups-Lab.md"
          >
            Edit this page here.
          </a>
          <br />
          <br />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Lab;
