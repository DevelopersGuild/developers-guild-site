import React from 'react';
import loftryTheme from './Theme';
import { Box, Heading, TextInput, Button, Text, Grommet, Anchor, Tabs, Tab, Layer, FormField, Select, TextArea } from 'grommet';
import Register from './register';

const Front: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmission = async () => {
        console.log(JSON.stringify({ email, password }));
    }
    const [show, setShow] = React.useState();

    return (
        <Grommet full theme={loftryTheme}>
            <Box fill background="url(https://images.unsplash.com/43/L6sQn4GyQdSBW7pLgEz7_DSC_0013.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1945&q=80)">
                <Box
                    direction="row"
                    align="center"
                    fill="horizontal"
                    pad={{ right: "xsmall", left: "xsmall" }}
                >
                    <Heading margin="medium" alignSelf="start" level='2' color="black">Loftly</Heading>
                    <Box
                        gap="large"
                        direction="row"
                        margin={{ left: "1450px" }}
                    >
                        <Anchor href="#" size="large" color="black" label="About" />
                        <Anchor href="#" size="large" color="black" label="FAQ" />
                        <Anchor href="#" size="large" color="black" label="Help" />
                    </Box>
                </Box>
                <Box
                    direction="row">
                    <Box
                        margin={{ left: '162px', top: '89px' }}
                        background="white"
                        alignSelf="start"
                        width="medium"
                        height="large"
                        direction="column"
                        pad="medium"
                        round="small"
                        border={{ color: 'white', size: 'large' }} >
                        <Heading margin="none">Welcome Back</Heading>
                        <br />
                        <Box width="medium">
                            <TextInput
                                placeholder="email"
                                value={email}
                                type="email"
                                onChange={event => setEmail(event.target.value)}
                            />
                        </Box>
                        <br />
                        <Box width="medium">
                            <TextInput
                                placeholder="password"
                                value={password}
                                type="password"
                                onChange={event => setPassword(event.target.value)}
                            />
                        </Box>
                        <br />
                        <Box width="medium" >
                            <Button style={{ color: "#ffffff" }} margin="xsmall" primary label="Login" onClick={handleSubmission} />
                        </Box>
                        <Text margin="small" >Don't have an account? <Anchor onClick={() => setShow(true)}> Sign Up</Anchor></Text>
                        {show && (
                            <Layer
                                onEsc={() => setShow(false)}
                                onClickOutside={() => setShow(false)}
                            >
                                <Register />
                            </Layer>
                        )}
                    </Box>
                    <Box align="start" margin={{ top: "260px", left: "142px" }} direction="column" >
                        <Heading color="light-1" level="1" textAlign="start" >Introducing Loftly Housing. <br /> Welcome to AI Powered Co-living and TRM.</Heading>
                        <Box direction="row" align="start" gap="large">
                            <Button style={{ color: "#ffffff" }} margin="small" primary label="Living with Loftly" />
                            <Button style={{ color: "#ffffff" }} margin="small" primary label="Use the Loftly TRM" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box align="center" justify="start" fill >
                <Box pad="small" align="center" >
                    <Tabs>
                        <Tab title="Privacy">
                            <Box fill>
                                <Heading alignSelf="start">Privacy</Heading>
                                <Text>
                                    Protecting User privacy is important to the Loftly
                                    team this is why all A.I powered features are embedded
                                    directly into the client. Basically Loftly runs all
                                    A.I insights on a closed loop system directly on your device.
                            </Text>
                            </Box>
                        </Tab>
                        <Tab title="Automation">
                            <Box fill >
                                <Heading alignSelf="start">Workflow Automation</Heading>
                                <Text>
                                    Automating responses to Tenants and Third Parties and automating
                                    actions such as approving of decisions of }processing complaints
                                    is a huge time saver which allows you and your team to focus on
                                    the work that matters to you.
                                </Text>
                            </Box>
                        </Tab>
                        <Tab title="Modern Platform">
                            <Box fill>
                                <Heading alignSelf="start">Easy to Use Reliable Software</Heading>
                                <Text>
                                    Loftly is powered by the latest open source software
                                    validated by thousands of organizations across the globe
                                    like Google, Apple, Facebook and Others. Loftly is also built
                                    on the fault tolerant hardware that all these companies run on.
                                    It's a cloud native, cross platform tool for managing tenants and
                                    properties. We also run thousands of automated tests to make sure every
                                    feature on the platform works properly.
                                </Text>
                            </Box>
                        </Tab>
                        <Tab title="Thriving Habitat">
                            <Box fill>
                                <Heading alignSelf="start">Bootstrapping Eco-Systems</Heading>
                                <Text>
                                    Loftly makes interacting and planning around your roomates schedules
                                    easier mediate the planning of social events, chores, bills and transportation.
                                </Text>
                            </Box>
                        </Tab>
                    </Tabs>
                </Box>
            </Box>
        </Grommet>
    )
}

export default Front;