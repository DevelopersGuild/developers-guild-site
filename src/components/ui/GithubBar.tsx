import React from "react";
import { useQuery } from "react-query";
import { StyleSheet, css } from "aphrodite";
import SaferLink from "./SaferLink";

async function fetchRepos(): Promise<Array<TGithubProject>> {
  return await (
    await fetch(
      "https://api.github.com/orgs/DevelopersGuild/repos?sort=updated"
    )
  ).json();
}

type TGithubProject = {
  id: number;
  name: string;
  description: string;
  forks_count: number;
  watchers: number;
  language: string;
  html_url: string;
};

function GithubBar(): JSX.Element {
  const { status, data, error } = useQuery("github-repos", fetchRepos);
  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error: {error}</div>;
  if (data !== undefined && data.length > 1) {
    return (
      <>
        <h2 className={css(styles.header)}>Projects</h2>
        <br />
        <div className="row">
          {data.map((node) => {
            return (
              <div key={node.id} className="col-sm-4">
                <h1 className={css(styles.projectName)}>{node.name}</h1>
                <hr />
                <p className={css(styles.description)}>{node.description}</p>
                <p className={css(styles.language)}>{node.language}</p>
                <SaferLink className={css(styles.link)} href={node.html_url}>
                  GitHub
                </SaferLink>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return <></>;
}

const styles = StyleSheet.create({
  projectName: {
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
    color: "#14171a",
  },
  description: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#14171a",
  },
  language: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#657786",
  },
  link: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#14171a",
  },
  header: {
    marginTop: "1vh",
  },
});

export default GithubBar;
