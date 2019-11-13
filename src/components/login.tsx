import React from 'react';
import { Box, Heading, TextInput, Button, Text, Grommet, grommet } from 'grommet';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmission = () => {
        alert(`${password}, ${email}`);
    }

    return (
        <Grommet full theme={grommet}>
            <Box justify="start" align="center" width="medium" direction="column" pad="medium" round="small" border={{ color: 'grey', size: 'large' }} >
                <Heading margin="none">Welcome Back</Heading>
                <br />
                <Box width="medium">
                    <TextInput
                        placeholder="email"
                        value={email}
                        type="email"
                        onChange={event => setEmail(event.target.value)}
                    />
                </Box>
                <br />
                <Box width="medium">
                    <TextInput
                        placeholder="password"
                        value={password}
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                    />
                </Box>
                <br />
                <Box width="medium" >
                    <Button primary label="Primary" onClick={handleSubmission} />
                </Box>
                <hr />
                <Text>Don't have an account? <a href="/signup" >Sign up</a></Text>
            </Box>
        </Grommet>
    );
}

export default Login;