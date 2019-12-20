import React from 'react';
import loftlyTheme from './Theme';
import { Grommet, Box, Meter, Heading, Button, Text, Image, Layer, Anchor,Stack} from 'grommet'
import { Action, Close, Announce, Phone, MailOption, Edit } from 'grommet-icons'
import Menu from './menu';

const meterValue = 49;

const Team: React.FC = () =>  {
  const [layer, setLayer] = React.useState()
  return (
    <Grommet theme={loftlyTheme}>
      <Menu/>
      <Box overflow="auto" align="start" direction="row">
        <Box align="center" justify="center" pad="xsmall" width="xlarge">
          <Box align="center" justify="center" fill="horizontal" pad="small">
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
          <Box align="stretch" justify="center" width="xlarge">
            <Box align="start" justify="start" pad="small">
              <Heading>
                Issues
              </Heading>
            </Box>
          </Box>
          <Box align="start" justify="start" direction="row" gap="xsmall" fill="horizontal" pad="small">
            <Button onClick={() => setLayer(layer ? undefined : 22)}>
              <Action  />
              <Text margin={{"left":"medium"}}>
                Lightbulb is broken
              </Text>
            </Button>
          </Box>
        </Box>
        <Box align="start" justify="between" direction="column" gap="xsmall" width="xxlarge">
          <Box align="center" justify="center" fill="horizontal">
            <Heading>
              testTeam Budget:
$10,346.60
            </Heading>
          </Box>
          <Box align="start" justify="start" fill="horizontal" margin={{"vertical":"medium"}} direction="row">
            <Box align="start" justify="center" fill="horizontal">
              <Heading level="2">
                Teammates
              </Heading>
              <Box align="center" justify="center" direction="row" gap="medium">
                <Box align="center" justify="center" height="xsmall" width="xsmall">
                  <Image src="https://i.imgur.com/OJyN7EP.jpg" fit="contain" />
                </Box>
                <Box align="center" justify="center" height="xsmall" width="xsmall">
                  <Image src="https://i.imgur.com/8Qghjo8.png" fit="contain" />
                </Box>
                <Box align="center" justify="center" height="xsmall" width="xsmall">
                  <Image src="https://i.imgur.com/OOQkxit.jpg" fit="contain" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box align="center" justify="center" direction="row">
            <Box align="start" justify="start" overflow="scroll" width="xxlarge">
              <Box align="start" justify="center">
                <Heading level="1" textAlign="start">
                  Posts
                </Heading>
              </Box>
              <Box align="center" justify="center" border={{"side":"all"}} pad="small" fill="horizontal">
                <Box align="start" justify="center" fill="horizontal">
                  <Heading level="2">
                    Finding a new Teammate.
                  </Heading>
                </Box>
                <Box align="center" justify="between" fill="horizontal" direction="row" gap="xlarge">
                  <Text textAlign="start">
                    12.10.2019
                  </Text>
                  <Button label="View" />
                </Box>
              </Box>
              <Box align="center" justify="center" border={{"side":"all"}} pad="small" fill="horizontal">
                <Box align="start" justify="center" fill="horizontal">
                  <Heading level="2">
                    Hey who used my MUG!
                  </Heading>
                </Box>
                <Box align="center" justify="between" fill="horizontal" direction="row" gap="xlarge">
                  <Text textAlign="start">
                    12.9.2019
                  </Text>
                  <Button label="View" />
                </Box>
              </Box>
              <Box align="center" justify="center" border={{"side":"all"}} pad="small" fill="horizontal">
                <Box align="start" justify="center" fill="horizontal">
                  <Heading level="2">
                    Does Anyone know Calculus?
                  </Heading>
                </Box>
                <Box align="center" justify="between" fill="horizontal" direction="row" gap="xlarge">
                  <Text textAlign="start">
                    11.25.2019
                  </Text>
                  <Button label="View" />
                </Box>
              </Box>
              <Box align="center" justify="center" border={{"side":"all"}} pad="small" fill="horizontal">
                <Box align="start" justify="center" fill="horizontal">
                  <Heading level="2">
                    Things to buy for our house
                  </Heading>
                </Box>
                <Box align="center" justify="between" fill="horizontal" direction="row" gap="xlarge">
                  <Text textAlign="start">
                    11.12.2019
                  </Text>
                  <Button label="View" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {layer === 22 && (
        <Layer animate={true} modal={false} plain={false}>
          <Box align="center" justify="center" direction="row" alignSelf="start">
            <Button disabled={false} icon={<Close />} primary={true} onClick={() => setLayer(layer ? undefined : 22)} />
          </Box>
          <Box align="start" justify="start" height="large" width="xlarge" direction="column" pad="medium" gap="small">
            <Box align="start" justify="start" direction="row" border={{"side":"bottom"}}>
              <Heading>
                Lightbulb is broken
              </Heading>
            </Box>
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold">
                Issue placed on :  
              </Text>
              <Box align="center" justify="center">
                <Text>
                  Thursday, December 19, 2019, at 10:56 AM
                </Text>
              </Box>
            </Box>
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold">
                Issue received on :
              </Text>
              <Box align="center" justify="center">
                <Text>
                  Thursday, December 19, 2019, at 3:00 PM
                </Text>
              </Box>
            </Box>
            <Box align="center" justify="center">
              <Box align="center" justify="center" direction="row" gap="xsmall" alignSelf="start">
                <Text>
                  Issued By : 
                </Text>
                <Anchor  href= "/example-profile" label="Paul J. Klein" />
              </Box>
              <Box align="center" justify="center">
                <Heading level="2">
                  Someone is coming to resolve your issue!
                </Heading>
                <Box align="start" justify="center" alignSelf="start" fill="horizontal" gap="small">
                  <Box align="center" justify="center" direction="row" gap="small">
                    <Announce  />
                    <Text size="large">
                      Robert Smith
                    </Text>
                  </Box>
                  <Box align="center" justify="center" direction="row" gap="small">
                    <Phone  />
                    <Anchor label="1-699-345-8725" />
                  </Box>
                  <Box align="center" justify="center" direction="row" gap="small">
                    <MailOption  />
                    <Anchor label="WeFixLights@gmail.com" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box align="center" justify="center" direction="column">
            <Box align="center" justify="center" direction="row" alignSelf="end">
              <Button label="edit" disabled={false} icon={<Edit />} primary={true} onClick={() => setLayer(layer ? undefined : 22)} />
            </Box>
          </Box>
        </Layer>
      )}
        <Box align="center" justify="center" fill="horizontal" gap="small">
          <Box align="center" justify="center" fill="horizontal">
            <Heading>
              Your Home
            </Heading>
          </Box>
          <Box align="center" justify="center" gap="medium">
            <Heading level="2">
              Studio: Living Area + Bedroom
            </Heading>
          </Box>
          <Box align="start" justify="center" fill="horizontal">
            <Text textAlign="start">
              22639 Oakcrest Ct Cupertino, CA 95014
            </Text>
          </Box>
          <Box align="start" justify="center" fill="horizontal">
            <Button href= "/example-listing" label="View Listing" />
          </Box>
        </Box>
      </Box>
    </Grommet>
  )
}

export default Team;
