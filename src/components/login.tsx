import React from 'react';
import loftlyTheme from './Theme';
import { Box, Heading, TextInput, Button, Text, Grommet, Grid, Anchor } from 'grommet';
const Login: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmission = async () => {
        console.log(JSON.stringify({ email, password }));
    }

    return (
        <Grommet full theme={loftlyTheme}>
            <Box fill background="url(https://images.unsplash.com/photo-1495029894030-991588d334b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)">
                <Grid
                     fill rows={["auto", "flex"]}
                     columns={["auto", "flex"]}
                     gap="small"
                     areas={[
                        { name: 'header', start: [0, 0], end: [1, 0] },
                        { name: 'login', start: [0, 1], end: [0, 1] },
                        { name: 'main', start: [1, 1], end: [1, 1] }
                     ]}

                >
                <Box
                direction="row"
                gridArea = "header"
                align="center"
                justify="around"
                fill="horizontal"
                pad={{ right: "xsmall", left: "xsmall" }}
                >
                <Heading margin="medium" alignSelf="start" level='2' color="white">Loftly</Heading>
                <Box
                    gap = "large"
                    direction="row"
                    margin={{left:"1000px"}}
                >
                    <Anchor href="#" size="large" color="white" label="Help" />
                    <Anchor href="#" size="large" color="white" label="About" />
                    <Anchor href="#" size="large" color="white" label="Settings" />
                </Box>  
                </Box>
                    <Box  
                    background="white" 
                    margin={{ left: "xlarge",top: "large" }} 
                    gridArea="login" justify="start" 
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
                        <Box width="medium" direction = "row" >

                            <Button primary label="Login" color = "#098589" onClick={handleSubmission} />
                        </Box>
                        <hr />
                        <Text>Don't have an account? <a href="/signup" >Sign up</a></Text>
                    </Box>
                    <Box
                    gridArea = "main"
                    alignContent = "end"
                    justify = "end"
                    direction = "row"
                    >  
                    </Box>
                </Grid>
            </Box>
        </Grommet>
    )
}

export default Login;