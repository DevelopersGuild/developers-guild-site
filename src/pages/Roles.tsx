import React from "react";
import RolesHeader from "../components/graphic-assets/roles.jpg";
import "../components/styles/image-headers.css";
import Container from "../components/ui/Shared/Container";
import { NavbarMain } from "../components/ui/NavbarMain";
import rolespath from "../components/markdown/Roles.md";
import ReactMarkdown from "react-markdown";
import useMarkdown from "../components/hooks/useMarkdown";
import SaferLink from "../components/ui/SaferLink";

const Roles: React.FC = () => {
  const { markdown, loading, error } = useMarkdown(rolespath);

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
          <SaferLink href="https://github.com/DevelopersGuild/developers-guild-site/blob/master/src/components/markdown/Roles.md">
            Edit this page here.
          </SaferLink>
          <br />
          <br />
        </Container>
      </div>
    </>
  );
};

export default Roles;