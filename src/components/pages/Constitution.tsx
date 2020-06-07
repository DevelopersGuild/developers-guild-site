import React from "react";
import Container from "../ui/Shared/Container";
import showdown from "showdown";
import ConstitutionHeader from "../graphic-assets/the-creation-of-design.png";
import "../styles/image-headers.css";
import { useQuery } from "react-query";
import { StyleSheet, css } from "aphrodite";

async function fetchConstitutionMarkdown(): Promise<string> {
  const response = await (
    await fetch(
      "https://raw.githubusercontent.com/DevelopersGuild/developers-guild-site-roles/master/Constitution.md"
    )
  ).arrayBuffer();
  const parsed = new TextDecoder("utf-8").decode(response);
  return new showdown.Converter().makeHtml(parsed);
}

function Constitution(): JSX.Element {
  const { status, data, error } = useQuery(
    "fetch-constitution",
    fetchConstitutionMarkdown
  );

  if (status === "loading")
    return <Container type="normal">Loading...</Container>;
  if (status === "error")
    return <Container type="normal">Error: {error}</Container>;

  return (
    <React.Fragment>
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
          <div dangerouslySetInnerHTML={{ __html: data ? data : "" }}></div>
          <a
            target="__blank"
            href="https://github.com/DevelopersGuild/developers-guild-site-roles/blob/master/Constitution.md"
          >
            Edit this page here.
          </a>
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
