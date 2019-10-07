import React from 'react';
import { Container, } from 'react-bootstrap';
import './styles/image-headers.css'
import AboutHeader from './graphic-assets/about.png'


export const About: React.FC = () => (
    <React.Fragment>
        <br />
        <div style={{ display: "flex", flexDirection: 'column' }} >
            <Container>
                <h4>About The Developers Guild</h4>
                <p className="text-justify">
                    Learn more about the developers guild.
                    </p>
            </Container>
            <img className="open-source-header" style={{ width: '30vw', alignSelf: 'center' }} src={AboutHeader} alt="Header" />
            <Container>
            </Container>
        </div>
    </React.Fragment>
)