import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const GithubBarRaw: React.FC = () => {

    const [repos, setRepos] = useState<any[]>([])

    useEffect(() => {
        (async () => {
            const response = await (await fetch('https://api.github.com/orgs/DevelopersGuild/repos')).json();
            setRepos(response);
        })();
    });

    return (
        <React.Fragment>
            {repos.map((e, index) => (
                <React.Fragment key={index}>
                    <h5>{e.full_name}</h5>
                    <p>{e.description}</p>
                    <p>{e.forks_count}</p>
                    <Button><a href={e.html_url}>Repo</a></Button>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

/**
 * Memoizing component to prevent useless re-rendering
 */
const GithubBar = React.memo(GithubBarRaw);

export default GithubBar;