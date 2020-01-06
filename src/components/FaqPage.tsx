import React from 'react';
import loftryTheme from './Theme';
import { Grommet, Box, Text, Tabs, Tab, Heading,Button} from 'grommet';

const Faq: React.FC = () => {
    return (
        <Grommet full theme={loftryTheme}>
                  <Box fill={true} overflow="auto" align="center" flex="grow" background={{"image":"url('https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1298&q=80')"}}>
                  <Box justify="between" direction="row" gap="xlarge" fill="horizontal">
          <Box direction="row" gap="medium">
          <Button hoverIndicator={false} href="/">
              <Box
                align="center"
                justify="center"
                pad={{ vertical: "small", horizontal: "medium" }}
                direction="row"
                gap="small"
                fill="vertical"
              >
                <Text weight="bold" size="xxlarge" color="white">
                  Loftly
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={false} href="/about">
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <Text color="white">
                  About
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={false} href = "/landowners">
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <Text color="white">
                  Renting
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={false} href="/faq">
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <Text color="white">
                  FAQ
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={false} href="help">
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <Text color="white">
                  Help
                </Text>
              </Box>
            </Button>
          </Box>
          <Box align="center" justify="center" pad={{"horizontal":"small"}} direction="row" gap="medium">
            <Button label="Login" color="white" primary={true} href="/login" />
            <Button label="Sign Up" primary={true} color="white" href ="/signup" />
          </Box>
        </Box>
        <Box align="center" justify="center" fill="horizontal" height="medium">
          <Heading color ="white">
            Affordable, safe living in your favorite city
          </Heading>
          <Text color="white">
            With Loftly's verification process, we protect our users from potential scams.

          </Text>
        </Box>
        <Box align="center" justify="start" width="xlarge" height = "medium" background={{"color":"white"}} overflow="visible" pad="medium" round="small" >
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
        </Box>
        
      </Box>
        </Grommet>
    )
}

export default Faq; 