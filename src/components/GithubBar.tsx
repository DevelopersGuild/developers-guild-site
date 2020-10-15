import type { TLiteralUnion } from "../types";
import React from "react";
import { make as SaferLink } from "./SaferLink.bs";
import styles from "../styles/github-bar.module.css";

export type TGithubProject = {
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

type TProps = {
  readonly data: Array<TGithubProject>;
};

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

function GithubBar({ data }: TProps): JSX.Element {
  if (data !== undefined && data.length > 1) {
    return (
      <>
        <h2>Projects</h2>
        <br />
        <div className="row">
          {data.map((node) => {
            return (
              <div key={node.id} className={`${styles.projectNode} col-sm-4`}>
                <h1 className={styles.projectName}>{node.name}</h1>
                <div
                  style={{
                    borderBottomColor: node.language
                      ? generateLanguageColor(node.language.toLowerCase())
                      : generateLanguageColor("none"),
                  }}
                  className={styles.languageColorIndicator}
                >
                  {""}
                </div>
                <div className={styles.description}>{node.description}</div>
                <p className={styles.language}>{node.language}</p>
                <SaferLink className={styles.link} href={node.html_url}>
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

export default GithubBar;
