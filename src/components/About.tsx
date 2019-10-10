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
            <img className="open-source-header lazyload" style={{ width: '30vw', alignSelf: 'center' }} data-src={AboutHeader} alt="Header" />
            <Container>
                <br />
                <h5>Section 1</h5>
                <p className="text-justify">
                Developers’ Guild is a club that started in 2014 with its main goal is to facilitate the exploration of computer science through hands-on experience. Developers’ Guild creates a casual environment to practice real-world programming. We foster a community of avid programmers by tackling projects that interest us, competing/participating in events, and gathering skills and experience for the future. Our members are divided into various groups. Each group focuses on a different aspect of computer science. Video Game Development, Machine Learning/AI, and Web application development are some of the groups we provide. Members in these groups will learn these computer science concepts and create projects to apply what they learned. We have various projects for all skill levels ranging from beginner to more experienced programming projects. When you join DG and attend our meetings, you can help contribute code to existing and new projects that you can then put on your portfolio for future jobs and even transfer. Learn new concepts with a community of people that share a passion for programming. 
                </p>
                <br/>
                <h5>TL;DR</h5>
                <ul>
                    <li>Provide a good way to get real-world programming experience.</li>
                    <li>To facilitate the exploration of computer science through hands-on experience.</li>
                    <li>Adept Programmers can work on new challenges and mentor others.</li>
                    <li>Open Source Projects for your portfolio and resume!</li>
                    <li>Collaboration with individuals with differnent skills, perspectives and backgrounds.</li>
                    <li>Communication with Mentors, Industry Leaders and Speakers.</li>
                </ul>
                <br/>
            </Container>
        </div>
    </React.Fragment>
)