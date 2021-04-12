import React from 'react';
import axios from "axios";
import GithubBar from "../components/GithubBar.react";

const Projects = ({ githubProjects }) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center text-center">
        <h1>Projects</h1>
        <div className="divider"></div>
      </div>
      <div className="mw-85">
        <GithubBar githubProjects={githubProjects} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const githubProjects = await axios.get(
    "https://api.github.com/orgs/DevelopersGuild/repos?sort=updated"
  );

  return {
    props: {
      githubProjects: githubProjects.data,
    }
  }
}

export default Projects;