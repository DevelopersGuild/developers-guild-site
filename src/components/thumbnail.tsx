import React from 'react';
import PropTypes from 'prop-types';
import loftryTheme from './Theme';
import { Grommet, Box, Button, Image, Heading, Text, Paragraph } from 'grommet'
import { Save, Run, Gamepad, Bike, Wifi } from 'grommet-icons'



/**
 * This Thumbnail Component has props validation
 */
const ThumbnailRefactored: React.FC = (props: any) => {
  return(
    <Grommet theme={loftryTheme}>
      <Box align="center" pad="small" round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }}>
        <Box align="end" justify="between" direction="row" alignSelf="start" wrap={true}>
          <Button icon={<Save />} primary={true} color="brand" hoverIndicator={false} disabled={false} reverse={false} />
        </Box>
        <Box align="center" justify="center" pad="xsmall" margin="xsmall">
          <Box height="small" width="medium">
            <Image fit="cover" src={props.thumbnailImage} />
          </Box>
          <Heading level="2" size="medium" margin="xsmall" textAlign="center">
            {props.thumbnailHeading}
            </Heading>
          <Text textAlign="center">
            {props.thumbnailAddress}
            </Text>
          <Text size="medium" weight="bold">
            {props.thumbnailSummary}
            </Text>
          <Box align="center" justify="center" direction="row-responsive" gap="medium" margin="small">
            <Run size="medium" />
            <Gamepad size="medium" />
            <Bike size="medium" />
            <Wifi size="medium" />
          </Box>
          <Paragraph size="small" textAlign="center">
            {props.thumbnailDescription}
            </Paragraph>
          <Box align="center" justify="center" pad="small" direction="row-responsive" flex={true} alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
            <Button label="View" primary={true} plain={false} href={props.thumbnailLink} />
          </Box>
        </Box>
      </Box>
    </Grommet>)
}

ThumbnailRefactored.propTypes = {
  thumbnailImage: PropTypes.string.isRequired,
  thumbnailHeading: PropTypes.string.isRequired,
  thumbnailAddress: PropTypes.string.isRequired,
  thumbnailSummary: PropTypes.string.isRequired,
  thumbnailDescription: PropTypes.string.isRequired,
  thumbnailLink: PropTypes.string.isRequired,
}

/**
 * This thumbnail component is used to display listings 
 * on the listings page. 
 */
const Thumbnail: React.FC = () => {
  return (
    <Grommet theme={loftryTheme}>
      <Box align="center" pad="small" round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }}>
        <Box align="end" justify="between" direction="row" alignSelf="start" wrap={true}>
          <Button icon={<Save />} primary={true} color="brand" hoverIndicator={false} disabled={false} reverse={false} />
        </Box>
        <Box align="center" justify="center" pad="xsmall" margin="xsmall">
          <Box height="small" width="medium">
            <Image fit="cover" src="https://photos.zillowstatic.com/cc_ft_768/ISecmdzu1wjd7c1000000000.webp" />
          </Box>
          <Heading level="2" size="medium" margin="xsmall" textAlign="center">
            Studio: Living Area + Bedroom
            </Heading>
          <Text textAlign="center">
            22639 Oakcrest Ct
          Cupertino, CA 95014
            </Text>
          <Text size="medium" weight="bold">
            7 beds 1 bath 3,600 sqft
            </Text>
          <Box align="center" justify="center" direction="row-responsive" gap="medium" margin="small">
            <Run size="medium" />
            <Gamepad size="medium" />
            <Bike size="medium" />
            <Wifi size="medium" />
          </Box>
          <Paragraph size="small" textAlign="center">
            Full Bathroom, Walk-in Closet, Laundry room (Washer and Dryer). Fits 2-4 people. Small but full kitchen in the living area equipped with granite counter-top, Dishwasher, Filtered water faucet, Garbage disposer, Built-in microwave-oven, a 2-burner cook top, and a small refrigerator and freezer.
            </Paragraph>
          <Box align="center" justify="center" pad="small" direction="row-responsive" flex={true} alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
            <Button label="View" primary={true} plain={false} href="/example-listing" />
          </Box>
        </Box>
      </Box>
    </Grommet>
  )
}


export { ThumbnailRefactored };
export default Thumbnail; 