import React from 'react';
import loftryTheme from './Theme';
import { Grommet, Box, Text, Tabs, Tab, Heading } from 'grommet';

const Faq: React.FC = () => {
    return (
        <Grommet theme={loftryTheme}>
            <Box>
                <Text>Faq</Text>
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

export default Faq; 