import React from 'react';
import { Box, Heading, TextInput, Button, Text, Grommet, grommet, Grid } from 'grommet';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmission = () => {
        alert(`${password}, ${email}`);
    }

    return (
        <Grommet full theme={grommet}>
            <Box fill background="url(https://images.unsplash.com/photo-1511066754093-eabd2492352b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80)">
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
                        background="dark-2"
                        margin={{ bottom: "large" }}
                    >
                        <Text size="large">Loftry</Text>
                    </Box>
                    <Box  background="dark-2" margin={{ left: "small" }} gridArea="main" justify="start" align="center" width="medium" height="medium" direction="column" pad="medium" round="small" border={{ color: 'grey', size: 'large' }} >
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
                </Grid>
            </Box>
        </Grommet>
    );
}

export default Login;