import React from 'react';
import { Grommet, grommet, Box, Text, TextInput, Select, TextArea } from 'grommet';

const Signup: React.FC = () => {
    const [gender, setGender] = React.useState('other');
    const [preferences, setPreferences] = React.useState('');
    const [school, setSchool] = React.useState('');
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
                        <TextInput placeholder="school" type="text" value={school} onChange={event => setSchool(event.target.value)} />
                    </Box>
                    <br />
                    <Box>
                        <Select
                            options={['man', 'woman', 'other']}
                            value={gender}
                            onChange={({ option }) => setGender(option)}
                        />
                    </Box>
                    <br />
                    <Box>
                        <TextArea placeholder="wifi,bike racks, pet friendly, smoke free, hackerhouse" value={preferences}
                            onChange={event => setPreferences(event.target.value)} />
                    </Box>
                </Box>
            </Box>
        </Grommet>
    );
}

export default Signup;