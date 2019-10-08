import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './styles/image-headers.css'
import ContactHeader from './graphic-assets/contact.jpg'


export const Contact: React.FC = () => (
    <React.Fragment>
        <br />
        <div style={{ display: "flex", flexDirection: 'column' }} >
            <Container>
                <h4>Contact The Developers Guild</h4>
                <p className="text-justify">
                    Here are different ways to contact the developers guild.
                    </p>
            </Container>
            <img className="open-source-header" style={{ width: '30vw', alignSelf: 'center' }} src={ContactHeader} alt="Header" />
            <Container >
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td colSpan={2}><strong>Contact Methods</strong></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><a href="mailto:developersguildclub@gmail.com">developersguildclub@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td>Github</td>
                            <td><a href="https://github.com/DevelopersGuild">https://github.com/DevelopersGuild</a></td>
                        </tr>
                        <tr>
                            <td>Facebook</td>
                            <td> <a href="https://www.facebook.com/officialdevelopersguild/">https://www.facebook.com/officialdevelopersguild</a></td>
                        </tr>
                        <tr>
                            <td>Instagram</td>
                            <td><a href="https://www.instagram.com/da.devguild/">https://www.instagram.com/da.devguild</a></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><strong>Advisors</strong></td>
                        </tr>
                        <tr>
                            <td>Ronald Kleinman</td>
                            <td><a href="mailto:kleinmanronald@deanza.edu">kleinmanronald@deanza.edu</a></td>
                        </tr>
                        <tr>
                            <td>Delia Garbacea</td>
                            <td><a href="mailto:GarbaceaDelia@deanza.edu">GarbaceaDelia@deanza.edu</a> or <a href="tel:408-864-8308">408-864-8308</a></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

        </div>
    </React.Fragment>
)