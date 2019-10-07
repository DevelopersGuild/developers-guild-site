import React from 'react';
import { Container } from 'react-bootstrap';
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
                </Container>
            </div>
    </React.Fragment>
)