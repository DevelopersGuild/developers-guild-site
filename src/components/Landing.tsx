import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import GithubBar from './GithubBar';
import MainLogo from './graphic-assets/Main-Logo.svg'

export const Landing: React.FC = () => (
    <React.Fragment>
        <br />
        <Container>
            <Jumbotron>
                <Row>
                    <Col>
                        <img src={MainLogo} alt="Logo" width="100"
                            height="100"
                            className="d-inline-block align-top"
                        />
                    </Col>

                    <Col xs={6}>
                        <h1>Developers Guild - De Anza</h1>
                        <p>
                            A project and contribution based programming club.
                    </p>
                    </Col>
                </Row>
            </Jumbotron>
            <br />
            <GithubBar />
            <br />
        </Container>
    </React.Fragment>
)
