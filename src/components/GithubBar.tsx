import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const GithubBarRaw: React.FC = () => {

    const [repos, setRepos] = useState<any[]>([])

    useEffect(() => {
        (async () => {
            const response = await (await fetch('https://api.github.com/orgs/DevelopersGuild/repos')).json();
            setRepos(response);
        })();
    });

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    Github Repositories
            </Card.Title>
                <div>
                    <div style={{ overflow: 'auto', maxHeight: 400 }}>
                        {repos.map((e, index) => (
                            <React.Fragment key={index}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{e.full_name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{e.description}</Card.Subtitle>
                                        <Card.Text> 🍴Forks:{e.forks_count} {" "} 👁 Watchers:{e.watchers} {" "} 💻 Language: {e.language}</Card.Text>
                                        <Card.Link href={e.html_url}>Repository</Card.Link>
                                        {/* <Card.Link href={e.collaborators_url}>Collaborators</Card.Link> */}
                                    </Card.Body>
                                </Card>
                            </React.Fragment>
                        ))}
                    </div>
                    <br />
                </div>
            </Card.Body>
        </Card>
    );
};

/**
 * Memoizing component to prevent useless re-rendering
 */
const GithubBar = React.memo(GithubBarRaw);

export default GithubBar;