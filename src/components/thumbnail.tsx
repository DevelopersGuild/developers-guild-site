import React from 'react';
import loftryTheme from './Theme';
import { Grommet, Box, Carousel, Image, Heading, Text, Button, Anchor, grommet } from 'grommet';
import { Wifi, Bike, Gamepad, Run } from 'grommet-icons';

const Thumbnail: React.FC = () => {
    return (
        <Grommet theme={loftryTheme}>
            <Box>
                <Heading truncate>Studio: Living Area + Bedroom</Heading>
                <Box fill="horizontal" pad="medium">
                    <Image fit="cover" src="https://photos.zillowstatic.com/cc_ft_768/ISecmdzu1wjd7c1000000000.webp" />
                </Box>
            </Box>
        </Grommet>
    )
}