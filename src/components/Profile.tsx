import React from 'react';
import loftlyTheme from './Theme';
import { Grommet,Box,Heading,Anchor,Button,Grid } from 'grommet'; 

const Profile: React.FC = () => {
    return(
        <Grommet theme={loftlyTheme}>
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
                align="center"
                gridArea = "header"
                justify="around"
                background="light-1"
                fill="horizontal"
                pad={{ right: "xsmall", left: "xsmall" }}
            >
                <Heading margin="medium" alignSelf="start" level='2' color="black">Loftly</Heading>
                <Box
                    gap = "large"
                    direction="row"
                    margin={{left:"1000px"}}
                >
                    <Anchor href="#" size="large" color="black" label="My Profile" />
                    <Anchor href="#" size="large" color="black" label="Teams" />
                    <Anchor href="#" size="large" color="black" label="Map" />
                    <Anchor href="#" size="large" color="black" label="Settings" />
                    <Button primary label="Log Out" />
                </Box>
            </Box>  
                </Grid>
        </Grommet>
    );
}

export default Profile;