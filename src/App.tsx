import React from 'react';
import Landing from './components/landing';
import Login from './components/login';
import Signup from './components/signup';
import ListingTemplate from './components/listing';
import Listings from './components/listings';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactTooltip />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/example-listing" component={ListingTemplate} />
        <Route exact path="/listings" component={Listings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
