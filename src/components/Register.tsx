import React from 'react';
import loftryTheme from './Theme';
import { Box, TextInput, Button, Text, Grommet, FormField, Select, TextArea } from 'grommet';

const Register = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [gender, setGender] = React.useState('other');
    const [preferences, setPreferences] = React.useState('');
    const [school, setSchool] = React.useState('');

    const handleSubmissionSignUp = () => {
        alert(`${gender} ${password} ${school} ${email} ${preferences.split(",")}`)
    }

    return (
        <Grommet theme={loftryTheme}>
            <Box fill align="center" justify="center">
                <Box width="xlarge" background="white" round="medium" border={{ color: 'white', size: 'xlarge' }}>
                    <Text size="large" >Sign Up</Text>
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
                        <FormField label="preferences">
                            <TextArea placeholder="wifi,bike racks, pet friendly, smoke free, hackerhouse" value={preferences}
                                onChange={event => setPreferences(event.target.value)} />
                        </FormField>
                    </Box>
                    <br />
                    <Box>
                        <Button onClick={handleSubmissionSignUp} style={{ color: "#ffffff" }} primary label="submit" />
                    </Box>
                </Box>
            </Box>
        </Grommet>
    )
}


export default Register;
