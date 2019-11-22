import React from 'react';
import { Grommet, grommet, Box, Text, TextInput } from 'grommet';

const Signup: React.FC = () => {
    return (
        <Grommet theme={grommet}>
            <Box>
                <Text>Sign Up</Text>
                <br />
                <Box>
                    <TextInput placeholder="email" type="email" />
                </Box>
                <br />
                <Box>
                    <TextInput placeholder="password" type="password" />
                </Box>
            </Box>
        </Grommet>
    );
}

export default Signup;