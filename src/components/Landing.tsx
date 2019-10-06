import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import GithubBar from './GithubBar';
import MainLogo from './graphic-assets/Main-Logo.svg'

export const Landing: React.FC = () => (
    <React.Fragment>
        <br />
        <Container>
            <Jumbotron>
                <h1>Developers Guild - De Anza</h1>
                <p>
                    A project and contribution based programming club.
                    </p>
            </Jumbotron>
            <br />
            <GithubBar />
            <br/>
        </Container>
    </React.Fragment>
)
