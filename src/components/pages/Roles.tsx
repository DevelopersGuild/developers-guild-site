import React from "react";
import showdown from "showdown";
import RolesHeader from "../graphic-assets/roles.jpg";
import "../styles/image-headers.css";
import { useQuery } from "react-query";
import Container from "../ui/Shared/Container";

async function fetchRolesMarkdown(): Promise<string> {
  const response = await (
    await fetch(
      "https://raw.githubusercontent.com/DevelopersGuild/developers-guild-site-roles/master/Roles.md"
    )
  ).arrayBuffer();
  const parsed = new TextDecoder("utf-8").decode(response);
  return new showdown.Converter().makeHtml(parsed);
}

const Roles: React.FC = () => {
  const { status, data, error } = useQuery("fetch-roles", fetchRolesMarkdown);

  if (status === "loading")
    return <Container type="normal">Loading...</Container>;
  if (status === "error")
    return <Container type="normal">Error: {error}</Container>;

  return (
    <React.Fragment>
      <br />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Container type="normal">
          <h4>Developers' Guild Roles</h4>
          <p className="text-justify">
            These are roles currently open at the Developers' Guild.
          </p>
        </Container>
        <img
          className="open-source-header lazyload"
          style={{ width: "30vw", alignSelf: "center" }}
          data-src={RolesHeader}
          alt="Header"
        />
        <Container type="normal">
          <br />
          <br />
          <div dangerouslySetInnerHTML={{ __html: data ? data : "" }}></div>
          <a
            target="__blank"
            href="https://github.com/DevelopersGuild/developers-guild-site-roles/blob/master/Roles.md"
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

export default Roles;
