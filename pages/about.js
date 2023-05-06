import { Container, Row } from "react-bootstrap";
import Head from 'next/head'

// TODO!: Convert to Markdown Page. I was too lazy to do all the legwork on top of Next 13.
export default function About(props) {
    return (
        <>
            <Head>
                <link rel="preload" as="image" href="/og.jpg" />
                <title>Developers Guild | About</title>
            </Head>
            <Container>
                <h1>About The Developers' Guild</h1>
                <h2>Our Purpose</h2>
                <p>
                    Developers’ Guild started in 2014 with the goal of facilitating the exploration of computer science through hands-on experience.
                    Developers’ Guild creates a casual environment to practice real-world programming. We foster a community of avid programmers by
                    tackling projects that interest us, participating and competing in events, and gathering skills and experience for the future.
                    Our members are divided into various groups that focus on a different aspect of computer science, such as video game development,
                    machine learning/AI, and web application development. Members in these groups will learn these computer science concepts and apply
                    them in projects, ranging from beginner to advanced difficulties.
                </p>
                <h2>Why Join?</h2>
                <p>
                    When you join DG and attend our meetings, you can help contribute code and more to existing and new projects that you can add to your portfolio
                    for future jobs or even transfer. Learn new concepts with a community of people that share a passion for programming!
                </p>
                <h2>Open To Everyone</h2>
                <p>
                    Even people who aren’t majoring in computer science can still join!
                    Learn to work with computer programmers and create software that’s appealing to end-users!
                    There are more aspects of software development than just coding and we at Developers’ Guild understand that.
                    Create assets for games and UI mockups for websites and applications!
                </p>
                <h2>TL;DR</h2>
                <ul>
                    <li>No prior experience necessary!</li>
                    <li>Provides a good way to get real-world programming experience.</li>
                    <li>Facilitates the exploration of computer science through hands-on experience.</li>
                    <li>Adept programmers can work on new challenges and mentor others.</li>
                    <li>Contribute/Create open-source projects for your portfolio and resume!</li>
                    <li>Collaboration with individuals with different skills, perspectives, and backgrounds.</li>
                    <li>Communication with mentors, industry leaders, and speakers.</li>
                </ul>
            </Container>
        </>
    );
}
