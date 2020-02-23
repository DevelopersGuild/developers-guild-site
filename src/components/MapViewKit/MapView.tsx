import React, { useState } from "react";
import theme from "../Theme";
import { Grommet, Box } from "grommet";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { config } from '../../config';


interface MapKitPropsInterface {
  width: number;
  height: number;
  latitude: number;
  longitude: number;
  zoom: number;
}

const MapView: React.FC<MapKitPropsInterface> = (props) => {
  const { width, height, latitude, longitude, zoom } = props;
  const [viewport, setViewport] = useState({
    width,
    height,
    latitude,
    longitude,
    zoom
  });
  return (
      <Grommet theme={theme}>
      <Box height={`${height}px`} width={`${width}px`}  >
        <ReactMapGL {...viewport} mapboxApiAccessToken={""} onViewportChange={setViewport} />
      </Box>
    </Grommet>
  );
};

export default MapView;
