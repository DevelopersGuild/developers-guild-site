import React from 'react';
import { Box, Heading, TextInput, Button, Text, Grommet, grommet } from 'grommet';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmission = () => {
        alert(`${password}, ${email}`);
    }

    return (
        <Grommet theme={grommet}>
                <Box direction="column" pad="medium" round="small" border={{ color: 'grey', size: 'large' }} >
                    <Heading margin="none">Welcome Back</Heading>
                    <TextInput
                        placeholder="email"
                        value={email}
                        type="email"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <TextInput
                        placeholder="password"
                        value={password}
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Button primary label="Primary" onClick={handleSubmission} />
                    <hr />
                    <Text>Don't have an account? <a href="/signup" >Sign up</a></Text>
                </Box>
        </Grommet>
    );
}

export default Login;