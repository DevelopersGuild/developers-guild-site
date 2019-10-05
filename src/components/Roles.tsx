import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import showdown from 'showdown';


const RolesRaw: React.FC = () => {

    const [markDown, setMarkDown] = useState<any>();

    useEffect(() => {
        (async () => {
            const response = await (await fetch('https://raw.githubusercontent.com/DevelopersGuild/developers-guild-site-roles/master/Roles.md')).arrayBuffer();
            const stringParsed = new TextDecoder("utf-8").decode(response);
            const showdownMarkdown = new showdown.Converter().makeHtml(stringParsed);
            setMarkDown(showdownMarkdown);
        })();
    })

    return (
        <React.Fragment>
            <br/>
            <Container className='role-container'>
                <div dangerouslySetInnerHTML={{ __html: markDown }} ></div>
            </Container>
        </React.Fragment>
    )
}


/**
 * Memoizing component to prevent useless re-rendering
 */
const Roles = React.memo(RolesRaw);

export default Roles;