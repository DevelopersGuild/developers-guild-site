import React from 'react';
import { Grommet, grommet, Box, Heading, Button } from 'grommet';


const Landing: React.FC = () => {
    return (
        <Grommet full theme={grommet}>
            <Box align="center" justify="center" fill background={{ image: 'url(https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)' }} >
                <Box align="center" justify="center" direction="column" >
                    <Heading color="light-1" >Introducing Loftly Housing. <br /> Welcome to AI Powered Co-living and TRM.</Heading>
                    <Box flex direction="row" align="center">
                        <Button margin="xsmall" primary label="Living with Loftly" />
                        <Button margin="xsmall" primary label="Use the Loftly TRM" />
                    </Box>
                </Box>
            </Box>
            <Box align="center" justify="center" fill >
                <Heading>
                    A new solution for Co-Living
                </Heading>
            </Box>
        </Grommet>
    );
}

export default Landing;