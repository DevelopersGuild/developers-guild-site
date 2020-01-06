import React from 'react';
import loftryTheme from './Theme';
import { Grommet, Box, Image,Heading,Text,Button } from 'grommet';

const Landowners: React.FC = () => {
    return (
        <Grommet full theme={loftryTheme}>
            <Box align="center" overflow = "auto" justify="center"  background={{"image":"url('https://i.imgur.com/zouAfs0.png')"}}>
            <Box justify="between" direction="row" gap="xlarge" fill="horizontal">
          <Box direction="row" gap="medium">
          <Button hoverIndicator={false} href="/">
              <Box
                align="center"
                justify="center"
                pad={{ vertical: "small", horizontal: "medium" }}
                direction="row"
                gap="small"
                fill="vertical"
              >
                <Text weight="bold" size="xxlarge" color="white">
                  Loftly
                </Text>
              </Box>
            </Button>
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
            <Button label="Sign Up" primary={true} color="white" href ="/signup" />
          </Box>
        </Box>
              <Box align="center" justify="center" height="medium" fill="horizontal">
                <Heading color="white">
                  Affordable, safe living in your favorite city
                </Heading>
                <Text color="white">
                  With Loftly's verification process, we protect our users from potential scams.
                </Text>
              </Box>
            </Box>
            <Box align="center" justify="start" background={{"color":"white"}} overflow="visible" pad="medium" fill="horizontal">
          <Box align="center" justify="center" fill="horizontal" pad="small">
            <Heading level="2">
              Relaxed Living, Optimized
            </Heading>
            <Box align="start" justify="start" direction="row" flex="shrink" gap="medium">
              <Box align="center" justify="center" height="medium" width="medium">
                <Image src="https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" fit="contain" />
              </Box>
              <Box align="center" justify="center" fill="vertical" gap="medium" pad="medium">
                <Box align="start" justify="center" width="medium">
                  <Heading level="3">
                    Simple Showing Process

                  </Heading>
                  <Text>
                    Meet your potential Hausmates and share with us what you’re looking for and what’s important to you.
                  </Text>
                </Box>
                <Box align="start" justify="center" width="medium">
                  <Heading level="3">
                    Simple Showing Process

                  </Heading>
                  <Text>
                    Meet your potential Hausmates and share with us what you’re looking for and what’s important to you.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box align="center" justify="start" background={{"color":"white"}} overflow="visible" pad="medium" fill="horizontal">
          <Box align="center" justify="center" fill="horizontal" pad="small">
            <Heading level="2">
              Relaxed Living, Optimized
            </Heading>
            <Box align="start" justify="start" direction="row" flex="shrink" gap="medium">
              <Box align="center" justify="center" height="medium" width="medium">
                <Image src="https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" fit="contain" />
              </Box>
              <Box align="center" justify="center" fill="vertical" gap="medium" pad="medium">
                <Box align="start" justify="center" width="medium">
                  <Heading level="3">
                    Simple Showing Process

                  </Heading>
                  <Text>
                    Meet your potential Hausmates and share with us what you’re looking for and what’s important to you.
                  </Text>
                </Box>
                <Box align="start" justify="center" width="medium">
                  <Heading level="3">
                    Simple Showing Process

                  </Heading>
                  <Text>
                    Meet your potential Hausmates and share with us what you’re looking for and what’s important to you.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        </Grommet>
      )
}

export default Landowners; 