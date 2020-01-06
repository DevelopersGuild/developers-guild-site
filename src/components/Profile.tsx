import React from "react";
import loftlyTheme from "./Theme";
import { Grommet, Box, Image, Heading, Text, Anchor, Paragraph } from "grommet";
import { Checkmark, Flag, Language, Briefcase, Cubes } from "grommet-icons";
import Menu from "./MenuBar";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const UserQuery = gql`
  {
    user {
      name
      profilePicture
      location
      languages
      job
      biography
      lifeStyleBeliefs
      verifications
    }
  }
`;

const Profile: React.FC = () => {
  const { loading, error, data } = useQuery(UserQuery);
  if (loading)
    return (
      <Grommet theme={loftlyTheme}>
        <Menu />
        <Box alignContent="center" justify="center">
          <Heading>Loading....</Heading>
        </Box>
      </Grommet>
    );
  if (error)
    return (
      <Grommet theme={loftlyTheme}>
        <Menu />
        <Box alignContent="center" justify="center">
          <Heading>Error: {error.message}</Heading>
        </Box>
      </Grommet>
    );
  return (
    <Grommet theme={loftlyTheme}>
      <Menu />
      <Box direction="row" justify="center">
        <Box align="center" justify="start" direction="column" gap="xxsmall">
          <Box
            align="center"
            justify="center"
            width="medium"
            height="medium"
            pad="small"
          >
            <Image src={data.user.profilePicture} fit="contain" />
          </Box>
          <Box align="stretch" justify="center" fill="horizontal" pad="small">
            <Box align="start" justify="start" direction="column" gap="small">
              <Box
                align="start"
                justify="start"
                fill="horizontal"
                direction="column"
              >
                <Box
                  align="start"
                  justify="center"
                  border={{ side: "bottom" }}
                  fill="horizontal"
                >
                  <Heading size="small" textAlign="start">
                    Verification
                  </Heading>
                </Box>
              </Box>
              <Box align="start" justify="start" gap="medium" fill="horizontal">
                {data.user.verifications.map((verification: string) => (
                  <Box
                    align="center"
                    justify="between"
                    direction="row-responsive"
                    gap="xlarge"
                    fill="horizontal"
                  >
                    <Text size="medium">{verification}</Text>
                    <Checkmark />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box align="stretch" justify="start" direction="column" pad="medium">
          <Box
            align="start"
            justify="start"
            direction="column"
            gap="medium"
            pad="xsmall"
          >
            <Heading margin="xsmall">{data.user.name}</Heading>
            <Box
              align="start"
              justify="start"
              fill="horizontal"
              direction="row"
              gap="large"
            >
              <Text>{data.user.location}</Text>
            </Box>
            <Box align="center" justify="center" direction="row" gap="small">
              <Flag />
              <Anchor label="Report this user" />
            </Box>
            <Box
              align="start"
              justify="start"
              fill="horizontal"
              direction="column"
              overflow="auto"
              height="small"
            >
              <Paragraph textAlign="start" size="medium">
                {data.user.biography}
              </Paragraph>
            </Box>
            <Box
              align="start"
              justify="start"
              direction="column"
              fill="horizontal"
              border={{ side: "top" }}
            >
              <Box
                align="start"
                justify="start"
                gap="medium"
                fill="horizontal"
                pad="medium"
              >
                <Box
                  align="center"
                  justify="start"
                  direction="row-responsive"
                  gap="small"
                  fill="horizontal"
                >
                  <Language />
                  <Text size="medium">
                    Speaks {data.user.languages.join(", ")}
                  </Text>
                </Box>
                <Box
                  align="center"
                  justify="start"
                  direction="row-responsive"
                  gap="small"
                  fill="horizontal"
                >
                  <Briefcase />
                  <Text size="medium">{data.user.job}</Text>
                </Box>
                <Box
                  align="center"
                  justify="start"
                  direction="row-responsive"
                  gap="small"
                  fill="horizontal"
                >
                  <Cubes />
                  <Text size="medium">
                    {data.user.lifeStyleBeliefs.join(", ")}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default Profile;
