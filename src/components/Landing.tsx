import React from 'react';
import { Container, Navbar, Jumbotron, Button } from 'react-bootstrap';

export const Landing: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Developers Guild</Navbar.Brand>
            </Navbar>
            <Container>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
  </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </Container>
        </React.Fragment>
    )
}