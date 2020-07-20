import React from "react";
import RolesHeader from "../graphic-assets/roles.jpg";
import "../styles/image-headers.css";
import Container from "../ui/Shared/Container";
import { NavbarMain } from "../ui/NavbarMain";
import rolesdata from "../markdown/Roles.md";
import ReactMarkdown from "react-markdown";
import useMarkdown from "../hooks/useMarkdown";

const Roles: React.FC = () => {
  const { markdown, loading, error } = useMarkdown(rolesdata);

  if (loading) return <Container type="normal">Loading...</Container>;
  if (error) return <Container type="normal">Error: {error}</Container>;

  return (
    <>
      <NavbarMain />
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
          <ReactMarkdown source={markdown} />
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
    </>
  );
};

export default Roles;
