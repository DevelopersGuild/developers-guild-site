import React from 'react';
import loftryTheme from './Theme';
import { Grommet, Box, Heading, InfiniteScroll,Anchor,Button } from 'grommet';
import Thumbnail from './thumbnail';

const Listings: React.FC = () => {
    const test: number[] = [];
    for (let i = 0; i < 1000; i++) {
        test.push(i);
    }
    return (
        <Grommet theme={loftryTheme}>
            <Box
                direction="row"
                align="center"
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
                    <Button primary style={{ color: "#ffffff" }} label="Log Out" />
                </Box>
            </Box>
            <Box align="center" justify="center">
                <Heading>Listings</Heading>
                <Box overflow="auto" align="center" justify="center" direction="row" wrap>
                    <InfiniteScroll items={test}>
                        {(item) => <Thumbnail key={item} />}
                    </InfiniteScroll>
                </Box>
            </Box>
        </Grommet>
    )
}

export default Listings; 