import React from 'react';
import loftryTheme from './Theme';
import { Box, Heading, TextInput, Button, Text, Grommet, Anchor } from 'grommet';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmission = async () => {
        console.log(JSON.stringify({ email, password }));
    }

    return (
        <Grommet full theme={loftryTheme}>
            <Box fill background="url(https://images.unsplash.com/43/L6sQn4GyQdSBW7pLgEz7_DSC_0013.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1945&q=80)">
                <Box
                    gridArea="header"
                    direction="row"
                    align="center"
                    justify="between"
                    margin="medium"
                >
                    <Heading level='2' color="white">Loftry</Heading>
                    <Box direction="row">
                        <Anchor href="#" size="large" margin={{ horizontal: "large" }} label="About" />
                        <Anchor href="#" size="large" margin={{ horizontal: "large" }} label="FAQ" />
                        <Anchor href="#" size="large" margin={{ horizontal: "large" }} label="Help" />
                    </Box>

                </Box>
                <Box
                    background="white"
                    margin={{ left: "xlarge", top: "large" }}
                    gridArea="main" justify="start"
                    align="center"
                    width="medium"
                    height="large"
                    direction="column"
                    pad="medium"
                    round="small"
                    border={{ color: 'white', size: 'large' }} >
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
                        <Button style={{ color: "#ffffff" }} margin="xsmall" primary label="Login" onClick={handleSubmission} />
                    </Box>
                    <Text margin="small" >Don't have an account? <a href="/signup" >Sign up</a></Text>
                </Box>
            </Box>
        </Grommet>
    )
}

export default Login;