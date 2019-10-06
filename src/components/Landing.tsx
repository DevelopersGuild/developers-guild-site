import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import GithubBar from './GithubBar';
import MainLogo from './graphic-assets/Main-Logo.svg'

export const Landing: React.FC = () => (
    <React.Fragment>
        <br />
        <Container>
            <Jumbotron>

                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>

                    <img style={{marginRight: 20}} src={MainLogo} alt="Logo" width="150"
                        height="150"
                    />
                    <div>
                        <h1>Developers Guild - De Anza</h1>
                        <p>
                            A project and contribution based programming club.
                    </p>
                    </div>
                </div>

            </Jumbotron>
            <br />
            <GithubBar />
            <br />
        </Container>
    </React.Fragment>
)
