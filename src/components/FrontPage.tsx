import React from 'react';
import loftryTheme from './Theme';
import { Box, Heading, TextInput, Button, Text, Grommet, Tabs, Tab, Image,Footer,Anchor } from 'grommet';
import {Search,CaretNext} from 'grommet-icons';

const Front: React.FC = () => {
 
    return (
        <Grommet full theme={loftryTheme}>
            <Box fill="vertical" overflow = "hidden"align="start" flex="grow" background="url(https://images.unsplash.com/photo-1489370321024-e0410ad08da4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)" direction="column">
            <Box justify="between" direction="row" gap="xlarge" fill="horizontal">
          <Box direction="row" gap="medium">
            <Box align="center" justify="center" pad={{"vertical":"small","horizontal":"medium"}} direction="row" gap="small" fill="vertical">
              <Text weight="bold" size="xxlarge" color="white">
                Loftly
              </Text>
            </Box>
            <Button hoverIndicator={false} href="/about">
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <Text color="white">
                  About
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={false} href = "/landowners">
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <Text color="white">
                  Renting
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={false} href="/faq">
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <Text color="white">
                  FAQ
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={false} href="help">
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <Text color="white">
                  Help
                </Text>
              </Box>
            </Button>
          </Box>
          <Box align="center" justify="center" pad={{"horizontal":"small"}} direction="row" gap="medium">
            <Button label="Login" color="white" primary={true} href="/login" />
            <Button label="Sign Up" primary={true} color="white" href ="signup" />
          </Box>
        </Box>
        <Box align="start" justify="center" direction="column" gap="medium" pad="large">
          <Box align="start" justify="center" direction="column" fill="horizontal"animation={[{"type":"fadeIn"},{"type":"slideLeft"}]}>
            <Heading textAlign="start" color="white" margin={{"left":"xlarge"}}>
              Introducing Loftly.<br/>Welcome to AI Powered Co-living.
            </Heading>
          </Box>
          <Box align="stretch" justify="start" fill={false} background={{"color":"background"}} pad="large" wrap={false} round="medium" gap="large" direction="column" margin={{"horizontal":"xlarge"}} animation={[{"type":"fadeIn"},{"type":"slideLeft"}]}>
            <Heading textAlign="start" margin="small" size="medium" level="1">
              Find Your Home
            </Heading>
            <TextInput placeholder="Address, City or Zip" />
            <Button label="Search" color="brand" fill="horizontal" icon={<Search />} primary={true} />
          </Box>
        </Box>
      </Box>
      <Box fill={true} overflow="auto" align="center" justify="center">
        <Box align="end" justify="center" gap="xxsmall" pad="xsmall">
          <Box align="center" justify="center" gap="xlarge">
            <Box align="center" justify="center" fill="horizontal" pad={{"bottom":"xlarge","vertical":"medium"}}>
              <Heading level="2">
                Enjoy affordable, safe living in your favorite city
              </Heading>
            </Box>
            <Box align="center" justify="center" direction="row-responsive" animation={[{"type":"fadeIn"},{"type":"slideLeft"}]} fill="horizontal" pad={{"bottom":"xlarge"}} gap="medium">
              <Box align="center" justify="center" height="medium" width="medium">
                <Image src="https://i.imgur.com/fX8Wad2.png" fit="contain" />
              </Box>
              <Box align="start" justify="center" width="medium" pad="medium">
                <Heading level="3">
                  Private Rooms in Beautiful Furnished Homes
                </Heading>
                <Text>
                  
Enjoy peace & solitude in a comfortable private room. We also fully furnish your common space areas- no heavy lifting with us!
                </Text>
              </Box>
            </Box>
            <Box align="end" justify="center" fill="horizontal" direction="row" gap="medium" pad={{"top":"xlarge"}}>
              <Box align="center" justify="center" width="medium">
                <Heading level="3">
                  Private Rooms in Beautiful Furnished Homes
                </Heading>
                <Text>
                  Enjoy curated events by our community team at your choosing-- Hiking trips, wine & cheese tastings, monthly mixers, you name it!
                </Text>
              </Box>
              <Box align="center" justify="center" background={{"image":"url('')"}} height="small" width="small">
                <Image src="https://thehubhaus.com/_nuxt/img/3ac59c4.png
" fit="contain" />
              </Box>
            </Box>
          </Box>
          <Box align="end" justify="end" margin="xlarge" direction="column" pad="xsmall" gap="small">
            <Button>
              <Box align="center" justify="center" pad="medium" direction="row" gap="small">
                <Text>
                  Learn More
                </Text>
                <CaretNext  />
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
            <Footer align="center" direction="column" flex={false} justify="center" gap="medium">
        <Box align="center" justify="center" direction="row" gap="medium" fill="horizontal">
          <Heading color="light-4">
            Loftly
          </Heading>
          <Box align="center" justify="center" direction="row" gap="large">
            <Box align="center" justify="center" gap="xsmall">
              <Text>
                Information
              </Text>
              <Anchor label="Living with Loftly" />
              <Anchor label="Renting with Loftly" />
            </Box>
            <Box align="center" justify="center" gap="xsmall">
              <Text>
                Company
              </Text>
              <Anchor label="Contact Us" />
              <Anchor label="Careers" />
            </Box>
          </Box>
        </Box>
        <Box align="center" justify="center" direction="row" gap="medium" pad="small">
          <Anchor label="Don't Sell My Info" />
          <Anchor label="Privacy Policy" />
          <Anchor label="Terms of Service" />
          <Text>
            © Loftly 2019
          </Text>
        </Box>
      </Footer>
        </Grommet>
    )
}

export default Front;