import React from 'react';
import Landing from './components/landing';
import Login from './components/login';
import Signup from './components/signup';
import ListingTemplate from './components/listing';
import Listings from './components/listings';
import About from './components/about';
import Faq from './components/faq';
import Help from './components/help';
import Profile from './components/Profile';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactTooltip />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/myProfile" component={Profile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/example-listing" component={ListingTemplate} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/help" component={Help} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
