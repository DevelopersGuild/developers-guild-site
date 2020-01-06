import React from "react";
import loftryTheme from "./Theme";
import { Box, TextInput, Button, Heading,Text, Grommet, Form ,FormField, Select, TextArea } from 'grommet';

const FormFieldLabel = (props:any) => {
    const { required, label, ...rest } = props;
    return (
      <FormField
        label={
          required ? (
            <Box direction="row">
              <Text>{label}</Text>
              <Text color="status-critical">*</Text>
            </Box>
          ) : (
            label
          )
        }
        required={required}
        {...rest}
      />
    );
  };

const SignupUser: React.FC = () => {
    return (
        <Grommet full theme={loftryTheme}>
        <Box
            fill= {true}
            overflow="auto"
            align="center"
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
            <Box align="stretch"  background ="white" pad={{"vertical":"large","horizontal":"medium"}} width = "large" round="small" gap="medium">
        <Box flex = "shrink"overflow = "auto">
      <Heading textAlign="start" margin="small" size="medium" level="1">
              Sign Up
      </Heading>
        <Form
        //onSubmit={({value}) => console.log("Submit: ", value)}
        >
          <FormFieldLabel name="fullName" label="Full Name" component={TextInput} placeholder="Full Name" required />
          <FormFieldLabel name="email" label="Email" component={TextInput} placeholder="Email" type="email" required />
          <FormFieldLabel name="gender" label="Gender"  component={Select} options={['man', 'woman', 'other','prefer not to say']} placeholder="Gender" required />
          <FormFieldLabel name = 'organization' label = 'Organization' component={TextInput} placeholder="Organization" required />
          <FormFieldLabel name="password" label="Password" component={TextInput} placeholder="Password" type="password" required />
          <FormFieldLabel label = "preferences" component={TextArea} placeholder="wifi,bike racks, pet friendly, smoke free, hackerhouse" />
          <Button type="submit" label="Submit" primary />
          <Text margin={{ left: "small" }} size="small" color="status-critical">
            * Required Field
          </Text>
        </Form>
        </Box>
      </Box>
        </Box>
    </Grommet>
    )
}

export default SignupUser;