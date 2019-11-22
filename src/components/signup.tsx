import React from 'react';
import { Grommet, grommet, Box, Text, TextInput, Select } from 'grommet';

const Signup: React.FC = () => {
    return (
        <Grommet full theme={grommet}>
            <Box fill align="center" justify="center">
                <Box width="medium">
                    <Text>Sign Up</Text>
                    <br />
                    <Box>
                        <TextInput placeholder="email" type="email" />
                    </Box>
                    <br />
                    <Box>
                        <TextInput placeholder="password" type="password" />
                    </Box>
                    <br />
                    <Box>
                        <TextInput placeholder="school" type="text" />
                    </Box>
                </Box>
            </Box>
        </Grommet>
    );
}

export default Signup;