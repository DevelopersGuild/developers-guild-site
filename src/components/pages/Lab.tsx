import React from "react";
import showdown from "showdown";
import "../styles/image-headers.css";
import { useQuery } from "react-query";
import Container from "../ui/Shared/Container";

import { NavbarMain } from "../ui/NavbarMain";

async function fetchRolesMarkdown(): Promise<string> {
  const response = await (
    await fetch(
      "https://raw.githubusercontent.com/DevelopersGuild/developers-guild-site-roles/master/Groups-Lab.md"
    )
  ).arrayBuffer();
  const parsed = new TextDecoder("utf-8").decode(response);
  return new showdown.Converter().makeHtml(parsed);
}

const Lab: React.FC = () => {
  const { status, data, error } = useQuery("fetch-roles", fetchRolesMarkdown);

  if (status === "loading")
    return <Container type="normal">Loading...</Container>;
  if (status === "error")
    return <Container type="normal">Error: {error}</Container>;

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
          <div dangerouslySetInnerHTML={{ __html: data ? data : "" }}></div>
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
