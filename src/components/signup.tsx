import React from 'react';
import { Grommet, grommet, Box, Text, TextInput, Select, TextArea, FormField, Form } from 'grommet';

const Signup: React.FC = () => {
    const [gender, setGender] = React.useState('other');
    const [preferences, setPreferences] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [school, setSchool] = React.useState('');
    const [email, setEmail] = React.useState('');
    return (
        <Grommet full theme={grommet}>
            <Box fill align="center" justify="center">
                <Box width="medium">
                    <Text>Sign Up</Text>
                    <br />
                    <Box>
                        <FormField label="email">
                            <TextInput placeholder="email" type="email" value={email} onChange={event => setEmail(event.target.value)} />
                        </FormField>
                    </Box>
                    <br />
                    <Box>
                        <FormField label="password">
                            <TextInput placeholder="password" type="password" value={password} onChange={event => setPassword(event.target.value)} />
                        </FormField>
                    </Box>
                    <br />
                    <Box>
                        <FormField label="school">
                            <TextInput placeholder="school" type="text" value={school} onChange={event => setSchool(event.target.value)} />
                        </FormField>
                    </Box>
                    <br />
                    <Box>
                        <FormField label="gender">
                            <Select
                                options={['man', 'woman', 'other']}
                                value={gender}
                                onChange={({ option }) => setGender(option)}
                            />
                        </FormField>
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