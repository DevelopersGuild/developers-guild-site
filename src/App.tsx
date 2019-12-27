import React from 'react';
import Front from './components/FrontPage';
import ListingTemplate from './components/Listing';
import Listings from './components/ListingsPage';
import About from './components/AboutPage';
import Faq from './components/FaqPage';
import Help from './components/HelpPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'
import Profile from './components/Profile';
import Team from './components/Team';
import Settings from './components/SettingsPage';


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
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
