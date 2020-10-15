import React from "react";
import Container from "../components/Container";
import "../components/styles/image-headers.css";
import { StyleSheet, css } from "aphrodite";
import { NavbarMain } from "../components/ui/NavbarMain";
import useMarkdown from "../components/hooks/useMarkdown";
import ReactMarkdown from "react-markdown";
import constitutionpath from "../components/markdown/Constitution.md";
import { make as SaferLink } from "../components/ui/SaferLink.bs";

function Constitution(): JSX.Element {
  const { markdown, loading, error } = useMarkdown(constitutionpath);

  if (loading) return <Container type="normal">Loading...</Container>;
  if (error) return <Container type="normal">Error: {error}</Container>;

  return (
    <>
      <NavbarMain />
      <br />
      <div className={css(styles.containerOne)}>
        <Container type="normal">
          <ReactMarkdown source={markdown} />
          <SaferLink href="https://github.com/DevelopersGuild/developers-guild-site/blob/master/src/components/markdown/Constitution.md">
            Edit this page here.
          </SaferLink>
          <br />
          <br />
        </Container>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  containerOne: { display: "flex", flexDirection: "column" },
});

export default Constitution;
