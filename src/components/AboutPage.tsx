import React from 'react';
import loftryTheme from './Theme';
import { Grommet, Box, Text } from 'grommet';

const About: React.FC = () => {
    return (
        <Grommet theme={loftryTheme}>
            <Box>
                <Text>About</Text>
            </Box>
        </Grommet>
    )
}

export default About; 