import React from 'react';
import loftlyTheme from './Theme';
import { Grommet, Box, Meter, Heading, Button, Text, Image, Layer, Anchor, Stack } from 'grommet'
import { Action, Close, Announce, Phone, MailOption, Edit } from 'grommet-icons'
import Menu from './MenuBar';
import { AppearanceType, SizeType } from '@atlaskit/avatar';
import AvatarGroup from '@atlaskit/avatar-group';
import Badge from '@atlaskit/badge';

const meterValue = 49;

const Team: React.FC = () => {
  const [layer, setLayer] = React.useState();

  const USER_IMGS = Object.freeze(["https://i.imgur.com/OJyN7EP.jpg", "https://i.imgur.com/8Qghjo8.png", "https://i.imgur.com/OOQkxit.jpg"]);
  const data = USER_IMGS.map(x => ({
    src: x,
    name: "anon",
    enableTooltip: true,
    href: "/example-profile",
    appearance: 'circle' as AppearanceType,
    size: 'medium' as SizeType,
  }));

  return (
    <Grommet theme={loftlyTheme}>
      <Menu />
      <Box overflow="auto" align="start" direction="row">
        <Box align="start" justify="center" pad="xsmall" width="xlarge">
          <AvatarGroup
            appearance="stack"
            data={data}
            size="xlarge"
          />
          <Box alignSelf="start" align="center" justify="center" pad="small">
            <Heading size="small">
              Co-Living Score
            </Heading>
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
              <Heading size="small">
                House Issues <Badge appearance="important" >{5}</Badge>
            </Heading>
            </Box>
          </Box>
          <Box align="start" justify="start" direction="row" gap="xsmall" fill="horizontal" pad="small">
            <Button onClick={() => setLayer(layer ? undefined : 22)}>
              <Action />
              <Text margin={{ "left": "medium" }}>
                Lightbulb is broken
              </Text>
            </Button>
          </Box>
        </Box>
        {/* Posts and Team Budget Start */}
        <Box margin={{ top: "small" }} align="start" justify="center" direction="column" gap="xsmall" width="xxlarge">
          <Heading size="small">
            Updates and Posts  <Badge appearance="important" >{5}</Badge>
            </Heading>

          <Box align="start" justify="start" overflow="scroll">

            <Box align="center" justify="center" border={{ "side": "all" }} pad="small" fill="horizontal">
              <Box align="start" justify="center" fill="horizontal">
                <Heading level="2">
                  Update: Rent and Utils Paid
                  </Heading>
              </Box>
              <Box align="center" justify="between" fill="horizontal" direction="row" gap="xlarge">
                <Text textAlign="start">
                  12.16.2019
                  </Text>
                <Button label="View" />
              </Box>
            </Box>

            <Box align="center" justify="center" border={{ "side": "all" }} pad="small" fill="horizontal">
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
            <Box align="center" justify="center" border={{ "side": "all" }} pad="small" fill="horizontal">
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
            <Box align="center" justify="center" border={{ "side": "all" }} pad="small" fill="horizontal">
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
            <Box align="center" justify="center" border={{ "side": "all" }} pad="small" fill="horizontal">
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
        {/* Posts and Team Budget End */}
        {/* Issues */}
        {layer === 22 && (
          <Layer animate={true} modal={false} plain={false}>
            <Box border align="start" justify="start" height="large" width="xlarge" direction="column" pad="medium" gap="small">
              <Box justify="start" alignSelf="start">
                <Button disabled={false} icon={<Close />} primary={true} onClick={() => setLayer(layer ? undefined : 22)} />
              </Box>
              <Box align="start" justify="start" direction="row" border={{ "side": "bottom" }}>
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
                  <Anchor href="/example-profile" label="Paul J. Klein" />
                </Box>
                <Box align="center" justify="center">
                  <Heading level="2">
                    Someone is coming to resolve your issue!
                </Heading>
                  <Box align="start" justify="center" alignSelf="start" fill="horizontal" gap="small">
                    <Box align="center" justify="center" direction="row" gap="small">
                      <Announce />
                      <Text size="large">
                        Robert Smith
                    </Text>
                    </Box>
                    <Box align="center" justify="center" direction="row" gap="small">
                      <Phone />
                      <Anchor label="1-699-345-8725" />
                    </Box>
                    <Box align="center" justify="center" direction="row" gap="small">
                      <MailOption />
                      <Anchor label="WeFixLights@gmail.com" />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box justify="center" direction="row" alignSelf="end">
                <Button label="edit" disabled={false} icon={<Edit />} primary={true} onClick={() => setLayer(layer ? undefined : 22)} />
              </Box>
            </Box>
          </Layer>
        )}
        {/* issues end */}

        <Box align="start" justify="center" fill="horizontal" >
          <Heading size="small">
            The Unicorn <span aria-label="unicorn" role="img">🦄</span> House
            </Heading>
          <Heading size="small" level="2">
            Budget: $5600
            </Heading>
          <Heading size="small" level="2">
            Studio: Living Area + Bedroom
            </Heading>
          <Box fill="horizontal" pad="medium" >
            <Image fit="cover" src="https://photos.zillowstatic.com/cc_ft_768/ISecmdzu1wjd7c1000000000.webp" />
          </Box>
          <Text textAlign="start">
            22639 Oakcrest Ct Cupertino, CA 95014
          </Text>
          <Button href="/example-listing" label="View Listing" />
        </Box>
      </Box>
    </Grommet>
  )
}

export default Team;
