import React from 'react';
import loftryTheme from './Theme';
import { Grommet, Box, Carousel, Image, Heading, Text, Button} from 'grommet';
import { Wifi, Bike, Gamepad, Run} from 'grommet-icons';
import Menu from './MenuBar';

const ListingTemplate: React.FC = () => {
    return (
        <Grommet full theme={loftryTheme}>
            <Menu/>
            <Box fill="horizontal" margin={{ top: "medium" }} direction="column" alignContent="start" justify="start" >
                {/* User Actions Panel. */}
                <Box wrap pad="xsmall" fill="horizontal" direction="row" alignContent="end" justify="end">
                    <Button margin="xsmall" color="accent-1" label="Contact Listing Owner" onClick={() => { alert('Contacted User.') }} />
                    <Button margin="xsmall" color="accent-1" label="View Neighborhood" onClick={() => { alert('Viewed Neighborhood.') }} />
                    <Button margin="xsmall" color="accent-1" label="Share With Team" onClick={() => { alert('Shared with Team.') }} />
                </Box>
                <Heading truncate margin={{ left: "medium" }} alignSelf="start" size="xsmall">Studio: Living Area + Bedroom</Heading>
                <Box alignContent="start" alignSelf="start" direction="row" justify="center" >
                    <Text size="large" margin={{ left: "medium" }}>22639 Oakcrest Ct # B, Cupertino, CA 95014</Text> <Text size="large" margin={{ left: "small" }}>from <a href="#userid">@Jonathan Smith</a></Text> <Text size="large" margin={{ left: "small" }}> at $2400 a month</Text>
                </Box>
            </Box>
            <Box fill="horizontal" pad="medium" overflow="hidden">
                <Carousel fill play={5000} alignSelf="stretch">
                    <Image fit="cover" src="https://photos.zillowstatic.com/cc_ft_768/ISecmdzu1wjd7c1000000000.webp" />
                    <Image fit="cover" src="https://photos.zillowstatic.com/cc_ft_768/ISyv6uvouff0an1000000000.webp" />
                    <Image fit="cover" src="https://photos.zillowstatic.com/cc_ft_768/ISq5lhsvo65san1000000000.webp" />
                </Carousel>
            </Box>
            <Box pad="medium" direction="column">
                <Text size="xlarge">1 Bedroom, 1 Bathroom</Text>
                {/* Amenities */}
                <Box pad="medium" direction="column">
                    <Heading level='2' color="black">Amenities</Heading>
                    <Box wrap direction="row">
                        <Text margin="small">
                            <Wifi data-tip="Wifi 300+ mbs." />
                        </Text>
                        <Text margin="small">
                            <Bike data-tip="Bike Racks." />
                        </Text>
                        <Text margin="small">
                            <Gamepad data-tip="Communal Video Game Consoles." />
                        </Text>
                        <Text margin="small">
                            <Run data-tip="Near a De Anza track." />
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box fill="horizontal" align="center" justify="center" direction="column" >
                <Box margin="medium" width="xlarge" alignContent="start" justify="start" direction="column" alignSelf="start">
                    <Text size="xxlarge" margin={{ left: "medium" }} >Description:</Text>
                    <Text textAlign="start" margin={{ top: "small", left: "medium" }}>
                        Studio - Living area + Bedroom (separated from the bedroom by a curtain), Full Bathroom, Walk-in Closet, Laundry room (Washer and Dryer). Fits 2-4 people. Small but full kitchen in the living area equipped with granite counter-top, Dishwasher, Filtered water faucet, Garbage disposer, Built-in microwave-oven, a 2-burner cook top, and a small refrigerator and freezer. Furniture: Double bed + 2 night stands & built-in night lights, Sofa bed, Coffee table. Additional furniture can be brought in by the landlord upon request. WiFi (New blazing speed 5GHz router with your own private network), 150Mbps Internet, Smart TV + premium Cable, Built-in Blue tooth speaker. Phone line can be connected upon request for an additional modest fee. Big yard with fruit trees, artificial lawn, BBQ, play structure, and some patio furniture. Separate entrance, Ample parking on the street, or off street parking for an additional (modest) fee. The studio becomes available Jan/31. Long term Lease is preferred, but shorter terms will be considered for higher rent. There's also participation in utilities. The premises is pets friendly, with owners approval and with additional cleaning fee and security deposit. The studio was built last year as an "in-law" unit on our property located in a great neighborhood in Cupertino, nestled among mature trees on the edge of the foothills, yet very accessible: only 1-2 minutes drive from 280 and 85 freeways. 2-3 minutes from shopping, 5 minutes drive from De-Anza college and from Apple headquarters, 5-10 minutes drive from Foothill college, 15 minutes drive to Santa Clara University, San Jose State University and Stanford University, and 90% of the high tech companies in the silicon valley are within 5-25 minute drive. The house is very close to the border of Los Altos and Sunnyvale, walking distance from shopping, Rancho San Antonio park and other hiking and bicycle routes, 2 minutes walk to the nearest bus-stop, 10 minutes drive to Caltrain, 15 minute drive from San Jose airport and Amtrak, and 30-45 minute drive from San Francisco airport. Address: 22639 Oakcrest Court, Cupertino CA 95014. NO Smoking! Utilities participation is on top of rent starting at ~$180 for one person, Most pets OK, but it requires $200 onetime deodorizing fee and slightly higher security deposit.
                    </Text>
                </Box>
            </Box>
        </Grommet>
    )
}

export default ListingTemplate;
