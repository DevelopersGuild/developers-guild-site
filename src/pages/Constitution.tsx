import React from "react";
import Container from "../components/ui/Shared/Container";
import ConstitutionHeader from "../components/graphic-assets/the-creation-of-design.png";
import "../components/styles/image-headers.css";
import { StyleSheet, css } from "aphrodite";
import { NavbarMain } from "../components/ui/NavbarMain";
import useMarkdown from "../components/hooks/useMarkdown";
import ReactMarkdown from "react-markdown";
import constitutionpath from "../components/markdown/Constitution.md";
import SaferLink from "../components/ui/SaferLink";

function Constitution(): JSX.Element {
  const { markdown, loading, error } = useMarkdown(constitutionpath);

  if (loading) return <Container type="normal">Loading...</Container>;
  if (error) return <Container type="normal">Error: {error}</Container>;

  return (
    <React.Fragment>
      <NavbarMain />
      <br />
      <div className={css(styles.containerOne)}>
        <Container type="normal">
          <h4>Developers' Guild Constitution</h4>
          <p className="text-justify">
            Amended in the blood of Martyrs by Yusuf himself.
          </p>
        </Container>
        <img
          className="open-source-header lazyload"
          style={{ width: "30vw", alignSelf: "center" }}
          data-src={ConstitutionHeader}
          alt="Header"
        />
        <Container type="normal">
          <br />
          <br />
          <ReactMarkdown source={markdown} />
          <SaferLink href="https://github.com/DevelopersGuild/developers-guild-site/blob/master/src/components/markdown/Constitution.md">
            Edit this page here.
          </SaferLink>
          <br />
          <br />
        </Container>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  containerOne: { display: "flex", flexDirection: "column" },
});

export default Constitution;
