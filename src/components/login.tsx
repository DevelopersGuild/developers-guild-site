import React from 'react';
import loftryTheme from './Theme';
import { Box, Heading, TextInput, Button, Text, Grommet, Grid, Anchor } from 'grommet';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmission = () => {
        alert(`${password}, ${email}`);
    }

    return (
        <Grommet full theme={loftryTheme}>
            <Box fill background="url(https://images.unsplash.com/photo-1495029894030-991588d334b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)">
                <Grid
                    fill rows={["auto", "flex"]}
                    columns={["auto", "flex"]}
                    areas={[
                        { name: "header", start: [0, 0], end: [1, 0] },
                        { name: "main", start: [1, 1], end: [1, 1] }
                    ]}
                >
                    <Box
                        gridArea="header"
                        direction="row"
                        align="center"
                        justify="between"
                        pad={{ horizontal: "medium", vertical: "small" }}
                        margin={{ bottom: "large" }}
                    >
                        <Text size="xxlarge" color = "white">Loftry</Text>
                        <Anchor href="#" label="About" />
                        <Anchor href="#" label="FAQ" />
                        <Anchor href="#" label="Help" />

                    </Box>
                    <Box  
                    background="white" 
                    margin={{ left: "xlarge",top: "xlarge" }} 
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
                            <Button primary label="Login" color = "#098589" onClick={handleSubmission} />
                        </Box>
                        <hr />
                        <Text>Don't have an account? <a href="/signup" >Sign up</a></Text>
                    </Box>
                </Grid>
            </Box>
        </Grommet>
    )
}

export default Login;