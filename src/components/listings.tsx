import React from 'react';
import loftryTheme from './Theme';
import { Grommet, Box, Heading, InfiniteScroll } from 'grommet';
import Thumbnail from './thumbnail';

const Listings: React.FC = () => {
    const test: number[] = [];
    for (let i = 0; i < 1000; i++) {
        test.push(i);
    }
    return (
        <Grommet theme={loftryTheme}>
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