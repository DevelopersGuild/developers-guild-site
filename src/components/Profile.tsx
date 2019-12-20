import React from 'react';
import loftlyTheme from './Theme';
import { Grommet, Box, Image, Heading, Text, Anchor, Paragraph } from 'grommet'
import { Checkmark, Flag, Language, Briefcase, Cubes, Facebook } from 'grommet-icons'
import Menu from './menu';

const Profile: React.FC = () => {
    return(
        <Grommet theme={loftlyTheme}>
        <Menu/>
        <Box direction = "row" justify = "center">
        <Box align="center" justify="start" direction="column" gap="xxsmall">
         <Box align="center" justify="center" width="medium" height="medium" pad="small">
           <Image src="https://i.imgur.com/04HODpp.jpg" fit="contain" />
         </Box>
         <Box align="stretch" justify="center" fill="horizontal" pad="small">
           <Box align="start" justify="start" direction="column" gap="small">
             <Box align="start" justify="start" fill="horizontal" direction="column">
               <Box align="start" justify="center" border={{"side":"bottom"}} fill="horizontal">
                 <Heading size="small" textAlign="start">
                   Verification
                 </Heading>
               </Box>
             </Box>
             <Box align="start" justify="start" gap="medium" fill="horizontal">
               <Box align="center" justify="between" direction="row-responsive" gap="xlarge" fill="horizontal">
                 <Text size="medium">
                   Email
                 </Text>
                 <Checkmark  />
               </Box>
               <Box align="center" justify="between" direction="row-responsive" gap="xlarge" fill="horizontal">
                 <Text size="medium">
                   Government ID
                 </Text>
                 <Checkmark  />
               </Box>
               <Box align="center" justify="between" direction="row-responsive" gap="xlarge" fill="horizontal">
                 <Text size="medium">
                   Phone
                 </Text>
                 <Checkmark  />
               </Box>
               <Box align="center" justify="between" direction="row-responsive" gap="xlarge" fill="horizontal">
                 <Text size="medium">
                   Facebook
                 </Text>
                 <Checkmark  />
               </Box>
             </Box>
           </Box>
         </Box>
       </Box>
       <Box align="stretch" justify="start" direction="column" pad="medium">
         <Box align="start" justify="start" direction="column" gap="medium" pad="xsmall">
           <Heading margin="xsmall">
             Paul J. Klein
           </Heading>
           <Box align="start" justify="start" fill="horizontal" direction="row" gap="large">
             <Text>
               Mountain View, California, United States
             </Text>
             <Text>
               - Member since 2019
             </Text>
           </Box>
           <Box align="center" justify="center" direction="row" gap="small">
             <Flag  />
             <Anchor label="Report this user" />
           </Box>
           <Box align="start" justify="start" fill="horizontal" direction="column" overflow="auto" height="small">
             <Paragraph textAlign="start" size="medium">
               I am an Data Scientist working at Google and I have 3 cats
I love meeting people from different parts of the world and I look forward to connecting with you as a roomate. I will do my best to make your co-living experience as best as possible
             </Paragraph>
           </Box>
           <Box align="start" justify="start" direction="column" fill="horizontal" border={{"side":"top"}}>
             <Box align="start" justify="start" gap="medium" fill="horizontal" pad="medium">
               <Box align="center" justify="start" direction="row-responsive" gap="small" fill="horizontal">
                 <Language  />
                 <Text size="medium">
                   Speaks Deutsch, English, Español, Nederlands, Português
                 </Text>
               </Box>
               <Box align="center" justify="start" direction="row-responsive" gap="small" fill="horizontal">
                 <Briefcase  />
                 <Text size="medium">
                   Data Science at Google
                 </Text>
               </Box>
               <Box align="center" justify="start" direction="row-responsive" gap="small" fill="horizontal">
                 <Cubes  />
                 <Text size="medium">
                   Believes in Founders Mindset
                 </Text>
               </Box>
               <Box align="center" justify="start" direction="row-responsive" gap="small" fill="horizontal">
                 <Text size="medium">
                   Connected Accounts -
                 </Text>
                 <Facebook  />
               </Box>
             </Box>
           </Box>
         </Box>
       </Box>


        </Box>
        </Grommet>
    );
}

export default Profile;