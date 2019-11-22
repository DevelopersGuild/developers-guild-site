import React from 'react';
import { Grommet, grommet, Box, Text, TextInput} from 'grommet'; 

const Signup: React.FC = () => {
    return(
        <Grommet theme={grommet}> 
            <Box>
                <Text>Sign Up</Text>
            </Box> 
        </Grommet>
    );
}

export default Signup;