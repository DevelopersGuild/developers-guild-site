import React from 'react';
import loftryTheme from './Theme';
import { Grommet, Box, Image, Text, Anchor } from 'grommet';


/**
 * This thumbnail component is used to display listings 
 * on the listings page. 
 */
const Thumbnail: React.FC = () => {
    return (
        <Grommet theme={loftryTheme}>
            <Box pad="medium" width="medium" height="medium" align="center" justify="center" >
                <Text size="medium" >Studio: Living Area + Bedroom</Text>
                <Box margin="medium" fill="horizontal">
                    <Image fit="cover" src="https://photos.zillowstatic.com/cc_ft_768/ISecmdzu1wjd7c1000000000.webp" />
                </Box>
                <Box alignSelf="end" direction="row">
                    <Text margin="xsmall" size="medium" >Cupertino CA</Text>
                    <Anchor margin="xsmall" href="#" size="medium" color="black" label="View" />
                </Box>
            </Box>
        </Grommet>
    )
}

export default Thumbnail; 