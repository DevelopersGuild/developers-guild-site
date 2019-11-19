import React from 'react';
import loftryTheme from './Theme';
import { Box, Heading, TextInput, Button, Text, Grommet, Grid, Anchor, DropButton } from 'grommet';

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
                     gap="small"
                     areas={[
                       { name: 'links', start: [0, 0], end: [1, 0] },
                       { name: 'header', start: [0, 0], end: [1, 0] },
                       { name: "main", start: [1, 1], end: [1, 1] }
                   
                     ]}

                >
                    <Box
                        gridArea="header"
                        direction="row"
                        align="center"
                        justify="between"
                        pad={{ horizontal: "medium", vertical: "none" }}
                        margin={{ bottom: "medium" }}
                    >
                        <Heading level = '2' color = "white">Loftry</Heading>
                        <Box
                            direction = "row"
                        >   
                        <Anchor href="#" size= "large" color = "white" margin={{horizontal :"large"}} label="About" />
                        <Anchor href="#" size= "large" color = "white" margin={{horizontal :"large"}} label="FAQ" />
                        <Anchor href="#" size= "large" color = "white" margin={{horizontal :"large"}} label="Help" />
                        </Box>

                    </Box>
                    <Box  
                    background="white" 
                    margin={{ left: "xlarge",top: "large" }} 
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
                    <DropButton
                    label="Fancy Selector"
                    margin={{ left: "xlarge",top: "xlarge" }} 
                    color = "White"
                    dropAlign={{ top: 'bottom', right: 'right' }}
                    dropContent={
                        <Box pad="large" background="light-2" />
                        }
                    />
                </Grid>
            </Box>
        </Grommet>
    )
}

export default Login;