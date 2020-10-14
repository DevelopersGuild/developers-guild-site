import React from "react";
import { useQuery } from "react-query";
import { StyleSheet, css } from "aphrodite";
import SaferLink from "./SaferLink";

type TLiteralUnion<T extends U, U = string> =
  | T
  | (U & { zz_IGNORE_ME?: never });

type TGithubProject = {
  id: number;
  name: string;
  description: string;
  forks_count: number;
  watchers: number;
  language: string;
  html_url: string;
};

type TGithubLanguageType = TLiteralUnion<
  | "javascript"
  | "typescript"
  | "css"
  | "c#"
  | "html"
  | "c++"
  | "python"
  | "swift"
  | "objective-c"
  | "pascal"
  | "go"
  | "none"
>;

type TGithubColor = TLiteralUnion<
  | "#2b7489"
  | "#f1e05a"
  | "#563d7c"
  | "#178600"
  | "#e44b23"
  | "#f34b7d"
  | "#3572A5"
  | "#ffac45"
  | "#438eff"
  | "#b0ce4e"
  | "#375eab"
  | "#808080"
>;

function generateLanguageColor(language: TGithubLanguageType): TGithubColor {
  switch (language) {
    case "javascript":
      return "#f1e05a";
    case "typescript":
      return "#2b7489";
    case "css":
      return "#563d7c";
    case "c#":
      return "#178600";
    case "html":
      return "#e44b23";
    case "c++":
      return "#f34b7d";
    case "python":
      return "#3572A5";
    case "swift":
      return "#ffac45";
    case "objective-c":
      return "#438eff";
    case "pascal":
      return "#b0ce4e";
    case "go":
      return "#375eab";
    case "none":
      return "#808080";
    default:
      return "#808080";
  }
}

async function fetchRepos(): Promise<Array<TGithubProject>> {
  return await (
    await fetch(
      "https://api.github.com/orgs/DevelopersGuild/repos?sort=updated"
    )
  ).json();
}

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
              <div
                key={node.id}
                className={`${css(styles.projectNode)} col-sm-4`}
              >
                <h1 className={css(styles.projectName)}>{node.name}</h1>
                <div
                  style={{
                    height: "10px",
                    width: "50%",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "5px",
                    borderBottomColor: node.language
                      ? generateLanguageColor(node.language.toLowerCase())
                      : generateLanguageColor("none"),
                  }}
                >
                  {""}
                </div>
                <div className={css(styles.description)}>
                  {node.description}
                </div>
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
  projectNode: {
    padding: "30px",
  },
  projectName: {
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
  },
  description: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
  },
  language: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#657786",
  },
  link: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#ffffff",
    ":hover": {
      color: "#7289da",
    },
  },
  header: {
    marginTop: "1vh",
  },
});

export default GithubBar;
