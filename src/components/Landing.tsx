import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import { GithubBar } from './GithubBar';

export const Landing: React.FC = () => (
    <React.Fragment>
        <br />
        <Container>
            <Jumbotron>
                <h1>Developers Guild - De Anza</h1>
                <p>
                    A project and contribution based programming club.
                    </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <br />
            <GithubBar />
        </Container>
    </React.Fragment>
)
