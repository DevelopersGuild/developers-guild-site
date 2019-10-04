import React from 'react';
import { Container, Navbar, Jumbotron, Button } from 'react-bootstrap';

export const Landing: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Developers Guild</Navbar.Brand>
            </Navbar>
            <br />
            <Container>
                <Jumbotron>
                    <h1>Developers' Guild - De Anza</h1>
                    <p>
                        A project based programming club.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </Container>
        </React.Fragment>
    )
}