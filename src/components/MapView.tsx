import React from 'react';
import theme from './Theme';
import { Grommet, Box, Text } from 'grommet';

const  MapView: React.FC = () => {
    return (
        <Grommet theme={theme}>
            <Box>
                <Text>MapView</Text>
            </Box>
        </Grommet>
    )
}

export default MapView; 