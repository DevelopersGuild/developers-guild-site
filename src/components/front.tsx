import React from 'react';
import loftryTheme from './Theme';
import { Box, Header,Layer, Heading, TextInput, Button, Text, Grommet, Anchor, Tabs, Tab, } from 'grommet';
import {Login} from 'grommet-icons';
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
            <Box fill="vertical" overflow = "hidden"align="start" flex="grow" background="url(https://images.unsplash.com/43/L6sQn4GyQdSBW7pLgEz7_DSC_0013.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1945&q=80)" direction="column">
        <Header align="center" direction="row-responsive" justify="start" gap="large" fill="horizontal">
          <Heading textAlign="start" margin={{"left":"medium","right":"large"}}>
            Loftry
          </Heading>
          <Box direction="row" gap="medium">
            <Anchor href = "/about" label="About" size="large" />
            <Anchor href = "/faq" label="FAQ" size="large" />
            <Anchor href = "/help" label="Help" size="large" />
          </Box>
        </Header>
        <Box align="center" justify="center" direction="row" gap="medium">
          <Box align="stretch" justify="start" fill={false} background={{"color":"background"}} pad="large" wrap={false} round="medium" gap="large" direction="column" margin="xlarge">
            <Heading textAlign="start" margin="small" size="medium" level="1">
              Welcome Back
            </Heading>
            <TextInput placeholder="Email" value={email} type="email" onChange={event => setEmail(event.target.value)}/>
            <TextInput placeholder="Password" type="password" value={password} onChange={event => setPassword(event.target.value)}/>
            <Button label="Login" color="brand" fill="horizontal" icon={<Login />} primary={true} onClick={handleSubmission} />
            <Text textAlign="start">
              Don't have an account? <Anchor onClick={() => setShow(true)}> Sign Up</Anchor>
            </Text>
            {show && (
                            <Layer
                                onEsc={() => setShow(false)}
                                onClickOutside={() => setShow(false)}
                            >
                                <Register />
                            </Layer>
                        )}
          </Box>
          <Box align="start" justify="center" direction="column" margin={{"left":"large"}}>
            <Heading textAlign="start" color="white">
              Introducing Loftly Housing. <br />Welcome to AI Powered Co-living.
            </Heading>
            <Box align="start" justify="center" direction="row" gap="large">
              <Button label="Living with Loftly" primary={true} />
              <Button label="Renting with Loftly" primary={true} />
            </Box>
          </Box>
        </Box>
      </Box>
            <Box align="center" justify="start" fill >
                <Box></Box>
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
            <Box tag="footer" pad="small" background="dark-1">
            footer
          </Box>
        </Grommet>
    )
}

export default Front;