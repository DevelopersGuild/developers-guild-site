import React from "react";
import Front from "./components/FrontPage";
import ListingTemplate from "./components/Listing";
import Listings from "./components/ListingsPage";
import MapTest from "./components/MapViewKit/MapTest";
import About from "./components/AboutPage";
import Landowners from "./components/LandownersPage";
import Faq from "./components/FaqPage";
import Help from "./components/HelpPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Profile from "./components/Profile";
import Team from "./components/Team";
import Settings from "./components/SettingsPage";
import LoginUser from "./components/Login";
import SignupUser from "./components/Signup";
import { ApolloProvider } from "@apollo/react-hooks";
import { make as ReasonExample } from './components/ExampleReason/ExampleReason.gen';

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";


const httpLink = createHttpLink({
  uri: "https://loftly-core.aws.fhda.edu/graphql"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        {/* Allows highlighting hints over any element. */}
        <ReactTooltip />
        <Switch>
          <Route exact path="/" component={Front} />
          <Route exact path="/login" component={LoginUser} />
          <Route exact path="/signup" component={SignupUser} />
          <Route exact path="/listing" component={ListingTemplate} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/about" component={About} />
          <Route exact path="/landowners" component={Landowners} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/map-view" component={MapTest} />
          <Route exact path="/reason-example" component={() => <ReasonExample name="Carlos"/>} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};
export default App;
