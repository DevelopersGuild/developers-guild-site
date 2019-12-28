import React from 'react';
import loftlyTheme from './Theme';
import { Grommet, Box, Heading, Text } from 'grommet';
import Menu from './MenuBar';

const Settings: React.FC = () => {
    return (
        <Grommet theme={loftlyTheme} >
            <Menu/>
            <Box pad="medium" alignContent="center" justify="center">
                <Heading>
                    Settings Page
                </Heading>
                <Text>
                    This is the settings page
                </Text>
            </Box>
        </Grommet>
    )
}
export default Settings;