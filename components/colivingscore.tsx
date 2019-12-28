import React from 'react';
import loftlyTheme from './Theme';
import {Grommet, Box, Meter, Stack, Text } from "grommet";

const meterValue = 69;

const Score: React.FC = () => {
    return(
        <Grommet theme={loftlyTheme}>
            <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[{ value: meterValue }]}
            size="small"
            thickness="medium"
          />
          <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
            <Text size="xlarge" weight="bold">
              {meterValue}
            </Text>
          </Box>
        </Stack>
      </Box>
        </Grommet>
    );
}

export default Score;