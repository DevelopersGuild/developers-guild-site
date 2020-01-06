import React from "react";
import theme from "../Theme";
import { Grommet, Box, Text } from "grommet";
import MapView from "./MapView";

const MapTest: React.FC = () => {
  return (
    <Grommet theme={theme}>
      <Box>
        <Text>Map Test!</Text>
        <MapView
          width={800}
          height={800}
          latitude={37.385660}
          longitude={-122.084317}
          zoom={8}
        />
      </Box>
    </Grommet>
  );
};

export default MapTest;
