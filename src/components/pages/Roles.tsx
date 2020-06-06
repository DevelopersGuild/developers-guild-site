import React from "react";
import { Container } from "react-bootstrap";
import showdown from "showdown";
import RolesHeader from "../graphic-assets/roles.jpg";
import "../styles/image-headers.css";
import { useQuery } from "react-query";

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

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error: {error}</div>;

  return (
    <React.Fragment>
      <br />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Container>
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
        <Container className="role-container">
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
