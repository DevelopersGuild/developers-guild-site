import React from 'react';
import { Container } from 'react-bootstrap';
import OpenSourceHeader from './graphic-assets/open-source.png'
import './styles/image-headers.css'
/**
 *  Sourced from https://opensource.guide/how-to-contribute/
 */

export const Contributing: React.FC = () => (
    <React.Fragment>
        <br />
        <div style={{ display: "flex", flexDirection: 'column' }} >
            <Container>
                <h4>How to Contribute to Open Source Developers Guild Projects</h4>
                <p className="text-justify">
                    Want to contribute to open source? A guide to making open source contributions, for first-timers and for veterans.
            </p>
            </Container>

            <img className="open-source-header lazyload" style={{ width: '30vw', alignSelf: 'center' }} data-src={OpenSourceHeader} alt="Header" />

            <Container>
                <br />
                <h5>Section 1</h5>
                <br />
                <h4>Why contribute to open source?</h4>
                <p className="text-justify">
                    Contributing to open source can be a rewarding way to learn, teach, and build experience in just about any skill you can imagine.
                    Why do people contribute to open source? Plenty of reasons!
            </p>
                <h4>Improve software you rely on</h4>
                <p className="text-justify">
                    Lots of open source contributors start by being users of software they contribute to. When you find a bug in an open source software you use, you may want to look at the source to see if you can patch it yourself. If that’s the case, then contributing the patch back is the best way to ensure that your friends (and yourself when you update to the next release) will be able to benefit from it.
            </p>
                <h4>
                    Improve existing skills
            </h4>
                <p className="text-justify">
                    Whether it’s coding, user interface design, graphic design, writing, or organizing, if you’re looking for practice, there’s a task for you on an open source project.
            </p>
                <h4>Meet people who are interested in similar things</h4>
                <p className="text-justify">
                    Open source projects with warm, welcoming communities keep people coming back for years. Many people form lifelong friendships through their participation in open source, whether it’s running into each other at conferences or late night online chats about burritos.
            </p>
                <h4>Find mentors and teach others</h4>
                <p className="text-justify">
                    Working with others on a shared project means you’ll have to explain how you do things, as well as ask other people for help. The acts of learning and teaching can be a fulfilling activity for everyone involved.
            </p>
                <h4>Build public artifacts that help you grow a reputation (and a career)</h4>
                <p className="text-justify">
                    By definition, all of your open source work is public, which means you get free examples to take anywhere as a demonstration of what you can do.
            </p>
                <h4>Learn people skills</h4>
                <p className="text-justify">
                    Open source offers opportunities to practice leadership and management skills, such as resolving conflicts, organizing teams of people, and prioritizing work.
            </p>
                <h4>It’s empowering to be able to make changes, even small ones</h4>
                <p className="text-justify">
                    You don’t have to become a lifelong contributor to enjoy participating in open source. Have you ever seen a typo on a website, and wished someone would fix it? On an open source project, you can do just that. Open source helps people feel agency over their lives and how they experience the world, and that in itself is gratifying.
            </p>

                <br />
                <h5>Section 2</h5>
                <br />

                <h4>What it means to contribute</h4>

                <blockquote className="blockquote">
                    If you’re a new open source contributor, the process can be intimidating. How do you find the right project? What if you don’t know how to code? What if something goes wrong?
            </blockquote>

                <p className="text-justify">
                    Not to worry! There are all sorts of ways to get involved with an open source project, and a few tips will help you get the most out of your experience.
            </p>
                <br />

                <h4>You don’t have to contribute code</h4>

                <p className="text-justify">A common misconception about contributing to open source is that you need to contribute code. In fact, it’s often the other parts of a project that are most neglected or overlooked. You’ll do the project a huge favor by offering to pitch in with these types of contributions!</p>
                <p className="text-justify">
                    Even if you like to write code, other types of contributions are a great way to get involved with a project and meet other community members. Building those relationships will give you opportunities to work on other parts of the project.
            </p>
                <br />

                <h4>Do you like planning events?</h4>

                <ul>
                    <li>Organize workshops or meetups about the project</li>
                    <li>Organize the project’s conference (if they have one)</li>
                    <li>Help community members find the right conferences and submit proposals for speaking</li>
                </ul>

                <h4>
                    Do you like to design?
            </h4>

                <ul>
                    <li>Restructure layouts to improve the project’s usability</li>
                    <li>Conduct user research to reorganize and refine the project’s navigation or menus</li>
                    <li>Put together a style guide to help the project have a consistent visual design</li>
                    <li>Create art for t-shirts or a new logo</li>
                </ul>

                <h4>
                    Do you like to write?
            </h4>

                <ul>
                    <li>Write and improve the project’s documentation</li>
                    <li>Curate a folder of examples showing how the project is used</li>
                    <li>Start a newsletter for the project, or curate highlights from the mailing list</li>
                    <li>Write tutorials for the project</li>
                    <li>Write a translation for the project’s documentation</li>
                </ul>

                <h4>
                    Do you like organizing?
            </h4>

                <ul>
                    <li>Link to duplicate issues, and suggest new issue labels, to keep things organized</li>
                    <li>Go through open issues and suggest closing old ones</li>
                    <li>Ask clarifying questions on recently opened issues to move the discussion forward</li>
                </ul>

                <h4>Do you like to code?</h4>

                <ul>
                    <li>Find an open issue to tackle</li>
                    <li>Ask if you can help write a new feature</li>
                    <li>Automate project setup</li>
                    <li>Improve tooling and testing</li>
                </ul>

                <h4>Do you like helping people?</h4>

                <ul>
                    <li>Answer questions about the project on e.g., Stack Overflow or Discord</li>
                    <li>Answer questions for people on open issues</li>
                    <li>Help moderate the discussion boards or conversation channels</li>
                </ul>

                <h4>Do you like helping others code?</h4>

                <ul>
                    <li>Review code on other people’s submissions</li>
                    <li>Write tutorials for how a project can be used</li>
                    <li>Offer to mentor another contributor</li>
                </ul>

                <h4>You don’t just have to work on software projects!</h4>

                <p className="text-justify">While “open source” often refers to software, you can collaborate on just about anything. There are books, recipes, lists, and classes that get developed as open source projects.</p>
                <p className="text-justify">Even if you’re a software developer, working on a documentation project can help you get started in open source. It’s often less intimidating to work on projects that don’t involve code, and the process of collaboration will build your confidence and experience.</p>

                <br />
                <h5>Section 3</h5>
                <br />
                <h4>Orienting yourself to a new project</h4>

                <p className="text-justify">For anything more than a typo fix, contributing to open source is like walking up to a group of strangers at a party. If you start talking about llamas, while they were deep in a discussion about goldfish, they’ll probably look at you a little strangely. Before jumping in blindly with your own suggestions, start by learning how to read the room. Doing so increases the chances that your ideas will be noticed and heard.</p>

                <h4>Anatomy of an open source project</h4>
                <p className="text-justify">
                    Every open source community is different.
            </p>
                <p className="text-justify">
                    Spending years on one open source project means you’ve gotten to know one open source project. Move to a different project, and you might find the vocabulary, norms, and communication styles are completely different.
            </p>
                <p className="text-justify">
                    That said, many open source projects follow a similar organizational structure. Understanding the different community roles and overall process will help you get quickly oriented to any new project.
            </p>

                <p className="text-justify">
                    A typical open source project has the following types of people:
            </p>

                <ul>
                    <li>Author: The person/s or organization that created the project</li>
                    <li>Owner: The person/s who has administrative ownership over the organization or repository (not always the same as the original author)</li>
                    <li>Maintainers: Contributors who are responsible for driving the vision and managing the organizational aspects of the project (They may also be authors or owners of the project.)</li>
                    <li>Contributors: Everyone who has contributed something back to the project</li>
                    <li>Community Members: People who use the project. They might be active in conversations or express their opinion on the project’s direction</li>
                </ul>

                <p className="text-justify">
                    Bigger projects may also have subcommittees or working groups focused on different tasks, such as tooling, triage, community moderation, and event organizing. Look on a project’s website for a “team” page, or in the repository for governance documentation, to find this information.
            </p>

                <p className="text-justify">
                    A project also has documentation. These files are usually listed in the top level of a repository.
            </p>

                <ul>
                    <li>LICENSE: By definition, every open source project must have an open source license. If the project does not have a license, it is not open source.</li>
                    <li>README: The README is the instruction manual that welcomes new community members to the project. It explains why the project is useful and how to get started.</li>
                    <li>CONTRIBUTING: Whereas READMEs help people use the project, contributing docs help people contribute to the project. It explains what types of contributions are needed and how the process works. While not every project has a CONTRIBUTING file, its presence signals that this is a welcoming project to contribute to.</li>
                    <li>CODE_OF_CONDUCT: The code of conduct sets ground rules for participants’ behavior associated and helps to facilitate a friendly, welcoming environment. While not every project has a CODE_OF_CONDUCT file, its presence signals that this is a welcoming project to contribute to.</li>
                    <li>Other documentation: There might be additional documentation, such as tutorials, walkthroughs, or governance policies, especially on bigger projects.</li>
                </ul>

                <p className="text-justify">Finally, open source projects use the following tools to organize discussion. Reading through the archives will give you a good picture of how the community thinks and works.</p>

                <ul>
                    <li>Issue tracker: Where people discuss issues related to the project.</li>
                    <li>Pull requests: Where people discuss and review changes that are in progress.</li>
                    <li>Discussion forums or mailing lists: Some projects may use these channels for conversational topics (for example, “How do I…“ or “What do you think about…“ instead of bug reports or feature requests). Others use the issue tracker for all conversations.</li>
                    <li>Synchronous chat channel: Some projects use chat channels (such as Slack or IRC) for casual conversation, collaboration, and quick exchanges.</li>
                </ul>

                <br />
                <h5>Section 4</h5>
                <br />
                <h4>How to submit a contribution</h4>

                <blockquote className="blockquote">
                    You’ve found a project you like, and you’re ready to make a contribution. Finally! Here’s how to get your contribution in the right way.
            </blockquote>

                <h4>Communicating effectively</h4>
                <p className="text-justify">
                    Whether you’re a one-time contributor or trying to join a community, working with others is one of the most important skills you’ll develop in open source.
            </p>
                <p className="text-justify">
                    Before you open an issue or pull request, or ask a question in chat, keep these points in mind to help your ideas come across effectively.
            </p>

                <p className="text-justify">
                    Give context. Help others get quickly up to speed. If you’re running into an error, explain what you’re trying to do and how to reproduce it. If you’re suggesting a new idea, explain why you think it’d be useful to the project (not just to you!).
            </p>

                <p className="text-justify">
                    Do your homework beforehand. It’s OK not to know things, but show that you tried. Before asking for help, be sure to check a project’s README, documentation, issues (open or closed), mailing list, and search the internet for an answer. People will appreciate when you demonstrate that you’re trying to learn.
            </p>

                <p className="text-justify">
                    Keep requests short and direct. Much like sending an email, every contribution, no matter how simple or helpful, requires someone else’s review. Many projects have more incoming requests than people available to help. Be concise. You will increase the chance that someone will be able to help you.
            </p>

                <p className="text-justify">
                    Keep all communication public. Although it’s tempting, don’t reach out to maintainers privately unless you need to share sensitive information (such as a security issue or serious conduct violation). When you keep the conversation public, more people can learn and benefit from your exchange. Discussions can be, in themselves, contributions.
            </p>

                <p className="text-justify">
                    It’s okay to ask questions (but be patient!). Everybody was new to the project at some point, and even experienced contributors need to get up to speed when they look at a new project. By the same token, even longtime maintainers are not always familiar with every part of the project. Show them the same patience that you’d want them to show to you.
            </p>

                <p className="text-justify">
                    Respect community decisions. Your ideas may differ from the community’s priorities or vision. They may offer feedback or decide not to pursue your idea. While you should discuss and look for compromise, maintainers have to live with your decision longer than you will. If you disagree with their direction, you can always work on your own fork or start your own project.
            </p>

                <p className="text-justify">
                    Above all, keep it classy. Open source is made up of collaborators from all over the world. Context gets lost across languages, cultures, geographies, and time zones. In addition, written communication makes it harder to convey a tone or mood. Assume good intentions in these conversations. It’s fine to politely push back on an idea, ask for more context, or further clarify your position. Just try to leave the internet a better place than when you found it.
            </p>

                <h4>Gathering context</h4>

                <p className="text-justify">
                    Before doing anything, do a quick check to make sure your idea hasn’t been discussed elsewhere. Skim the project’s README, issues (open and closed), mailing list, and Stack Overflow. You don’t have to spend hours going through everything, but a quick search for a few key terms goes a long way.
            </p>

                <p className="text-justify">
                    If you can’t find your idea elsewhere, you’re ready to make a move. If the project is on GitHub, you’ll likely communicate by opening an issue or pull request:
            </p>

                <ul>
                    <li>Issues are like starting a conversation or discussion</li>
                    <li>Pull requests are for starting work on a solution</li>
                    <li>For lightweight communication, such as a clarifying or how-to question, try asking on Stack Overflow, IRC, Slack, or other chat channels, if the project has one</li>
                </ul>

                <p className="text-justify">Before you open an issue or pull request, check the project’s contributing docs (usually a file called CONTRIBUTING, or in the README), to see whether you need to include anything specific. For example, they may ask that you follow a template, or require that you use tests.</p>
                <p className="text-justify">If you want to make a substantial contribution, open an issue to ask before working on it. It’s helpful to watch the project for a while (on GitHub, you can click “Watch” to be notified of all conversations), and get to know community members, before doing work that might not get accepted.</p>

                <h4>Opening an issue</h4>

                <p className="text-justify">You should usually open an issue in the following situations:</p>
                <ul>
                    <li>Report an error you can’t solve yourself</li>
                    <li>Discuss a high-level topic or idea (for example, community, vision or policies)</li>
                    <li>Propose a new feature or other project idea</li>
                </ul>

                <p className="text-justify">Tips for communicating on issues:</p>

                <ul>
                    <li>If you see an open issue that you want to tackle, comment on the issue to let people know you’re on it. That way, people are less likely to duplicate your work.</li>
                    <li>If an issue was opened a while ago, it’s possible that it’s being addressed somewhere else, or has already been resolved, so comment to ask for confirmation before starting work.</li>
                    <li>If you opened an issue, but figured out the answer later on your own, comment on the issue to let people know, then close the issue. Even documenting that outcome is a contribution to the project.</li>
                </ul>

                <h4>
                    Opening a pull request
            </h4>

                <p className="text-justify">You should usually open a pull request in the following situations:</p>
                <ul>
                    <li>Submit trivial fixes (for example, a typo, a broken link or an obvious error)</li>
                    <li>Start work on a contribution that was already asked for, or that you’ve already discussed, in an issue</li>
                </ul>

                <p className="text-justify">
                    A pull request doesn’t have to represent finished work. It’s usually better to open a pull request early on, so others can watch or give feedback on your progress. Just mark it as a “WIP” (Work in Progress) in the subject line. You can always add more commits later.
            </p>

                <p className="text-justify">
                    If the project is on GitHub, here’s how to submit a pull request:
            </p>

                <ul>
                    <li>Fork the repository and clone it locally. Connect your local to the original “upstream” repository by adding it as a remote. Pull in changes from “upstream” often so that you stay up to date so that when you submit your pull request, merge conflicts will be less likely.</li>
                    <li>Create a branch for your edits.</li>
                    <li>Reference any relevant issues or supporting documentation in your PR (for example, “Closes #37.”)</li>
                    <li>Include screenshots of the before and after if your changes include differences in HTML/CSS. Drag and drop the images into the body of your pull request.</li>
                    <li>Test your changes! Run your changes against any existing tests if they exist and create new ones when needed. Whether tests exist or not, make sure your changes don’t break the existing project.</li>
                    <li>Contribute in the style of the project to the best of your abilities. This may mean using indents, semi-colons or comments differently than you would in your own repository, but makes it easier for the maintainer to merge, others to understand and maintain in the future.</li>
                </ul>


                <br />
                <h5>Section 5</h5>
                <br />
                <h4>What happens after you submit a contribution</h4>

                <blockquote className="blockquote">
                    You did it! Congratulations on becoming an open source contributor. We hope it’s the first of many.
            </blockquote>

                <p className="text-justify">
                    After you submit a contribution, one of the following will happen:
            </p>

                <h4> <span aria-label="sad face" role="img" >😭</span> You don’t get a response.</h4>

                <p className="text-justify">Hopefully you checked the project for signs of activity before making a contribution. Even on an active project, however, it’s possible that your contribution won’t get a response.</p>
                <p className="text-justify">
                    If you haven’t gotten a response in over a week, it’s fair to politely respond in that same thread, asking someone for a review. If you know the name of the right person to review your contribution, you can @-mention them in that thread.
            </p>
                <p className="text-justify">
                    Don’t reach out to that person privately; remember that public communication is vital to open source projects.
            </p>

                <p className="text-justify">
                    If you make a polite bump and still nobody responds, it’s possible that nobody will respond, ever. It’s not a great feeling, but don’t let that discourage you. It’s happened to everyone! There are many possible reasons why you didn’t get a response, including personal circumstances that may be out of your control. Try to find another project or way to contribute. If anything, this is a good reason not to invest too much time in making a contribution before other community members are engaged and responsive.
            </p>

                <h4> <span aria-label="construction sign" role="img">🚧</span> Someone requests changes to your contribution.</h4>

                <p className="text-justify">
                    It’s common that you’ll be asked to make changes to your contribution, whether that’s feedback on the scope of your idea, or changes to your code.
            </p>

                <p className="text-justify">
                    When someone requests changes, be responsive. They’ve taken the time to review your contribution. Opening a PR and walking away is bad form. If you don’t know how to make changes, research the problem, then ask for help if you need it.
            </p>

                <p className="text-justify">
                    If you don’t have time to work on the issue anymore (for example, if the conversation has been going on for months, and your circumstances have changed), let the maintainer know so they’re not expecting a response. Someone else may be happy to take over.
            </p>

                <h4><span aria-label="thumbs down" role="img">👎</span> Your contribution doesn’t get accepted.</h4>

                <p className="text-justify">
                    Your contribution may or may not be accepted in the end. Hopefully you didn’t put too much work into it already. If you’re not sure why it wasn’t accepted, it’s perfectly reasonable to ask the maintainer for feedback and clarification. Ultimately, however, you’ll need to respect that this is their decision. Don’t argue or get hostile. You’re always welcome to fork and work on your own version if you disagree!
            </p>


                <h4><span aria-label="confetti" role="img">🎉</span> Your contribution gets accepted.</h4>
                <p className="text-justify">Hooray! You’ve successfully made an open source contribution!</p>

                <br />
                <h5>Section 6</h5>
                <br />
                <h4>You did it!</h4>

                <blockquote className="blockquote">
                    Whether you just made your first open source contribution, or you’re looking for new ways to contribute, we hope you’re inspired to take action. Even if your contribution wasn’t accepted, don’t forget to say thanks when a maintainer put effort into helping you. Open source is made by people like you: one issue, pull request, comment, or high-five at a time.
            </blockquote>


            </Container>
        </div>

    </React.Fragment>
)