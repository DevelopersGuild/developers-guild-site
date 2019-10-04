import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const Landing: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Developers Guild</Navbar.Brand>
            </Navbar>
            <Container>
            </Container>
        </React.Fragment>
    )
}