import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import showdown from 'showdown';
import ConstitutionHeader from './graphic-assets/the-creation-of-design.png'
import './styles/image-headers.css'



const ConstitutionRaw: React.FC = () => {

    const [markDown, setMarkDown] = useState<any>();

    useEffect(() => {
        (async () => {
            /**
             * Takes data from a Markdown file that's easy to edit through the developers guild github
             * and parses it out on this page.
             */
            const abortController = new AbortController();
            const signal = abortController.signal;
            const response = await (await fetch('https://raw.githubusercontent.com/DevelopersGuild/developers-guild-site-roles/master/Constitution.md', { signal })).arrayBuffer();
            const stringParsed = new TextDecoder("utf-8").decode(response);
            const showdownMarkdown = new showdown.Converter().makeHtml(stringParsed);
            setMarkDown(showdownMarkdown);
            return function cleanup() {
                abortController.abort();
            }
        })();
    }, [])

    return (
        <React.Fragment>
            <br />
            <div style={{ display: "flex", flexDirection: 'column' }} >
                <img className="open-source-header" style={{ width: '30vw', alignSelf: 'center' }} src={ConstitutionHeader} alt="Header" />
                <Container className='role-container'>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: markDown }} ></div>
                    <a target="__blank" href="https://github.com/DevelopersGuild/developers-guild-site-roles/blob/master/Constitution.md">Edit this page here.</a>
                    <br />
                    <br />
                </Container>
            </div>

        </React.Fragment>
    )
}


/**
 * Memoizing component to prevent useless re-rendering
 */
const Constitution = React.memo(ConstitutionRaw);

export default Constitution;