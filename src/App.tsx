import React from 'react';
import Front from './components/front';
import ListingTemplate from './components/listing';
import Listings from './components/listings';
import About from './components/about';
import Faq from './components/faq';
import Help from './components/help';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'
import Profile from './components/Profile';
import Team from './components/Team';


const App: React.FC = () => {
  return (
    <BrowserRouter>
    {/* Allows highlighting hints over any element. */}
      <ReactTooltip />
      <Switch>
        <Route exact path="/" component={Front} />
        <Route exact path="/example-listing" component={ListingTemplate} />
        <Route exact path="/example-profile" component={Profile} />
        <Route exact path="/example-team" component={Team} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/help" component={Help} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
