import React from 'react';
import loftryTheme from './Theme';
import { Box, TextInput, Button, Heading,Text, Grommet, Form ,FormField, Select, TextArea } from 'grommet';
// import ApolloClient, { gql } from "apollo-boost";

// const client = new ApolloClient({
//   uri: "https://loftly-core.aws.fhda.edu/graphql"
// });

// const SignupMutation = (email: string, password: string, name:string,organization:string,gender:string) => gql`
// {
//   mutation{
//   user(email:"${email}",organization:"${organization}",name:"${password}",gender:"${gender}",password:"${password}")
//    }
// }
// `;

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

const Register = () => {
    return(
        <Grommet theme={loftryTheme}>
      <Box align="stretch"  background ="white" pad="medium" width = "large" round="medium" gap="large">
      <Heading textAlign="start" margin="small" size="medium" level="1">
              Sign Up
      </Heading>
        <Form>
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
    </Grommet>
    )   
}


export default Register;
