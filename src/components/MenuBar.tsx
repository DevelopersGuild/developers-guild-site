import React from 'react';
import loftlyTheme from './Theme';
import { Grommet, Box, Button, Text } from 'grommet'
import { User, MapLocation, Technology, UserSettings, Logout } from 'grommet-icons'

const Menu: React.FC = () =>  {
  return(
    <Grommet theme={loftlyTheme} >
      <Box justify="between" direction="row" background={{"color":"white"}} gap="xlarge" border={{"side":"bottom","style":"outset"}}>
          <Box direction="row" gap="small">
            <Button hoverIndicator={true} href="/" fill="vertical">
              <Box align="center" justify="center" pad={{"vertical":"small","horizontal":"medium"}} direction="row" gap="small" fill="vertical">
                <Text weight="bold" size="xxlarge">
                  Loftly
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={true} href = "/example-profile">
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <User size="medium" />
                <Text>
                  My Profile
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={true} href = "/listings">
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <MapLocation size="medium" />
                <Text>
                  Map
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={true} href = '/example-team'>
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <Technology size="medium" />
                <Text>
                  Teams
                </Text>
              </Box>
            </Button>
            <Button hoverIndicator={true} href = '/settings'>
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <UserSettings size="medium" />
                <Text>
                  Settings
                </Text>
              </Box>
            </Button>
          </Box>
          <Box align="center" justify="center" pad={{"horizontal":"small"}} direction="row" gap="xxsmall">
            <Button hoverIndicator={true} href= '/'>
              <Box align="start" justify="center" pad={{"horizontal":"small","vertical":"medium"}} direction="row" gap="xsmall">
                <Logout size="medium" />
                <Text>
                  Log Out
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
    </Grommet>
  )
}

export default Menu;
