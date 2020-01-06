import React from "react";
import loftryTheme from "./Theme";
import {
  Box,
  Layer,
  Heading,
  TextInput,
  Button,
  Text,
  Grommet,
  Anchor
} from "grommet";
import {
  Provider as AuthProvider,
  Context as AuthContext
} from "../utils/Auth";
import { Login } from "grommet-icons";
import Register from "./Register";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://loftly-core.aws.fhda.edu/graphql"
});

const LoginQuery = (email: string, password: string) => gql`
{
  login(email:"${email}", password: "${password}")
}
`;

const LoginUser: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { token, setToken } = React.useContext(AuthContext);

  const handleSubmission = async () =>
    client
      .query({
        query: LoginQuery(email, password)
      })
      .then(result => {
        setToken(result.data.login);
        if (!token) localStorage.setItem("token", result.data.login);
        // redirecting to profile page
        window.location.href = '/profile';
      })
      .catch(error => {
        console.log(error.message);
        alert("Login Failed");
      });

  const [show, setShow] = React.useState(false);

  return (
    <Grommet full theme={loftryTheme}>
      <Box
        fill="vertical"
        overflow="hidden"
        align="center"
        flex="grow"
        background="url(https://images.unsplash.com/photo-1488342994276-7c3bc0742042?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        direction="column"
      >
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
              <Box
                align="start"
                justify="center"
                pad={{ horizontal: "small", vertical: "medium" }}
                direction="row"
                gap="xsmall"
              >
                <Text color="white">About</Text>
              </Box>
            </Button>
            <Button hoverIndicator={false} href="/landowners">
              <Box
                align="start"
                justify="center"
                pad={{ horizontal: "small", vertical: "medium" }}
                direction="row"
                gap="xsmall"
              >
                <Text color="white">Renting</Text>
              </Box>
            </Button>
            <Button hoverIndicator={false} href="/faq">
              <Box
                align="start"
                justify="center"
                pad={{ horizontal: "small", vertical: "medium" }}
                direction="row"
                gap="xsmall"
              >
                <Text color="white">FAQ</Text>
              </Box>
            </Button>
            <Button hoverIndicator={false} href="help">
              <Box
                align="start"
                justify="center"
                pad={{ horizontal: "small", vertical: "medium" }}
                direction="row"
                gap="xsmall"
              >
                <Text color="white">Help</Text>
              </Box>
            </Button>
          </Box>
        </Box>
        <Box align="center" justify="center" direction="row" gap="medium">
          <Box
            align="stretch"
            justify="start"
            fill={false}
            background={{ color: "background" }}
            pad="large"
            wrap={false}
            round="medium"
            gap="large"
            direction="column"
            margin="xlarge"
          >
            <Heading textAlign="start" margin="small" size="medium" level="1">
              Welcome Back
            </Heading>
            <TextInput
              placeholder="Email"
              value={email}
              type="email"
              onChange={event => setEmail(event.target.value)}
            />
            <TextInput
              placeholder="Password"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <Button
              label="Login"
              color="brand"
              fill="horizontal"
              icon={<Login />}
              primary={true}
              onClick={handleSubmission}
            />
            <Button
              label="token check"
              color="brand"
              onClick={() => {
                console.log(token);
              }}
            />
            <Text textAlign="start">
              Don't have an account?{" "}
              <Anchor onClick={() => setShow(true)}> Sign Up</Anchor>
            </Text>
            {show && (
              <Layer
                onEsc={() => setShow(false)}
                onClickOutside={() => setShow(false)}
              >
                <Register />
              </Layer>
            )}
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

const LoginWrapped = () => (
  <AuthProvider>
    <LoginUser />
  </AuthProvider>
);

// const LoginWrapped =
export default LoginWrapped;
