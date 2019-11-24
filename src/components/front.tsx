import React from 'react';
import loftryTheme from './Theme';
import { Box, Heading, TextInput, Button, Text, Grommet, Anchor, Layer } from 'grommet';
import Register from './register';

const Front: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailSignUp, setEmailSignUp] = React.useState('');
    const [passwordSignUp, setPasswordSignUp] = React.useState('');
    const [gender, setGender] = React.useState('other');
    const [preferences, setPreferences] = React.useState('');   
    const [school, setSchool] = React.useState('');

    const handleSubmissionSignUp = () => {
        alert(`${gender} ${passwordSignUp} ${school} ${emailSignUp} ${preferences}`)
    }
    const handleSubmission = async () => {
        console.log(JSON.stringify({ email, password }));
    }
    const [show, setShow] = React.useState();

    return (
        <Grommet full theme={loftryTheme}>
            <Box fill background="url(https://images.unsplash.com/43/L6sQn4GyQdSBW7pLgEz7_DSC_0013.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1945&q=80)">
                <Box
                    animation = {["fadeIn","slideLeft"]}
                    gap = "large"
                    direction="row"
                    align="center"
                    fill="horizontal"
                    pad={{ right: "xsmall", left: "xsmall" }}
                >
                    <Heading margin="medium" alignSelf="start" level='2' color="black">Loftly</Heading>
                    <Box
                        gap="large"
                        direction="row"
                        margin={{ left: "1450px" }}
                    >
                        <Anchor href="#" size="large" color="black" label="About" />
                        <Anchor href="#" size="large" color="black" label="FAQ" />
                        <Anchor href="#" size="large" color="black" label="Help" />
                    </Box>
                </Box>
                <Box
                     margin={{ left:'162px',top:'89px'}} 
                    background="white"
                    alignSelf="start"
                    width="medium"
                    height="large"
                    direction="column"
                    pad="medium"
                    round="small"
                    animation={["fadeIn","slideRight"]}
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
                    <Text margin="small" >Don't have an account? <Anchor onClick={() => setShow(true)}> Sign Up</Anchor></Text>
                    {show && (
                            <Layer
                                onEsc={() => setShow(false)}
                                onClickOutside={() => setShow(false)}
                            >
                                <Box fill align="center" justify="center">
                   <Box width="xlarge" background="white"round="medium" border={{ color: 'white', size: 'xlarge' }}>
                       <Text size="large" >Sign Up</Text>
                       <br />
                       <Box>
                           <FormField label="email">
                               <TextInput placeholder="email" type="email" value={email} onChange={event => setEmailSignUp(event.target.value)} />
                           </FormField>
                       </Box>
                       <br />
                       <Box>
                           <FormField label="password">
                               <TextInput placeholder="password" type="password" value={password} onChange={event => setPasswordSignUp(event.target.value)} />
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
                            </Layer>
                            )}
                </Box>
                <Box align="start" margin = {{top:"214px", left:"181px"}} direction="column" animation={["fadeIn","slideUp"]}>
                    <Heading color="light-1" level="1" textAlign = "start" >Introducing Loftly Housing <br /> Welcome to AI Powered Co-living.</Heading>
                    <Box direction="row" align="start" gap= "large">
                        <Button style={{ color: "#ffffff" }} margin="small" primary label="Living with Loftly" />
                        <Button style={{ color: "#ffffff" }} margin="small" primary label="Renting with Loftly" />
                    </Box>
                </Box>
            </Box>
        </Grommet>
    )
}

export default Front;